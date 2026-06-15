import { NextResponse } from "next/server";
import type {
  DatosTorneo,
  Partido,
  ProgresoEquipos,
  Signo,
  Ronda,
  EstadoPartido,
} from "@/lib/types";
import { normalizarEquipo } from "@/lib/equipos";
import { datosDemo } from "@/lib/demo";
import { ORDEN_RONDA } from "@/lib/scoring";
import { indiceDePartido } from "@/lib/quiniela";

// ───────────────────────────────────────────────────────────────────────────
// PROXY BACKEND — resuelve el bloqueo CORS del navegador.
// El frontend SIEMPRE llama a esta ruta interna; nunca a la API externa.
//
// Fuentes de resultados, por orden de preferencia:
//   1. API-Football  (si existe la variable API_FOOTBALL_KEY — datos más ricos)
//   2. TheSportsDB   (gratis, SIN clave ni registro — opción por defecto)
//   3. Datos demo    (si todo lo anterior falla — la app nunca se rompe)
// ───────────────────────────────────────────────────────────────────────────

// Ruta siempre dinámica: cada petición consulta la fuente en vivo.
export const dynamic = "force-dynamic";

/**
 * fetch con timeout y SIN caché de datos de Next. Usar la caché de Next
 * (`next: { revalidate }`) puede dejar escapar el rechazo del fetch como
 * unhandledRejection cuando la red falla (p. ej. TLS corporativo); aquí lo
 * controlamos para poder capturarlo siempre en el try/catch del GET.
 */
async function fetchSeguro(url: string, headers?: Record<string, string>) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    return await fetch(url, {
      headers,
      cache: "no-store",
      signal: ctrl.signal,
    });
  } finally {
    clearTimeout(t);
  }
}

function profundidad(r: Ronda): number {
  return ORDEN_RONDA.indexOf(r);
}

/** Traduce un texto de ronda (en/es) a nuestra enumeración interna. */
function rondaDesdeTexto(texto: string): Ronda {
  const t = (texto || "").toLowerCase();
  if (t.includes("round of 32") || t.includes("dieciseis") || t.includes("1/16"))
    return "dieciseisavos";
  if (t.includes("round of 16") || t.includes("octav") || t.includes("1/8"))
    return "octavos";
  if (t.includes("quarter") || t.includes("cuart") || t.includes("1/4"))
    return "cuartos";
  if (t.includes("semi")) return "semifinales";
  if (t.includes("final")) return "final";
  return "fase_grupos";
}

function calcularSigno(
  gl: number | null,
  gv: number | null,
  estado: EstadoPartido
): Signo | null {
  if (estado !== "finalizado" || gl === null || gv === null) return null;
  if (gl > gv) return "1";
  if (gl < gv) return "2";
  return "X";
}

/**
 * Construye el modelo DatosTorneo a partir de una lista de partidos ya
 * normalizados (campos mínimos). Asigna el índice de quiniela por la lista
 * OFICIAL de 36 partidos y deduce progreso de selecciones y campeón.
 */
function construirTorneo(
  base: Array<{
    id: string | number;
    ronda: Ronda;
    grupo?: string;
    local: string;
    visitante: string;
    gl: number | null;
    gv: number | null;
    estado: EstadoPartido;
    fecha: string;
    ganadorLocal?: boolean;
    ganadorVisitante?: boolean;
  }>,
  fuente: "api" | "demo",
  proveedor: string
): DatosTorneo {
  const partidos: Partido[] = base
    .map((p) => ({
      id: p.id,
      indiceQuiniela: indiceDePartido(p.local, p.visitante),
      ronda: p.ronda,
      grupo: p.grupo,
      local: p.local,
      visitante: p.visitante,
      golesLocal: p.gl,
      golesVisitante: p.gv,
      estado: p.estado,
      fecha: p.fecha,
      signo: calcularSigno(p.gl, p.gv, p.estado),
    }))
    // Filtra el ruido de la fuente: solo partidos de la quiniela oficial o de
    // eliminatorias reconocidas (descarta amistosos/clasificatorios ajenos).
    .filter((p) => p.indiceQuiniela !== null || p.ronda !== "fase_grupos");

  // Progreso: ronda más lejana en la que aparece cada selección.
  const progreso: ProgresoEquipos = {};
  const registrar = (equipo: string, ronda: Ronda) => {
    if (!equipo || ronda === "fase_grupos") return;
    const actual = progreso[equipo];
    if (!actual || profundidad(ronda) > profundidad(actual)) progreso[equipo] = ronda;
  };
  for (const p of base) {
    registrar(p.local, p.ronda);
    registrar(p.visitante, p.ronda);
  }

  // Campeón: ganador de la final ya finalizada.
  let campeon: string | null = null;
  const final = base.find((p) => p.ronda === "final" && p.estado === "finalizado");
  if (final) {
    if (final.ganadorLocal) campeon = final.local;
    else if (final.ganadorVisitante) campeon = final.visitante;
    else if (final.gl !== null && final.gv !== null)
      campeon = final.gl > final.gv ? final.local : final.visitante;
    if (campeon) progreso[campeon] = "campeon";
  }

  return {
    partidos,
    progreso,
    campeon,
    fuente,
    proveedor,
    actualizado: new Date().toISOString(),
  };
}

// ─── Fuente 1: API-Football ────────────────────────────────────────────────
async function desdeApiFootball(apiKey: string): Promise<DatosTorneo> {
  const url =
    "https://v3.football.api-sports.io/fixtures?league=1&season=2026";
  const res = await fetchSeguro(url, { "x-apisports-key": apiKey });
  if (!res.ok) throw new Error(`API-Football ${res.status}`);
  const json = await res.json();
  const lista = Array.isArray(json?.response) ? json.response : [];
  if (lista.length === 0) throw new Error("API-Football sin partidos");

  const finalizados = ["FT", "AET", "PEN", "WO", "AWD"];
  const enVivo = ["1H", "2H", "HT", "ET", "BT", "P", "LIVE", "INT"];

  const base = lista.map((f: any) => {
    const corto = f?.fixture?.status?.short ?? "NS";
    const estado: EstadoPartido = finalizados.includes(corto)
      ? "finalizado"
      : enVivo.includes(corto)
      ? "en_vivo"
      : "programado";
    return {
      id: f?.fixture?.id,
      ronda: rondaDesdeTexto(f?.league?.round ?? ""),
      local: normalizarEquipo(f?.teams?.home?.name ?? ""),
      visitante: normalizarEquipo(f?.teams?.away?.name ?? ""),
      gl: f?.goals?.home ?? null,
      gv: f?.goals?.away ?? null,
      estado,
      fecha: f?.fixture?.date ?? "",
      ganadorLocal: f?.teams?.home?.winner === true,
      ganadorVisitante: f?.teams?.away?.winner === true,
    };
  });

  const datos = construirTorneo(base, "api", "API-Football");
  if (!datos.partidos.some((p) => p.indiceQuiniela !== null))
    throw new Error("API-Football no casa con la quiniela");
  return datos;
}

// ─── Fuente 2: TheSportsDB (gratis, sin clave) ─────────────────────────────
// El endpoint "eventsseason" devuelve datos incompletos en la capa gratuita,
// así que recorremos el calendario DÍA A DÍA ("eventsday") desde el inicio del
// torneo hasta hoy y unimos todos los partidos. Cacheamos por jornada para no
// saturar la API (las jornadas pasadas no cambian; solo hoy se refresca a menudo).
const SPORTSDB_LIGA = 4429; // FIFA World Cup
const TORNEO_INICIO = "2026-06-11";
const TORNEO_FIN = "2026-07-19";

// Caché en memoria por fecha (persiste mientras la instancia esté caliente).
const cacheJornada = new Map<string, { at: number; eventos: any[] }>();

function fechasTorneoHasta(hoy: string): string[] {
  const ini = new Date(`${TORNEO_INICIO}T00:00:00Z`).getTime();
  const fin = Math.min(
    new Date(`${hoy}T00:00:00Z`).getTime(),
    new Date(`${TORNEO_FIN}T00:00:00Z`).getTime()
  );
  const out: string[] = [];
  for (let t = ini; t <= fin; t += 86_400_000) {
    out.push(new Date(t).toISOString().slice(0, 10));
  }
  return out;
}

async function eventosDeJornada(fecha: string, esReciente: boolean): Promise<any[]> {
  const ttl = esReciente ? 90_000 : 12 * 3_600_000; // hoy/ayer 90 s; pasado 12 h
  const cacheado = cacheJornada.get(fecha);
  if (cacheado && Date.now() - cacheado.at < ttl) return cacheado.eventos;
  try {
    const url = `https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=${fecha}&l=${SPORTSDB_LIGA}`;
    const res = await fetchSeguro(url);
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    const eventos = Array.isArray(json?.events) ? json.events : [];
    cacheJornada.set(fecha, { at: Date.now(), eventos });
    return eventos;
  } catch {
    return cacheado?.eventos ?? []; // ante error, devolvemos lo último que tuviéramos
  }
}

function eventoABase(e: any) {
  const num = (v: any) =>
    v !== null && v !== undefined && v !== "" ? Number(v) : null;
  const gl = num(e?.intHomeScore);
  const gv = num(e?.intAwayScore);
  const status = (e?.strStatus ?? "").toLowerCase();
  let estado: EstadoPartido = "programado";
  if (status.includes("finish") || status === "ft" || status === "aet" || status === "pen")
    estado = "finalizado";
  else if (["1h", "2h", "ht", "et", "live"].some((s) => status.includes(s)))
    estado = "en_vivo";
  else if (gl !== null && gv !== null) estado = "finalizado";
  return {
    id: e?.idEvent ?? `${e?.strHomeTeam}-${e?.strAwayTeam}-${e?.dateEvent}`,
    ronda: rondaDesdeTexto(e?.strRound || e?.strStage || ""),
    local: normalizarEquipo(e?.strHomeTeam ?? ""),
    visitante: normalizarEquipo(e?.strAwayTeam ?? ""),
    gl,
    gv,
    estado,
    fecha: e?.strTimestamp || e?.dateEvent || "",
  };
}

async function desdeSportsDb(): Promise<DatosTorneo> {
  const hoy = new Date().toISOString().slice(0, 10);
  const fechas = fechasTorneoHasta(hoy);
  if (fechas.length === 0) throw new Error("Fuera del rango del torneo");

  // Las dos últimas jornadas se consideran "recientes" (refresco frecuente).
  const recientes = new Set(fechas.slice(-2));
  const listas = await Promise.all(
    fechas.map((f) => eventosDeJornada(f, recientes.has(f)))
  );

  // Unir y deduplicar por id de evento.
  const vistos = new Set<string>();
  const base: ReturnType<typeof eventoABase>[] = [];
  for (const e of listas.flat()) {
    const id = String(e?.idEvent ?? `${e?.strHomeTeam}-${e?.strAwayTeam}-${e?.dateEvent}`);
    if (vistos.has(id)) continue;
    vistos.add(id);
    base.push(eventoABase(e));
  }

  if (base.length === 0) throw new Error("TheSportsDB sin eventos");

  const datos = construirTorneo(base, "api", "TheSportsDB");
  if (!datos.partidos.some((p) => p.indiceQuiniela !== null))
    throw new Error("TheSportsDB no casa con la quiniela");
  return datos;
}

// Caché del resultado ya ensamblado, compartida por todas las peticiones de la
// instancia. Evita machacar la API externa (clave para respetar el límite de
// 100 peticiones/día del plan gratuito de API-Football).
let cacheResultado: { at: number; data: DatosTorneo; ttl: number } | null = null;
const TTL_APIFOOTBALL = 15 * 60_000; // 15 min -> máx ~96 llamadas/día (< 100)
const TTL_SPORTSDB = 90_000; // 90 s (su coste real ya lo amortigua la caché por jornada)

export async function GET() {
  const sinCache = { headers: { "Cache-Control": "no-store" } } as const;

  // Servir desde caché si sigue vigente.
  if (cacheResultado && Date.now() - cacheResultado.at < cacheResultado.ttl) {
    return NextResponse.json(cacheResultado.data, sinCache);
  }

  // Red de seguridad global: pase lo que pase, nunca devolvemos un 500.
  try {
    const apiKey = process.env.API_FOOTBALL_KEY;

    // 1. API-Football (si hay clave) — fuente completa y oficial.
    if (apiKey) {
      try {
        const data = await desdeApiFootball(apiKey);
        cacheResultado = { at: Date.now(), data, ttl: TTL_APIFOOTBALL };
        return NextResponse.json(data, sinCache);
      } catch {
        /* cae a la siguiente fuente */
      }
    }

    // 2. TheSportsDB (gratis, SIN clave). Desactivable con SPORTSDB_OFF=1.
    if (process.env.SPORTSDB_OFF !== "1") {
      try {
        const data = await desdeSportsDb();
        cacheResultado = { at: Date.now(), data, ttl: TTL_SPORTSDB };
        return NextResponse.json(data, sinCache);
      } catch {
        /* cae a demo */
      }
    }
  } catch {
    /* cualquier imprevisto -> demo */
  }

  // 3. Demo (si no hay conexión ni clave, o si algo falló). No se cachea.
  return NextResponse.json(datosDemo(), sinCache);
}
