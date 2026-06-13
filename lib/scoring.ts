import type {
  Boleto,
  BoletoPuntuado,
  AuditoriaPartido,
  AuditoriaEquipo,
  DatosTorneo,
  Ronda,
  Signo,
} from "./types";
import { normalizarEquipo } from "./equipos";

// ───────────────────────────────────────────────────────────────────────────
// MOTOR DE PUNTUACIÓN
// ───────────────────────────────────────────────────────────────────────────

/** +2 puntos por cada acierto exacto de signo en los 36 partidos de grupos. */
export const PUNTOS_POR_ACIERTO_QUINIELA = 2;

/** +40 puntos por acertar al campeón del torneo. */
export const PUNTOS_CAMPEON = 40;

/**
 * Puntos OFICIALES que otorga cada ronda al superarla (bases de la porra).
 * La puntuación de una selección es ACUMULATIVA: se suman los de todas las
 * rondas que ha ido pasando.
 *   16avos 2 · Octavos 4 · Cuartos 8 · Semis 15 · Final 25
 */
export const PUNTOS_INCREMENTO_RONDA: Record<Ronda, number> = {
  fase_grupos: 0,
  dieciseisavos: 2,
  octavos: 4,
  cuartos: 8,
  semifinales: 15,
  final: 25,
  campeon: 0, // ganar la final no da puntos de "selección" extra (eso es el bonus de campeón)
};

/**
 * Puntos ACUMULADOS por selección según la ronda más lejana alcanzada
 * (suma de los incrementos de todas las rondas superadas).
 *   16avos 2 · Octavos 6 · Cuartos 14 · Semis 29 · Final 54
 */
export const PUNTOS_RONDA: Record<Ronda, number> = {
  fase_grupos: 0,
  dieciseisavos: 2, // 2
  octavos: 6, // 2+4
  cuartos: 14, // 2+4+8
  semifinales: 29, // 2+4+8+15
  final: 54, // 2+4+8+15+25
  campeon: 54, // llegar a la final ya otorga 54; ganar suma el bonus de campeón aparte
};

/** Orden de avance de las rondas, para comparar profundidad. */
export const ORDEN_RONDA: Ronda[] = [
  "fase_grupos",
  "dieciseisavos",
  "octavos",
  "cuartos",
  "semifinales",
  "final",
  "campeon",
];

/** Etiqueta legible de cada ronda. */
export const ETIQUETA_RONDA: Record<Ronda, string> = {
  fase_grupos: "Fase de grupos",
  dieciseisavos: "Dieciseisavos",
  octavos: "Octavos",
  cuartos: "Cuartos",
  semifinales: "Semifinales",
  final: "Final",
  campeon: "Campeón",
};

function profundidad(ronda: Ronda): number {
  return ORDEN_RONDA.indexOf(ronda);
}

/**
 * Puntúa un único boleto contra los datos del torneo.
 */
export function puntuarBoleto(boleto: Boleto, datos: DatosTorneo): BoletoPuntuado {
  // --- 1. Quiniela (36 primeros partidos de grupos) ---
  const detalleQuiniela: AuditoriaPartido[] = [];
  let puntosQuiniela = 0;
  let aciertosQuiniela = 0;
  let partidosResueltos = 0;

  // Índice rápido de partido por su posición en la quiniela.
  const partidoPorIndice = new Map<number, (typeof datos.partidos)[number]>();
  for (const p of datos.partidos) {
    if (p.indiceQuiniela !== null) partidoPorIndice.set(p.indiceQuiniela, p);
  }

  for (let i = 0; i < boleto.quiniela.length; i++) {
    const prediccion: Signo = boleto.quiniela[i];
    const partido = partidoPorIndice.get(i) ?? null;
    const resultadoReal = partido?.signo ?? null;

    let acierto: boolean | null = null;
    let puntos = 0;
    if (resultadoReal !== null) {
      partidosResueltos++;
      acierto = resultadoReal === prediccion;
      if (acierto) {
        puntos = PUNTOS_POR_ACIERTO_QUINIELA;
        puntosQuiniela += puntos;
        aciertosQuiniela++;
      }
    }

    detalleQuiniela.push({
      indice: i,
      partido,
      prediccion,
      resultadoReal,
      acierto,
      puntos,
    });
  }

  // --- 2. Selecciones (10 equipos, puntos por ronda alcanzada) ---
  const detalleEquipos: AuditoriaEquipo[] = [];
  let puntosEquipos = 0;

  for (const equipoBoleto of boleto.equipos) {
    const canonico = normalizarEquipo(equipoBoleto);
    const rondaAlcanzada: Ronda = datos.progreso[canonico] ?? "fase_grupos";
    const puntos = PUNTOS_RONDA[rondaAlcanzada];
    puntosEquipos += puntos;

    // "Vivo" si llegó al menos a una ronda de eliminatoria y el torneo no terminó,
    // o si es el campeón. Aproximación: sigue vivo si su ronda es la más avanzada
    // observada y aún no hay campeón.
    const vivo =
      datos.campeon === null
        ? profundidad(rondaAlcanzada) >= profundidad("dieciseisavos")
        : normalizarEquipo(datos.campeon) === canonico;

    detalleEquipos.push({
      equipo: canonico,
      rondaAlcanzada,
      puntos,
      vivo,
    });
  }

  // --- 3. Campeón (+40) ---
  let puntosCampeon = 0;
  let campeonAcertado: boolean | null = null;
  if (datos.campeon !== null) {
    campeonAcertado =
      normalizarEquipo(datos.campeon) === normalizarEquipo(boleto.campeon);
    if (campeonAcertado) puntosCampeon = PUNTOS_CAMPEON;
  }

  const total = puntosQuiniela + puntosEquipos + puntosCampeon;

  return {
    boleto,
    puntosQuiniela,
    puntosEquipos,
    puntosCampeon,
    total,
    aciertosQuiniela,
    partidosResueltos,
    detalleQuiniela,
    detalleEquipos,
    campeonAcertado,
  };
}

/**
 * Puntúa todos los boletos y los devuelve ordenados por total descendente.
 * Desempata por aciertos de quiniela y luego por nombre.
 */
export function generarRanking(
  boletos: Boleto[],
  datos: DatosTorneo
): BoletoPuntuado[] {
  return boletos
    .map((b) => puntuarBoleto(b, datos))
    .sort((a, b) => {
      if (b.total !== a.total) return b.total - a.total;
      if (b.aciertosQuiniela !== a.aciertosQuiniela)
        return b.aciertosQuiniela - a.aciertosQuiniela;
      return a.boleto.nombre.localeCompare(b.boleto.nombre, "es");
    });
}
