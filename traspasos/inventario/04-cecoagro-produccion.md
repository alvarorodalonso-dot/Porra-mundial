# Inventario de recursos gráficos: bibliotecas CECOAGRO y PRODUCCION

Inventario de solo lectura en SharePoint (Aresa / Cecoagro). No se ha abierto el contenido de ningún fichero, solo nombre, formato, tamaño y ruta. No se ha escrito, movido ni borrado nada en SharePoint.

**Leyenda:** «visto» = obtenido del listado de Graph. «deducido» = inferido del nombre o del contexto, no comprobado.

**Limitación técnica:** Microsoft Graph devolvió errores 429 (límite de peticiones) durante la sesión. Varias subcarpetas se leyeron tras reintentos. Algunas no se han podido listar (se indica en cada sección). Las lecturas repetidas de la misma carpeta dieron tamaños ligeramente distintos (ver sección de huecos).

---

## 1. Biblioteca CECOAGRO

Raíz: `file:///b!FYnMvBLKIkCR9hg4kpi_YGavTnIApkJIkf7pQRk0UpsIXPfhX_8TSY06fUPAigx9/`
Tamaño total de primer nivel: ~420 MB (visto; suma de hijos).

### 1.1 Árbol (visto)

| Nivel 1 | Tamaño | ¿Gráfica? | Nivel 2 visto | Observación |
|---|---|---|---|---|
| CERTIFICACIÓN | 7,6 MB | No por nombre | No listada | Podría contener certificados con logotipos (deducido) |
| DATOS HINTD | 177,1 MB | No | Sí: 8 ficheros .xls/.xlsx (datos de ventas, compras, cartera, costes, pedidos) | Sin material gráfico |
| Fabricacion | 28,2 MB | No | Sí: 2 ficheros (diagramas de proceso, 2023) | Sin material gráfico |
| MANTTO | 7,4 MB | No | No listada | Mantenimiento (deducido) |
| OBJETIVOS | 0,5 MB | No | No listada | |
| PROXECTOS | 133,9 MB | Posible (deducido) | Sí: 4 carpetas por proyecto | Ver 1.2 |
| Subvenciones | 64,9 MB | Posible (deducido) | No listada | Podría contener logotipos en justificaciones (deducido) |

**Ninguna carpeta de CECOAGRO se llama por su nombre como gráfica** (ni logos, ni marketing, ni diseño, ni envases). Las carpetas con posible material visual no se han recorrido por dentro (ver 1.3).

### 1.2 PROXECTOS (visto, nivel 2)

| Subcarpeta | Tamaño | Observación |
|---|---|---|
| 2007_Proyecto de Ampliación Fábrica de Piensos_mayo2007 | 36,9 MB | Proyecto de obra. Probablemente planos y memoria (deducido). No recorrida. |
| 2008_Proyecto Modernización_2008 | 73,3 MB | Idem (deducido). No recorrida. |
| 2013_SISTEM-GRAN | 4,3 MB | No recorrida. |
| 2021_Fotovoltaica 100 kW | 19,4 MB | No recorrida. Podría tener fotos o planos (deducido). |

### 1.3 Recursos gráficos de CECOAGRO

**No se ha identificado ningún recurso gráfico de marca en la biblioteca CECOAGRO** con lo visto. Los recursos de PROXECTOS, Subvenciones y CERTIFICACIÓN no se han inspeccionado a nivel 3 (no listados por límite de peticiones y por criterio de coste). Si el objetivo incluye planos, fotos de instalaciones o logotipos en subvenciones, hay que hacer una segunda pasada sobre esas carpetas.

---

## 2. Biblioteca PRODUCCION

Raíz: `file:///b!FYnMvBLKIkCR9hg4kpi_YGavTnIApkJIkf7pQRk0UpsdzEyDVs31TYW8gOgiaTUB/`
Tamaño total de primer nivel: ~1,03 GB (visto).

### 2.1 Árbol de primer y segundo nivel (visto)

| Ruta | Tamaño | ¿Gráfica? | Observación |
|---|---|---|---|
| Cecoagro Intranet - Tarifas en PDF/ | 15,5 MB | No | Tarifas (nombre); no recorrida |
| FABRICACION - ALMACEN/ | 1.019 MB | **Sí, en parte** | Ver 2.1.1 |
| etiquetas pure1.xlsx | 22 KB | Sí, datos | Hoja de cálculo de etiquetas (nombre) |
| STOCK SACOS 2020.xlsx | 57 KB | No | Stock de sacos; dato, no gráfico |
| StockSacosInterjutePetfood.xlsx | 18 KB | No | Stock de sacos; dato, no gráfico |

#### 2.1.1 FABRICACION - ALMACEN/ (visto, nivel 2)

| Carpeta | Tamaño | ¿Gráfica? | Observación |
|---|---|---|---|
| ETIQUETAS/ | 440 MB | **Sí** | Ver 2.2 |
| FÓRMULAS/ | 378 MB | No | Fórmulas de fabricación (nombre). No recorrida. Contiene además «FÓRMULAS GENÉRICAS» y «FÓRMULAS PERSONALIZADAS» (ver 2.2.1) |
| UREA ALIMENTACION ANIMAL/ | 88 MB | Parcial | Documentos de urea (manuales de seguridad alimentaria, registros). Carpetas «urea lote…» pueden tener etiquetas de saco (deducido). No recorrida |
| APPCC CECOAGRO/ | 38 MB | No | Plan de seguridad alimentaria (nombre). No recorrida |
| PARTES FABRICA/ | 13 MB | No | Partes de fabricación en .xls. Listada |
| REGISTRO FITOS/ | 11 MB | No | Registros. No recorrida |
| ETIQUETADORA/ | 20 MB | Parcial | Ver 2.1.2 |
| CODIGO BARRAS/ | 20 MB | **Sí** | Ver 2.1.3 |
| PLANTILLAS FABRICACIÓN/ | 3,3 MB | No | Plantillas de registro en .xls/.xlsx (no gráficas). Listada |
| ORDEN- LIMPIEZA-MANTENIMIENTO/ | 5 MB | No | No recorrida |
| NO CONFORMIDADES/ | 1,6 MB | No | No recorrida |
| DEVOLUCIONES PALETS/ | 0,8 MB | No | No recorrida |
| RESIDUOS/ | 0,45 MB | No | No recorrida |
| ETIQUETA BRICOPET ACTIVE.pdf | 90 KB | **Sí** | Fichero suelto: etiqueta de producto en PDF (visto) |

#### 2.1.2 ETIQUETADORA/ (visto, nivel 3 en parte)
- `DEVOLUCIONES PALETS/` (0,27 MB): no gráfica.
- `TEC Seagull 7.1.3/` (9,1 MB): instalador `TEC Seagull 7.1.3.exe`. Software de impresora de etiquetas (deducido). No gráfico.
- `TEC Seagull 7.1.3.zip` (9,0 MB) y `TEC.zip` (1,9 MB): comprimidos del mismo software (deducido).

#### 2.1.3 CODIGO BARRAS/ (visto, nivel 3)
- `PLANTILLAS REV1/` (19,9 MB): **biblioteca principal de plantillas de etiquetas y fichas en Word (ver 2.3).**
- `Generador de etiquetas maquina 40-revR02 - copia.xlsm` (0,35 MB): generador de etiquetas en Excel con macros. Copia (nombre). No gráfico, pero define datos de etiqueta.

---

## 2.2 Biblioteca ETIQUETAS (dentro de FABRICACION - ALMACEN)

Ruta: `PRODUCCION / FABRICACION - ALMACEN / ETIQUETAS` (440 MB, visto)

| Subcarpeta / fichero | Tamaño | Observación |
|---|---|---|
| ETIQUETAS/ (anidada) | 301 MB | Carpeta con el mismo nombre dentro de otra. Su contenido se vio con tamaños distintos según la lectura (ver huecos). Parece una copia de la estructura de nivel superior (deducido) |
| ETIQUETAS ABONO/ | 1,4 MB | **Sí.** Etiquetas de abonos (ver 2.2.2) |
| ETIQUETAS ANTIGUAS/ | 129 MB | **Sí (deducido antiguo).** Listado no obtenido (límite de peticiones) |
| ETIQUETAS BB/ | 0,7 MB | Bigbag: 2 ficheros `VARIOS BIGBAG.xls` y `VARIOS BIGBAG.ACT.xls`. No gráficas (datos) |
| Etiquetas Clarisoft ( Videojet)/ | 7,6 MB | **Sí.** Etiquetas de impresora de inyección Videojet / Clarisoft (ver 2.2.3) |
| LOTE.docx | 25 KB | Documento (nombre). No gráfico |

### 2.2.1 Fórmulas dentro de ETIQUETAS (visto)
Aparecen carpetas `FÓRMULAS GENÉRICAS` (5 MB), `FÓRMULAS PERSONALIZADAS` (75-78 MB), `METIONINA UREA CORRECTORES` (0,2 MB) y un acceso directo `EVA-TOSH - Acceso directo.lnk`. **No son gráficas.** El nombre «ETIQUETAS» de la carpeta contenedora no coincide con su contenido. Esto es una confusión de nombres (ver sección 3).

### 2.2.2 ETIQUETAS ABONO/ (visto, 19 ficheros)
Etiquetas de abonos, mayoritariamente en portugués, de los fabricantes/marcas **Agroland**, **Entec** y **Aresa** (visto en nombres). Formatos: `.docx`, `.doc`, `.pdf`. Ficheros destacados:
- `etiqueta.aresa.doc` y `etiqueta.aresa (2).doc` (156 KB cada uno): **marca Aresa**.
- `170x107mm (1).pdf`: formato de etiqueta definido (visto).
- Fórmulas de abono en nombre: 10-10-10, 12.8.18, 20-10-10, 24-8-7, 5-7-16, 7-7-14, 0-18-0, 7-14-14, NAC 20,5, NAC 27 %.
- Varias versiones de «EtiquetaAgrolandCésped» (12.8.18 y 20.5.10, con y sin «(2)»): duplicados evidentes.
- Fechas: no visibles en el listado. Varias versiones con fechas en el nombre (12.8.18, 20.5.10) = deducido: fecha de la fórmula.

### 2.2.3 Etiquetas Clarisoft (Videojet)/ (visto)
- `logotipos/` (4,2 MB, 25 ficheros, visto): imágenes `.jpg`, `.bmp` y un `.pdf`. Nombres de productos de nutrición animal con sufijo «videojet»: AVIPLUS (A S C, CN, COMPLET, Videojet), CONEJOS NATURA, CONEJOS PROGANDO, EQUIGRAN ALTA ENERGÍA, GALLINAS PONEDORAS, MAÍZ PICÓN RUANOVA, MIX PLUS SEIJO, NATURCOR (corral, mix), PICÓN COREN, PICÓN MIX RUANOVA, POLLITOS INICIACIÓN, POLLOS SUPRA CREC, POLLOS CRECE CEBO MIGAS, y ficheros `conejo.bmp`, `GALLINAS.bmp`, `NATURCOR.bmp`, `pollo.bmp`, `neva imagen.bmp`. Deducido: logotipos o imágenes de producto para el sistema de impresión.
- Unos 50 ficheros de etiqueta en la raíz de la carpeta (visto): pares `.ciff` + `.jpg` por producto (AVI TOTAL XUBE, AVIPLUS CN, AVIPLUS COMPLET, CEBADA GRANO, CEREAL AVES LADISLAO, CONEJOS NATURA, EQUIGRAN, GALLINAS PONEDORAS, MAIZ PICON, MAIZ GRANO, MIX PLUS SEIJO, NATURCOR CORRAL/MIX/POLLOS/PUESTA, PICON AVEMIX, PONEDORAS ZOO RURAL, TRIGO GRANO, etc.). Deducido: `.ciff` es el formato de diseño de la impresora (Videojet), `.jpg` su vista previa. **Recuento aproximado, no exacto.**

### 2.2.4 ETIQUETAS ANTIGUAS/ (no listada)
129 MB. No se pudo leer su contenido por límite de peticiones. Pendiente de revisión.

---

## 2.3 PLANTILLAS REV1 (dentro de CODIGO BARRAS) — **recurso principal de fichas y etiquetas**

Ruta: `PRODUCCION / FABRICACION - ALMACEN / CODIGO BARRAS / PLANTILLAS REV1` (19,9 MB, visto)

| Subcarpeta | Tamaño | Contenido |
|---|---|---|
| pdf/ | 8,5 MB | ~85 PDF de etiquetas o fichas (ver 2.3.2) |
| word/ | 0 B | Vacía en el listado (visto) |
| Plantillas Word sueltas | ~11 MB | ~169 ficheros `.dotx` / `.dot` (ver 2.3.1) |

### 2.3.1 Plantillas Word por producto (visto, recuento manual aproximado ±2)

Plantillas `.dotx` / `.dot` de etiquetas o fichas de producto, una por producto/fórmula. Agrupadas por línea:

- **Aves** (AVIPLUS, AVI TOTAL, AVENA, GALLINAS PONEDORAS, POLLOS, CONEJOS, EQUIGRAN, EQUINOVA, GALLINAS PUESTA/SUPER IBERIA, GALLINAS AVANTIS/JOSMER): ~45.
- **Porcino** (CERDOS CEBO, CRECIMIENTO, GRANO, RITMO NATURA, M.P. CERDOS RYO, CERDAS MADRE, LECHONES STARTER, DESTETE/FINALIZACIÓN PORCO CELTA): ~12.
- **Rumiantes / vacuno / ovino / equino** (TERNEROS, VACAS, NOVILLAS, OVEJAS, CORDEROS, CABALLOS, YEGUADA, RUMIANTES, RENOS, TERNIGRAS, GANADERÍA CAMBA): ~45.
- **Cereales y mezclas** (MAIZ, TRIGO, CEBADA, AVENA, MEZCLA MAÍZ/CEBADA/TRIGO/SOJA, MAÍZ TROCEADO, MAÍZ PICÓN, HARINA SOJA, MEZCLA ... SENRA, ... ALFONSO TORREIRO, ... OSCAR ALCÁNTARA, ... CARNEIRO): ~70.
- **Marcas y clientes en el nombre** (Naturcor, Picón, Senra, Vilaboa, Abalde, Valladares, Riguera, Carneiro, Alfonso Torreiro, Almacenes Iberia, Botica do Xallas, Campoastur, Josmer, Verdenatur, Ramón Vázquez, Benito, Marcelle, Miguel Peña, Lolo, Lavandeira...): transversal. Deducido: son **clientes o distribuidores** a los que se personaliza la etiqueta (deducido, por el patrón «PRODUCTO + NOMBRE»).

Formatos: `.dotx` (plantilla de Word, **editable**; Word no es vectorial). Tamaño típico 20-45 KB. Algunas pesan ~1 MB (NATURCOR CORRAL, NATURCOR MIX, NATURCOR POLLOS, NATURCOR PUESTA, MAIZ TROCEADO PICON NATURCOR): contienen imágenes incrustadas (deducido). Una ~180 KB (VILABOA: POLLOS CREC. CEBO HARINA, TERNEROS CRECIMIENTO GRANO, TRIGO SUMINISTROS VILABOA). Fechas: no visibles en el listado.

### 2.3.2 Carpeta pdf/ (visto, nivel 3, ~85 PDF)

Nombres con patrón `DDMMAA-Fxxxxxxx-PRODUCTO.pdf` (ej. `010318-F234070H040-MEZCLA CUATRO CEREALES CON SOJA.pdf`, `050318-E233004H040-TERNEROS CRECIMIENTO SUPRA.pdf`). Tamaño de 47 KB a 156 KB. Fechas de 01/03/2018 a 12/03/2018 (deducido del patrón DDMMAA, rango de fechas visto en nombres).
- Cada PDF tiene varias versiones del mismo producto (ej. `AVENA GRANO` ×3, `TRIGO GRANO` ×3-4, `MAIZ TROCEADO` ×4, `NATURCOR CORRAL` ×2, `MAIZ GRANO` ×3): duplicados por fecha/versión.
- Tipo deducido: **ficha o etiqueta de producto impresa en PDF, versión por lote de 2018** (deducido: el código `F…` y el sufijo `H040/T035` parecen códigos de fórmula y saco; no comprobado).
- **Antiguo** (deducido): fechas 2018. Ver si las plantillas .dotx son posteriores (no visible).

---

## 2.4 Otras carpetas con posible material gráfico (sin recorrer en profundidad)

- **UREA ALIMENTACION ANIMAL** (88 MB): `urea lote 010318` (4,1 MB), `urea lote 071118` (3,7 MB), `urea lote 080618` (4,1 MB), `urea anteriores` (62,8 MB), `Manuales Antiguos` (5,6 MB), `Documentación Auxiliar` (1,3 MB), `Solicitud alta SAI` (0,3 MB), `MANUAL SEGURIDAD ALIMENTARIA UREA.docx` y `… 06-2018.docx`, registros de salida en `.xlsx`. Las carpetas de lote pueden contener etiquetas o sacos de urea (deducido). **No listadas en nivel 3.**
- **PLANTILLAS FABRICACIÓN** (3,3 MB): `ANTIGUOS/` (1,3 MB) y plantillas de registro `.xls`/`.xlsx`. Son plantillas de **registro**, no de marca. Sin material gráfico, pero el nombre puede inducir a confusión.
- **Tarifas en PDF** (15,5 MB): tarifas de precios. Deducido: no gráfico, puede tener logotipo.

---

## 3. Duplicados evidentes, carpetas confusas y huecos

### 3.1 Duplicados (visto)
- **Estructura anidada `ETIQUETAS/ETIQUETAS/`**: la carpeta `ETIQUETAS` de FABRICACION - ALMACEN (440 MB) contiene otra `ETIQUETAS` (301 MB) que, a su vez, tiene subcarpetas del mismo nombre que las de nivel superior (`ETIQUETAS ABONO`, `ETIQUETAS ANTIGUAS`, `ETIQUETAS BB`, `Etiquetas Clarisoft (Videojet)`, `LOTE.docx`). Tamaños idénticos en varias: `ETIQUETAS BB` 666.112 B en ambas; `Etiquetas Clarisoft` 7.589.095 B en ambas. **Duplicado evidente de estructura entera.**
- `ETIQUETAS ABONO`: 2 entradas con tamaños casi iguales (1.448.651 B y 1.449.124 B). Duplicado.
- `EtiquetaAgrolandCésped` 12.8.18 y 20.5.10: versiones «(2)» duplicadas.
- `etiqueta.aresa.doc` y `etiqueta.aresa (2).doc` (156.160 B cada uno): duplicado.
- `PLANTILLAS REV1`: `PARTE BB ACTUALIZADO.xls` y `PARTE BB ACTUALIZADO-TECRAI5.xls`; `Parte fabrica NOVIEMBRE` con 3 variantes (`-TM5720`, `-TM5720-TM5720`). Duplicados de partes de fabricación.
- `PLANTILLAS REV1` (plantillas .dotx): nombres casi idénticos (`MAIZ PICON`, `MAIZ GRANO`, `MAIZ TROCEADO`, `NATURCOR MIX` / `NATURCOR MIX .dotx`, `TERNEROS CREC GRANO` / `TERNEROS CREC GRANO RIGUERA`, etc.). Varias variantes del mismo producto.
- `pdf/` de PLANTILLAS REV1: mismo producto con 2-4 versiones por fecha.
- Logotipos Aviplus: `AVIPLUS_A_S_C_videojet.jpg` vs `AVIPLUS A S C.ciff`, `AVIPLUS_COMPLET` (PDF y JPG), `AVIPLUS CN (1)`: varias extensiones y versiones del mismo.
- `DEVOLUCIONES PALETS` aparece dos veces (FABRICACION - ALMACEN, 0,78 MB; y dentro de ETIQUETADORA, 0,27 MB).
- `TEC Seagull 7.1.3` aparece como carpeta, como `.zip` y como instalador `.exe` (triple copia).
- `Generador de etiquetas maquina 40-revR02 - copia.xlsm`: la palabra «copia» indica duplicado de trabajo.

### 3.2 Carpetas confusas
- **`ETIQUETAS` (nivel 2) contiene `FÓRMULAS…` y `METIONINA`**: el nombre no corresponde al contenido.
- **`CODIGO BARRAS`** contiene las plantillas de etiquetas de producto (`PLANTILLAS REV1`) y no códigos de barras. Hay que mirar bien en qué está lo que se busca.
- **`ETIQUETADORA`** contiene el software de la impresora (TEC Seagull) y devoluciones de palets. No son etiquetas.
- **`PLANTILLAS FABRICACIÓN`** son plantillas de registro (xls), no de marca.
- **`ETIQUETA BRICOPET ACTIVE.pdf`** suelto en la raíz de FABRICACION - ALMACEN, fuera de cualquier carpeta de etiquetas.
- **`Etiquetas Clarisoft ( Videojet)`** con espacio y paréntesis, y **`logotipos`** dentro de ella: los logotipos de marca no están en una carpeta de logos general.
- **Ficheros de stock de sacos** (`STOCK SACOS 2020`, `StockSacosInterjutePetfood`) en la raíz de PRODUCCION. Son datos, pero indican que la gestión de sacos no tiene una carpeta propia.
- **No hay carpeta de «envases», «sacos» o «láminas de saco»** en PRODUCCION. Las láminas de saco y los envases **no se han encontrado** con lo visto. Pueden estar en `ETIQUETAS ANTIGUAS` (129 MB, no leída) o en `UREA` (no recorrida). **Hueco principal para sacos.**

### 3.3 Huecos y limitaciones
1. **ETIQUETAS ANTIGUAS (129 MB)**: no listada por límite de peticiones (429). **Pendiente.**
2. **ETIQUETAS nivel 3 (`ETIQUETAS/ETIQUETAS/…`)**: los listados de la misma carpeta dieron tamaños distintos (p. ej. `ETIQUETAS` 301 MB frente a 83 MB, `FÓRMULAS PERSONALIZADAS` 75 MB frente a 78 MB, `FÓRMULAS GENÉRICAS` 5,09 MB frente a 5,07 MB). **Posible inconsistencia de la API o de la sincronización** de SharePoint. Hay que verificarlo a mano en el navegador.
3. **Sin fechas**: el listado de Graph solo da nombre, tamaño y ruta. Las fechas se han deducido de nombres (`DDMMAA` en los PDF; versiones en las fórmulas de abono). **Ninguna fecha de modificación real.**
4. **Sin recorrer**: FÓRMULAS (378 MB), APPCC (38 MB), UREA (88 MB), Tarifas (15,5 MB), REGISTRO FITOS, ORDEN-LIMPIEZA, NO CONFORMIDADES, RESIDUOS, PARTES FABRICA (solo nivel 2 visto).
5. **CECOAGRO**: CERTIFICACIÓN, MANTTO, OBJETIVOS, Subvenciones (no listadas) y PROXECTOS (solo nivel 2). Los subniveles de PROXECTOS (planos, fotos de fotovoltaica) no se han recorrido.
6. **Vigencia**: no se puede confirmar qué plantillas y etiquetas están vigentes. Las carpetas «ANTIGUOS», «ANTIGUAS» y el PDF de 2018 son antiguos **por nombre (deducido)**.
7. **Editabilidad**: `.dotx`, `.docx`, `.doc`, `.xlsm`, `.xls` son **editables pero no vectoriales**. Los `.ciff`, `.jpg`, `.bmp` no son vectoriales (deducido: `.ciff` es formato de impresora). **No se ha encontrado ningún `.ai`, `.eps`, `.svg` ni `.indd`** en lo visto (solo en el nivel listado). Para arte final de sacos hace falta un fichero vectorial, que no aparece.

---

## 4. Resumen de recursos gráficos (PRODUCCION)

| Marca / submarca | Tipo | Ruta | Formatos | Fecha | Observación |
|---|---|---|---|---|---|
| Aresa | Etiqueta (abono) | ETIQUETAS/ETIQUETAS ABONO/etiqueta.aresa.doc (+ copia (2)) | .doc | No visible | Editable, no vectorial. Duplicado. Vigencia deducida: incierta |
| Agroland, Entec | Etiqueta (abono) | ETIQUETAS/ETIQUETAS ABONO/ | .docx, .doc, .pdf | No visible; versiones en nombre (12.8.18, 20.5.10, 5-7-16…) | Editable. Mezcla de versiones. Duplicados |
| Videojet (impresora) | Etiqueta / logotipo | ETIQUETAS/Etiquetas Clarisoft ( Videojet)/ y /logotipos/ | .ciff, .jpg, .bmp, .pdf | No visible | .ciff = formato de impresora (deducido). Logotipos de 25 productos |
| Naturcor, Picón, Aviplus, Conejos Natura, Equigran, Gallinas Ponedoras, Mix Plus Seijo, Pollos Supra… | Etiqueta / ficha (producto) | ETIQUETAS/Etiquetas Clarisoft/ | .ciff + .jpg | No visible | Mismo producto con 2 formatos (impresora y vista previa) |
| Múltiples productos (aves, porcino, rumiantes, cereales) y clientes/distribuidores | Plantilla de ficha / etiqueta | CODIGO BARRAS/PLANTILLAS REV1/ (~169 .dotx/.dot) | .dotx, .dot | No visible | Editable, no vectorial. ~1 MB en Naturcor (imágenes incrustadas, deducido) |
| Múltiples productos (2018) | Ficha / etiqueta PDF | CODIGO BARRAS/PLANTILLAS REV1/pdf/ (~85 PDF) | .pdf | 01/03/2018 a 12/03/2018 (deducido del nombre) | Versiones por lote. **Antiguo (deducido)** |
| Bigbag (varios) | Etiqueta / datos | ETIQUETAS/ETIQUETAS BB/ | .xls, .ACT.xls | No visible | Datos, no gráfico |
| Generador de etiquetas | Otro (herramienta) | CODIGO BARRAS/ | .xlsm | No visible | Macro que genera etiquetas. Copia |
| Sin marca (etiqueta pure1) | Etiqueta (datos) | PRODUCCION/ | .xlsx | No visible | Datos |
| Bricopet Active | Etiqueta | FABRICACION - ALMACEN/ETIQUETA BRICOPET ACTIVE.pdf | .pdf (90 KB) | No visible | Fichero suelto. Vigencia desconocida |
| Varios (ETIQUETAS ANTIGUAS, 129 MB) | Etiqueta antigua (deducido) | ETIQUETAS/ETIQUETAS ANTIGUAS/ | No visible | No visible | **No listada. Pendiente** |
| Urea (producto de alimentación animal) | Otro (documentos) | FABRICACION - ALMACEN/UREA ALIMENTACION ANIMAL/ | .docx, .xlsx | 2018 (nombre) | Manuales. Lotes posiblemente con etiquetas (deducido) |

---

## 5. Recomendaciones de siguiente paso (no ejecutadas)
1. Listar **ETIQUETAS ANTIGUAS** y **urea lote …** para buscar láminas de saco, envases o arte final vectorial.
2. Verificar a mano en SharePoint la duplicación de `ETIQUETAS/ETIQUETAS/` (tamaños distintos entre lecturas).
3. Recorrer **PROXECTOS 2007/2008** y **Subvenciones** si el manual de identidad necesita planos o logotipos en documentación oficial.
4. Confirmar con el equipo de fabricación cuál es la versión vigente de `PLANTILLAS REV1` y de las etiquetas de abono.
5. Buscar en otra ubicación los **ficheros vectoriales** (`.ai`, `.eps`, `.svg`, `.indd`), que no aparecen en lo visto.
