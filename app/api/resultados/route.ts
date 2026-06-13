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

export const revalidate = 60; // cachea la respuesta 60 s

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
  const res = await fetch(url, {
    headers: { "x-apisports-key": apiKey },
    next: { revalidate },
  });
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
async function desdeSportsDb(): Promise<DatosTorneo> {
  // Liga 4429 = FIFA World Cup. Clave "3" = clave pública de pruebas (gratis).
  const url =
    "https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4429&s=2026";
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`TheSportsDB ${res.status}`);
  const json = await res.json();
  const eventos = Array.isArray(json?.events) ? json.events : [];
  if (eventos.length === 0) throw new Error("TheSportsDB sin eventos");

  const base = eventos.map((e: any) => {
    const gl =
      e?.intHomeScore !== null && e?.intHomeScore !== undefined && e?.intHomeScore !== ""
        ? Number(e.intHomeScore)
        : null;
    const gv =
      e?.intAwayScore !== null && e?.intAwayScore !== undefined && e?.intAwayScore !== ""
        ? Number(e.intAwayScore)
        : null;
    const status = (e?.strStatus ?? "").toLowerCase();
    let estado: EstadoPartido = "programado";
    if (status.includes("finish") || status === "ft" || status === "aet" || status === "pen")
      estado = "finalizado";
    else if (["1h", "2h", "ht", "et", "live"].some((s) => status.includes(s)))
      estado = "en_vivo";
    else if (gl !== null && gv !== null) estado = "finalizado"; // heurística
    return {
      id: e?.idEvent ?? `${e?.strHomeTeam}-${e?.strAwayTeam}`,
      ronda: rondaDesdeTexto(e?.strRound || e?.strStage || ""),
      local: normalizarEquipo(e?.strHomeTeam ?? ""),
      visitante: normalizarEquipo(e?.strAwayTeam ?? ""),
      gl,
      gv,
      estado,
      fecha: e?.strTimestamp || e?.dateEvent || "",
    };
  });

  const datos = construirTorneo(base, "api", "TheSportsDB");
  if (!datos.partidos.some((p) => p.indiceQuiniela !== null))
    throw new Error("TheSportsDB no casa con la quiniela");
  return datos;
}

export async function GET() {
  const apiKey = process.env.API_FOOTBALL_KEY;
  const sinCache = { headers: { "Cache-Control": "no-store" } } as const;

  // 1. API-Football (si hay clave)
  if (apiKey) {
    try {
      return NextResponse.json(await desdeApiFootball(apiKey));
    } catch {
      /* cae a la siguiente fuente */
    }
  }

  // 2. TheSportsDB (gratis, SIN clave) — fuente online por defecto.
  //    Devuelve los resultados reales del Mundial. Desactivable con SPORTSDB_OFF=1.
  if (process.env.SPORTSDB_OFF !== "1") {
    try {
      return NextResponse.json(await desdeSportsDb());
    } catch {
      /* cae a demo */
    }
  }

  // 3. Demo (solo si no hay conexión ni clave)
  return NextResponse.json(datosDemo(), sinCache);
}
