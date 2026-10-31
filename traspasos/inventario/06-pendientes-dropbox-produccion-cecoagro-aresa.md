# Inventario de recursos gráficos — zonas pendientes (DROPBOX, PRODUCCION, CECOAGRO, ARESA)

Tipo: inventario de SOLO LECTURA. No se ha abierto el contenido de ningún fichero; sólo nombre, formato, tamaño y carpeta.
Fecha de inventario: 2026-10-31.
Complementa a `02-dropbox-marketing-laminas.md`, `03-biblioteca-aresa.md` y `04-cecoagro-produccion.md`. No repite lo ya inventariado.

## Leyenda y advertencias

- **VISTO**: dato leído del listado de Microsoft Graph (nombre, tipo, tamaño, carpeta o extensión).
- **DEDUCIDO**: inferido del nombre de fichero o de carpeta. Siempre marcado como «deducido».
- Tamaños en MB decimales (bytes / 1.000.000) salvo indicación.
- El listado no devuelve fechas de modificación. «No consta» en la columna Fecha significa que no aparece en el nombre.
- Esta pasada no recibió ningún error 429. Algunas lecturas por identificador devolvieron resultados que no coincidían con el nombre de la carpeta; se anota donde ocurre.
- Abreviaturas de ruta:
  - `[D]` = `DROPBOX/7. Marketing/LOGOs`
  - `[SA]` = `[D]/logos y sacos antiguos`
  - `[PR]` = `PRODUCCION/FABRICACION - ALMACEN`
  - `[AR]` = `ARESA/LOGOs` (dentro de `DROPBOX`, salvo que se indique otra raíz)

## Logotipos vectoriales encontrados

Búsqueda prioritaria: Cecoagro, Fertiland, Agroland, Nitroland, Fertimón, Protech, Verdenatur y Naturcor.
La vectorialidad se deduce de la extensión (VISTO). Un PDF puede ser vectorial o no; eso no se ha comprobado sin abrirlo (DEDUCIDO).

| Marca | Ruta | Formato |
|---|---|---|
| ARESA (logo «nuevo») | `[AR]/ARESA/ARESA_Logo nuevo/Logo_Aresa/Aresa.eps` | EPS (175,9 KB) |
| ARESA (logo «viejo») | `[AR]/ARESA/_ARESA_Logo viejo/Aresa/Aresa.eps` | EPS (188,4 KB) |
| ARESA (50 aniversario) | `[AR]/ARESA/_ARESA_Logo 50 aniv/Aresa50.eps` | EPS (254,5 KB) |
| ARESA (logotipo, logos vectoriales) | `[SA]/logos/Logos_Vectorial.eps` | EPS (203,3 KB) |
| ARESA (logotipo, logos vectoriales) | `[SA]/logos/Logos_Vectorial.pdf` | PDF (10,0 KB), posiblemente vectorial (DEDUCIDO) |
| ARESA (logo de grupo) | `[SA]/logos grupo/Aresa.eps` | EPS (70,1 KB) |
| O Santo (fuera de la lista pedida) | `[D]/O Santo/Formatos_logo/O_Santo.eps` | EPS (220,7 KB) |
| Fertimax (sacos 2009, editable) | `[SA]/sacos antiguos/Fertimax SACO Blanco 2009.fh10` | FreeHand .fh10 (231-252 KB) |
| Fertimax (sacos 2009, editable) | `[SA]/sacos antiguos/Fertimax SACO Rojo 2009.fh10` | FreeHand .fh10 (232 KB) |

Ninguna marca de la lista prioritaria tiene un fichero .ai, .eps, .svg, .cdr o .fh* de logo visto:

| Marca pedida | Resultado | Lo que sí se ha visto |
|---|---|---|
| Cecoagro | Sin vectorial visto | `Logo Cecoagro.jpg` (48 KB) en `[SA]/Logos (1)`. `CECOAGRO_Logo.zip` (529 KB) en `[D]`: no legible (ver §6) |
| Fertiland | Sin vectorial visto | `Fertiland.jpg`, `Fertiland_Eco.jpg` (ambos en `[SA]/Logos (1)/SOs`, ver nota), `pantones fertiland.doc` |
| Agroland | Sólo PDF (vectorial no verificado) | `Agroland.pdf` (422,7 KB, `[SA]/Logos (1)`); `Agroland.bmp`, `Agroland.jpg`, `Agroland.doc` |
| Nitroland | Sólo PDF (vectorial no verificado) | `NitroLand.pdf` (466 KB, `[SA]/Logos (1)`); `NutriLand.jpg` (146 KB) |
| Fertimón | Sólo PDF (vectorial no verificado) | `Fertimón 2265409314a 15-15-15 DELANTE.pdf` (621 KB, `[SA]/fertimón`); `logofertimon.jpg`, `logo ferti.jpg` |
| Protech | Sin vectorial visto | `Logo PROTECH bmp.bmp` (2,9 MB), `Protech.jpg`, `Logo PROTECH Nbpt Alternativa - ARESA.png` |
| Verdenatur | Sólo PDF (vectorial no verificado) | `Pantone VerdeNatur.pdf` (512 KB), `Silonatur.pdf` (17 KB), `abono verdenatur.pdf`, `genérico verdenatur.pdf` (6,4 MB), todos en `[SA]/diseños verdenatur` |
| Naturcor | Sin vectorial visto | `DTS- NATURCOR CEREAL REV 2.jpg`, `DTS- NATURCOR RURAL REV 2.jpg` (ambos en `[SA]/NATURCOR`) |

Otros PDF que podrían ser vectoriales (VISTO nombre; vectorialidad no verificada, DEDUCIDO):
- `[SA]/logos grupo/Aresa_logo con somreado verde.pdf` (89 KB) y `[SA]/logos grupo/Logo Grupo Aresa.pdf` (418 KB); `[D]/LogoGrupoAresa.pdf` (515 KB).
- `[SA]/logos grupo/Fertimax.pdf` (106 KB); `[SA]/logos grupo/Aresa.pdf` (19 KB).
- `[AR]/ARESA/_ARESA_Logo 50 aniv/Aresa50.pdf` (415 KB); `[AR]/ARESA/_ARESA_Logo viejo/Aresa/Aresa.pdf` (396 KB); `[AR]/ARESA/ARESA_Logo nuevo/Logo_Aresa/Aresa.pdf` (396 KB).
- `[D]/UMAN_Logo/Logo uman_Previo.pdf` (447 KB); `[D]/O Santo/O_Santo02.pdf` (412 KB).
- `[SA]/diseños verdenatur/2822_EQUINOVA25kgs definitivo.PDF` (1,7 MB) y `equinova.pdf` (2,8 MB): Equinova, marca fuera de la lista.

## 1. Zona DROPBOX / 7. Marketing / LOGOs (VISTO, todas las subcarpetas listadas)

Sin errores 429 en esta pasada. Subcarpetas de `LOGOs`: `ARESA` (9,2 MB), `FERTICOMPLET` (0,6 MB), `logos y sacos antiguos` (63,9 MB), `O Santo` (1,9 MB), `UMAN_Logo` (3,9 MB). Además, sueltos en la raíz de `LOGOs`: Equinova (BMP y JPG), `LogoGrupoAresa.pdf`, `CECOAGRO_Logo.zip`, `Logos marcas PET.lnk`.

### 1.1 `[SA]` = `logos y sacos antiguos` (11 subcarpetas, VISTO)

| Subcarpeta | Tamaño | Contenido visto | Observación |
|---|---|---|---|
| `Logos (1)` | 12,0 MB | Subcarpeta `logos subvenciones`, subcarpeta `SOs` (4,4 MB), y ~20 ficheros sueltos: Agroland (.bmp, .jpg, .pdf), Aresa 2023.jpg, Aresa.jpg, Cecoagro.jpg, Fertiland (.jpg, _Eco.jpg), Forestland.jpg, Logo ARESA bmp.bmp, Logo ARESA Raia (2).png, Logo Cecoagro.jpg, Logo PROTECH bmp.bmp, Logo PROTECH Nbpt Alternativa - ARESA.png, NitroLand.pdf, NutriLand.jpg, N-YieldCX-logo.png, Pantones.pdf, PenXcel.jpg, Proba Logo (2).png, Proba Logo.png, Protech.jpg, Uman.pdf | Mezcla de logos de marca raster y PDF. Ver nota sobre `SOs` |
| `Logos (1)/logos subvenciones` | 0,3 MB | 3 JPG: `projectes-feder-logo.jpg`, un JPG con nombre numérico, y un JPG «…Axencia-Inn-positivo.jpg» | Logos de financiadores (DEDUCIDO por el nombre). Raster |
| `logos` | 5,6 MB | `Aresa.jpg`, `logo granova.doc`, `Logos_Vectorial.eps`, `Logos_Vectorial.pdf`, `logotipo aresa.doc`, `PremioAresa.jpg`, `Publicidad Fertilizantes Fertimax.doc` (5,0 MB) | Único conjunto con EPS de ARESA (ver tabla vectorial) |
| `logos grupo` | 10,1 MB | Subcarpeta `anuncios` (5,3 MB) y ficheros: `Aresa.eps`, `Aresa.pdf`, `Aresa_Logo con somreado verde.pdf`, `Avantis_055.jpg`, `Avantis.jpg`, `Cecoagro Color.jpg`, `Fertimax.pdf`, `Fertimax02.jpg`, `Fertiland.doc`, `Ferti 1.doc` (1,6 MB), `Logo Grupo Aresa.pdf`, `Lona Premio Aresa.pdf` (683 KB), `PetLife01.jpg`, `Todocampo-c.jpg`, `European.doc`, `Agroland.doc`, entre otros | Logos y anuncios. Único EPS de ARESA en esta carpeta: `Aresa.eps` |
| `logos grupo/anuncios` | 5,3 MB | `anuncio Todocampo.pdf` (1,4 MB), `Aresa_250x69mm.pdf` (1,5 MB), un PDF de «…aresa rábade» (2,4 MB) | Anuncios (VISTO nombre). No abiertos |
| `fertimón` | 1,4 MB | `Fertimón 2265409314a 15-15-15 DELANTE.pdf`, `Fertimón NAC 2265400293a-v3.pdf`, `logo ferti.jpg`, `logofertimon.jpg` | Sacos Fertimón (PDF). Logos raster |
| `diseños verdenatur` | 12,1 MB | `2699_abono VERDENATUR .p1.PDF`, `2822_EQUINOVA25kgs definitivo.PDF`, `aves verdenatur.jpg`, `conejos verdenatur.jpg`, `equinova.pdf`, `genérico verdenatur.pdf`, `Pantone VerdeNatur.pdf`, `Silonatur.pdf` | Sacos y pantones Verdenatur/Equinova (PDF). Sin editable |
| `diseños agroland-fertiland` | 7,0 MB | `pantones fertiland.doc`, `Saco Cal Agroland.pdf`, `Saco Maiz def.pdf`, `Saco Patata def.pdf`, `Saco Pradera def.pdf`, `Saco Viña def.pdf` | Sacos Agroland/Fertiland (PDF). Sin editable |
| `NATURCOR` | 1,7 MB | `DTS- NATURCOR CEREAL REV 2.jpg` (874 KB), `DTS- NATURCOR RURAL REV 2.jpg` (865 KB) | Raster |
| `sacos antiguos` | 10,3 MB | `0407388_FERTIMAX_8_24_16_PB3.pdf`, `Fertimax 2009.pdf`, `Fertimax NAC 27.PDF`, `Fertimax SACO Blanco 2009.fh10`, `Fertimax SACO Rojo 2009.fh10`, `L M 304 FERTIMAX (2).pdf`, `L M 304 FERTIMAX.pdf`, `L M 311 FERTIMAX.pdf`, `2823_genérico VERDENATUR 40kgs.PDF`, `2824_genérico VERDENATUR 25kg.PDF`, `2791_PURO CEREAL_1.PDF`, `pantone logo granova.pdf` | Sacos antiguos. Editables: sólo los dos .fh10 |
| `etiquetado fertilizantes` | 1,1 MB | 1 HTM (`Actualización Normas de Etiquetado de Abonos Nacionales.htm`), 7 DOC (`NE 142405-1` a `-7.doc`) | Normativa de etiquetado. No gráfico |
| `emilio enero 2011` | 1,4 MB | 6 PDF de sacos (2009-2010, nombres con «MARTE»): `EUROPEAN 15-15-15 …`, `EUROPEAN NAC 27% …`, `FERTIBERIA 15-15-15 …`, `FERTIMAX NAC 27% …`, `FERTIMAX NPK 15.15.15 …`, `FERTIMON 15-15-15 …`, `FERTIMON NAC 27% …` | Sacos antiguos (PDF). Fechas 2009-2010 (DEDUCIDO por nombre) |
| `european` | 1,2 MB | `european 15-15-15 2265400418r.pdf`, `european NAC 2265400519a.pdf` | Sacos antiguos (PDF) |

**Nota sobre `Logos (1)/SOs` (4,4 MB):** la carpeta no se pudo leer por ruta (error NOT_FOUND). Una lectura por identificador devolvió un listado de ficheros (Agroland.bmp, Fertiland.jpg, Protech.jpg, NutriLand.jpg…) que son los mismos nombres que aparecen en el nivel de `Logos (1)`. No queda confirmado si esos ficheros están dentro de `SOs` o son el contenido de `Logos (1)` (no verificado). El contenido real de `SOs` queda **pendiente de confirmar**.

### 1.2 `[AR]` = `LOGOs/ARESA` (VISTO)

| Subcarpeta | Tamaño | Contenido visto | Formatos |
|---|---|---|---|
| `_ARESA_Logo 50 aniv` | 4,8 MB | `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg`, `8.jpg` (~155-308 KB c/u); `Aresa50.eps`, `Aresa50.pdf`; `Logo 50 Aniversario 1.pdf` a `5.pdf` | JPG, EPS, PDF |
| `_ARESA_Logo viejo` | 1,6 MB | Subcarpeta `Aresa` con `Aresa.eps`, `Aresa.jpg`, `Aresa.pdf`, `Aresa.png` | EPS, JPG, PDF, PNG |
| `ARESA_Logo nuevo` | 1,0 MB | Subcarpeta `Logo_Aresa` con `Aresa.eps`, `Aresa.jpg`, `Aresa.pdf`, `Aresa.png` | EPS, JPG, PDF, PNG |
| `ARESA_Logo nuevo_B&W y Negativos` | 1,8 MB | Subcarpeta `ARESA` con 3 subcarpetas: `B_N (negativo)` (`Aresa_Neg.jpg`, `Aresa_Neg.pdf`), `B_N (positivo)` (`Aresa_BN.jpg`, `Aresa_BN.pdf`, `Aresa_BN.png`), `Naranja (Negativo)` (`Aresa_Orange.jpg`, `Aresa_Orange.pdf`) | JPG, PDF, PNG |

### 1.3 Otras subcarpetas de `LOGOs` (VISTO)

| Carpeta | Tamaño | Contenido visto | Observación |
|---|---|---|---|
| `FERTICOMPLET` | 0,6 MB | `Ferticomplet - Logo.png` (91 KB), `Nitrolent - Logo.png` (16 KB), `Vigorfruit 19.pdf` (2 versiones, 220-233 KB) | Logos raster y PDF |
| `O Santo` | 1,9 MB | Subcarpeta `Formatos_logo` (`O_Santo.eps`, `O_Santo.jpg`, `O_Santo.png`), `Formatos_logo.zip` (511 KB, no abierto), `O_Santo02.pdf` | EPS. Marca O Santo (fuera de la lista) |
| `UMAN_Logo` | 3,9 MB | Subcarpeta `Uman` (2,9 MB), `Logo uman_Previo.pdf`, `UMAN.JPG`, `uman.JPG`, subcarpeta `__MACOSX` (sin contenido) | Logos PDF y JPG |

## 2. Zona PRODUCCION / FABRICACION - ALMACEN / ETIQUETAS / ETIQUETAS ANTIGUAS (VISTO nivel 1; subcarpetas parciales)

Ruta: `PRODUCCION / FABRICACION - ALMACEN / ETIQUETAS / ETIQUETAS ANTIGUAS` (≈ 129 MB).

| Elemento | Tamaño | Contenido visto | Observación |
|---|---|---|---|
| `CONFIGURACION` | 85 KB | Carpeta (no entrada) | No gráfico (DEDUCIDO por nombre) |
| `ETIQUETAS` (anidada) | 108,6 MB | varias decenas de subcarpetas con nombres de cliente, ganadero o producto (p. ej. `ABAD ARNESTO CB` 31,4 MB, `PIMAC` 31,9 MB, `DESUSO` 5,6 MB, `GALLINAS PONEDORAS`; el número exacto no se ha contado) | Etiquetas por cliente (DEDUCIDO). No se ha entrado en ninguna subcarpeta. Sin formatos vectoriales vistos en el nivel 2 |
| `Etiquetas ARESA` | 1,6 MB | 7 ficheros: `CALFENSA MAGNESIANA.JPG` (1,3 MB), `ETIQUETAS ABONO.xls`, `etiquetas Lithothamne.docx`, `Mezcla 47%cebada-47%maiz-6%soja.xls`, `PULPA EN GRANO(1).doc`, `ABONOS 25-01-12[1].doc`, `TRIGO.doc` | Etiquetas de abono Aresa (DEDUCIDO por el nombre). Editables (.doc, .xls), no vectoriales |
| `LOGOS INTERGAL` | 8,0 MB | `corbigran.pdf` (1,3 MB), `LOGO FERTIJET_Intergal.pdf` (2,8 MB), `Logo Intergal.jpg` (1,5 MB), un PDF de 160 KB y un PDF «…COMPLETO.PDF» (2,3 MB) | Logos de marcas Intergal, Fertijet y Corbigran (fuera de la lista). PDF y JPG |
| `ORDENES DE FABRICACION` | 10,5 MB | Subcarpeta (no entrada) | No gráfico (DEDUCIDO) |
| `Calculos vitafac terneros.xlsx` | 23 KB | Fichero | No gráfico |

Conclusión de la zona: no hay ficheros vectoriales (.ai, .eps, .svg, .indd, .pub) visibles en el nivel visto. Sólo los logos de `LOGOS INTERGAL` son PDF o JPG.

## 3. Zona PRODUCCION / urea «lote» (VISTO)

Las carpetas de urea están en `FABRICACION - ALMACEN / UREA ALIMENTACION ANIMAL`, **no** dentro de `ETIQUETAS` (la ruta que indicaba el encargo no coincide con el listado; el listado de `ETIQUETAS` no contiene ninguna carpeta «urea»). Ver 04-cecoagro-produccion.md, que ya lo recoge.

| Carpeta | Tamaño | Contenido visto | Observación |
|---|---|---|---|
| `urea lote 010318` | 4,1 MB | Subcarpetas `Rdos SAI`, `Solicitudes SAI`; `FICHA DE SEGURIDAD ALIMENTARIA UREA 2014 -.docx`, `FICHA TÉCNICA.docx`, `RESULTADOS ANALITICOS.docx` | Documentación de lote. Sin etiquetas ni sacos |
| `urea lote 080618` | 4,1 MB | Subcarpetas `Rdos SAI`, `Solicitudes SAI`; `FICHA DE SEGURIDAD ALIMENTARIA UREA 2018 -.docx`, `FICHA TÉCNICA.docx`, `RESULTADOS ANALITICOS.docx` | Igual que el anterior |
| `urea lote 071118` | 3,7 MB | No entrada | Pendiente, probablemente igual (DEDUCIDO) |

Conclusión: los lotes de urea contienen documentación técnica y de seguridad (DOCX), **no** etiquetas de saco visibles. La deducción previa (DEDUCIDO en 04) no se confirma.

## 4. Zona CECOAGRO (nivel 1 de cada carpeta, VISTO)

| Carpeta | Tamaño | Subcarpetas o ficheros vistos | Observación |
|---|---|---|---|
| `CERTIFICACIÓN` | 7,6 MB | `OBJETIVOS E INDICADORES` (1,0 MB), `POLITICA CALIDAD` (63 KB), `PROCEDIMIENTOS` (6,5 MB) | Sin gráfico por nombre. No se ha entrado en `POLITICA CALIDAD` por si tiene logotipo (DEDUCIDO) |
| `MANTTO` | 7,4 MB | `ATEX` (1,7 MB), `Compresor` (2,1 MB), `P.C.Incendios` (3,6 MB) | Mantenimiento. Sin gráfico por nombre |
| `OBJETIVOS` | 0,5 MB | `OBJETIVOS 2024.xlsx` (20 KB), `OBJETIVOS POR COMERCIAL.xlsx` (476 KB) | No gráfico |
| `Subvenciones` | 64,9 MB | `2022_IG240_Industria 4.0` (42,9 MB), `2022_IG289_Loxistica Avanzada` (10,4 MB), `2023_Activa Startups` (1,0 MB), `2024_IG240.1.177_DIGITALIZACIÓN DE PROCESOS DE PRODUCCIÓN` (5,4 MB), `340A INVERSIÓN...PRODUCTOS AGRARIOS` (5,1 MB), `Propuestas` (132 KB) | Expedientes de subvención. Sin gráfico por nombre. Las justificaciones podrían llevar logos de financiadores (DEDUCIDO); no entrado |

## 5. Zona ARESA (VISTO)

Raíz de la biblioteca: `FERTILIZANTES/`, `Subvenciones/`, `Documento.docx` (suelto), la carpeta de 30,9 MB y un elemento sin nombre resuelto. Ver 03-biblioteca-aresa.md.

### 5.1 Carpeta de 30,9 MB: `I+D+i` (RESUELTA)

El nombre de la carpeta de 30,9 MB que no se resolvía es **`I+D+i`**. Se ha confirmado con la búsqueda por nombre, que devuelve su ruta web `ARESA/I+D+i/2022_Cuaderno de Campo_NIRS2Custom`. Un listado por ruta con el carácter «+» falla; el nombre sólo se resolvió con la búsqueda.

| Elemento | Tamaño | Contenido visto | Observación |
|---|---|---|---|
| `2022_Cuaderno de Campo_NIRS2Custom` | 30,9 MB | `_NIRS` (18,4 MB), `Cecoagro_Analisis de Suelos` (4,9 MB), `CRONOGRAMA GANTT ARESA.pdf` (297 KB), `CRONOGRAMA PROYECTO.pdf` (84 KB), `…PRIETO_Interpretacion análisis de suelos.doc` (38 KB), `NIRS2CUSTOM FINAL_Memoria.pdf` (5,9 MB), `RESOLUCION FEADER 2022 066B de ARESA.pdf` (1,3 MB) | Documentación de proyecto de I+D (NIRS). Sin material gráfico de marca |
| `_NIRS` | 18,4 MB | Carpetas: `AgriNIR_Cereal`, `AXFLOW_Cereal`, `BONSAI` | Datos técnicos (DEDUCIDO por nombre). No entrado |
| `Cecoagro_Analisis de Suelos` | 4,9 MB | Carpetas: `Begonte`, `Cospeito`, `CastrodeRei`, `Baleira` | Análisis de suelos por municipio (DEDUCIDO). No entrado |

Conclusión: la carpeta `I+D+i` **no contiene material gráfico de marca** (VISTO por nombres).

### 5.2 Elemento sin nombre resuelto

Sigue sin resolverse. Ni la ruta ni la búsqueda por nombre permitieron localizarlo con seguridad. No se ha abierto. **Pendiente.**

### 5.3 `Subvenciones/ARESA 2022_NIRS2Custom_Grupos Operativos Innovacion` (VISTO por búsqueda)

Subcarpetas y ficheros vistos por el resultado de búsqueda: `MABEGONDO`, `MR331B ARESA AEI`, `JUSTIFICACION 1ª anualidad`, `JUSTIFICACION 2ª anualidad`, `_Desarrollo Proyecto`, `Modificacion MABEGONDO`. No entrado. Justificaciones de subvención: podrían contener logotipos de financiadores (DEDUCIDO).

## 6. CECOAGRO_Logo.zip (NO LEGIBLE)

`CECOAGRO_Logo.zip` (529 KB, `application/zip`) está en `DROPBOX / 7. Marketing / LOGOs /`. El conector sólo lee PDF, Word, Excel, PowerPoint, OpenDocument, imágenes y texto plano. **No se puede ver el contenido sin descargarlo.** Se ha usado la vía de solo lectura de la web (`webUrl`) como alternativa, pero no se ha abierto.

## 7. Zona DROPBOX, primer nivel distinto de las ya inventariadas (VISTO)

Listado de la raíz: las 12 carpetas coinciden con las de 02-dropbox-marketing-laminas.md. Sin ficheros sueltos.

| Carpeta | Tamaño | Entrada | Veredicto |
|---|---|---|---|
| `10. Gestión de Envases` | 15,2 MB | `2023` (118 KB), `SCRAP` (14,6 MB); ficheros `CONSUMO ARESA 2023.xlsx`, `CONSUMO PLASTICO FÁBRICAS ARESA 2021-2022.xlsx`, `…2022.xlsx`, `datosFormulario ENVASES 2022 ARESA.pdf`, `justificante ENVASES ARESA 2022.pdf`, `PALLETS ARESA.xls`, `Ventas pallets 2021-2022.xls` | **Sin material gráfico.** Datos y justificantes. No entrado en `SCRAP` |
| `2. Ventas ARESA` | 2.316 MB | `ASESORAMIENTO - CUADERNO CAMPO`, `Campaña 2022-23`, `Clientes ARESA`, `Clientes Potenciales PAC 2019`, `COMERCIAL - RECOMENDACIONES` (1,2 MB), `DECLARACIONES PRECURSORES`, `ESTADÍSTICA FERTILIZANTES`, `PLANTILLAS DE VENTA` (xlsx, VISTO), `Presupuesto Ventas ARESA`, `Productos COMPETENCIA`, `TARIFAS` (72 MB), `VENTAS` (338 MB) | `PLANTILLAS DE VENTA`: sólo XLSX (sin gráfico). `Productos COMPETENCIA` → `PRECIOS MERCADO 2022`: 13 PDF de tarifas de otros fabricantes (Deiba, Nutrifluid, Fertiberia Tech, PVD, Yara, entre otros; VISTO nombre). **No es material propio.** `COMERCIAL - RECOMENDACIONES` no entrado: **pendiente**, podría tener fichas comerciales |
| `3. Organización ARESA-CECO` | 259 MB | `Códigos Fertilizantes ARESA` (533 KB), `Orden Fabricación BLENDING` (233 MB), `Presentacións ARESA` (17,6 MB) | Sin nombre gráfico. **La lectura de `Presentacións ARESA` por identificador no devolvió su contenido (el listado correspondía a operaciones de blending), por lo que queda pendiente de confirmar.** No es identidad corporativa visible |
| `5. Mantenimiento ARESA` | 46,9 MB | `ADECUACIONES`, `Certificados Calibración Báscula ARESA`, `DOCUMENTACIÓN MÁQUINAS`, `DOCUMENTACIÓN TRABAJO LUMINARIAS RÁBADE (17082023)`, `GESTION RESIDUOS`, `MANTENIMIENTO_IP`, `PRESUPUESTOS`, y ficheros xlsx/pdf de partes de trabajo | **Sin material gráfico** por nombre. No se ha visto señalética |
| `9. PRL` | 137,9 MB | `CAE - NORMAS SEGURIDAD` (5,4 MB), `FORMACIÓN ATEX`, `MAQUINAS` (18,9 MB), `OPERACIONES` (74,2 MB), `EVALUACIÓN DE RIESGOS LABORALES_ARESA.pdf` (37 MB), `NORMAS DE SEGURIDAD EN GLOBAL.docx`, `PLANIFICACIÓN PREVENTIVA.pdf`, `PRL.lnk` | **Documentación PRL, sin material gráfico visto.** Pictogramas de seguridad (si los hay) dentro de `CAE - NORMAS SEGURIDAD` no entrados (DEDUCIDO) |
| `11. Calidad ARESA` | 2.427 MB | `INCIDENCIAS` → `2022` (273 KB), `2024` (1.986 MB), `2025` (165 MB), `2026` (276 MB) | Registros de incidencias. Sin material gráfico por nombre. No entrado más allá de `INCIDENCIAS` |
| `1. Compras ARESA`, `6. Proyectos ARESA`, `8. Información` | 1.770 / 1.106 / 380 MB | No entradas | No recorridas. `6. Proyectos` podría tener diseños de proyectos (DEDUCIDO por nombre) — **pendiente si se quiere cubrir** |

## 8. Lo VISTO frente a lo DEDUCIDO (resumen)

- **VISTO**: nombres, tamaños, extensiones y carpetas de todos los elementos citados en las tablas anteriores; los logos vectoriales EPS y FH10 de la sección inicial; la ruta web de la carpeta `I+D+i` obtenida por búsqueda.
- **DEDUCIDO**: que los PDF de logos sean vectoriales (no abiertos); que `ETIQUETAS` (nivel 2) contenga etiquetas por cliente; que los expedientes de subvenciones tengan logos de financiadores; el uso de `Logos (1)/logos subvenciones` como logos de financiadores; la fecha 2009-2010 de `emilio enero 2011` (por nombre).

## 9. Lo que ha quedado sin poder leer

1. `CECOAGRO_Logo.zip` (DROPBOX/7. Marketing/LOGOs): tipo ZIP, no legible por el conector.
2. `[SA]/Logos (1)/SOs` (4,4 MB): ruta no resuelta; el contenido de la lectura alternativa no se pudo asociar con seguridad.
3. Elemento sin nombre resuelto de la raíz de ARESA: no localizado.
4. `ARESA/Presentacións ARESA` (DROPBOX/3. Organización ARESA-CECO): la lectura por identificador no devolvió su contenido.
5. `ETIQUETAS ANTIGUAS/ETIQUETAS` (108,6 MB, nivel 2): subcarpetas (clientes/productos) no entradas.
6. `urea lote 071118`: no entrada (probablemente igual que 010318 y 080618).
7. `DROPBOX/2. Ventas ARESA/COMERCIAL - RECOMENDACIONES` (1,2 MB) y `DROPBOX/2. Ventas ARESA/Clientes ARESA` (237 MB): no entradas.
8. `DROPBOX/6. Proyectos ARESA` (1.106 MB) y `DROPBOX/8. Información` (380 MB): no recorridas.
9. Subcarpetas de nivel 2 de `CERTIFICACIÓN`, `MANTTO`, `Subvenciones` (CECOAGRO) y de `9. PRL` (DROPBOX): no entradas.
10. `DROPBOX/7. Marketing/LOGOs/logos y sacos antiguos/logos grupo/anuncios`: listado hecho, contenido de los PDF no abierto.
11. `Logos marcas PET.lnk` y `Formatos_logo.zip` (O Santo): no abiertos (acceso directo y ZIP).
12. Vectorialidad de los PDF de logos: no comprobada sin abrirlos.
