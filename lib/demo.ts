import type { DatosTorneo, Partido, Signo } from "./types";
import { QUINIELA_OFICIAL } from "./quiniela";

// ───────────────────────────────────────────────────────────────────────────
// DATOS DEMO (respaldo offline)
// Reflejan el estado REAL de inicio del torneo: solo los primeros partidos
// jugados, sin eliminatorias todavía. Solo se usa si no hay conexión a la
// fuente online (TheSportsDB / API-Football), para que la app nunca se rompa.
// ───────────────────────────────────────────────────────────────────────────

// Marcadores reales de los partidos de la quiniela ya disputados (resto: sin jugar).
// Clave = nº de partido oficial (1-36).
const RESULTADOS_REALES: Record<number, [number, number]> = {
  1: [2, 1], // Corea del Sur 2-1 República Checa  -> "1"
  2: [1, 1], // Canadá 1-1 Bosnia y Herzegovina    -> "X"
  3: [4, 1], // Estados Unidos 4-1 Paraguay        -> "1"
};

function signoDeGoles(gl: number, gv: number): Signo {
  if (gl > gv) return "1";
  if (gl < gv) return "2";
  return "X";
}

/** Construye el dataset demo: pocos partidos jugados, sin eliminatorias. */
export function datosDemo(): DatosTorneo {
  const partidos: Partido[] = QUINIELA_OFICIAL.map((p, i) => {
    const real = RESULTADOS_REALES[p.num];
    const jugado = real !== undefined;
    const [gl, gv] = real ?? [null, null];
    return {
      id: `demo-grupo-${p.num}`,
      indiceQuiniela: i,
      ronda: "fase_grupos",
      grupo: p.grupo,
      local: p.local,
      visitante: p.visitante,
      golesLocal: jugado ? gl : null,
      golesVisitante: jugado ? gv : null,
      estado: jugado ? "finalizado" : "programado",
      fecha: `${p.fecha}T18:00:00Z`,
      signo: jugado ? signoDeGoles(gl as number, gv as number) : null,
    };
  });

  return {
    partidos,
    progreso: {}, // sin eliminatorias todavía
    campeon: null,
    fuente: "demo",
    proveedor: "Demo (offline)",
    actualizado: "2026-06-13T18:00:00Z",
  };
}
