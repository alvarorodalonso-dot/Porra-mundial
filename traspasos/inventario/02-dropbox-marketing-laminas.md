# Inventario de recursos gráficos — biblioteca DROPBOX (SharePoint Aresa / Cecoagro)

Tipo: inventario de SOLO LECTURA. No se ha abierto el contenido de ningún fichero; sólo nombre, formato, tamaño y carpeta.
Fecha de inventario: 2026-10-31.

## Leyenda y advertencias

- **VISTO**: dato leído del listado (nombre, carpeta, tamaño en bytes convertido a MB decimal, o tipo de fichero).
- **DEDUCIDO**: inferido del nombre del fichero o de la carpeta. Siempre marcado como «deducido».
- El listado de Microsoft Graph **no devuelve fechas de modificación**. Todas las fechas de este documento proceden del nombre (p. ej. `231128` se lee como 2023-11-28, o `v9 ras 231128`) y son deducidas.
- Los nombres de algunos ficheros llegaron pegados en la salida del listado. Los conteos de ficheros marcados como «aprox.» son orientativos.
- Abreviaturas de ruta (todas bajo `7. Marketing/Diseño Envases/`, salvo indicación):
  - `[L]` = `LAMINAS/ARESA`
  - `[AN]` = `LAMINAS/ARESA/ANTIGUAS`
  - `[LC]` = `LAMINAS/CLIENTES`
  - `[BB]` = `BIG BAGS/DISEÑOS`
  - `[LS]` = `7. Marketing/LOGOs/logos y sacos antiguos`
  - `[B]` = `ARESA - Carpeta Compartida JAC&ICC/1. ARESA/05. Marketing`
  - `[C]` = `4. Fichas Producto/Marketing`

## 0. Lo que NO se ha podido recorrer

- Graph devolvió HTTP 429 (límite de peticiones) de forma repetida. Quedan **sin listar** estas subcarpetas: `LOGOs/logos y sacos antiguos/` → `Logos (1)` (12,0 MB), `logos grupo` (10,1 MB), `emilio enero 2011` (1,4 MB), `etiquetado fertilizantes` (1,1 MB), `european` (1,2 MB), `NATURCOR` (1,7 MB); además `LOGOs/ARESA/` (4 subcarpetas de logos, 9,2 MB), `LOGOs/FERTICOMPLET`, `LOGOs/O Santo`, `LOGOs/UMAN_Logo`.
- Sin listar: `[B]/Gama Fertilizantes/Nutriland - Abonos Líquidos/Tarifas Nutriland` (43 KB) y el tamaño total de `[B]` (`05. Marketing`), que no figura en el listado de la raíz de la biblioteca.
- No abiertos por política (contenido de archivo comprimido o acceso directo): `LOGOs/CECOAGRO_Logo.zip`, `LOGOs/Logos marcas PET.lnk` (acceso directo de Windows, 1,6 KB).
- No recorridas (sólo nombre, según encargo): carpetas de la raíz de la biblioteca distintas de `7. Marketing` y `4. Fichas Producto`.

## 1. Árbol resumido con tamaños y número aproximado de ficheros

Biblioteca DROPBOX (raíz): ≈ 14.091 MB (≈ 14,1 GB) entre las 12 carpetas de primer nivel. Sin ficheros sueltos en la raíz. (VISTO: suma de los tamaños del listado.)

```
DROPBOX/
├── 1. Compras ARESA ............................... 1.770,1 MB  (no recorrida)
├── 2. Ventas ARESA ................................ 2.316,3 MB  (no recorrida)
├── 3. Organización ARESA-CECO ..................... 259,0 MB   (no recorrida)
├── 4. Fichas Producto ............................. 1.506,0 MB  (sólo /Marketing recorrida)
│   └── Marketing .................................. ≈ 24,9 MB, 43 ficheros (suma de sus 4 elementos)
│       ├── ETIQUETAS BOTES MUESTRA ................. 3,4 MB, 13 ficheros
│       │   ├── 2022 ................................ 2,0 MB, 6 .pub
│       │   ├── 2024 ................................ 1,4 MB, 5 .pub
│       │   └── Etiquetas Botes 2022.pdf ............ 0,05 MB
│       ├── FOTOS PRODUCTO .......................... 4,35 MB, 28 JPG (WhatsApp, 2025)
│       │   ├── 15-15-15_ACRON ....................... 0,56 MB, 4 JPG
│       │   ├── 25-9-9_ACRON ......................... 0,77 MB, 6 JPG
│       │   ├── 27-6-6_URALCHEM ...................... 0,82 MB, 9 JPG
│       │   └── NAC - BAGFAS ......................... 2,19 MB, 9 JPG
│       ├── Dossier_Aresa_ING.pptx .................. 5,1 MB
│       └── Dossier_GrupoAresa_02.pdf ............... 12,0 MB
├── 5. Mantenimiento ARESA ......................... 46,9 MB   (no recorrida)
├── 6. Proyectos ARESA ............................. 1.105,6 MB (no recorrida)
├── 7. Marketing ................................... 1.415,9 MB, ≈ 330 ficheros aprox.
│   ├── CATALOGOS .................................. 5,7 MB, 3 ficheros
│   ├── Diseño Envases ............................. 1.289,5 MB
│   │   ├── BIG BAGS / DISEÑOS ...................... 4,3 MB, 11 PDF
│   │   │   ├── 2024 ................................ 1,4 MB, 5 PDF (fichas 67x67x142+45)
│   │   │   └── 2026 ................................ 2,8 MB, 6 PDF (67x67x142+37)
│   │   └── LAMINAS ................................ 1.285,2 MB
│   │       ├── ARESA .............................. 651,3 MB, ≈ 180 ficheros aprox.
│   │       │   ├── 2024 / 20240717_Láminas_carplas . 78,7 MB, 28 PDF
│   │       │   ├── ANTIGUAS ........................ 534,2 MB, ≈ 125 ficheros aprox.
│   │       │   │   ├── 2021-12-23 .................. 61,7 MB, ≈ 22 PDF
│   │       │   │   ├── Láminas 300823 .............. 71,1 MB, ≈ 27 PDF
│   │       │   │   ├── Láminas 300823_revisadas .... 76,2 MB, ≈ 24 PDF + subcarpeta REVISADAS (12,7 MB, 8 ficheros)
│   │       │   │   ├── Láminas revisadas a 02112023  8,8 MB, 4 PDF
│   │       │   │   ├── Láminas revisadas a 20102023  8,7 MB, 5 PDF
│   │       │   │   ├── Láminas revisadas a 26102023  8,7 MB, 5 PDF
│   │       │   │   ├── Láminas revisadas V5 ........ 3,6 MB, 2 PDF
│   │       │   │   └── ficheros sueltos en la raíz . ≈ 295 MB, ≈ 27 ficheros (incluye un PDF de 252,8 MB, ver §4)
│   │       │   ├── S. 25 KG / 2025 ................. 27,6 MB, 11 PDF
│   │       │   ├── S. 40 KG / 2025 ................. 7,1 MB, 4 PDF
│   │       │   └── S. 5 KG / 2025 .................. 3,7 MB, 1 PDF
│   │       └── CLIENTES ........................... 633,9 MB, 9 ficheros
│   │           ├── S. 20 KG ........................ 6,4 MB, 1 PDF
│   │           ├── S. 25 KG / 2025 ................. 8,8 MB, 3 PDF
│   │           └── S. 5 KG / 2025 .................. 618,6 MB, 2 PDF (379 MB y 239 MB)
│   ├── LOGOs ...................................... 98,5 MB
│   │   ├── ARESA .................................. 9,2 MB (4 subcarpetas de logos, no recorridas)
│   │   ├── logos y sacos antiguos ................. 63,9 MB (11 subcarpetas)
│   │   ├── FERTICOMPLET ........................... 0,6 MB (no recorrida)
│   │   ├── O Santo ................................ 1,9 MB (no recorrida)
│   │   ├── UMAN_Logo .............................. 3,9 MB (no recorrida)
│   │   ├── Emblema Equinova (.bmp 12,1 MB / .jpg 0,3 MB)
│   │   ├── Logo Equinova (.bmp 5,5 MB / .jpg 0,2 MB)
│   │   ├── LogoGrupoAresa.pdf ..................... 0,5 MB
│   │   ├── CECOAGRO_Logo.zip ...................... 0,5 MB (no abierto)
│   │   └── Logos marcas PET.lnk ................... 1,6 KB (acceso directo, no es gráfico)
│   ├── PRESENTACIÓN ARESA ......................... 7,3 MB, 1 PDF (Dossier_Aresa_ING.pdf)
│   └── TEAMS ...................................... 15,1 MB, 7 PNG
├── 8. Información ................................. 380,5 MB   (no recorrida)
├── 9. PRL ......................................... 137,9 MB   (no recorrida)
├── 10. Gestión de Envases ......................... 15,2 MB    (no recorrida)
├── 11. Calidad ARESA .............................. 2.427,5 MB  (no recorrida)
└── ARESA - Carpeta Compartida JAC&ICC ............. 2.710,4 MB  (sólo 1. ARESA/05. Marketing recorrida)
    └── 1. ARESA / 05. Marketing ................... ≈ 99,4 MB en subcarpetas + ≈ 72 ficheros sueltos (total no listado)
        ├── Diseño Etiquetas ........................ 0,5 MB, 4 ficheros
        ├── Diseño Fichas Producto Inkscape ........... 22,5 MB, 30 ficheros (.ai, .eps, .svg, .png, .jpg, .pdf, .pub)
        ├── Diseño Stephan ............................ 8,8 MB, 14 ficheros + Tipografias (4 fuentes)
        ├── Diseños Envases & Marcas .................. 21,2 MB, 14 ficheros
        ├── Drone ARESA ............................... 45,2 MB, 10 ficheros (8 DJI JPG, 2 fotos)
        ├── Gama Fertilizantes ........................ 1,1 MB, 4 ficheros + Nutriland - Abonos Líquidos
        │   └── Nutriland - Abonos Líquidos ........... 0,98 MB: Fichas Producto NUTRILAND (8 ficheros), Tarifas Nutriland (no listada), 1 .xlsx
        ├── Premio ARESA .............................. 0,2 MB, 3 ficheros
        └── ≈ 72 ficheros sueltos en la raíz de 05. Marketing (botes, folletos, presentaciones, propuestas, fotos IMG_2019)
```

Nota de conteo: la carpeta `7. Marketing` tiene unos 330 ficheros entre todas sus ramas (aprox.; incluye duplicados). Los números de ficheros de `ANTIGUAS` son aproximados porque el listado concatenaba nombres.

## 2. Tabla de láminas y artes finales de sacos

Columnas: **Marca/submarca** (tal como aparece en el nombre) | **Producto** | **Kg** (dato del nombre; «no consta» si no aparece) | **Ruta** | **Formatos** | **Fecha** (deducida del nombre) | **Vigente/antigua** (deducido de carpeta y fecha) | **¿Fichero editable?**

Criterio general de «vigente» (DEDUCIDO): los ficheros de `2025` y `2026` se consideran vigentes; los de `2024` y de `ANTIGUAS` (con fechas 2019-2023) se consideran antiguos o en revisión. Ningún fichero de `LAMINAS` o de `BIG BAGS` es editable (ver §4).

### 2.1 Láminas ARESA — carpeta 2024 (28 PDF, VISTO)

| Marca/submarca | Producto | Kg | Ruta | Formatos | Fecha | Vigente/antigua | ¿Editable? |
|---|---|---|---|---|---|---|---|
| Superfosfato 0-18-0 | Superfosfato | 40 | [L]/2024 | PDF (v3) | 2022-01-31 (220131) | Antigua (deducido) | No (sólo PDF) |
| Fertimón 8-24-16 | 8-24-16 | 40 | [L]/2024 | PDF (v6) | 2023-12-05 (231205) | Antigua/revisada (deducido) | No |
| Agro Forestland | Forestland 25 kg | 25 | [L]/2024 | PDF (v4 comb) | 2022-02-02 (220202) | Antigua (deducido) | No |
| Agroland Garden | Garden 5-10 kg (P2 R) | 5-10 | [L]/2024 | PDF | 2023-12-01 (231201) | Mismo fichero que S. 5 KG/2025: DUPLICADO | No |
| Agroland genérico | Genérico 25 kg | 25 | [L]/2024 | PDF (v9) | 2023-11-28 (231128) | Revisada 2023; también en 2025 | No |
| Agroland genérico | Genérico 40 kg blanco | 40 | [L]/2024 | PDF (v9) | 2023-11-28 (231128) | Revisada 2023; también en 2025 | No |
| Agroland Protech | Protech 40 kg | 40 | [L]/2024 | PDF (v2) | 2022-08-10 (220810) | Antigua (deducido) | No |
| Agroland | Agroland v2 (kg no consta) | no consta | [L]/2024 | PDF | 2020-07-03 (200703) | Antigua (deducido) | No |
| Agroveg | Agroveg 25 kg | 25 | [L]/2024 | PDF (v3) | 2021-12-17 (211217) | Antigua; copias en [AN] | No |
| Calcimer | Calcimer 25 kg | 25 | [L]/2024 | PDF (v2) | 2022-08-02 (220802) | Antigua/intermedia; copia en [LC]/S. 25 KG/2025 | No |
| Durafert | Durafert 25 kg | 25 | [L]/2024 | PDF (v1) | 2021-12-09 (211209) | Antigua | No |
| Entec | Entec 40 kg | 40 | [L]/2024 | PDF (v2) | 2022-08-13 (220813) | Antigua/intermedia | No |
| Fertiazul | Fertiazul 5 kg (P2 R) | 5 | [L]/2024 | PDF | 2023-05-05 (230505) | Antigua/intermedia; ver también [LC] 20 kg 2025 | No |
| Fertiland Eco | Fertiland Eco 40 kg | 40 | [L]/2024 | PDF (v2) | 2022-08-10 (220810) | Antigua/intermedia | No |
| Fertiland Patata | Patata 25 kg | 25 | [L]/2024 | PDF (v2) | 2023-01-04 (230104) | Intermedia; también en 2025 | No |
| Fertiland Patata | Patata 40 kg | 40 | [L]/2024 | PDF (v2) | 2020-07-03 (200703) | Antigua por nombre; aparece también en 2025 (revisar) | No |
| Fertiland Pradera | Pradera (kg no consta) | no consta | [L]/2024 | PDF (v2) | 2020-07-03 (200703) | Antigua (deducido) | No |
| Fertiland Viña | Viña 25 kg | 25 | [L]/2024 | PDF (v2) | 2021-12-13 (211213) | Antigua; también en 2025 | No |
| Fertimax genérico | Genérico 40 kg | 40 | [L]/2024 | PDF (v2) | 2021-12-20 (211220) | Antigua | No |
| Fertimón | Abono CE | no consta | [L]/2024 | PDF (v4) | 2019-12-17 (191217) | Antigua | No |
| GSV | GSV 25 kg | 25 | [L]/2024 | PDF (v1) | 2022-01-11 (220111) | Antigua/intermedia; también en 2025 | No |
| GSV Agro Abono | GSV 40 kg | 40 | [L]/2024 | PDF (v5) | 2023-12-01 (231201) | Revisada 2023 | No |
| i+FERT | i+FERT 25 kg | 25 | [L]/2024 | PDF (v2) | 2022-01-20 (220120) | Intermedia | No |
| i+FERT | i+FERT v2 (kg no consta) | no consta | [L]/2024 | PDF | 2020-07-03 (200703) | Antigua | No |
| Fertimax NAC 27 | Fertimax NAC 27 40 kg | 40 | [L]/2024 | PDF (v3) | 2021-12-17 (211217) | Antigua | No |
| Fertimón NAC 27 | Fertimón NAC 27 40 kg | 40 | [L]/2024 | PDF (v3) | 2022-02-01 (220201) | Intermedia | No |
| Fertimax Triple 15 | Triple 15 40 kg | 40 | [L]/2024 | PDF (v2) | 2022-01-07 (220107) | Intermedia | No |
| Fertimón Triple 15 | Triple 15 40 kg | 40 | [L]/2024 | PDF (v6) | 2023-12-05 (231205) | Revisada 2023 | No |

### 2.2 Láminas ARESA — ANTIGUAS (VISTO por subcarpeta; DEDUCIDO antiguas)

| Subcarpeta | Nº aprox. | Contenido (productos y versiones) | Fecha (deducida) | Estado (deducido) |
|---|---|---|---|---|
| 2021-12-23 | ≈ 22 PDF (61,7 MB) | Fertimón 8-24-16 v1, Agroland 25 kg v2 (varias copias), Agroland v2, Agroveg v3, Durafert 25 kg v1, Fertiland Patata/Pradera/Viña, Fertimax Genérico y NAC 27 (v2/v3), Fertimón NAC 27, Fertimón Superfosfato, Fertiland 25 kg, GSV v2, i+FERT v2, Triple 15 Fertimax y Fertimón v1 | 2020-2021 | Antigua |
| Láminas 300823 | ≈ 27 PDF (71,1 MB) | Casi los mismos productos que 2024 (Superfosfato 40 kg, Forestland 25, Agroland genérico 25, Protech 40, Agroveg 25, Calcimer 25, Durafert 25, Entec 40, Fertiazul 5 kg, Fertiland Eco/Patata/Pradera/Viña, Fertimax genérico y NAC 27, Fertimón abono CE, GSV 25, i+FERT, Triple 15) | Nombre «300823» = 2023-08-30 (deducido) | Antigua; base de la revisión |
| Láminas 300823_revisadas | ≈ 24 PDF + subcarpeta REVISADAS (8 ficheros, 12,7 MB) | Mismas láminas de 300823, en versión revisada (sin sufijo de fecha). REVISADAS: Fertimón 8-24-16 v1 MODIFICADA 506-2013, Agroland genérico 25 kg v3, Agroland v2 MODIFICADA 506-2013 (x2), GSV v3 MODIFICADA, PJ055232 Fertimon Superfosfato pv2 modificado, Triple 15 Fertimón v1 MODIFICADA 506-2013, y un .docx «Dosis y método de aplicación» | 2023 (deducido) | Revisión en curso; posible duplicado de 300823 |
| Láminas revisadas a 02112023 | 4 PDF (8,8 MB) | Agroland Garden P1 (2328838_P1), Fertimón 8-24-16 v4, Fertimón Triple 15 v4, GSV Agro Abono v4 | 2023-11-02 (deducido) | Revisada 2023 |
| Láminas revisadas a 20102023 | 5 PDF (8,7 MB) | Agroland 25 kg v1, Agroland 40 kg 2023 v2, Fertimón 8-24-16 v3, Fertimón Triple 15 v3, GSV Agro Abono v3 | 2023-10-20 (deducido) | Revisada 2023 |
| Láminas revisadas a 26102023 | 5 PDF (8,7 MB) | Versiones «REVISADA 25102023» y «MODIFICAR 25102023» de Agroland 25 kg v1, Agroland 40 kg 2023 v2, Fertimón 8-24-16 v3, Fertimón Triple 15 v3, GSV Agro Abono v3 | 2023-10-25/26 (deducido) | Revisada 2023; pendiente de cambios (sufijo MODIFICAR) |
| Láminas revisadas V5 | 2 PDF (3,6 MB) | Fertimón 8-24-16 v5, Fertimón Triple 15 v5 | no consta | Versión más alta visible de estos dos productos (deducido) |
| Sueltos en la raíz de ANTIGUAS | ≈ 27 ficheros (≈ 295 MB) | Agroland 25 kg v7, v8 REVISADA, v9, 880x700 v2; Agroland 40 kg 1030x700 2023 v6, v8 REVISADA, v9; Agroland 40 kg v1; Agroland Garden 5 kg MODIFICACIONES (jpg); Agroland v2; Agroveg v3; Fertiazul SEGUEMENTO (ver §4); Fertimax genérico v2; Fertimax NAC27 v3; Fertimón 8-24-16 v6; Fertimón NAC 27 v3; Fertimón Superfosfato v2 (x2); Fertimón Triple 15 v6; GSV Agro Abono v5; PJ055232 Fertimon Super Fosfato pv1; Triple 15 Fertimax v2 (220107); 2328838_P2_R.pdf (copia de Garden 5 kg); 20230822_134052.jpg | 2019-2023 | Antigua; contiene las versiones más altas (v6-v9) |

### 2.3 Láminas ARESA — formatos 25, 40 y 5 kg de 2025 (VISTO)

| Marca/submarca | Producto | Kg | Ruta | Formatos | Fecha | Vigente/antigua | ¿Editable? |
|---|---|---|---|---|---|---|---|
| Superfosfato 0-18-0 | Superfosfato | 25 | [L]/S. 25 KG/2025 | PDF (v4) | no consta | Vigente (deducido) | No |
| Agroland Garden | Garden 25 kg (2024) | 25 | [L]/S. 25 KG/2025 | PDF | 2024 (nombre) | Vigente (deducido) | No |
| Agroland genérico | Genérico 25 kg | 25 | [L]/S. 25 KG/2025 | PDF (v9) | 2023-11-28 | Vigente (deducido) | No |
| Expertise | Expertise 25 kg 880x700 | 25 | [L]/S. 25 KG/2025 | PDF (v1) | no consta | Vigente (deducido) | No |
| Fertiland Patata | Patata 25 kg | 25 | [L]/S. 25 KG/2025 | PDF (v2) | 2023-01-04 | Vigente (deducido) | No |
| Fertiland Pradera | Pradera 25 kg | 25 | [L]/S. 25 KG/2025 | PDF (v2) | no consta | Vigente (deducido) | No |
| Fertiland Viña | Viña 25 kg | 25 | [L]/S. 25 KG/2025 | PDF (v2) | 2021-12-13 | Vigente por carpeta (revisar fecha) | No |
| Fertimón | Genérico 25 kg | 25 | [L]/S. 25 KG/2025 | PDF (v4) | no consta | Vigente (deducido) | No |
| Fertimón NAC | NAC 25K | 25 | [L]/S. 25 KG/2025 | PDF (v2) | no consta | Vigente (deducido) | No |
| Fertimón Triple 15 | Triple 15 25 kg | 25 | [L]/S. 25 KG/2025 | PDF (v2) | no consta | Vigente (deducido) | No |
| i+FERT | Opaca 25 kg | 25 | [L]/S. 25 KG/2025 | PDF (v2, 200703) | 2020-07-03 | Vigente por carpeta (nombre antiguo) | No |
| Agroland genérico | Genérico 40 kg blanco | 40 | [L]/S. 40 KG/2025 | PDF (v9) | 2023-11-28 | Vigente (deducido) | No |
| Expertise | Expertise 40 kg opaco | 40 | [L]/S. 40 KG/2025 | PDF | no consta | Vigente (deducido) | No |
| Fertiland | Patata 40 kg | 40 | [L]/S. 40 KG/2025 | PDF (v2, 200703) | 2020-07-03 | Vigente por carpeta (nombre antiguo) | No |
| Fertimón NAC 27 | NAC 27 40 kg | 40 | [L]/S. 40 KG/2025 | PDF (v5) | no consta | Vigente (deducido) | No |
| Agroland Garden | Garden 5-10 kg (P2 R) | 5-10 | [L]/S. 5 KG/2025 | PDF | 2023-12-01 | Vigente (deducido); DUPLICADO | No |

### 2.4 Láminas ARESA — CLIENTES (VISTO: no hay subcarpetas por cliente)

La carpeta `CLIENTES` sólo tiene subcarpetas por formato (S. 20 KG, S. 25 KG, S. 5 KG). No hay carpetas por cliente. El único nombre que podría ser cliente es «AVIRECRÍA PT», que aparece en dos ficheros de 5 kg (DEDUCIDO: cliente o imprenta; confirmar).

| Marca/submarca | Producto | Kg | Ruta | Formatos | Fecha | Vigente/antigua | ¿Editable? |
|---|---|---|---|---|---|---|---|
| Fertiazul | Fertiazul 20 kg P2 R | 20 | [LC]/S. 20 KG | PDF (1) | 2025-04-01 (250401) | Vigente (deducido) | No |
| Calcimer | Calcimer 25 kg v2 | 25 | [LC]/S. 25 KG/2025 | PDF | 2022-08-02 | Vigente por carpeta | No |
| Entec | Entec 25 kg 880x700 v1 | 25 | [LC]/S. 25 KG/2025 | PDF | no consta | Vigente por carpeta | No |
| GSV | GSV 25 kg v1 | 25 | [LC]/S. 25 KG/2025 | PDF | 2022-01-11 | Vigente por carpeta | No |
| Fertiadubo | Fertiadubo 5 kg, «AVIRECRÍA PT» (379 MB) | 5 | [LC]/S. 5 KG/2025 | PDF (1) | no consta | Vigente por carpeta | No |
| Fertiazul | Fertiazul 5 kg, «AVIRECRÍA PT» (239 MB) | 5 | [LC]/S. 5 KG/2025 | PDF (1) | no consta | Vigente por carpeta | No |

Láminas por cliente (CLIENTES): 1 (S. 20 KG) + 3 (S. 25 KG) + 2 (S. 5 KG) = 6 ficheros en total. No se puede contar «por cliente».

### 2.5 Big bags — `BIG BAGS/DISEÑOS` (VISTO)

Formato: 67 x 67 x 142 cm; los nombres indican +45 cm (2024) o +37 cm (2026) y código de ficha. Todos PDF.

| Marca/submarca | Producto | Kg | Ruta | Formatos | Fecha | Vigente/antigua | ¿Editable? |
|---|---|---|---|---|---|---|---|
| Agroland | Big bag (boc1 Ficha) | no aplica | [BB]/2024 | PDF | 2024 (carpeta) | Antigua (deducido) | No |
| Fertimón | Big bag (boc1 Ficha) | no aplica | [BB]/2024 | PDF | 2024 | Antigua | No |
| Fertimón NAC27 | Big bag (boc2 Ficha, IJ2257) | no aplica | [BB]/2024 | PDF | 2024 | Antigua | No |
| GSV | Big bag (boc2 IJ2261) | no aplica | [BB]/2024 | PDF | 2024 | Antigua | No |
| Protech | Big bag (boc1 Ficha) | no aplica | [BB]/2024 | PDF | 2024 | Antigua | No |
| Agroland | Big bag M38032258 V1 | no aplica | [BB]/2026 | PDF | 2026 (carpeta) | Vigente (deducido) | No |
| Expertise | Big bag M38032260 V3 | no aplica | [BB]/2026 | PDF | 2026 | Vigente (deducido) | No |
| Fertiland | Big bag M38032259 V2 | no aplica | [BB]/2026 | PDF | 2026 | Vigente (deducido) | No |
| Fertimón NAC27 | Big bag M38032257 V1 | no aplica | [BB]/2026 | PDF | 2026 | Vigente (deducido) | No |
| Fertimón NPK | Big bag M38032988 V2 | no aplica | [BB]/2026 | PDF | 2026 | Vigente (deducido) | No |
| Protech | Big bag M38032456 V3 | no aplica | [BB]/2026 | PDF | 2026 | Vigente (deducido) | No |

### 2.6 Sacos antiguos y de otras carpetas (VISTO; no están en LAMINAS)

| Marca/submarca | Producto | Kg | Ruta | Formatos | Fecha | Vigente/antigua | ¿Editable? |
|---|---|---|---|---|---|---|---|
| Fertimax | Saco blanco 2009 | no consta | [LS]/sacos antiguos | **.fh10 (FreeHand)** | 2009 (nombre) | Antigua | **Sí (.fh10)** |
| Fertimax | Saco rojo 2009 | no consta | [LS]/sacos antiguos | **.fh10 (FreeHand)** | 2009 | Antigua | **Sí (.fh10)** |
| Fertimax | Fertimax 2009; FERTIMAX nac 27; L M 304 (x2); L M 311; 0407388 FERTIMAX 8-24-16 PB3 | no consta | [LS]/sacos antiguos | PDF | 2009 (nombre) | Antigua | No |
| Verdenatur | Genérico 40 kg | 40 | [LS]/sacos antiguos y /diseños verdenatur | PDF | no consta | Antigua | No |
| Verdenatur | Genérico 25 kg | 25 | [LS]/sacos antiguos | PDF | no consta | Antigua | No |
| Equinova | Equinova 25 kg definitivo | 25 | [LS]/diseños verdenatur | PDF | no consta | Antigua | No |
| Verdenatur | Abono Verdenatur; Silonatur; equinova; pantone | no consta | [LS]/diseños verdenatur | PDF | no consta | Antigua | No |
| Puro Cereal | Puro Cereal 1 | no consta | [LS]/sacos antiguos | PDF | no consta | Antigua | No |
| Fertimón | 15-15-15 delante; NAC 2265400293a v3 | no consta | [LS]/fertimón | PDF | no consta | Antigua (deducido) | No |
| Agroland / Fertiland | Saco Cal; Maíz def; Patata def; Pradera def; Viña def | no consta | [LS]/diseños agroland-fertiland | PDF | no consta | Antigua (deducido) | No (pantones .doc) |
| Forestland | Saco Forestland Final; Saco ForestLand | no consta | [B]/Diseños Envases & Marcas | PDF | no consta | Sin dato | No |
| Protech | Saco Protech Final; Saco Protech | no consta | [B]/Diseños Envases & Marcas | PDF | no consta | Sin dato | No |
| Protech | Protech 40 kg | 40 | [B]/Diseño Stephan | PDF | no consta | Sin dato | No |
| Expertise | Expertise; Expertise_02; Foto Saco Expertise; BigBag Expertise | no consta | [B]/Diseño Stephan | PDF, PNG | no consta | Sin dato | No |
| Fertiland / Expertise | Plantilla Diseño Marca Expertise NPK | no consta | [B]/Diseños Envases & Marcas | **.pub** | no consta | Sin dato | **Sí (.pub)** |
| Nutriland | Nutriland N 32 Aresa | 32 (por nombre) | [B]/Diseño Fichas Producto Inkscape y [B]/Gama Fertilizantes/Nutriland - Abonos Líquidos/Fichas Producto NUTRILAND | PDF, PNG, SVG | no consta | Sin dato | SVG: sí (Inkscape); PDF: no consta |

## 3. Tabla de otros recursos gráficos (logos, catálogos, presentaciones, fotos, etiquetas)

| Marca | Tipo | Ruta | Formatos | Fecha | Observación |
|---|---|---|---|---|---|
| ARESA / Agroland | Catálogo de marcas de sacos ARESA-CECO | `7. Marketing/CATALOGOS` | PDF (2,4 MB), PNG (1,6 MB) | no consta | Mismo contenido en dos formatos |
| ENSILAJE | Resumen (imagen) | `7. Marketing/CATALOGOS` | PNG (1,6 MB) | no consta | No es de sacos |
| ARESA | Logos (4 variantes: 50 aniversario, viejo, nuevo, nuevo B&W y negativos) | `7. Marketing/LOGOs/ARESA` | PNG/JPG (subcarpetas, no recorridas) | no consta | Varias versiones; cuál es vigente no consta |
| Logos Aresa | Logo granova, logotipo, Logos_Vectorial | `LOGOs/logos y sacos antiguos/logos` | EPS, PDF, DOC, JPG | no consta | Único vectorial visible: EPS y PDF |
| Equinova | Emblema y logo | `LOGOs/` (raíz) | BMP (12,1 MB y 5,5 MB), JPG | no consta | BMP pesados: duplicados en JPG |
| UMAN, O Santo, FERTICOMPLET | Logos | `LOGOs/` (raíz) | no recorridas | no consta | Carpetas sin revisar |
| Grupo Aresa | Logo | `LOGOs/LogoGrupoAresa.pdf` | PDF | no consta | |
| CECOAGRO | Logo | `LOGOs/CECOAGRO_Logo.zip` | ZIP (no abierto) | no consta | Contenido no revisado |
| Fertimón | Logos | `LOGOs/logos y sacos antiguos/fertimón` | JPG | no consta | |
| Grupo ARESA / Aresa | Presentación corporativa | `7. Marketing/PRESENTACIÓN ARESA/Dossier_Aresa_ING.pdf` (7,3 MB) | PDF | no consta | Mismo nombre que un .pptx de `4. Fichas Producto/Marketing` (5,1 MB) |
| Grupo ARESA | Dossier | `4. Fichas Producto/Marketing/Dossier_GrupoAresa_02.pdf` (12,0 MB) | PDF | no consta | |
| Dossier_Aresa_ING | Dossier en inglés | `4. Fichas Producto/Marketing/Dossier_Aresa_ING.pptx` (5,1 MB) | PPTX | no consta | |
| Grupo ARESA | Presentación 2019 | `[B]` raíz | PDF, PPTX (y versión English) | 2019 (nombre) | Antigua |
| Presentación ARESA | Macasa 2020; Smart Farming 2019 | `[B]` raíz | PPTX, PDF | 2019-2020 (nombre) | Antiguas; Smart Farming PPTX de 16 MB |
| Fertilizantes Líquidos | Agralia & Aresa | `[B]` raíz | PPT (27 MB) | no consta | Formato antiguo (.ppt) |
| Reunión Comercial Fertilizantes | Febrero 2019 | `[B]` raíz | PDF, PPTX | 2019-02 (nombre) | Antigua |
| Análisis competencia fertilizantes | Estudio | `[B]` raíz | PDF, PPTX | no consta | |
| Folleto & Figuras 8.14.8 Protech | Folleto | `[B]` raíz | PPTX | no consta | |
| Anuncio Agroland PROTECH 345x250 | Anuncio | `[B]` raíz | PDF | no consta | |
| Anuncio La Voz | Anuncio | `[B]` raíz | DOCX | no consta | |
| Propuesta etiqueta Superfosfato FERTIMON | Propuesta | `[B]` raíz | DOCX y PDF (x2 versiones) | no consta | Dos propuestas con nombres casi iguales |
| Dossier Marcas Fertilizantes ARESA | Dossier de marcas | `[B]/Diseños Envases & Marcas` | PDF, PUB | no consta | Editable: .pub |
| Botes (etiquetas de botes) | Etiquetas | `[B]` raíz: 9 pares PDF+PUB (Botes 21.8.6, Agrobarcenilla, Almacenes Iberia, ECOVEG, NAC 27M, oLEOKELSA, Varios 2021 v1/v2/base) | PDF + PUB | 2019-2021 (nombre) | Antiguas; PUB editables |
| Etiquetas Botes | Etiquetas | `[B]` raíz: 11 pares (Atanasio, Campaña 2019_2020, Dic 2019, ForestLAND 2020, GRANDES Campaña, GRANDES Reunión, GSV 2020, JMS 2019, n46 y super 18, Nov 2019, calcimax) | PDF + PUB | 2019-2020 (nombre) | Antiguas; PUB editables |
| Etiquetas Botes | Etiquetas 2022-2024 | `[C]/ETIQUETAS BOTES MUESTRA/2022` (6 PUB) y `/2024` (5 PUB) | PUB | 2022-2024 (nombre) | Editables (.pub) |
| Etiqueta / Milho / Malla | Etiquetas especiales | `[B]/Diseño Etiquetas` | PDF, PUB, DOCX | no consta | Editables (.pub, .docx) |
| Pegatinas, perfil camión | Pegatinas y gráfica de camión | `[B]/Diseños Envases & Marcas` | PDF | no consta | |
| Diseño PROTeNe / ProteNe Prueba / Plantillas | Diseños de prueba y plantillas | `[B]/Diseño Fichas Producto Inkscape` | PDF, PUB, SVG, PNG | no consta | Plantillas SVG editables |
| Fichas de producto (Agroliq NPK, Nitraliq, Nitrames, NPK 32-0-0) | Fichas técnicas | `[B]/Gama Fertilizantes/Nutriland - Abonos Líquidos/Fichas Producto NUTRILAND` (8 ficheros) | PDF, PNG | no consta | Fichas, no láminas |
| Fichas de producto (Ferti-Mon, PNG, AI, EPS) | Ficheros de diseño | `[B]/Diseño Fichas Producto Inkscape` (1925.ai, 1930.ai, 1990.eps, 275601-…, 438935-…) | AI, EPS, JPG | no consta | Editables (.ai, .eps); uso no identificado |
| Logos Stephan | Logos y gráficos Expertise, Protech, Forestland | `[B]/Diseño Stephan` | PNG, PDF | no consta | Logo_Protech 01-05 |
| Tipografías | Fuentes: Montserrat UltraLight, PilcrowSoft (x2), X-SCALE | `[B]/Diseño Stephan/Tipografias` | OTF, TTF | no consta | Revisar licencias antes de reutilizar |
| Fotos producto | Fotos WhatsApp de productos | `[C]/FOTOS PRODUCTO` (4 subcarpetas) | JPG (28) | 2025 (nombres IMG-2025...) | Sin nombre de producto en el fichero |
| Fotos dron | Fotos aéreas y panorámicas | `[B]/Drone ARESA` | JPG (8 DJI, 2 fotos ARESA) | no consta | 45 MB |
| Fotos IMG 2019 | Fotos de 2019 | `[B]` raíz | JPG (10) | 2019 (nombre) | Sin identificar |
| TEAMS | Imágenes «FOTO TEAMS», «Opc A», «Opc B», 0-3 | `7. Marketing/TEAMS` | PNG (7) | no consta | Uso deducido: fondos o imágenes para Teams |
| Premio ARESA | Calificación de proyectos | `[B]/Premio ARESA` | PDF, XLSX | no consta | No gráfico (documento de evaluación) |
| Nutriland | Gama de abonos líquidos (Tarifas y fichas) | `[B]/Gama Fertilizantes` | PDF, PNG, SVG, XLSX | no consta | |
| Tabla productos BIOCELAMA | Tabla de productos | `[B]/Gama Fertilizantes` | PDF, XLSX | no consta | No gráfico |
| Diagrama Blending | Diagrama | `[B]` raíz | PNG | no consta | |

## 4. Duplicados evidentes, carpetas confusas y huecos

### 4.1 Duplicados (VISTO: mismo nombre o mismo tamaño exacto en bytes)

- **Agroland Garden 5-10 kg «2328838 P2 R 231201»** (3.716.309 bytes): aparece en `[L]/2024`, `[L]/S. 5 KG/2025`, `[AN]/Láminas 300823`, y como `2328838_P2_R.pdf` suelto en `[AN]`. Cuatro copias.
- **Agroveg 25 kg v3** (1.461.062 bytes): en `[L]/2024`, en `[AN]` (suelto) y en `[AN]/2021-12-23`, con nombres distintos.
- **Agroland genérico 25 kg v9** (1.880.296 bytes): en `[L]/2024`, `[L]/S. 25 KG/2025`, `[AN]` (suelto).
- **Agroland genérico 40 kg v9** (2.106.044 bytes): en `[L]/2024`, `[L]/S. 40 KG/2025`, `[AN]` (como «AGROLAND 40 KG 1030X700 2023 v9»).
- **Fertimón 8-24-16 v6** (1.825.543 bytes): en `[L]/2024` y en `[AN]` (suelto).
- **Fertimón Triple 15 v6** (1.786.485 bytes): en `[L]/2024` y en `[AN]` (suelto).
- **GSV 40 kg v5** (1.599.075 bytes): en `[L]/2024` y en `[AN]` (suelto).
- **Fertimax genérico 40 kg v2** (1.403.860 bytes) y **Fertimax NAC 27 40 kg v3** (1.501.482 bytes): duplicados de nombre distinto en `[AN]` y `[AN]/2021-12-23`.
- **Calcimer 25 kg v2** (5.758.354 bytes): en `[L]/2024` y en `[LC]/S. 25 KG/2025`.
- **GSV 25 kg v1** (1.611.890 bytes): en `[L]/2024` y en `[LC]/S. 25 KG/2025`.
- **Láminas 300823 vs Láminas 300823_revisadas**: el mismo conjunto de ficheros con idénticos tamaños (p. ej. Superfosfato 40 kg, 1.578.389 bytes). `_revisadas` es una copia casi completa.
- **Catálogo de marcas de sacos**: PDF y PNG del mismo contenido.
- **Logo Equinova y Emblema Equinova**: BMP y JPG del mismo gráfico.
- **Dossier_Aresa_ING**: PDF en `PRESENTACIÓN ARESA` (7,3 MB) y PPTX en `4. Fichas Producto/Marketing` (5,1 MB). Mismo nombre, formatos distintos.
- **Premio ARESA**: dos PDF de calificación con nombres casi iguales (uno incluye «DESKTOP-GRA1HRL», nombre de un equipo).
- **Propuesta etiqueta Superfosfato FERTIMON**: dos versiones en DOCX y PDF, con nombres casi iguales.

### 4.2 Fichero de tamaño atípico

- `ANTIGUAS/Fertiazul_SEGUEMENTO (2).pdf`: 252.783.663 bytes (252,8 MB). Un PDF de lámina pesa 1-6 MB. Por el nombre parece un documento de seguimiento (DEDUCIDO; «SEGUEMENTO» es un error ortográfico). Revisar antes de usarlo como arte final.
- `CLIENTES/S. 5 KG/2025`: dos PDF de 379 MB y 239 MB. Probablemente incrustan imágenes en alta resolución (DEDUCIDO).

### 4.3 Carpetas confusas

- **Tres carpetas «Diseño/Diseños»**: `7. Marketing/Diseño Envases`, `[B]/Diseños Envases & Marcas` y `[B]/Diseño Fichas Producto Inkscape`. Sus nombres no indican qué contienen.
- **Dos carpetas «Fichas Producto»**: `4. Fichas Producto` (raíz, 1,5 GB) y `[B]/Gama Fertilizantes/…/Fichas Producto NUTRILAND`. Los nombres no distinguen si son láminas, fichas técnicas o tarifas.
- **«Logos» en varios niveles**: `LOGOs/logos y sacos antiguos/logos` y `…/Logos (1)` y `…/logos grupo`. Tres carpetas de logos dentro de «sacos antiguos».
- **`LOGOs/logos y sacos antiguos`** mezcla logos y sacos. Los sacos están en `sacos antiguos`, `diseños agroland-fertiland`, `diseños verdenatur`, `fertimón` y en las carpetas no recorridas.
- **`ANTIGUAS` dentro de `LAMINAS/ARESA`** contiene casi las mismas láminas que `2024` y `S. 25/40/5 KG/2025`. No está claro cuál es la versión vigente.
- **Mismo nombre, otro contenido**: `Láminas 300823` (71 MB, original) y `Láminas 300823_revisadas` (76 MB).
- **Carpeta `TEAMS`** dentro de `Marketing`: sólo contiene PNG (`0.png` a `3.png`, `Opc A`, `Opc B`, `FOTO TEAMS`). No se sabe si es material de Microsoft Teams o un proyecto.
- **Accesos directos**: `LOGOs/Logos marcas PET.lnk` es un acceso directo de Windows. No funcionará fuera del equipo original.
- **Ficheros de prueba**: `Proba pdf.pdf`, `Proba Plantilla.svg`, `Plantilla.svg` en `[B]/Diseño Fichas Producto Inkscape`.

### 4.4 Huecos

- **No hay ficheros editables de los sacos de `LAMINAS` ni de `BIG BAGS`** (VISTO: todo es PDF). Los originales de trabajo (.ai, .indd, .pub) no están en la ruta. Para renovar sacos hará falta localizar los originales, o rehacerlos a partir de los PDF (solo si son vectoriales; no verificado).
- **Editables de sacos sí existen, pero fuera de LAMINAS**: `Fertimax SACO Blanco/Rojo 2009.fh10` (FreeHand, 2009) en `[LS]/sacos antiguos`, `Plantilla Diseño Marca Expertise NPK.pub` en `[B]/Diseños Envases & Marcas`, y las plantillas SVG de `[B]/Diseño Fichas Producto Inkscape`.
- **No hay carpeta por cliente en `CLIENTES`**, así que no se puede contar cuántas láminas tiene cada cliente.
- **No hay manual de identidad corporativa**: no aparece ningún fichero con esa denominación. Sí hay logos en varias versiones (ARESA: 4 variantes; Equinova: BMP y JPG), 4 tipografías en `Diseño Stephan` (con licencia no verificada) y carteles/anuncios sueltos.
- **Sin fechas de modificación** (limitación del listado): todas las fechas son deducidas del nombre.
- **Kg sin dato** en muchos sacos antiguos y de `[B]`: el peso no aparece en el nombre.
- **Gráficos sin revisar**: las carpetas no recorridas de §0 (sobre todo `LOGOs/logos y sacos antiguos` y `LOGOs/ARESA`) pueden contener sacos o logos adicionales.
- **Carpetas de primer nivel no recorridas** que, por el nombre, podrían contener material gráfico: `10. Gestión de Envases` (envases, 15 MB), `3. Organización ARESA-CECO` (identidad corporativa, 259 MB), `2. Ventas ARESA` (material comercial, 2,3 GB), `11. Calidad ARESA` (etiquetado y fichas, 2,4 GB), `5. Mantenimiento ARESA` (señalética, 47 MB), `9. PRL` (pictogramas de seguridad, 138 MB), `6. Proyectos ARESA` (diseños de proyectos, 1,1 GB), `8. Información` (380 MB, sin deducción clara). No se han recorrido, según el encargo.

## 5. Siguientes pasos sugeridos (no ejecutados)

1. Reintentar las subcarpetas de LOGOs no listadas (§0) cuando Graph deje de limitar.
2. Localizar los originales editables de los sacos de 2025 y 2026 (buscar .ai, .indd o .pub en carpetas de otras áreas).
3. Confirmar con Marketing qué versión es vigente entre `2024`, `ANTIGUAS/Láminas revisadas V5` y `S. 25/40/5 KG/2025`.
4. Confirmar si «AVIRECRÍA PT» es cliente o imprenta.
5. Revisar el PDF de 252,8 MB (`ANTIGUAS/Fertiazul_SEGUEMENTO (2).pdf`) antes de usarlo.
