# Inventario de recursos gráficos — Biblioteca ARESA (SharePoint)

**Alcance:** biblioteca ARESA completa, raíz `file:///b!FYnMvBLKIkCR9hg4kpi_YGavTnIApkJIkf7pQRk0UptF3P1ZafGtRJoCEmOtnum-/`.
**Modo:** solo lectura. No se ha abierto el contenido de ningún fichero.
**Tamaños:** MB decimales (bytes / 1.000.000). Las fechas no vienen en el listado de lectura, así que no se han podido recoger.

Leyenda: **[G]** = carpeta o fichero con material gráfico o de marca potencial. **[NG]** = no gráfico (solo nombrado).

---

## 1. Árbol resumido (primer y segundo nivel)

Raíz de la biblioteca (5 entradas visibles, sin nota de paginación):

```
ARESA (raíz)
├── FERTILIZANTES/                              83.6 MB   [G parcial]
│   ├── ACEFER_Asoc. Comerc. Fert. España/       0.7 MB   [NG] externo
│   ├── ANFFE_Asoc. Fabric. Fert. España/       10.5 MB   [NG] externo
│   ├── Catalogos-Fichas Fertilizantes/          4.9 MB   [G]  (1 fichero, ver tabla)
│   ├── IFA_International Fertilizer Assoc./     2.3 MB   [NG] externo
│   ├── MAPAMA/                                 12.0 MB   [NG] externo
│   ├── Normativa/                              49.8 MB   [NG] legal/normativa
│   ├── IDAE_Fertilizacion_nitrogenada.pdf       2.8 MB   [NG] documento técnico
│   └── IFA_Fertilizantes y su uso.pdf           0.5 MB   [NG] documento técnico
├── (carpeta sin nombre resuelto)               30.9 MB   [NG?] ver nota 1
│   └── 2022_Cuaderno de Campo_NIRS2Custom/     30.9 MB   [NG] cuaderno de campo
├── Subvenciones/                              936.4 MB   [NG] administración / subvenciones
│   ├── ARESA 2021_Bono Enerxia Peme/           0.08 MB   [NG]
│   ├── ARESA 2021_Innovapeme/                409.9 MB   [NG] proyecto subvencionado
│   ├── ARESA 2022_fH₂erticycle/              338.2 MB   [NG] proyecto subvencionado
│   ├── ARESA 2022_NIRS2Custom_Grupos Operativos Innovacion/  153.0 MB  [NG] proyecto subvencionado
│   ├── ARESA 2022_RE-ACCIONA/                  6.7 MB   [NG] proyecto subvencionado
│   ├── ARESA 2022_TALENTO 30/                 22.4 MB   [NG] proyecto subvencionado
│   └── ARESA 2023_PLAN GALICIA EMPLEA/         6.2 MB   [NG] proyecto subvencionado
├── Documento.docx                              0.02 MB  [NG] fichero suelto (solo nombre)
└── (elemento sin nombre resuelto)              —        [NG?] ver nota 1
```

Total visible: unos 1.050 MB (83.6 + 30.9 + 936.4 + 0.02 + elemento sin tamaño legible).

**Nota 1:** el listado de la raíz no se ha podido interpretar con total seguridad. Los identificadores de elemento contienen caracteres `+` que el conector no resuelve bien, y dos lecturas por identificador han devuelto error. Por eso la carpeta de 30.9 MB y el elemento sin nombre quedan sin nombre resuelto. El tamaño de la carpeta de 30.9 MB coincide con el del único hijo que devuelve su lectura (`2022_Cuaderno de Campo_NIRS2Custom`), pero su nombre de primer nivel es **deducido**. El elemento sin nombre no se ha abierto y no se ha inspeccionado.

---

## 2. Tabla de recursos gráficos

Solo aparece un fichero con contenido gráfico o de catálogo en esta zona. Las demás carpetas son de terceros, normativa o administración (ver sección 3).

| Marca/submarca | Tipo | Ruta | Formatos | Fecha | Observación |
|---|---|---|---|---|---|
| FERTIBERIA (ajena; deducido por el nombre del fichero) | Catálogo | `FERTILIZANTES/Catalogos-Fichas Fertilizantes/FERTIBERIA_catalogo-fertiberia-tradicionales.pdf` | PDF (4.9 MB) | No disponible | **Visto:** nombre y tamaño. **Deducido:** es catálogo de otro fabricante de fertilizantes, no material propio de ARESA, así que sirve como referencia de competencia y no como fuente de marca. PDF maquetado, no editable ni vectorial en origen. Vigencia desconocida. |

**Sin material gráfico propio de ARESA en esta zona.** No se ha visto ningún logotipo, arte final, lámina de saco, etiqueta, ficha propia, foto, plantilla, presentación, rótulo o vídeo de la marca.

Otros ficheros con formato PDF, que no son gráficos de marca pero se listan por completitud:

| Marca/submarca | Tipo | Ruta | Formatos | Fecha | Observación |
|---|---|---|---|---|---|
| — | Otro (documento técnico) | `FERTILIZANTES/IDAE_Fertilizacion_nitrogenada.pdf` | PDF (2.8 MB) | No disponible | Documento técnico externo (nombre). No es recurso de marca. |
| — | Otro (documento técnico) | `FERTILIZANTES/IFA_Fertilizantes y su uso.pdf` | PDF (0.5 MB) | No disponible | Documento técnico externo (nombre). Posible duplicado de contenido de la carpeta IFA (deducido). |

---

## 3. Duplicados, carpetas confusas y huecos

**Duplicados y solapamientos (deducidos por nombre, no comprobados por contenido):**
- `FERTILIZANTES/IFA_Fertilizantes y su uso.pdf` podría repetir material de la carpeta `IFA_International Fertilizer Association`.
- El catálogo de FERTIBERIA se guarda dentro de una carpeta llamada «Catalogos-Fichas Fertilizantes», que a primera vista parece de ARESA. Conviene no confundir el catálogo de un tercero con catálogo propio.
- No hay duplicados evidentes con las zonas «LAMINAS», «LOGOS» o «Marketing», porque esta zona no contiene esas carpetas. Hay que cruzarlo con las otras zonas del inventario.

**Carpetas confusas:**
- `FERTILIZANTES/` mezcla material de terceros (asociaciones, administración, normativa, catálogo de competencia) con el nombre de la marca. No es la carpeta para buscar material propio.
- Las carpetas `ARESA 20XX_...` de `Subvenciones/` llevan el nombre de la empresa, pero son expedientes de subvención. Algunas podrían contener material de difusión o publicidad exigido por las bases (por ejemplo, logotipos de financiadores y cartelería). Esto es **deducido** por el tipo de expediente y no se ha comprobado. No se han entrado por ser claramente no gráficas según las instrucciones.
- La carpeta de 30.9 MB sin nombre resuelto (y su hijo `2022_Cuaderno de Campo_NIRS2Custom`) no está clara. Su nombre de primer nivel hay que confirmarlo.
- `Documento.docx` está suelto en la raíz, sin carpeta. Solo se ha visto el nombre; su contenido no se ha abierto.

**Huecos:**
- No hay carpeta de marca, logotipos, identidad corporativa, sacos, etiquetas, envases, ferias, vehículos ni uniformes en la raíz ni en los dos niveles revisados.
- Si el material de marca existe en el SharePoint, probablemente está en otra biblioteca o en otra zona del inventario. Conviene confirmarlo antes de dar por cerrada la búsqueda.
- Las subcarpetas de segundo nivel de `Subvenciones/` no se han abierto. Si alguna guarda difusión (cartelería, folletos, logos), habría que hacer una pasada de tercer nivel sobre ellas.
- No se ha podido obtener la fecha de cada elemento con esta herramienta. Para datar el material hará falta otra vía.

---

## 4. Resumen de lo VISTO frente a lo DEDUCIDO

- **Visto:** nombres, tipos, tamaños y ruta de todos los elementos de los niveles 1 y 2 listados en este inventario (`FERTILIZANTES/`, `Subvenciones/`, `Catalogos-Fichas Fertilizantes/`, raíz). El fichero de catálogo de FERTIBERIA.
- **Deducido:** el origen de cada carpeta (terceros frente a propias), el contenido de las carpetas de expedientes, la relación entre el PDF IFA y la carpeta IFA, el nombre de la carpeta de 30.9 MB y el carácter no editable del PDF.
- **No visto:** el contenido de ningún fichero, las fechas, los formatos de los ficheros que no son PDF, y los niveles inferiores a los indicados.
