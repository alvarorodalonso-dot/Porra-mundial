# Inventario de recursos gráficos — biblioteca MARKETING (SharePoint)

Inventario de SOLO LECTURA. Nada se ha escrito, movido ni borrado en SharePoint.
Fuente: listados `read_resource` del conector (carpetas y metadatos) y lectura de los dos PDF indicados.

Convención: **[visto]** = dato devuelto por el listado o por el PDF. **[deducido]** = inferencia a partir del nombre o de la carpeta.

Cobertura: se han listado todas las carpetas de ARESA, CECOAGRO, Logos - TODO, TODOCAMPO, Firmas correos, Redes Sociales y Presentaciones empresas. Hay carpetas sin recorrer; están marcadas como «no explorado» en el árbol y en el apartado 4. Las llamadas al conector se limitaron varias veces por el límite de Microsoft Graph (HTTP 429), por eso algunas subcarpetas grandes quedan sin abrir.

---

## 1. Árbol resumido (tamaños y número de ficheros aproximados)

Tamaños [visto] en el listado. Número de ficheros: [visto] cuando se listó la carpeta completa; [deducido] en el resto.

```
MARKETING/  (~2,7 GB en total)  [visto]
│
├── ARESA/  (~661 MB; ~1.380 ficheros, [deducido] ~800 sin listar)
│   ├── Diseños Premio 24/  (4 MB; 2 ficheros)  [visto]
│   ├── Imagenes instalaciones/  (144 MB)  [visto]
│   │   ├── Lugo/  (4,7 MB; 2 jpg)  [visto]
│   │   └── Rabade/  (140 MB; 36 ficheros: DSC_* jpg/pdf y Fachada*)  [visto]
│   ├── IMAGENES WEB ARESA/  (502 MB)  [visto]
│   │   ├── ARESA-AGRICOLA/  (478 MB; 1.000 entradas; solo 200 leídas)  [visto]
│   │   ├── CECOAGRO/  (20 MB; 238 entradas; 200 leídas)  [visto]
│   │   └── PROTECH/  (3,4 MB; ~60 ficheros, sobre todo derivados web)  [visto/deducido]
│   ├── Packaging/  (10 MB; 13 ficheros)  [visto]
│   └── 4 jpg sueltos (campus, valores)  [visto]
│
├── Logos - TODO/  (~90 MB; ~230 ficheros, [deducido])  [visto]
│   ├── ARESA/  (9 MB; 4 subcarpetas: 50 aniv, viejo, nuevo, nuevo_B&W y Negativos)  [visto]
│   ├── logos y sacos antiguos/  (56 MB; 11 subcarpetas, todas leídas)  [visto]
│   ├── O Santo/  (1,9 MB; Formatos_logo/ + 2 ficheros)  [visto]
│   ├── UMAN_Logo/  (3,9 MB; subcarpetas Uman y PNM)  [visto]
│   └── Sueltos: CECOAGRO_Logo.zip, Emblema Equinova (bmp/jpg), Logo Equinova (bmp/jpg),
│       LogoGrupoAresa.pdf, Logos marcas PET.lnk  [visto]
│
├── Presentaciones empresas/  (~411 MB; 8 ficheros, sin subcarpetas)  [visto]
│
├── Digital/  (~362 MB; solo 1 nivel)  [visto]
│   ├── Elogia/ (11 MB), Esgalla/ (19 MB), Goodbuy/ (3 MB), RocketPlace/ (287 MB)  [no explorado]
│   └── 6 ficheros sueltos (xlsx y PDF de propuestas; el PDF de La Pata pesa 40,6 MB)  [visto]
│
├── Videos/  (~1.111 MB; solo 1 nivel)  [visto]
│   ├── Video AGEF/ (820 MB)  [no explorado]
│   └── Aresa V6_Presentacion.mp4 (291 MB)  [visto]
│
├── AVANTIS/  (~38,5 MB; solo 1 nivel)  [visto]
│   ├── Packaging/ (29 MB)  [no explorado]
│   └── AVANTIS PET_Lona_300x300cm.pdf; AVANTIS_Catalogo piensos ganaderia_Folleto_02.pdf  [visto]
│
├── CECOAGRO/  (~20 MB; 16 ficheros en total)  [visto]
│   ├── Campaña maíz 2024/ (5,5 MB; 3 PDF, ver apartado 2)  [visto]
│   ├── Imagenes instalaciones/ (11 MB; 12 jpg)  [visto]
│   └── Mascotas/ (3,2 MB; 1 pptx)  [visto]
│
├── TODOCAMPO/  (~15,5 MB)  [visto]
│   ├── Diseños nave/ (11 MB; subcarpeta Diseños para publicidad 4,7 MB no explorada; 14 ficheros)  [visto]
│   └── Diseños Superfauna/ (4,3 MB; subcarpeta diseños sacos 3,3 MB no explorada; 9 ficheros)  [visto]
│
├── Firmas correos/  (~9 MB)  [visto]
│   ├── UMAN_Firma correo/ (8,4 MB; 8 ficheros)  [visto]
│   └── ARESA_Firma Editable.zip (0,65 MB)  [visto]
│
├── Redes Sociales/  (~6,4 MB)  [visto]
│   ├── Linkedin - reportes/ (2 MB; 1 PDF)  [visto]
│   └── Post RRSS/ (4,4 MB; 18 ficheros)  [visto]
│
└── Sueltos en la raíz  [visto]
    CECOAGRO_ARQUITECTURA DE MARCApdf.pdf (8,3 MB), Pptos renovación material Premio 2024.xlsx (2,4 MB),
    Presupuesto y proyectos_ ANONIMO - Rebranding.pdf (2,5 MB), Apuntes ideas Marketing.pptx (1,2 MB),
    AvantisPET material todas marcas.lnk (1,5 KB, acceso directo, no es un recurso)
```

---

## 2. Tabla de recursos gráficos relevantes

Las rutas son relativas a MARKETING/. La fecha de modificación **no aparece en ningún listado** (el conector no la devuelve); cuando aparece algo parecido, es una pista en el nombre y se indica como [deducido].

### 2.1 Logotipos y variantes de marca

| Marca | Tipo | Ruta | Formatos | Fecha de modificación | Observación |
|---|---|---|---|---|---|
| Aresa (grupo) | Logotipo | Logos - TODO/ARESA/ARESA_Logo viejo/Aresa.eps, .jpg, .pdf, .png | eps, jpg, pdf, png | No aparece | Carpeta "viejo": [deducido] antiguo. Tiene EPS (vectorial). |
| Aresa (grupo) | Logotipo | Logos - TODO/ARESA/ARESA_Logo nuevo/Logo_Aresa/Aresa.eps, .jpg, .pdf, .png | eps, jpg, pdf, png | No aparece | Carpeta "nuevo": [deducido] vigente. Tiene EPS (vectorial). |
| Aresa | Variantes B&W y negativos | Logos - TODO/ARESA/ARESA_Logo nuevo_B&W y Negativos/ARESA/ (B_N (negativo), B_N (positivo), Naranja (Negativo)) | carpetas, sin abrir | No aparece | Variantes monocromas y en negativo. Contenido no explorado. |
| Aresa 50 aniversario | Logotipo conmemorativo | Logos - TODO/ARESA/ARESA_Logo 50 aniv/ (Aresa50.eps, Aresa50.pdf, Logo 50 Aniversario 1–5.pdf, 1–8.jpg) | eps, pdf, jpg | No aparece | Versión de aniversario: [deducido] no es el logo de uso general. |
| Grupo Aresa | Logotipo (1 página) | Logos - TODO/LogoGrupoAresa.pdf | pdf | No aparece | Único logo de grupo en PDF en la raíz de Logos. El conector no extrae texto ni colores. Ver apartado 3. |
| Grupo Aresa | Logotipo | Logos - TODO/logos grupo/ (Logo Grupo Aresa.pdf, Aresa.eps, Aresa.pdf) | pdf, eps | No aparece | Hay dos PDF distintos que se llaman casi igual (Logo Grupo Aresa.pdf 417 KB; LogoGrupoAresa.pdf 515 KB). Versiones distintas [visto por tamaño]. |
| Aresa | Logotipo con sombreado | Logos - TODO/logos grupo/Aresa_Logo con somreado verde.pdf (sic) | pdf | No aparece | Nombre con errata ("somreado"). |
| Aresa | Logotipo (cabecera de prensa) | Logos - TODO/logos/logotipo aresa.doc; logo granova.doc | doc | No aparece | Ficheros Word con logotipo incrustado: no son arte final. |
| Aresa / Logos Vectoriales | Logotipo vectorial | Logos - TODO/logos/Logos_Vectorial.eps y Logos_Vectorial.pdf | eps, pdf | No aparece | Vectorial [visto por extensión]. Sin indicación de qué marcas contiene (no abierto). |
| Cecoagro | Logotipo | Logos - TODO/Logos (1)/Cecoagro.jpg; logos grupo/CecoColor.jpg; CECOAGRO_Logo.zip (raíz de Logos) | jpg, zip | No aparece | Solo raster visto. El ZIP puede contener vectoriales: no abierto. |
| Equinova | Emblema y logotipo | Logos - TODO/Emblema Equinova.bmp y .jpg; Logo Equinova.bmp y .jpg | bmp, jpg | No aparece | BMP (mapa de bits). Sin vectorial visto. Aparece también en sacos de Verdenatur (2822_EQUINOVA25kgs). |
| Agroland | Logotipo | Logos - TODO/Logos (1)/Agroland.pdf; logos grupo/agroland.doc | pdf, doc | No aparece | Sin EPS/AI/SVG visto. |
| Fertiland | Logotipo | Logos - TODO/Logos (1)/Fertiland.jpg; Fertiland_Eco.jpg | jpg | No aparece | Sin vectorial visto. Fertiland_Eco: variante ecológica [deducido por nombre]. |
| Nitroland | Logotipo | Logos - TODO/Logos (1)/NitroLand.pdf | pdf | No aparece | Sin vectorial visto. |
| Forestland | Logotipo | Logos - TODO/Logos (1)/Forestland.jpg | jpg | No aparece | Sin vectorial visto. |
| Nutriland | Logotipo | Logos - TODO/Logos (1)/Nutriland.jpg | jpg | No aparece | Marca no citada en el PDF de arquitectura. |
| Fertimón | Logotipo | Logos - TODO/logos y sacos antiguos/fertimón/logofertimon.jpg; logo ferti.jpg | jpg | No aparece | Sin vectorial visto. |
| Fertimax | Logotipo y sacos | Logos - TODO/logos y sacos antiguos/ (Fertimax 2009.pdf; FERTIMAX nac 27.PDF; Fertimax SACO Blanco 2009.fh10; Fertimax SACO Rojo 2009.fh10; L M 304/311 FERTIMAX*.pdf) | pdf, fh10 | No aparece | .fh10 = FreeHand 10 (vectorial, formato antiguo) [deducido]. Nombres con año 2009 [deducido] antiguos. |
| Verdenatur | Logotipo | (no se ve ningún logotipo propio) | — | — | HUECO. Solo aparecen pantone VerdeNatur.pdf, Silonatur.pdf y sacos. Ver apartado 4. |
| Protech | Logotipo | Logos - TODO/Logos (1)/Protech.jpg | jpg | No aparece | Sin vectorial visto. |
| Avantis | Logotipo | Logos - TODO/logos grupo/LogoAvantis.jpg | jpg | No aparece | Tamaño 5 KB [visto]: probablemente baja resolución [deducido]. Sin vectorial visto. |
| Uman | Logotipo | Logos - TODO/UMAN_Logo/Uman/Uman.pdf, Uman_Blanco.psd, Uman_Negro.psd; Logos - TODO/UMAN_Logo/ Logo uman_Previo.pdf | pdf, psd | No aparece | "Previo" = versión anterior [deducido]. PSD: fuente editable (raster con capas). |
| O Santo | Logotipo | Logos - TODO/O Santo/Formatos_logo/O_Santo.eps, O_Santo.jpg, O_Santo.png; O Santo/O_Santo02.pdf; O Santo/Formatos_logo.zip | eps, jpg, png, pdf, zip | No aparece | Único conjunto con EPS visto junto a formatos de uso. El ZIP no abierto. |
| Granova | Logotipo y pantone | Logos - TODO/logos/logo granova.doc; Logos - TODO/logos y sacos antiguos/pantone logo granova.pdf | doc, pdf | No aparece | Marca no citada en el PDF de arquitectura. Logo solo en Word. |
| Todocampo | Logotipo | Logos - TODO/logos grupo/todocampo.pdf; todocampo-c.jpg | pdf, jpg | No aparece | Sin vectorial visto. |
| Superfauna | Logotipo (positivo y negativo) | TODOCAMPO/Diseños Superfauna/Logo Superfauna pos.png; Logo Superfauna neg.png | png | No aparece | Solo raster. Marca de mascotas [deducido]. |
| PetLife | Logotipo / imagen | Logos - TODO/logos grupo/PetLife01.jpg | jpg | No aparece | Marca no citada en el PDF de arquitectura. |

### 2.2 Packshots, láminas de saco y etiquetas

| Marca | Tipo | Ruta | Formatos | Fecha de modificación | Observación |
|---|---|---|---|---|---|
| Agroland | Packshot (recortado, sin fondo) | IMAGENES WEB ARESA/ARESA-AGRICOLA/agroland-15-15-15-no-bg.png; agroland-8-24-16-no-bg.png; agroland-n27-no-bg.png (+ variantes -300x300) | png | No aparece | Recortes sin fondo: útil para composiciones. Derivados web en varios tamaños. |
| Agroland / Fertiland | Lámina de saco | Logos - TODO/logos y sacos antiguos/diseños agroland-fertiland/ (Saco Cal Agroland.pdf; Saco Maiz def.pdf; Saco Patata def.pdf; Saco Pradera def.pdf; Saco Viña def.pdf; pantones fertiland.doc) | pdf, doc | No aparece | Nombre "def." = definitivo [deducido]. El PDF de arquitectura asigna FERTILAND a "pradera, maíz, patata y viña" [visto en PDF]: estos sacos serían de Fertiland [deducido]. |
| Fertimax | Lámina de saco (antiguo) | Logos - TODO/logos y sacos antiguos/ (0407388_FERTIMAX_8_24_16_PB3.pdf; Fertimax 2009.pdf; FERTIMAX nac 27.PDF) | pdf | No aparece | Antiguos [deducido por el año 2009 y "PB3"]. |
| Verdenatur | Lámina de saco / etiqueta | Logos - TODO/logos y sacos antiguos/diseños verdenatur/ (2699 abono VERDENATUR .p1.PDF; 2822_EQUINOVA25kgs definitivo.PDF; 2823 genérico VERDENATUR 40kgs.PDF; 2824 generico VERDENATUR 25kg.PDF; genérico verdenatur.pdf; abono verdenatur.pdf; equinova.pdf) | pdf | No aparece | Nombres con código numérico de pedido/referencia [deducido]. Varios sacos con el mismo código base. |
| Verdenatur | Imagen de animal (sacos) | Logos - TODO/logos y sacos antiguos/diseños verdenatur/ (aves verdenatur.jpg; conejos verdenatur.jpg) | jpg | No aparece | Imágenes de especie para sacos. |
| Fertimón | Lámina de saco | Logos - TODO/logos y sacos antiguos/fertimón/ (Fertimón 2265409314a 15-15-15 DELANTE.pdf; Fertimón NAC 2265400293a-v3.pdf) | pdf | No aparece | "v3" = tercera versión [visto en nombre]. |
| European / Fertimón (NAC 27%) | Lámina de saco | Logos - TODO/logos y sacos antiguos/emilio enero 2011/ (EUROPEAN 15-15-15 …; EUROPEAN NAC 27% ABRIL 2009; FERTIMON 15-15-15 26.02.10; FERTIMON NAC 27% ABRL 2009; FERTIBERIA 15-15-15 18.12.09; FERTIMAX NPK 15.15.15 …) | pdf | No aparece | Subcarpeta "emilio enero 2011" pero con ficheros de 2009–2010 [visto]. Antiguos. |
| European | Lámina de saco | Logos - TODO/logos y sacos antiguos/european/ (european 15-15-15 2265400418r.pdf; european NAC 2265400519a.pdf) | pdf | No aparece | Antiguo [deducido]. |
| Naturcor | Imagen de producto | Logos - TODO/logos y sacos antiguos/NATURCOR/ (DTS- NATURCOR CEREAL REV 2.jpg; DTS- NATURCOR RURAL REV 2.jpg) | jpg | No aparece | "REV 2" = revisión 2 [visto en nombre]. Sin logotipo propio visto. |
| Hydroland | Imagen de envase | ARESA/Packaging/Bidon_Hydroland.jpg | jpg | No aparece | Único envase de Hydroland visto. |
| Nitroland | Imagen de envase | ARESA/Packaging/Nitroland.jpg | jpg | No aparece | |
| Calcimax | Imagen de envase | ARESA/Packaging/Calcimax.jpg | jpg | No aparece | Coincide con CALCIMAX en la columna ARESA del PDF. |
| Fertimon / Fertimón | Imagen de envase | ARESA/Packaging/Fertimon_9.8.17.jpg; Fertimon_Cloruro.jpg; Fertimon_DAP.jpg | jpg | No aparece | Tres fotos de producto/envase. Fecha en el nombre "9.8.17" [deducido: 2017]. |
| Agroland | Imagen de envase | ARESA/Packaging/Cereales_Agroland.jpg | jpg | No aparece | |
| Protech | Imagen de envase | ARESA/Packaging/Protech_Plus.jpg | jpg | No aparece | |
| Varios (maíz, patata, pradera, viña) | Imagen de envase / saco | ARESA/Packaging/MAIZ.jpg; PATATAS.jpg; PRADERA.jpg; VIÑA.jpg | jpg | No aparece | Coinciden con los cuatro cultivos del PDF de arquitectura (FERTILAND). Marca no identificada en el listado [deducido]. |
| Big bags | Arte final / PDF | ARESA/Packaging/BigBags_Final-Julio 2024.pdf | pdf | Julio 2024 [visto en nombre] | Único "Final" de 2024 visto. Es el más reciente de Packaging. |
| Superfauna | Láminas de saco (champú, productos) | TODOCAMPO/Diseños Superfauna/diseños sacos/ (no explorado) + Champu 01–04.jpg; Etiquetas champús.pdf | jpg, pdf | No aparece | Etiquetas de champú: [visto]. |
| Mascotas | Presentación de rotulación | CECOAGRO/Mascotas/Rotulaciones clientes perros Nov-24.pptx | pptx | Nov-2024 [visto en nombre] | Rótulos para clientes de perros. |
| Protech | Díptico y formato | CECOAGRO/Campaña maíz 2024/ (Díptico_Protech.pdf; Díptico_Protech_PT.pdf; Protech_200x280mm.pdf) | pdf | No aparece | Ojo: están en la carpeta "Campaña maíz 2024". Ver apartado 4. |
| Uman | Logotipo y firma | Logos - TODO/UMAN_Logo/ ; Firmas correos/UMAN_Firma correo/ | pdf, psd, jpg | No aparece | La marca Uman no aparece en el PDF de arquitectura. |

### 2.3 Presentaciones, dossieres y piezas corporativas

| Marca | Tipo | Ruta | Formatos | Fecha de modificación | Observación |
|---|---|---|---|---|---|
| Cecoagro | Presentación | Presentaciones empresas/CECOAGRO.pptx | pptx (25 MB) | No aparece | Presentación de empresa, la más pesada tras la de empresa familiar. |
| Aresa | Dossier | Presentaciones empresas/Dossier_Aresa.pdf; Dossier_Aresa_ING.pptx | pdf, pptx | No aparece | Versión en inglés = pptx (editable). |
| Grupo Aresa | Dossier | Presentaciones empresas/Dossier_GrupoAresa_01 (ESP).pdf; Dossier_GrupoAresa_02 (ESP).pdf | pdf | No aparece | Dos entregas numeradas. |
| Grupo Aresa | Presentación | Presentaciones empresas/Presentación Grupo ARESA 2022.pptx | pptx | 2022 [visto en nombre] | Vigencia: [deducido] antigua respecto a 2024. |
| Grupo Aresa | Presentación (322 MB) | Presentaciones empresas/GRUPO ARESA-empresa familiar en las aulas.pptx | pptx | No aparece | Fichero muy pesado (322 MB): posiblemente con vídeos o imágenes sin comprimir. |
| Fertilizantes | Presentación comercial | Presentaciones empresas/Reunión Comercial Área Fertilizantes - Febreiro 2019.pdf | pdf | Feb-2019 [visto en nombre] | Antiguo. |
| Premio Aresa | Lona / cartel | Logos - TODO/logos grupo/lona Premio Aresa.pdf | pdf | No aparece | |
| Premio Aresa | Diseños | ARESA/Diseños Premio 24/Desktop_Display.pdf; Totem3.pdf | pdf | No aparece | Premio 24 [visto en nombre]. Totem de exposición. |
| Avantis Pet | Lona | AVANTIS/AVANTIS PET_Lona_300x300cm.pdf | pdf | No aparece | |
| Avantis | Catálogo | AVANTIS/AVANTIS_Catalogo piensos ganaderia_Folleto_02.pdf | pdf | No aparece | "Folleto_02": segunda versión [deducido]. |
| Avantis | Propuesta comercial | Digital/Propuesta Avantis Pet Food - La Pata abril de 2024.pdf | pdf (40,6 MB) | Abril 2024 [visto en nombre] | Propuesta de agencia: pesa 40 MB. |
| Cecoagro | Arquitectura de marca | CECOAGRO_ARQUITECTURA DE MARCApdf.pdf (raíz) | pdf | No aparece | Ver apartado 3. |
| Cecoagro / Premio | Hoja de cálculo de renovación de premio | Pptos renovación material Premio 2024.xlsx (raíz) | xlsx | 2024 [visto en nombre] | Presupuesto (no gráfico). |

### 2.4 Firmas de correo

| Marca | Tipo | Ruta | Formatos | Fecha de modificación | Observación |
|---|---|---|---|---|---|
| Uman | Firma de correo | Firmas correos/UMAN_Firma correo/ (Firma.pdf; Firma_editable.pdf; Firma_editable_MJ.pdf; Firma_ALQUILER.jpg; Firma01.jpg; Firma02.jpg; Firma1.jpg; Firma2.jpg) | pdf, jpg | No aparece | Hay dos versiones "editable" (con y sin iniciales "MJ"). Versión con "ALQUILER" [visto en nombre]: firma específica. |
| Aresa | Firma de correo editable | Firmas correos/ARESA_Firma Editable.zip | zip | No aparece | Contenido no abierto. Es el único "editable" de Aresa visto. |

### 2.5 Fotografías de instalaciones y producto

| Marca | Tipo | Ruta | Formatos | Fecha de modificación | Observación |
|---|---|---|---|---|---|
| Aresa | Foto de instalaciones | ARESA/Imagenes instalaciones/Rabade/ (36 ficheros, DSC_0135 a DSC_0236; Fachada01.jpg; Fachada02.pdf) | jpg, pdf | No aparece | Originales de cámara (2–5 MB por foto). Fachada02.pdf y Fachada02_Sin locomotora.pdf tienen el mismo tamaño (3.466.073 B): posible duplicado. |
| Aresa | Foto de instalaciones | ARESA/Imagenes instalaciones/Lugo/ (DSC_0176.jpg; DSC_0186.jpg) | jpg | No aparece | Originales de cámara. |
| Cecoagro | Foto de instalaciones | CECOAGRO/Imagenes instalaciones/ (Cecoagro 1.jpg; Cecoagro 2.jpg; Cecoagro 3.jpg; IMG-2019…WA0001–0008; IMG-2020…WA0006, WA0008) | jpg | No aparece | Las fotos IMG-… son de WhatsApp (sufijo WA): baja calidad probable [deducido]. |
| Aresa | Fotos de campaña / premio | IMAGENES WEB ARESA/ARESA-AGRICOLA/ (aresa_premiado*.jpg; aresa2024_abril1/2*.jpg; aresa2024_entrega-*.jpg; aresa2024_presidencia*.jpg; aresa2024_publico*.jpg; aresa2.jpg–aresa4.jpg; aresa5.jpg) | jpg | 2024 [visto en nombre] | Muchos derivados de la misma foto (ver apartado 4). |
| Agroland / Cecoagro / Fertiland | Imágenes web (productos, servicios) | IMAGENES WEB ARESA/ARESA-AGRICOLA/ (agroland-cal.png; agroland-cereales.jpg; agroland-hilo-film.png; agroland-jardineria.jpg; agroland-semillas.jpg; …) y IMAGENES WEB ARESA/CECOAGRO/ (agroland-*.png, cecoagro-reacciona-2022*.png) | jpg, png | No aparece | Imágenes publicadas en web. Hay varios tamaños de la misma foto. |
| Protech | Vídeo corto (web) | IMAGENES WEB ARESA/PROTECH/protech-home-bg.mp4 | mp4 (1,3 MB) | No aparece | Fondo de inicio de la web de Protech. |
| Aresa | Vídeo corporativo | Videos/Aresa V6_Presentacion.mp4 | mp4 (291 MB) | No aparece | "V6": sexta versión [deducido]. |
| Aresa | Carpeta de vídeo | Videos/Video AGEF/ | — | No aparece | 820 MB sin explorar. |

---

## 3. Resumen de los dos PDF

### 3.1 `CECOAGRO_ARQUITECTURA DE MARCApdf.pdf` (raíz de MARKETING, 8,3 MB)

Texto extraído (solo el texto; el conector no devuelve colores, tipografías ni imágenes):

- **Índice:** 01 Antecedentes; 02 Tipos de arquitecturas de marca; 03 Propuesta.
- **Antecedentes [visto]:** marca empresa Cecoagro con categorías de fertilizantes, fitosanitarios, enmiendas calizas, cereales, jardinería, piensos ganadería, higiénico-sanitarios, ensilaje, semillas y piensos mascotas. Productos citados: FERTILAND ("Fertilizantes para pradera, maíz, patata y viña"), FERTILAND ("Fertilizante específico para planta forestal"), NITROLAND ("Fertilizantes líquidos"), HYDROLAND ("Fertilizantes solubles"), FERTILAND ECO ("Fertilizantes con certificación ecológica").
- **Tipos de arquitectura de marca [visto]:** 1. Marcas independientes ("mantener la autonomía de sus marcas secundarias"); 2. Apoyo de marca ("mantiene la marca principal presente en cada una de las marcas secundarias"); 3. Modelo monolítico ("se sustenta en la marca principal"); 4. Modelo híbrido ("mezcla entre el modelo monolítico y el de marcas independientes"). Ejemplos citados (externos a la empresa): INDITEX, HIJOS DE RIVERA, NESTLÉ, KELLOGG´S, FEDEX, GOOGLE, DISNEY, COCA-COLA.
- **Propuesta [visto]:** "agrupar y simplificar", "Creando una arquitectura híbrida":
  - Fertilizantes bajo la marca **Fertiland**.
  - Productos agrícolas bajo la marca **Agroland**.
  - Piensos (no mascotas) como **Avantis**.
  - Subgrupos citados: NITRO/SOLUBLE, HIDRO/LÍQUIDO, FORESLAND/FORESTAL, ENMIENDAS/CALIZAS, GARDEN, HIGIÉNICO/SANITARIO. Columnas "MARCA CLIENTE PARA DETERMINADAS ZONAS EN COMPETENCIA" y "CABALLOS".
  - **ARESA** aplicará el mismo modelo. Marcas citadas en su columna: VITTA+, FERTILAND ECO, GARDEN, FORESLAND/FORESTAL, PROTECH, EXPERTISE, CALCIMAX (enmiendas/calizas), y las categorías de fertilizantes convencionales, especiales, líquidos, solubles, ecológicos y orgánicos.
  - Ventajas citadas: "más dinámica y ágil"; las marcas individuales "mantengan su identidad mientras están conectadas a la marca principal".
- **Lo que NO aparece en el texto extraído:** códigos de color (HEX, CMYK, Pantone), tipografías, versiones del logotipo y normas de uso. Puede que estén en imágenes o en páginas que el conector no transcribe. No hay que deducirlos del texto.

### 3.2 `LogoGrupoAresa.pdf` (Logos - TODO, 515 KB)

- Una página. El conector no extrae texto: "No text could be extracted from this one-page file" [visto].
- No es posible resumir su contenido de identidad (colores, tipografías, versiones, normas) con los datos disponibles. Para verlo hay que abrirlo desde su enlace en SharePoint.

---

## 4. Duplicados, carpetas confusas y huecos

### 4.1 Duplicados evidentes (mismo nombre base y mismo tamaño en bytes) [visto]

- `ARESA/IMAGENES WEB ARESA/ARESA-AGRICOLA/`: `aresa_premiado.jpg` = `aresa_premiado-1.jpg` (1.960.727 B). El mismo patrón en `aresa_premiado-1200x800`, `-1536x1024`, `-2048x1365`, `-715x477`, `-768x512`, `-300x300`, `-scaled`: cada uno aparece dos veces, con y sin "-1".
- `ARESA-AGRICOLA/`: `aresa2024_entrega-2.jpg` = `aresa2024_entrega-2-1.jpg` (1.866.058 B); `aresa2024_entrega-2-scaled.jpg` = `aresa2024_entrega-2-1-scaled.jpg` (452.240 B).
- `ARESA/` raíz y `ARESA-AGRICOLA/`: `aresa-campus-terra-quienes somos.jpg` y `aresa-campus-terra.jpg` (68.323 B).
- `ARESA/` raíz y `Redes Sociales/Post RRSS/`: `aula-aresa-campus-terra.jpg` (104.014 B).
- `Redes Sociales/Post RRSS/`: `Fertilizantes-17.jpg` y `aresa-protech.jpg` (57.504 B cada uno): posible mismo fichero.
- `TODOCAMPO/Diseños nave/`: `Diseño nave.pdf` y `Rotulación nave.pdf` (194.835 B cada uno).
- `Logos - TODO/UMAN_Logo/Uman/Uman.pdf` y `Logos (1)/Uman.pdf` (423.932 B cada uno).
- `Imagenes instalaciones/Rabade/`: `Fachada02.pdf` y `Fachada02_Sin locomotora.pdf` (3.466.073 B cada uno).

### 4.2 Carpetas confusas

- `CECOAGRO/Campaña maíz 2024/`: contiene dípticos y un formato de **PROTECH**, no imágenes de maíz [visto].
- `Logos - TODO/Logos (1)/` contiene la subcarpeta "logos subvenciones" y 13 logotipos sueltos; `logos grupo/` contiene la subcarpeta "anuncios" y 16 ficheros. Los nombres no dicen qué es logo de uso y qué es material de anuncio.
- `Logos - TODO/logos y sacos antiguos/` mezcla sacos antiguos (Fertimax, Verdenatur, Fertimón, European), logotipos y un pantone de Granova.
- `Logos - TODO/ARESA/`: "ARESA_Logo viejo", "ARESA_Logo nuevo", "ARESA_Logo nuevo_B&W y Negativos" y "ARESA_Logo 50 aniv". Hay una carpeta "Logo_Aresa" dentro de "ARESA_Logo nuevo" y otra "ARESA" dentro de la de B&W: nombres repetidos a distintos niveles.
- `ARESA/Imagenes instalaciones/` y `CECOAGRO/Imagenes instalaciones/` tienen el mismo nombre con contenido distinto.
- `Packaging/` aparece en ARESA (13 ficheros) y en AVANTIS (29 MB, sin explorar).
- `Diseños nave` contiene `Diseños para publicidad` (4,7 MB) y `Diseños Superfauna` contiene `diseños sacos` (3,3 MB): carpetas anidadas sin explorar.
- `UMAN_Logo/PNM/`: no se sabe a qué marca pertenece PNM. No explorada.
- `Mascotas` (CECOAGRO) tiene un solo PPTX, pero las marcas de mascotas (Superfauna, PetLife, Piensos mascotas del PDF) están repartidas en TODOCAMPO, Logos y CECOAGRO.
- `ARESA-AGRICOLA/` (478 MB) tiene 1.000 entradas en una sola carpeta, mezcla originales y derivados web (sufijos -300x300, -715x477, -1200x800…). Sin catálogo no se puede saber cuál es vigente.
- Ficheros acceso directo `.lnk` (`Logos marcas PET.lnk`, `AvantisPET material todas marcas.lnk`): no son recursos, son enlaces a rutas de otros equipos.

### 4.3 Huecos

- **Ninguno de los listados contiene `.ai`, `.svg` ni `.indd`.** Las extensiones vectoriales vistas son solo `.eps` (Aresa, Aresa50, O_Santo, Logos_Vectorial) y `.pdf` [visto]. Los `.fh10` (FreeHand) son vectoriales de un software antiguo.
- **Vectorial visto:** Aresa (2 versiones: viejo y nuevo), Aresa 50 aniv, Logos_Vectorial, O Santo. **Sin vectorial visto:** Agroland, Fertiland, Nitroland, Forestland, Nutriland, Fertimón, Cecoagro (solo jpg; el ZIP sin abrir), Equinova (bmp/jpg), Protech, Avantis (LogoAvantis.jpg de 5 KB), Uman (pdf y psd), Todocampo, Superfauna (png), Granova, PetLife.
- **Verdenatur:** no hay logotipo propio en el listado. Solo pantone VerdeNatur.pdf, Silonatur.pdf y sacos.
- **Naturcor:** solo dos jpg de producto (DTS-NATURCOR). No hay logotipo visto.
- **Fotos de producto para Nitroland, Hydroland y Verdenatur:** solo un envase cada una (Hydroland, Nitroland) o ninguno (Verdenatur, salvo aves y conejos para sacos).
- **Manual de identidad:** no aparece ningún manual de marca. Solo el PDF de arquitectura, sin colores ni tipografías en el texto extraído.
- **Plantillas corporativas (Word, PowerPoint):** la única plantilla visible es la presentación de Aresa 2022 y los dossieres. No hay plantilla de carta ni de sobre.
- **Ficheros comprimidos sin abrir** (pueden contener vectoriales o arte final): `CECOAGRO_Logo.zip`, `Formatos_logo.zip` (O Santo), `ARESA_Firma Editable.zip`.
- **Fechas de modificación:** ningún listado las devuelve. Las únicas referencias son años en el nombre (2009, 2010, 2017, 2019, 2022, 2024).

### 4.4 Lo que no se ha explorado (por límite de Microsoft Graph y por prioridad)

- `ARESA/IMAGENES WEB ARESA/ARESA-AGRICOLA/`: entradas 201 a 1.000 (de 1.000). Hay que pedir las páginas 2–5 con `startPage`.
- `ARESA/IMAGENES WEB ARESA/CECOAGRO/`: entradas 201 a 238.
- `ARESA/Logos…/ARESA_Logo nuevo_B&W y Negativos/ARESA/`: subcarpetas B_N (negativo), B_N (positivo), Naranja (Negativo).
- `Logos - TODO/Logos (1)/logos subvenciones` (304 KB), `Logos - TODO/logos grupo/anuncios` (5,3 MB) y `Logos - TODO/UMAN_Logo/PNM` (124 KB): no exploradas. `O Santo/Formatos_logo` sí se leyó (3 ficheros).
- `TODOCAMPO/Diseños nave/Diseños para publicidad` (4,7 MB) y `Diseños Superfauna/diseños sacos` (3,3 MB).
- `AVANTIS/Packaging` (29 MB).
- `Digital/` (Elogia, Esgalla, Goodbuy, RocketPlace) y `Videos/Video AGEF` (820 MB): solo a 1 nivel, como se pidió.

---

## 5. Notas para la renovación de sacos y artes finales

- Candidatos a sacos en vigor, por nombre: `Logos - TODO/logos y sacos antiguos/diseños agroland-fertiland/` (sacos "def."), `ARESA/Packaging/` (envases sin fecha salvo BigBags Julio 2024) y `TODOCAMPO/Diseños Superfauna/`. Hay que confirmarlo con diseño: el listado no da fechas.
- Lo que se ve como antiguo por nombre o año: `logos y sacos antiguos/` (2009–2010), `Presentación Grupo ARESA 2022`, `Reunión Comercial … Febreiro 2019`, `ARESA_Logo viejo`, `Logo uman_Previo.pdf`.
- Para logotipos en formato vectorial de trabajo, lo más cercano en el listado es `ARESA_Logo nuevo/Logo_Aresa/Aresa.eps` y `Logos - TODO/logos/Logos_Vectorial.eps`. Hay que comprobar qué marcas contiene el segundo, porque no se abrió.
- Para Agroland, Fertiland, Nitroland, Fertimón, Protech, Avantis, Cecoagro y Verdenatur no hay vectorial visto: hay que pedir los originales a diseño o revisar los ZIP.
