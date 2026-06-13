import { NextResponse } from "next/server";
import type { DatosTorneo, Partido, ProgresoEquipos, Signo, Ronda, EstadoPartido } from "@/lib/types";
import { normalizarEquipo } from "@/lib/equipos";
import { datosDemo } from "@/lib/demo";
import { ORDEN_RONDA } from "@/lib/scoring";

// ───────────────────────────────────────────────────────────────────────────
// PROXY BACKEND — resuelve el bloqueo CORS del navegador.
// El frontend SIEMPRE llama a esta ruta interna; nunca a la API externa.
// Si no hay clave configurada o la API falla, se sirven datos demo.
// ───────────────────────────────────────────────────────────────────────────

// Revalidación: respuesta cacheada hasta 60 s para no agotar la cuota gratuita.
export const revalidate = 60;

const API_HOST = "https://v3.football.api-sports.io";
// Liga 1 = Mundial (FIFA World Cup) en API-Football. Temporada 2026.
const LIGA_MUNDIAL = 1;
const TEMPORADA = 2026;

/** Traduce el texto de ronda de la API a nuestra enumeración interna. */
function rondaDesdeTexto(texto: string): Ronda {
  const t = texto.toLowerCase();
  if (t.includes("group")) return "fase_grupos";
  if (t.includes("round of 32") || t.includes("dieciseis")) return "dieciseisavos";
  if (t.includes("round of 16") || t.includes("octav")) return "octavos";
  if (t.includes("quarter") || t.includes("cuart")) return "cuartos";
  if (t.includes("semi")) return "semifinales";
  if (t.includes("final")) return "final";
  return "fase_grupos";
}

/** Estado del partido a partir del código corto de la API. */
function estadoDesdeApi(corto: string): EstadoPartido {
  const fin = ["FT", "AET", "PEN", "WO", "AWD"];
  const vivo = ["1H", "2H", "HT", "ET", "BT", "P", "LIVE", "INT"];
  if (fin.includes(corto)) return "finalizado";
  if (vivo.includes(corto)) return "en_vivo";
  return "programado";
}

/** Calcula el signo 1/X/2; null si faltan goles o el partido no ha terminado. */
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

function profundidad(r: Ronda): number {
  return ORDEN_RONDA.indexOf(r);
}

/** Normaliza la respuesta cruda de API-Football a nuestro modelo DatosTorneo. */
function normalizar(respuesta: any[]): DatosTorneo {
  // 1. Mapear cada fixture a un Partido.
  const partidosCrudos = respuesta.map((f: any) => {
    const estado = estadoDesdeApi(f?.fixture?.status?.short ?? "NS");
    const gl = f?.goals?.home ?? null;
    const gv = f?.goals?.away ?? null;
    const ronda = rondaDesdeTexto(f?.league?.round ?? "");
    return {
      id: f?.fixture?.id,
      ronda,
      local: normalizarEquipo(f?.teams?.home?.name ?? ""),
      visitante: normalizarEquipo(f?.teams?.away?.name ?? ""),
      golesLocal: gl,
      golesVisitante: gv,
      estado,
      fecha: f?.fixture?.date ?? "",
      signo: calcularSigno(gl, gv, estado),
      ganadorHome: f?.teams?.home?.winner === true,
      ganadorAway: f?.teams?.away?.winner === true,
    };
  });

  // 2. Asignar índice de quiniela (0-35) a los 36 primeros partidos de grupos,
  //    ordenados cronológicamente.
  const grupos = partidosCrudos
    .filter((p) => p.ronda === "fase_grupos")
    .sort((a, b) => (a.fecha < b.fecha ? -1 : a.fecha > b.fecha ? 1 : 0));

  const indicePorId = new Map<any, number>();
  grupos.slice(0, 36).forEach((p, i) => indicePorId.set(p.id, i));

  const partidos: Partido[] = partidosCrudos.map((p) => ({
    id: p.id,
    indiceQuiniela: indicePorId.has(p.id) ? indicePorId.get(p.id)! : null,
    ronda: p.ronda,
    local: p.local,
    visitante: p.visitante,
    golesLocal: p.golesLocal,
    golesVisitante: p.golesVisitante,
    estado: p.estado,
    fecha: p.fecha,
    signo: p.signo,
  }));

  // 3. Progreso de selecciones: ronda más lejana en la que aparece cada equipo.
  //    Aparecer en un fixture de una ronda implica haberse clasificado a ella.
  const progreso: ProgresoEquipos = {};
  const registrar = (equipo: string, ronda: Ronda) => {
    if (!equipo || ronda === "fase_grupos") return;
    const actual = progreso[equipo];
    if (!actual || profundidad(ronda) > profundidad(actual)) {
      progreso[equipo] = ronda;
    }
  };
  for (const p of partidosCrudos) {
    registrar(p.local, p.ronda);
    registrar(p.visitante, p.ronda);
  }

  // 4. Campeón: ganador de la final ya finalizada.
  let campeon: string | null = null;
  const final = partidosCrudos.find(
    (p) => p.ronda === "final" && p.estado === "finalizado"
  );
  if (final) {
    if (final.ganadorHome) campeon = final.local;
    else if (final.ganadorAway) campeon = final.visitante;
    else if (final.golesLocal !== null && final.golesVisitante !== null) {
      campeon =
        final.golesLocal > final.golesVisitante ? final.local : final.visitante;
    }
    if (campeon) progreso[campeon] = "campeon";
  }

  return {
    partidos,
    progreso,
    campeon,
    fuente: "api",
    actualizado: new Date().toISOString(),
  };
}

export async function GET() {
  const apiKey = process.env.API_FOOTBALL_KEY;

  // Sin clave -> servir datos demo (la app es 100% funcional igualmente).
  if (!apiKey) {
    return NextResponse.json(datosDemo(), {
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    const url = `${API_HOST}/fixtures?league=${LIGA_MUNDIAL}&season=${TEMPORADA}`;
    const res = await fetch(url, {
      headers: { "x-apisports-key": apiKey },
      next: { revalidate },
    });

    if (!res.ok) throw new Error(`API respondió ${res.status}`);

    const json = await res.json();
    const lista = Array.isArray(json?.response) ? json.response : [];
    if (lista.length === 0) throw new Error("La API no devolvió partidos");

    const datos = normalizar(lista);
    return NextResponse.json(datos);
  } catch (err) {
    // Cualquier fallo (cuota, red, formato) -> degradar a demo sin romper la UI.
    const demo = datosDemo();
    return NextResponse.json(
      { ...demo, fuente: "demo" as const },
      { headers: { "Cache-Control": "no-store" }, status: 200 }
    );
  }
}
