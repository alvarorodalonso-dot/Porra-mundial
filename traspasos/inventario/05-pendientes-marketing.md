# Inventario de recursos gráficos — pendientes de la biblioteca MARKETING (SharePoint)

Pasada de completado. SOLO LECTURA: nada se ha escrito, movido ni borrado en SharePoint, y no se ha abierto el contenido de ningún fichero. Complementa a `01-marketing.md` (no repite lo que ya está ahí).

Convención: **[visto]** = dato devuelto por el listado o la búsqueda del conector. **[deducido]** = inferencia a partir del nombre, la extensión o la carpeta. Las cifras marcadas «aprox.» son estimaciones leyendo el listado; no se contaron por programa.

Incidencias de esta pasada: no apareció ningún HTTP 429 en las peticiones de esta pasada. Sí apareció un límite de listado: el listado de `ARESA-AGRICOLA` solo devuelve 1.000 entradas (ver apartado 1.5).

---

## 1. ARESA / IMAGENES WEB ARESA / ARESA-AGRICOLA (entradas 201 a 1.000)

Ruta: `ARESA/IMAGENES WEB ARESA/ARESA-AGRICOLA/`. Se leyeron las páginas 2 a 5 (entradas 201-1.000). La página 1 ya estaba en `01-marketing.md`.

### 1.1 Recuento por formato (aprox., sobre 800 entradas)

| Formato | Aprox. | Observación |
|---|---|---|
| .jpg / .jpeg | ~750 | [visto] Gran mayoría de la carpeta. [deducido] La mayor parte son fotos web o derivados de la misma foto. |
| .png | ~43 | [visto] Logos pequeños, favicons, capturas y algunas imágenes de subvenciones y de web. |
| .mp4 | 5 | [visto] Vídeos de presentación y de fondo de web (ver 1.4). |
| .pdf | 0 | [visto] Ningún PDF en las 800 entradas leídas. |
| .eps / .ai / .svg / .psd | 0 | [visto] Ningún vectorial en esta carpeta. |
| Carpetas | 0 | [visto] Todo está en una única carpeta plana de 1.000 entradas. |

### 1.2 Patrones de nombre (aprox.)

| Patrón | Aprox. | Observación |
|---|---|---|
| Derivados por tamaño (`-300x300`, `-715x477`, `-768x512`, `-1200x800`, `-1536x1024`, `-2048x1365`, `-scaled`, `-scaled-700x466`) | más de la mitad | [visto] Son copias redimensionadas de una misma foto. [deducido] No son originales. |
| Duplicados con sufijo `-1` y mismo tamaño en bytes | decenas | [visto] Ejemplos: `aresa6.jpg` = `aresa6-1.jpg` (2.135.045 B); `aresa6-1200x800.jpg` = `aresa6-1-1200x800.jpg` (160.279 B). |
| Premios y entregas (`premio-aresa-AAAA-img-N`, `premio_aresa*`, `fallo_*`, `falloxiviipremioaresa*`, `grupo_premio_aresa*`, `premiado_grupo_*`, `premiadas_aresa_junior_*`, `premio_aresa_moexmu*`, `presentacion_bases_premio_*`, `bases-premio-aresa-*-pdf*`, `convenio_premioaresa_*`, `convenio_usc_aresa_premio2018*`) | centenares | [visto] Series por año desde 2000 hasta 2023. Muchas son fotos de gala y de jurado. [deducido] Son material de los premios Aresa. |
| Historia de la empresa (`history-1950` a `history-2019`, `historia-aresa-anos-00/10/50-70/80`) | 21 | [visto] Imágenes de línea de tiempo por décadas. |
| Campus, instalaciones y fachada (`aresa-campus-terra*`, `aresa-orientacion-al-cliente*`, `aresa-plantilla*`, `auditorio_*`, `aresa-rabade*`) | decenas | [visto] Fotos de instalaciones y del auditorio. |
| Valores corporativos (`nuestros-valores-*`: compromiso, innovación, orientación al cliente, tradición) | 8 | [visto] Imágenes para la web. |
| Fondos de web (`home-*-bg.jpg`, `home-corporative-values-bg*`, `home-products-bg*`, `contact-gradient-bg*`, `contacto-bg*`) | decenas | [visto] Fondos de cabecera y de secciones. |
| Productos de abono (`fertimon-*`, `fertiland-*`, `forestland`, `hydroland`, `nitroland`, `expertise`, `gama-fertilizantes-aresa`, `l15c15f3`, `l15c7f1`, `l23c9f1`, `l8c11f3`, `l20c13f1`) | decenas | [visto] Fotos de envase o de producto. [deducido] Los nombres `l15c15f3`, `l23c9f1`, `l8c11f3`, `l20c13f1` parecen fórmulas N-P-K. |
| Personas (fotos de personas, nombres en el fichero) | pocas | [visto] Retratos y fotos de equipo. No se detallan los nombres. |
| Subvenciones y ayudas (`subvencion-*`) | ver 6.2 | [visto] Son de la carpeta CECOAGRO web, no de esta. Ver 6.1. |
| Varios: `bicycle*`, `alvaro*` (imágenes de prueba o fondos), `placeholder-blog*`, `favicon*`, `cropped-favicon*`, `Image*.png`, `imagen-8.jpg` | pocas | [visto] Sin uso claro por el nombre. |

### 1.3 Recursos gráficos de interés (logos, packshots, material de producto)

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Aresa | Logotipo (color) | ARESA/IMAGENES WEB ARESA/ARESA-AGRICOLA/aresa-logo.png | png (6,9 KB) | [visto] Tamaño muy pequeño: raster de baja resolución. [deducido] Versión de web, no arte final. |
| Aresa | Logotipo (blanco) | …/ARESA-AGRICOLA/aresa-logo-blanco.png | png (6,4 KB) | [visto] Versión en blanco para fondos oscuros. Raster. |
| Aresa | Logotipo (variante) | …/ARESA-AGRICOLA/aresa-lugo.jpg (sic) y aresa-lugo-300x214.jpg | jpg (19 KB) | [visto] Nombre con errata («lugo»). [deducido] Puede ser el logotipo de Lugo o una errata de «logo». Sin comprobar. |
| Aresa Agrícola | Logotipo de subdivisión | …/ARESA-AGRICOLA/aresa-agricola.png y aresa-agricola-300x260.png | png (16 KB) | [deducido] Logotipo de la división agrícola, por el nombre. Raster. |
| Aresa | Logotipo social | …/ARESA-AGRICOLA/aresa-social.png (+ -300x300, -715x375, -768x403) | png | [visto] Versiones para redes. Raster. |
| Aresa | Packshot de producto | …/ARESA-AGRICOLA/fertimon-8-24.jpg, fertimon-9-18-27.jpg, fertimon-15-15-15.jpg, fertimon-27.jpg, fertimon-cloruro-potasico.jpg, fertimon-dap.jpg, fertimon-super-fosfato.jpg | jpg (~20 KB c/u) | [visto] Fotos de envase de la familia Fertimón. Fondo no verificado. |
| Fertiland | Packshot de producto | …/ARESA-AGRICOLA/fertiland-eco.jpg, fertiland-maiz.jpg, fertiland-patata.jpg, fertiland-pradera.jpg, fertiland-vina.jpg | jpg (~25 KB c/u) | [visto] Cinco fotos por cultivo, en línea con los cuatro cultivos del PDF de arquitectura de marca. |
| Forestland | Imagen de producto | …/ARESA-AGRICOLA/forestland.jpg | jpg (31 KB) | [visto] Una sola foto. |
| Hydroland | Imagen de envase | …/ARESA-AGRICOLA/hydroland.jpg, hydroland-300x300.jpg | jpg (11 KB) | [visto] Otra foto de Hydroland; también hay un envase en ARESA/Packaging (`Bidon_Hydroland.jpg`, ver 01). Son fotos distintas por el nombre. |
| Nitroland | Imagen de producto | …/ARESA-AGRICOLA/nitroland.jpg, nitroland-300x300.jpg | jpg (11 KB) | [visto] Dos versiones. |
| Expertise | Imagen de producto | …/ARESA-AGRICOLA/expertise.jpg, expertise-300x300.jpg | jpg (35 KB) | [visto] Marca Expertise citada en el PDF de arquitectura de marca. |
| Aresa | Gama de fertilizantes | …/ARESA-AGRICOLA/gama-fertilizantes-aresa.jpg | jpg (59 KB) | [visto] Imagen de gama. |
| Aresa | Imagen de la red de productos | …/ARESA-AGRICOLA/home-products-bg.jpg | jpg | [visto] Fondo de la sección productos (ver 1.2). |
| Aresa | Vídeo corporativo | …/ARESA-AGRICOLA/aresa-video-presentacion.mp4 (8,6 MB) y aresa-video-presentacion-v6-720p.mp4 (13,9 MB) | mp4 | [visto] Versión 720p de la presentación V6. [deducido] Es la misma presentación que `Videos/Aresa V6_Presentacion.mp4` (291 MB) en 01. |
| Aresa | Imagen de premio (web) | …/ARESA-AGRICOLA/premio-aresa-2022-img-1…6.jpg, premio-aresa-2020-ganador.jpg, premio-aresa-2020-finalistas.jpg | jpg | [visto] Imágenes de premios; hay muchos derivados. |

No aparece ningún logotipo vectorial ni arte final en esta carpeta. Los logos de Aresa de esta carpeta son raster de baja resolución (6 a 19 KB).

### 1.4 Vídeos de la carpeta

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Aresa | Vídeo presentación (web) | …/ARESA-AGRICOLA/aresa-video-presentacion.mp4 | mp4 (8,6 MB) | [visto] |
| Aresa | Vídeo presentación V6 720p | …/ARESA-AGRICOLA/aresa-video-presentacion-v6-720p.mp4 | mp4 (13,9 MB) | [visto] [deducido] Versión 720p. |
| Aresa | Vídeo fondo de home | …/ARESA-AGRICOLA/home-hero-video-bg.mp4 | mp4 (2,3 MB) | [visto] Fondo de cabecera de web. |
| Aresa | Vídeo slider home | …/ARESA-AGRICOLA/home-slider-video-rev2.mp4 | mp4 (0,8 MB) | [visto] «rev2»: revisión 2 [deducido]. |
| Aresa | Vídeo slide home | …/ARESA-AGRICOLA/home-slide-video.mp4 | mp4 (0,6 MB) | [visto] |

### 1.5 Límite del listado

El listado de la carpeta devuelve como máximo 1.000 entradas (5 páginas). Al pedir la página 6 el conector responde: «startPage 6 exceeds the folder listing's 5 pages (1000 entries)». Según el propio conector, la carpeta tiene unas 1.186 entradas. **Quedan unas 186 entradas sin ver** (no es un 429; es el límite del listado). Para verlas hace falta buscarlas por nombre o leer cada fichero por su ruta.

---

## 2. Videos / Video AGEF

Ruta: `Videos/Video AGEF/`. Dos ficheros, 820 MB en total [visto]. No hay subcarpetas.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| AGEF / Aresa | Vídeo | Videos/Video AGEF/AGEF_ ARESA.mp4 | mp4 (754,9 MB) | [visto] Vídeo muy pesado. [deducido] Vídeo de la asociación AGEF con la marca Aresa, por el nombre. |
| Aresa | Vídeo | Videos/Video AGEF/…ICINAS ARESA.mp4 | mp4 (65,4 MB) | [visto] Nombre cortado en el listado: «…ICINAS ARESA.mp4». [deducido] Probablemente «OFICINAS ARESA.mp4». |

Contenido de los vídeos: no abierto (no procede; solo lectura de metadatos).

---

## 3. AVANTIS / Packaging

Ruta: `AVANTIS/Packaging/`. **28 ficheros** [visto]. Tamaño total aprox. 29 MB, como indicaba 01.

**Observación importante:** no hay sacos de ganadería en esta carpeta. Los nombres son de pienso para **perros y gatos** (mascotas), no de ganadería [visto en nombre]. Los sacos de ganadería aparecen en el PDF `AVANTIS_Catalogo piensos ganaderia_Folleto_02.pdf` de la raíz de AVANTIS (ya en 01), no aquí.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Avantis | Envase / saco (perro/gato) | AVANTIS/Packaging/Avantis_Cats_2kg.jpg; Avantis_Cats_7,5kg.jpg | jpg (~397 KB c/u) | [visto] Gato, 2 kg y 7,5 kg. |
| Avantis | Envase / saco | AVANTIS/Packaging/Avantis_Gourmet_3kg.jpg | jpg (402 KB) | [visto] |
| Avantis | Envase / saco | AVANTIS/Packaging/Avantis_Mini_2kg.jpg | jpg (416 KB) | [visto] Razas pequeñas [deducido por el nombre]. |
| Avantis | Envase / saco | AVANTIS/Packaging/Avantis_Original_3kg.jpg | jpg (416 KB) | [visto] |
| Avantis | Envase / saco (cachorros) | AVANTIS/Packaging/Avantis_Puppy_3kg.jpg | jpg (371 KB) | [visto] |
| PetCool | Envase / saco | AVANTIS/Packaging/PetCool_Cats.jpg, PetCool_Daily.jpg, PetCool_Essential.jpg, PetCool_Pro.jpg, PetCool_Supreme.jpg | jpg (571 KB a 673 KB) | [visto] Cinco variantes de la línea PetCool. |
| Delicious Chicken | Envase | AVANTIS/Packaging/Delicious_Chicken_1250.jpg, Delicious_Chicken_405.jpg | jpg (1,5 a 2,0 MB) | [visto] Dos tamaños: 1250 y 405 px [deducido por el nombre]. |
| Delightful Beef | Envase | AVANTIS/Packaging/Delightful_Beef_1250.jpg, Delightful_Beef_405.jpg | jpg (1,5 a 2,0 MB) | [visto] Dos tamaños. |
| Irresistible Tuna | Envase | AVANTIS/Packaging/Irresistible_Tuna_405.jpg, Irresistible_Tuna_85.jpg | jpg (0,9 a 1,4 MB) | [visto] Dos tamaños. |
| Yummy Duck | Envase | AVANTIS/Packaging/Yummy_Duck_405.jpg, Yummy_Duck_85.jpg | jpg (0,9 a 1,5 MB) | [visto] Dos tamaños. |
| Avantis | Imagen de cachorros | AVANTIS/Packaging/PL_Cachorros.jpg | jpg (737 KB) | [visto] «PL» sin definir. |
| Avantis | Gama completa | AVANTIS/Packaging/Gama_Completa.jpg | jpg (5,2 MB) | [visto] El fichero más pesado de la carpeta: imagen de gama. |
| Avantis | Imagen de producto (serie) | AVANTIS/Packaging/Pure01.jpg a Pure06.jpg | jpg (~0,9 a 1 MB c/u) | [visto] Seis imágenes de la serie «Pure». |
| Avantis | Documento | AVANTIS/Packaging/Comet.pdf | pdf (567 KB) | [visto] Contenido no abierto. [deducido] Documento de producto o de marca. |

Nota de nombres: el nombre «Avantis_Mini» y «Pure» no indican formato de envase (no se pudo ver la imagen). No hay ficheros vectoriales (ai, eps, svg) [visto].

---

## 4. Digital (un nivel más)

Ruta: `Digital/`. Se listan las cuatro subcarpetas y, dentro de cada una, un nivel más. Aparte se listan dos subcarpetas más profundas de Esgalla sin expandir (ver apartado 8).

### 4.1 Elogia (11 MB) — [visto]

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Avantis Pet | Propuesta (PDF) | Digital/Elogia/2403 Credenciales y propuesta de trabajo Elogia @ AvantisPet.pdf | pdf (10,6 MB) | [visto] Propuesta de trabajo de la agencia Elogia para AvantisPet. |
| Avantis Pet | Correo (mensaje) | Digital/Elogia/_ AvantisPet_Elogia - Proyecto Digital Commerce 2024.msg | msg (0,7 MB) | [visto] Correo de Outlook; no es gráfico. |

### 4.2 Esgalla (19 MB) — [visto]

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Avantis | Propuesta (PDF) | Digital/Esgalla/PROPUESTA AVANTIS - Esgalla.pdf | pdf (2,0 MB) | [visto] Versión completa. |
| Avantis | Propuesta reducida (PDF) | Digital/Esgalla/PROPUESTA ESGALLA AVANTIS - Reducida.pdf | pdf (1,8 MB) | [visto] Versión corta de la anterior [deducido]. |
| Avantis | Onboarding (PDF) | Digital/Esgalla/Avantis_onboarding_propuesta_241217.pdf | pdf (2,5 MB) | [visto] Fecha en el nombre: 17-12-2024 [deducido]. |
| Avantis | Manual (PDF) | Digital/Esgalla/Manual Automatización Avantis.pdf | pdf (3,2 MB) | [visto] |
| Avantis | Flujos / oportunidades / perfiles (PDF) | Digital/Esgalla/Avantis_Flujos.pdf; Avantis_Oportunidades.pdf; Avantis_Perfiles de entrega.pdf | pdf (0,06 a 0,2 MB) | [visto] Documentos de proceso. |
| Avantis | Hoja de cálculo | Digital/Esgalla/Copia de Facturacion_AvantisEnero_2025.xlsx | xlsx (33 KB) | [visto] No gráfico. |
| Avantis | Carpeta (sin expandir) | Digital/Esgalla/AUTO_EmailsPDF/ | carpeta (8,8 MB) | [visto] Sin expandir (segundo nivel). |
| Avantis | Carpeta (sin expandir) | Digital/Esgalla/Flujos Expandi Supermercados España/ | carpeta (35 KB) | [visto] Sin expandir (segundo nivel). |

### 4.3 Goodbuy (3 MB) — [visto]

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Goodbuy | Dossier (PDF) | Digital/Goodbuy/Dossier Goodbuy 2024.pdf | pdf (3,4 MB) | [visto] Dossier de 2024. |

### 4.4 RocketPlace (287 MB) — [visto]

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Avantis | Documento (PDF) | Digital/RocketPlace/AVANTIS.pdf | pdf (286,8 MB) | [visto] Un único PDF de casi 287 MB, el más pesado de Digital. [deducido] Probablemente imágenes sin comprimir. Contenido no abierto. |

---

## 5. TODOCAMPO: subcarpetas anidadas

### 5.1 Diseños nave / Diseños para publicidad (4,7 MB) — [visto]

Ruta: `TODOCAMPO/Diseños nave/Diseños para publicidad/`. Cinco ficheros, sin subcarpetas.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Todocampo | Anuncio (imagen) | …/Diseños para publicidad/Anuncio periódico.jpg | jpg (627 KB) | [visto] Anuncio de prensa. |
| Todocampo | Imagen de publicidad | …/Diseños para publicidad/Anuncio…Cura.jpg | jpg (2,4 MB) | [visto] Nombre cortado en el listado. |
| Todocampo | Maqueta (PDF) | …/Diseños para publicidad/Montaje.pdf | pdf (774 KB) | [visto] «Montaje» [deducido] maqueta de un anuncio. |
| Todocampo | Diseño vectorial (CorelDRAW) | …/Diseños para publicidad/ROBAPÁGINAS ÚLTIMO.cdr | cdr (297 KB) | [visto] Formato CorelDRAW (vectorial, propietario). [deducido] Diseño editable de robapáginas. |
| Todocampo | Valla / cartel (PDF) | …/Diseños para publicidad/Valla.pdf | pdf (594 KB) | [visto] Diseño de valla. |

### 5.2 Diseños Superfauna / diseños sacos (3,3 MB) — [visto]

Ruta: `TODOCAMPO/Diseños Superfauna/diseños sacos/`. Tres ficheros sueltos y dos subcarpetas.

**Observación importante:** el contenido NO es de Superfauna (mascotas). Son láminas de sacos de **abono** (fertilizantes) con formulaciones N-P-K y nombres de producto. [deducido por los nombres: «15-15-15», «NITRATO 27», «NITROFERTIMON», «SUPERFOSFATO G/P», «FABRISA»]. El nombre de la carpeta no coincide con el contenido.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Cereal (sin marca visible) | Lámina de saco (PDF) | …/diseños sacos/Saco Final CEREAL.pdf | pdf (268 KB) | [visto] «Final» en el nombre [deducido] versión definitiva. |
| Todocampo | Lámina de saco (PDF) | …/diseños sacos/saco_abono_todocampo.pdf | pdf (145 KB) | [visto] Saco de abono Todocampo. |
| Sin marca | Lámina de saco (PDF) | …/diseños sacos/Sacos 02.pdf | pdf (813 KB) | [visto] Segunda versión de sacos [deducido]. |
| FABRISA [deducido] | Lámina de saco, editable | …/diseños sacos/ART/ (10 ficheros .art) | art (~55 KB a 314 KB c/u) | [visto] Ficheros «.art». [deducido] Formato de preimpresión (Esko ArtPro, u otra aplicación de empaquetado). Sin abrir. Sacos: 15-15-15 (-1, -2); NITRATO 27 (-1, -2); NITROFERTIMON FA (-1, -2); SUPERFOSFATO G F (-1, -2); SUPERFOSFATO P F (-1, -2). |
| FABRISA [deducido] | Lámina de saco, editable | …/diseños sacos/FH/ (8 ficheros) | pdf y fh9 | [visto] Pares PDF y .fh9 (FreeHand 9, vectorial antiguo) de: 15-15-15 FABRISA; NITRATO 27 FABRISA; NITROFERTIMON FABRISA; SUPERFOSFATO G FABRISA. Cada uno aparece en PDF y en .fh9. |

Nota: `FH` (FreeHand) contiene los únicos ficheros vectoriales de esta carpeta: `.fh9`. El resto son PDF y `.art`.

### 5.3 Otras subcarpetas de TODOCAMPO

- `Diseños nave/` y `Diseños Superfauna/` tienen las subcarpetas listadas arriba. No hay más niveles dentro de ellas.
- `Diseños Superfauna/` también contiene los 2 PNG de logo ya citados en 01 (positivo y negativo), en el nivel superior.

---

## 6. Otras carpetas pendientes

### 6.1 CECOAGRO web: entradas 201 a 238 (`ARESA/IMAGENES WEB ARESA/CECOAGRO/`) — [visto]

Son 38 entradas. El listado de 200 de 01 ya las conocía en parte. Recuento aprox.: ~11 jpg de «soluciones profesionales campo» (slides 1 a 3 con derivados); ~27 png de programas de ayudas («subvencion-bono-enerxia-peme», «subvencion-inega», «subvencion-inega-bono-enerxia», «subvencion-inega-fotovoltaica», con derivados); y un par de ficheros sueltos.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Cecoagro | Imágenes web de servicios | …/CECOAGRO/soluciones-profesionales-campo-slide-1…3.jpg | jpg | [visto] Diapositivas de web. |
| Ayudas (INEGA, Bono Enerxía PEME, fotovoltaica) | Banners de ayudas | …/CECOAGRO/subvencion-*.png | png | [visto] Banners de programas de ayuda pública [deducido por el nombre]. Hay años 2021 en algunos. |
| Verdenatur | Imagen (posible logo) | …/CECOAGRO/verdenatur.jpg | jpg (14,6 KB) | [visto] Única imagen con el nombre Verdenatur en esta carpeta. [deducido] Puede ser un logo. Raster, sin abrir. |
| UE / FEDER | Logotipo de financiación | …/CECOAGRO/union-europea-feder-48px.png; …/CECOAGRO/…(561 B) | png | [visto] Logotipos de financiación europea. |

### 6.2 Logos - TODO / subvenciones (`Logos - TODO/logos y sacos antiguos/Logos (1)/logos subvenciones/`) — [visto]

Ruta correcta: el fichero de 01 la cita como `Logos - TODO/Logos (1)/`; la ruta real incluye «logos y sacos antiguos». Ver apartado 7.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| FEDER / Xunta | Logotipos de financiación | …/logos subvenciones/projectes-feder-logo.jpg | jpg (38 KB) | [visto] Logo FEDER. |
| Xunta (Axencia de Innovación) | Logotipo de financiación | …/logos subvenciones/XUNTA-2-Axencia-Inn-positivo.jpg | jpg (154 KB) | [visto] Nombre parcial «Axencia-Inn». [deducido] Agencia gallega de innovación. |
| Sin marca | Imagen sin nombre | …/logos subvenciones/10000000000006EC0000049D788E97EA6CD056CC.jpg | jpg (112 KB) | [visto] Nombre automático: no se sabe qué es. |

Son logos de entidades que financian, no de la empresa.

### 6.3 Logos - TODO / logos grupo / anuncios (5,3 MB) — [visto]

Ruta correcta: `Logos - TODO/logos y sacos antiguos/logos grupo/anuncios/`.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Todocampo | Anuncio (PDF) | …/anuncios/anuncio Todocampo.pdf | pdf (1,4 MB) | [visto] |
| Aresa | Anuncio 250 × 69 mm (PDF) | …/anuncios/Aresa_250x69mm.pdf | pdf (1,5 MB) | [visto] Tamaño del anuncio en el nombre. Formato de banner horizontal. |
| Aresa | Foto para anuncio (PDF) | …/anuncios/foto aresa rábade.pdf | pdf (2,4 MB) | [visto] Foto de Rábade en un PDF. |

### 6.4 Logos - TODO / UMAN_Logo / PNM (124 KB) — [visto]

Ruta: `Logos - TODO/UMAN_Logo/PNM/`. Dos ficheros.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| PNM (no identificada) | Logotipo | …/UMAN_Logo/PNM/PN.jpg | jpg (111 KB) | [visto] Logotipo de «PN». [deducido] No se puede saber a qué marca pertenece «PNM» solo con el listado. |
| PNM | Logotipo (PNG) | …/UMAN_Logo/PNM/PN.png | png (12,8 KB) | [visto] Versión PNG del mismo logotipo. Raster. |

### 6.5 Logos - TODO / ARESA / ARESA_Logo nuevo_B&W y Negativos / ARESA — [visto]

Ruta: `Logos - TODO/ARESA/ARESA_Logo nuevo_B&W y Negativos/ARESA/`. Tres subcarpetas con variantes del logotipo nuevo de Aresa.

| Marca | Tipo | Ruta | Formatos | Observación |
|---|---|---|---|---|
| Aresa | Logotipo en negativo (B/N) | …/ARESA/B_N (negativo)/Aresa_Neg.jpg; Aresa_Neg.pdf | jpg (73 KB), pdf (499 KB) | [visto] Dos formatos. El PDF puede ser vectorial [deducido por el tamaño]: sin verificar. |
| Aresa | Logotipo en positivo (B/N) | …/ARESA/B_N (positivo)/Aresa_BN.jpg; Aresa_BN.pdf; Aresa_BN.png | jpg, pdf, png | [visto] Tres formatos. |
| Aresa | Logotipo en naranja negativo | …/ARESA/Naranja (Negativo)/Aresa_Orange.jpg; Aresa_Orange.pdf | jpg (110 KB), pdf (499 KB) | [visto] Variante en naranja. |

Esta carpeta es la única con PDF de logos de Aresa en versión monocroma. Es candidata a arte final de logo, a falta de verificar si son vectoriales.

---

## 7. Correcciones a `01-marketing.md`

1. La ruta de `logos subvenciones` es `Logos - TODO/logos y sacos antiguos/Logos (1)/logos subvenciones/`, no `Logos - TODO/Logos (1)/`.
2. La ruta de `logos grupo/anuncios` es `Logos - TODO/logos y sacos antiguos/logos grupo/anuncios/`.
3. `TODOCAMPO/Diseños Superfauna/diseños sacos/` NO contiene material de champú ni de Superfauna: contiene sacos de abono (FABRISA; ver 5.2). Lo que sí es de Superfauna en esa zona son los PNG del nivel superior.
4. `ARESA_Logo nuevo_B&W y Negativos/ARESA/` ya está explorada (apartado 6.5). Tiene PDF y JPG en negativo, positivo y naranja.
5. `AVANTIS/Packaging` tiene 28 ficheros, todos de pienso para perros y gatos. No hay sacos de ganadería (ver apartado 3).
6. `Videos/Video AGEF` son 2 ficheros (820 MB en total), no un contenedor sin explorar.
7. Las subcarpetas de `Digital/` ya están listadas, un nivel más.

---

## 8. Lo que quedó sin poder leer

1. **ARESA-AGRICOLA, entradas 1.001 en adelante** (unas 186 según el conector). El listado solo expone 1.000. No es un 429: es el límite de paginación. Para verlas hay que buscarlas por nombre o por ruta.
2. **Digital/Esgalla/AUTO_EmailsPDF/** (8,8 MB) y **Digital/Esgalla/Flujos Expandi Supermercados España/** (35 KB): carpetas de segundo nivel, no expandidas. Están marcadas como [visto] solo en su existencia.
3. **Contenido de los ficheros** (no abiertos por norma): los dos vídeos de AGEF, los PDF de Avantis y Elogia, `RocketPlace/AVANTIS.pdf` (287 MB), los `.art` y `.fh9` de FABRISA, los PDF de logos de Aresa, `Comet.pdf`, y los ZIP de la pasada anterior (`CECOAGRO_Logo.zip`, `Formatos_logo.zip`, `ARESA_Firma Editable.zip`).
4. **Fichero `…ICINAS ARESA.mp4`** (Video AGEF): nombre cortado en el listado.
5. **Fichero `Anuncio…Cura.jpg`** (Diseños para publicidad): nombre cortado en el listado.
6. **Ficheros con nombre automático** (`10000000000006EC…jpg`): no se sabe qué son.

---

## 9. Fuera de alcance (vistos en las búsquedas, NO abiertos)

Las búsquedas por nombre devolvieron resultados de otras bibliotecas. No se han abierto ni incluido en el inventario de MARKETING:

- Una copia de la carpeta `Diseños Superfauna/diseños sacos` (con ART y FH) en un OneDrive personal de otra cuenta, dentro de «Diseños varios». Es un duplicado probable de la de MARKETING.
- Una carpeta «anuncios» en la biblioteca DROPBOX y otra en MARKETING (esta última ya inventariada en 6.3).
- Un vídeo `AvantisPet_ecosistema_2026-09.mp4` en la biblioteca COMERCIAL (fecha de modificación de septiembre de 2026 según el listado).
