import { normalizarEquipo } from "./equipos";

// ───────────────────────────────────────────────────────────────────────────
// LISTA OFICIAL DE LOS 36 PARTIDOS DE LA QUINIELA
// Extraída de los Excel oficiales de las apuestas (idéntica en los 3 boletos).
// El índice (num - 1) es la posición del signo dentro del array `quiniela`.
// ───────────────────────────────────────────────────────────────────────────

export interface PartidoOficial {
  num: number; // 1-36
  fecha: string; // ISO (YYYY-MM-DD)
  local: string;
  visitante: string;
  grupo: string;
}

export const QUINIELA_OFICIAL: PartidoOficial[] = [
  { num: 1, fecha: "2026-06-12", local: "Corea del Sur", visitante: "República Checa", grupo: "A" },
  { num: 2, fecha: "2026-06-12", local: "Canadá", visitante: "Bosnia y Herzegovina", grupo: "B" },
  { num: 3, fecha: "2026-06-13", local: "Estados Unidos", visitante: "Paraguay", grupo: "D" },
  { num: 4, fecha: "2026-06-13", local: "Brasil", visitante: "Marruecos", grupo: "C" },
  { num: 5, fecha: "2026-06-13", local: "Australia", visitante: "Turquía", grupo: "D" },
  { num: 6, fecha: "2026-06-14", local: "Países Bajos", visitante: "Japón", grupo: "F" },
  { num: 7, fecha: "2026-06-15", local: "Costa de Marfil", visitante: "Ecuador", grupo: "E" },
  { num: 8, fecha: "2026-06-15", local: "Bélgica", visitante: "Egipto", grupo: "G" },
  { num: 9, fecha: "2026-06-16", local: "Arabia Saudí", visitante: "Uruguay", grupo: "H" },
  { num: 10, fecha: "2026-06-16", local: "Francia", visitante: "Senegal", grupo: "I" },
  { num: 11, fecha: "2026-06-17", local: "Argentina", visitante: "Argelia", grupo: "J" },
  { num: 12, fecha: "2026-06-17", local: "Inglaterra", visitante: "Croacia", grupo: "L" },
  { num: 13, fecha: "2026-06-17", local: "Uzbekistán", visitante: "Colombia", grupo: "K" },
  { num: 14, fecha: "2026-06-18", local: "Suiza", visitante: "Bosnia y Herzegovina", grupo: "B" },
  { num: 15, fecha: "2026-06-19", local: "México", visitante: "Corea del Sur", grupo: "A" },
  { num: 16, fecha: "2026-06-19", local: "Escocia", visitante: "Marruecos", grupo: "C" },
  { num: 17, fecha: "2026-06-20", local: "Países Bajos", visitante: "Suecia", grupo: "F" },
  { num: 18, fecha: "2026-06-20", local: "Alemania", visitante: "Costa de Marfil", grupo: "E" },
  { num: 19, fecha: "2026-06-21", local: "Bélgica", visitante: "Irán", grupo: "G" },
  { num: 20, fecha: "2026-06-21", local: "España", visitante: "Arabia Saudí", grupo: "H" },
  { num: 21, fecha: "2026-06-22", local: "Argentina", visitante: "Austria", grupo: "J" },
  { num: 22, fecha: "2026-06-22", local: "Noruega", visitante: "Senegal", grupo: "I" },
  { num: 23, fecha: "2026-06-23", local: "Portugal", visitante: "Uzbekistán", grupo: "K" },
  { num: 24, fecha: "2026-06-23", local: "Panamá", visitante: "Croacia", grupo: "L" },
  { num: 25, fecha: "2026-06-24", local: "Suiza", visitante: "Canadá", grupo: "B" },
  { num: 26, fecha: "2026-06-24", local: "Brasil", visitante: "Escocia", grupo: "C" },
  { num: 27, fecha: "2026-06-24", local: "República Checa", visitante: "México", grupo: "A" },
  { num: 28, fecha: "2026-06-26", local: "Ecuador", visitante: "Alemania", grupo: "E" },
  { num: 29, fecha: "2026-06-26", local: "Turquía", visitante: "Estados Unidos", grupo: "D" },
  { num: 30, fecha: "2026-06-26", local: "Japón", visitante: "Suecia", grupo: "F" },
  { num: 31, fecha: "2026-06-26", local: "Noruega", visitante: "Francia", grupo: "I" },
  { num: 32, fecha: "2026-06-27", local: "Uruguay", visitante: "España", grupo: "H" },
  { num: 33, fecha: "2026-06-27", local: "Egipto", visitante: "Irán", grupo: "G" },
  { num: 34, fecha: "2026-06-27", local: "Croacia", visitante: "Ghana", grupo: "L" },
  { num: 35, fecha: "2026-06-28", local: "Colombia", visitante: "Portugal", grupo: "K" },
  { num: 36, fecha: "2026-06-28", local: "Argelia", visitante: "Austria", grupo: "J" },
];

/** Clave canónica de un enfrentamiento (independiente del orden local/visitante). */
function clavePar(a: string, b: string): string {
  return [normalizarEquipo(a), normalizarEquipo(b)].sort().join(" vs ");
}

// Índice: enfrentamiento normalizado -> posición en la quiniela (0-35).
const INDICE_POR_PAR = new Map<string, number>();
QUINIELA_OFICIAL.forEach((p) => INDICE_POR_PAR.set(clavePar(p.local, p.visitante), p.num - 1));

/**
 * Devuelve el índice de quiniela (0-35) de un enfrentamiento dado, o null si no
 * es uno de los 36 partidos oficiales. Reconoce nombres en inglés/español y
 * funciona en cualquier orden (local/visitante).
 */
export function indiceDePartido(local: string, visitante: string): number | null {
  const i = INDICE_POR_PAR.get(clavePar(local, visitante));
  return i === undefined ? null : i;
}
