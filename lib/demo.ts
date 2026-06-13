import type { DatosTorneo, Partido, ProgresoEquipos, Signo, Ronda } from "./types";

// ───────────────────────────────────────────────────────────────────────────
// DATOS DEMO
// Torneo parcialmente jugado, para que el Auditor sea funcional y visual
// incluso sin clave de API. Se reemplaza automáticamente por datos reales
// cuando la variable de entorno API_FOOTBALL_KEY está configurada.
// ───────────────────────────────────────────────────────────────────────────

// 36 enfrentamientos plausibles de fase de grupos (local, visitante).
const PARTIDOS_GRUPOS: [string, string][] = [
  ["México", "Canadá"], ["Estados Unidos", "Gales"], ["Argentina", "Arabia Saudí"],
  ["Francia", "Australia"], ["España", "Costa Rica"], ["Inglaterra", "Irán"],
  ["Portugal", "Ghana"], ["Brasil", "Serbia"], ["Países Bajos", "Senegal"],
  ["Alemania", "Japón"], ["Bélgica", "Canadá"], ["Croacia", "Marruecos"],
  ["Uruguay", "Corea del Sur"], ["Argentina", "México"], ["Francia", "Dinamarca"],
  ["España", "Alemania"], ["Inglaterra", "Estados Unidos"], ["Portugal", "Uruguay"],
  ["Brasil", "Suiza"], ["Países Bajos", "Ecuador"], ["Marruecos", "Bélgica"],
  ["Croacia", "Canadá"], ["Colombia", "Catar"], ["Senegal", "Catar"],
  ["Argentina", "Polonia"], ["Francia", "Túnez"], ["España", "Japón"],
  ["Inglaterra", "Gales"], ["Portugal", "Corea del Sur"], ["Brasil", "Camerún"],
  ["Países Bajos", "Catar"], ["Alemania", "Costa Rica"], ["Bélgica", "Croacia"],
  ["Uruguay", "Ghana"], ["Colombia", "Senegal"], ["Marruecos", "Canadá"],
];

// Resultado real (signo) de cada uno de los 36 partidos en la demo.
const DEMO_SIGNOS: Signo[] = [
  "1", "X", "1", "1", "1", "1", "1", "1", "X", "1", "1", "X",
  "X", "1", "1", "X", "1", "1", "1", "1", "2", "1", "1", "X",
  "1", "1", "1", "1", "1", "1", "1", "1", "X", "1", "2", "1",
];

// Goles coherentes con cada signo (solo para mostrar el marcador en la auditoría).
function golesDeSigno(signo: Signo): [number, number] {
  if (signo === "1") return [2, 0];
  if (signo === "2") return [0, 1];
  return [1, 1];
}

// Progreso de eliminatorias en la demo (hasta dónde llegó cada selección).
const DEMO_PROGRESO: ProgresoEquipos = {
  Francia: "semifinales",
  España: "final",
  Argentina: "cuartos",
  Inglaterra: "semifinales",
  Brasil: "octavos",
  Portugal: "cuartos",
  Alemania: "dieciseisavos",
  "Países Bajos": "octavos",
  Croacia: "octavos",
  Bélgica: "dieciseisavos",
  Uruguay: "cuartos",
  Colombia: "dieciseisavos",
  Marruecos: "octavos",
  Senegal: "dieciseisavos",
  Ecuador: "dieciseisavos",
  Japón: "octavos",
  Ghana: "dieciseisavos",
};

/** Construye el dataset demo completo. Torneo en curso (sin campeón aún). */
export function datosDemo(): DatosTorneo {
  const partidos: Partido[] = PARTIDOS_GRUPOS.map(([local, visitante], i) => {
    const signo = DEMO_SIGNOS[i];
    const [gl, gv] = golesDeSigno(signo);
    return {
      id: `demo-grupo-${i}`,
      indiceQuiniela: i,
      ronda: "fase_grupos" as Ronda,
      local,
      visitante,
      golesLocal: gl,
      golesVisitante: gv,
      estado: "finalizado",
      fecha: `2026-06-${String(11 + Math.floor(i / 6)).padStart(2, "0")}T18:00:00Z`,
      signo,
    };
  });

  return {
    partidos,
    progreso: DEMO_PROGRESO,
    campeon: null, // torneo en curso
    fuente: "demo",
    actualizado: "2026-06-13T12:00:00Z",
  };
}
