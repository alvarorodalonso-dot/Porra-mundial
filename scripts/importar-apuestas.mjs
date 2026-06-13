// ───────────────────────────────────────────────────────────────────────────
// IMPORTADOR DE APUESTAS
// Lee TODOS los Excel oficiales de la carpeta ./apuestas y genera
// lib/participantes.ts con los boletos de todos los participantes.
//
// Uso:
//   1. Copia los .xlsx (mismo formato oficial) dentro de la carpeta  apuestas/
//   2. Ejecuta:   npm run importar
//   3. Sube los cambios y redespliega (git push).
//
// Opciones:
//   --dry-run   Solo muestra lo que leería, sin escribir el archivo.
// ───────────────────────────────────────────────────────────────────────────

import ExcelJS from "exceljs";
import { readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const RAIZ = process.cwd();
const DIR_APUESTAS = resolve(RAIZ, "apuestas");
const SALIDA = resolve(RAIZ, "lib", "participantes.ts");
const DRY_RUN = process.argv.includes("--dry-run");

// Celdas del formato oficial de la apuesta.
const CELDA_NOMBRE = "D2";
const FILA_QUINIELA_INI = 7; // F7..F42 -> 36 signos (1/X/2)
const FILA_QUINIELA_FIN = 42;
const FILA_EQUIPOS_INI = 7; // J7..J16 -> 10 equipos
const FILA_EQUIPOS_FIN = 16;
const CELDA_CAMPEON = "J19";

/** Devuelve el texto limpio de una celda (maneja richText, fórmulas, etc.). */
function txt(ws, addr) {
  const v = ws.getCell(addr).value;
  if (v == null) return "";
  if (typeof v === "object") {
    if ("richText" in v) return v.richText.map((r) => r.text).join("").trim();
    if ("text" in v) return String(v.text).trim();
    if ("result" in v) return String(v.result).trim();
    if ("hyperlink" in v && "text" in v) return String(v.text).trim();
    return String(v.value ?? "").trim();
  }
  return String(v).trim();
}

/** Normaliza un signo de quiniela a "1" | "X" | "2". */
function signo(valor) {
  const s = String(valor).trim().toUpperCase();
  if (s === "1" || s === "2" || s === "X") return s;
  if (s === "1.0") return "1";
  if (s === "2.0") return "2";
  return null; // inválido
}

async function leerBoleto(rutaArchivo, nombreArchivo) {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(rutaArchivo);
  const ws = wb.worksheets[0];

  const avisos = [];

  // Nombre
  const nombre = txt(ws, CELDA_NOMBRE) || nombreArchivo.replace(/\.xlsx$/i, "");

  // Quiniela (36 signos)
  const quiniela = [];
  for (let f = FILA_QUINIELA_INI; f <= FILA_QUINIELA_FIN; f++) {
    const s = signo(txt(ws, `F${f}`));
    if (s === null) avisos.push(`signo inválido en F${f}`);
    quiniela.push(s ?? "1");
  }

  // 10 equipos
  const equipos = [];
  for (let f = FILA_EQUIPOS_INI; f <= FILA_EQUIPOS_FIN; f++) {
    const eq = txt(ws, `J${f}`);
    if (eq) equipos.push(eq);
  }
  if (equipos.length !== 10) avisos.push(`se esperaban 10 equipos, hay ${equipos.length}`);

  // Campeón
  const campeon = txt(ws, CELDA_CAMPEON);
  if (!campeon) avisos.push("sin campeón");

  // Número de boleto desde el nombre de archivo (prefijo numérico).
  const m = nombreArchivo.match(/^(\d+)/);
  const id = m ? m[1] : nombreArchivo.replace(/\.xlsx$/i, "").replace(/[^a-z0-9]+/gi, "_").toLowerCase();

  return { id, nombre, campeon, equipos, quiniela, _avisos: avisos };
}

async function main() {
  let archivos;
  try {
    archivos = readdirSync(DIR_APUESTAS).filter((f) => /\.xlsx$/i.test(f));
  } catch {
    console.error(`❌ No existe la carpeta ${DIR_APUESTAS}. Créala y mete los .xlsx.`);
    process.exit(1);
  }

  if (archivos.length === 0) {
    console.error(`❌ No hay archivos .xlsx en ${DIR_APUESTAS}.`);
    process.exit(1);
  }

  // Orden natural por número de boleto.
  archivos.sort((a, b) => {
    const na = parseInt(a, 10) || 0;
    const nb = parseInt(b, 10) || 0;
    return na - nb || a.localeCompare(b, "es");
  });

  console.log(`📂 ${archivos.length} archivos encontrados en apuestas/\n`);

  const boletos = [];
  let conAvisos = 0;
  for (const archivo of archivos) {
    try {
      const b = await leerBoleto(join(DIR_APUESTAS, archivo), archivo);
      if (b._avisos.length) {
        conAvisos++;
        console.warn(`⚠️  ${archivo}: ${b._avisos.join("; ")}`);
      }
      boletos.push(b);
    } catch (e) {
      console.error(`❌ ${archivo}: no se pudo leer (${e.message})`);
    }
  }

  // Desambiguar nombres repetidos (misma persona con varias apuestas).
  const cuenta = {};
  for (const b of boletos) cuenta[b.nombre] = (cuenta[b.nombre] ?? 0) + 1;
  const vistos = {};
  for (const b of boletos) {
    if (cuenta[b.nombre] > 1) {
      vistos[b.nombre] = (vistos[b.nombre] ?? 0) + 1;
      b.nombreMostrado = `${b.nombre} (Apuesta ${vistos[b.nombre]})`;
    } else {
      b.nombreMostrado = b.nombre;
    }
  }

  // Asegurar ids únicos.
  const idsVistos = new Set();
  for (const b of boletos) {
    let id = b.id;
    let n = 2;
    while (idsVistos.has(id)) id = `${b.id}_${n++}`;
    idsVistos.add(id);
    b.idFinal = id;
  }

  const limpios = boletos.map((b) => ({
    id: b.idFinal,
    nombre: b.nombreMostrado,
    campeon: b.campeon,
    equipos: b.equipos,
    quiniela: b.quiniela,
  }));

  console.log(`\n✅ ${limpios.length} boletos procesados (${conAvisos} con avisos).`);
  console.log(`   Primeros: ${limpios.slice(0, 3).map((b) => b.nombre).join(", ")}${limpios.length > 3 ? "…" : ""}`);

  if (DRY_RUN) {
    console.log("\n(--dry-run) No se ha escrito nada. Ejemplo del primer boleto:");
    console.log(JSON.stringify(limpios[0], null, 2));
    return;
  }

  const cabecera = `import type { Boleto } from "./types";

// ⚠️ ARCHIVO GENERADO automáticamente por scripts/importar-apuestas.mjs
// No editar a mano: vuelve a ejecutar  npm run importar  para regenerarlo.
// Boletos importados: ${limpios.length}

export const PARTICIPANTES: Boleto[] = ${JSON.stringify(limpios, null, 2)};
`;

  writeFileSync(SALIDA, cabecera, "utf8");
  console.log(`\n💾 Escrito ${SALIDA}`);
  console.log("   Siguiente paso:  npm run build  y luego  git add -A && git commit && git push");
}

main();
