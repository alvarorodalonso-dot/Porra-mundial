import type { Boleto } from "./types";

/**
 * BASE DE DATOS FIJA DE PARTICIPANTES.
 * Datos inmutables inyectados en el estado inicial de la aplicación.
 * No deben modificarse: son los boletos oficiales de la porra.
 */
export const PARTICIPANTES: Boleto[] = [
  {
    id: "alvaro_1",
    nombre: "Álvaro Rodríguez (Apuesta 1)",
    campeon: "Francia",
    equipos: [
      "Francia",
      "Inglaterra",
      "Argentina",
      "España",
      "Portugal",
      "Alemania",
      "Países Bajos",
      "Brasil",
      "Croacia",
      "Bélgica",
    ],
    quiniela: [
      "1", "1", "1", "1", "X", "1", "X", "1", "2", "1", "1", "1",
      "2", "1", "1", "2", "1", "1", "1", "1", "1", "X", "1", "2",
      "X", "1", "2", "2", "2", "X", "2", "2", "X", "1", "2", "X",
    ],
  },
  {
    id: "alvaro_2",
    nombre: "Álvaro Rodríguez (Apuesta 2)",
    campeon: "España",
    equipos: [
      "Francia",
      "Inglaterra",
      "Argentina",
      "España",
      "Portugal",
      "Alemania",
      "Uruguay",
      "Colombia",
      "Croacia",
      "Marruecos",
    ],
    quiniela: [
      "1", "1", "1", "X", "2", "1", "X", "1", "2", "1", "1", "X",
      "2", "1", "1", "2", "1", "1", "1", "1", "1", "2", "1", "2",
      "X", "1", "2", "2", "2", "X", "2", "2", "X", "1", "2", "X",
    ],
  },
  {
    id: "martin_1",
    nombre: "Martín Fresco",
    campeon: "Francia",
    equipos: [
      "España",
      "Inglaterra",
      "Francia",
      "Argentina",
      "Países Bajos",
      "Senegal",
      "Croacia",
      "Ecuador",
      "Japón",
      "Ghana",
    ],
    quiniela: [
      "1", "1", "1", "1", "1", "1", "1", "1", "2", "1", "1", "1",
      "2", "1", "1", "2", "1", "1", "1", "1", "1", "X", "1", "2",
      "X", "1", "2", "2", "2", "1", "2", "2", "X", "1", "2", "2",
    ],
  },
];
