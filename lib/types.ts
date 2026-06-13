// Modelo de datos interno del Auditor de la Porra del Mundial 2026.

export type Signo = "1" | "X" | "2";

export type EstadoPartido = "programado" | "en_vivo" | "finalizado";

/** Rondas del torneo en orden de avance. */
export type Ronda =
  | "fase_grupos"
  | "dieciseisavos" // Round of 32
  | "octavos" // Round of 16
  | "cuartos"
  | "semifinales"
  | "final"
  | "campeon";

/** Partido normalizado proveniente del proxy de la API. */
export interface Partido {
  id: number | string;
  /** Índice 0-35 dentro de los 36 primeros partidos de grupos (null si no aplica). */
  indiceQuiniela: number | null;
  ronda: Ronda;
  local: string;
  visitante: string;
  golesLocal: number | null;
  golesVisitante: number | null;
  estado: EstadoPartido;
  fecha: string; // ISO
  /** Resultado en signo 1/X/2 (null si aún no hay resultado utilizable). */
  signo: Signo | null;
}

/** Hasta dónde llegó cada selección, mapeado por nombre normalizado (español). */
export type ProgresoEquipos = Record<string, Ronda>;

/** Respuesta normalizada del proxy /api/resultados. */
export interface DatosTorneo {
  partidos: Partido[];
  progreso: ProgresoEquipos;
  /** Campeón confirmado (null si el torneo no ha terminado). */
  campeon: string | null;
  /** Fuente de datos efectiva: "api" (datos reales) o "demo" (mock local). */
  fuente: "api" | "demo";
  /** Marca de tiempo de la respuesta. */
  actualizado: string;
}

/** Boleto inmutable de un participante. */
export interface Boleto {
  id: string;
  nombre: string;
  campeon: string;
  equipos: string[]; // 10 selecciones
  quiniela: Signo[]; // 36 signos
}

/** Desglose por partido de la quiniela auditada. */
export interface AuditoriaPartido {
  indice: number;
  partido: Partido | null;
  prediccion: Signo;
  resultadoReal: Signo | null;
  acierto: boolean | null; // null = aún sin resolver
  puntos: number;
}

/** Desglose por selección de la auditoría. */
export interface AuditoriaEquipo {
  equipo: string;
  rondaAlcanzada: Ronda;
  puntos: number;
  vivo: boolean; // sigue en competición
}

/** Resultado completo de puntuar un boleto. */
export interface BoletoPuntuado {
  boleto: Boleto;
  puntosQuiniela: number;
  puntosEquipos: number;
  puntosCampeon: number;
  total: number;
  aciertosQuiniela: number;
  partidosResueltos: number;
  detalleQuiniela: AuditoriaPartido[];
  detalleEquipos: AuditoriaEquipo[];
  campeonAcertado: boolean | null;
}
