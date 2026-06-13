// Normalización de nombres de selección.
// La API deportiva suele devolver los nombres en inglés ("Spain", "France"),
// mientras que los boletos usan español ("España", "Francia").
// Este módulo reconcilia ambos a un nombre canónico en español.

/** Mapa de alias (inglés / códigos / variantes) -> nombre canónico en español. */
const ALIAS: Record<string, string> = {
  // Europa
  spain: "España",
  espana: "España",
  france: "Francia",
  england: "Inglaterra",
  germany: "Alemania",
  portugal: "Portugal",
  netherlands: "Países Bajos",
  holland: "Países Bajos",
  belgium: "Bélgica",
  croatia: "Croacia",
  italy: "Italia",
  switzerland: "Suiza",
  denmark: "Dinamarca",
  poland: "Polonia",
  serbia: "Serbia",
  austria: "Austria",
  ukraine: "Ucrania",
  scotland: "Escocia",
  wales: "Gales",
  norway: "Noruega",
  sweden: "Suecia",
  turkey: "Turquía",
  turkiye: "Turquía",
  "czech republic": "República Checa",
  czechia: "República Checa",
  "republica checa": "República Checa",
  "rep. checa": "República Checa",
  "bosnia and herzegovina": "Bosnia y Herzegovina",
  bosnia: "Bosnia y Herzegovina",
  "bosnia y herzegovina": "Bosnia y Herzegovina",
  "bosnia-herzegovina": "Bosnia y Herzegovina",
  // Sudamérica
  argentina: "Argentina",
  brazil: "Brasil",
  brasil: "Brasil",
  uruguay: "Uruguay",
  colombia: "Colombia",
  ecuador: "Ecuador",
  peru: "Perú",
  chile: "Chile",
  paraguay: "Paraguay",
  bolivia: "Bolivia",
  venezuela: "Venezuela",
  // África
  morocco: "Marruecos",
  senegal: "Senegal",
  ghana: "Ghana",
  nigeria: "Nigeria",
  cameroon: "Camerún",
  egypt: "Egipto",
  tunisia: "Túnez",
  algeria: "Argelia",
  "ivory coast": "Costa de Marfil",
  "cote d'ivoire": "Costa de Marfil",
  "south africa": "Sudáfrica",
  mali: "Malí",
  // Norte/Centroamérica
  "united states": "Estados Unidos",
  usa: "Estados Unidos",
  mexico: "México",
  canada: "Canadá",
  "costa rica": "Costa Rica",
  panama: "Panamá",
  jamaica: "Jamaica",
  honduras: "Honduras",
  // Asia / Oceanía
  japan: "Japón",
  "south korea": "Corea del Sur",
  "korea republic": "Corea del Sur",
  iran: "Irán",
  "ir iran": "Irán",
  "saudi arabia": "Arabia Saudí",
  "arabia saudita": "Arabia Saudí",
  australia: "Australia",
  qatar: "Catar",
  "new zealand": "Nueva Zelanda",
  uzbekistan: "Uzbekistán",
  iraq: "Irak",
  jordan: "Jordania",
};

/** Quita acentos, pasa a minúsculas y colapsa espacios. */
function clave(nombre: string): string {
  return nombre
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

// Índice inverso: clave normalizada del nombre canónico español -> canónico.
const CANONICO_POR_CLAVE: Record<string, string> = {};
for (const canonico of Object.values(ALIAS)) {
  CANONICO_POR_CLAVE[clave(canonico)] = canonico;
}

/**
 * Devuelve el nombre canónico en español de una selección.
 * Reconoce nombres en inglés, en español (con o sin acentos) y variantes comunes.
 * Si no encuentra coincidencia, devuelve el nombre original tal cual.
 */
export function normalizarEquipo(nombre: string): string {
  if (!nombre) return nombre;
  const k = clave(nombre);
  if (ALIAS[k]) return ALIAS[k];
  if (CANONICO_POR_CLAVE[k]) return CANONICO_POR_CLAVE[k];
  return nombre.trim();
}

/** Compara dos nombres de selección tras normalizarlos. */
export function mismoEquipo(a: string, b: string): boolean {
  return normalizarEquipo(a) === normalizarEquipo(b);
}
