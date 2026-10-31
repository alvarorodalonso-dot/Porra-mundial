# Inventario de recursos gráficos Aresa / Cecoagro: resumen

> 31-oct-2026. Hecho en **solo lectura** con el conector de Microsoft 365: no se ha movido, escrito
> ni borrado nada en SharePoint. Cuatro agentes con un modelo económico (Haiku) prepararon el
> detalle; este resumen lo junta. El detalle, con rutas, está en:
> - `01-marketing.md`: biblioteca MARKETING
> - `02-dropbox-marketing-laminas.md`: DROPBOX/7. Marketing (láminas de sacos), 05. Marketing de
>   la carpeta compartida JAC&ICC y 4. Fichas Producto/Marketing
> - `03-biblioteca-aresa.md`: biblioteca ARESA
> - `04-cecoagro-produccion.md`: bibliotecas CECOAGRO y PRODUCCION
>
> **Límites del inventario:**
> - Se ha trabajado con nombres, formatos y tamaños de ficheros. No se ha abierto ningún diseño.
>   Solo se ha leído el texto de dos PDF.
> - El conector no devuelve fechas de modificación en los listados. Por eso, «vigente» o
>   «antiguo» se deduce del nombre o de la carpeta.
> - Microsoft limitó el número de peticiones (error 429), así que quedan zonas sin recorrer
>   (lista al final).
> - Los detalles fila a fila los escribieron los agentes y no se han revisado uno por uno.
>   Antes de tomar una decisión sobre un fichero concreto, conviene abrirlo.

## Dónde está el material

| Zona | ¿Material gráfico? | Qué hay |
|---|---|---|
| MARKETING (~2,7 GB) | **Sí, la principal** | Logotipos (Logos - TODO), fotos e imágenes de la web de Aresa, packshots de sacos (ARESA/Packaging), presentaciones y dosieres, vídeos, logos y sacos antiguos |
| DROPBOX/7. Marketing | **Sí, la de sacos** | `Diseño Envases/LAMINAS` (láminas de sacos en PDF), BIG BAGS, LOGOs, catálogos |
| DROPBOX/…/05. Marketing (JAC&ICC) | Sí | Diseños de envases y marcas y fichas de producto hechas con Inkscape (hay .ai, .eps y .svg) |
| PRODUCCION (~1 GB) | Parcial | Etiquetas: ~169 plantillas Word de código de barras por producto y cliente, etiquetas de abono (Aresa, Agroland/Entec) y etiquetas Clarisoft/Videojet con ~25 logotipos |
| ARESA | Casi nada | Fertilizantes (un catálogo de Fertiberia, de terceros) y subvenciones |
| CECOAGRO | Nada gráfico visto | Datos, fabricación, proyectos, certificación |

## Hallazgos clave

1. **Sacos: no hay originales editables de las láminas actuales.** Las láminas son todas PDF:
   - 2024: 28 láminas.
   - 2025: 11 de 25 kg, 4 de 40 kg y 1 de 5 kg.
   - Antiguas: unas 125.
   - Big bags: 11 PDF de 2024 y 2026.
   - De clientes: ~634 MB, ordenadas por formato.

   Solo hay editables sueltos y antiguos: Fertimax 2009 en FreeHand y Expertise NPK en Publisher.
   **Para renovar sacos habrá que pedir los originales a quien los diseñó o a la imprenta, o bien
   trabajar sobre el PDF.**
2. **Logotipos en vectorial: solo de Aresa.** Hay EPS del logo nuevo, del viejo y del 50
   aniversario, además de O Santo y una carpeta «Logos_Vectorial».
   - **No se ha visto vectorial** de Cecoagro (solo un `CECOAGRO_Logo.zip`, sin abrir), Fertiland,
     Agroland, Nitroland, Fertimón, Protech, Verdenatur, Naturcor ni Uman (de Uman hay PSD y PDF).
   - Este es el primer hueco que hay que cubrir para los manuales.
3. **No hay manual de identidad de ninguna de las dos empresas.**
   - El PDF `CECOAGRO_ARQUITECTURA DE MARCA` describe la **arquitectura de marcas**: propone un
     modelo híbrido con Fertiland para fertilizantes, Agroland para productos agrícolas y Avantis
     para piensos que no son de mascotas, y aplica el mismo modelo a Aresa. **No trae colores,
     tipografías ni normas de uso.**
   - `LogoGrupoAresa.pdf` no tiene texto que se pueda extraer.
   - Los colores y tipografías tendrán que sacarse de los logos y las láminas vigentes, y luego
     validarlos los responsables.
4. **Duplicados y desorden.**
   - Los mismos ficheros están en varias ubicaciones. Ejemplos: Agroland Garden 5 kg aparece en
     cuatro sitios y las láminas de 300823 coinciden con su carpeta «_revisadas».
   - La carpeta ETIQUETAS de PRODUCCION está anidada dos veces.
   - Hay un PDF de ~253 MB llamado «SEGUEMENTO» en las láminas antiguas.
   - Hay imágenes de la web de Aresa repetidas.
5. **Cecoagro tiene muy poco material propio** (~20 MB en MARKETING: campaña de maíz 2024, que en
   realidad son dípticos de Protech, instalaciones y mascotas).

## Qué implica para el plan

- **Fase 1 (inventario):** hecha a nivel de listado. Antes de ordenar nada, hay que confirmar con
  las personas de producción cuáles son las láminas vigentes y dónde están los originales.
- **Fase 2 (manuales):**
  - Primero hay que conseguir logos vectoriales de Cecoagro y de las submarcas.
  - La arquitectura de marcas ya está descrita en el PDF de Cecoagro.
  - Colores y tipografías: hay que fijarlos a partir del material vigente, con la aprobación de
    los responsables.
- **Fase 3 (ordenar):**
  - Las láminas vigentes (2025/2026) y los logos maestros deben ir a una estructura única,
    similar a `COMERCIAL/AvantisPET Graphic resources`.
  - Lo antiguo pasa a un archivo histórico sin borrarse.
  - Los duplicados se resuelven con aprobación.

## Zonas pendientes (no recorridas por el límite de peticiones o por tamaño)

- MARKETING:
  - `ARESA/…/ARESA-AGRICOLA`: solo se leyeron 200 de ~1.000 entradas.
  - `Videos/Video AGEF`.
  - `AVANTIS/Packaging`.
  - Subcarpetas de `Digital`.
  - Subcarpetas anidadas de `TODOCAMPO`.
- DROPBOX/7. Marketing/LOGOs:
  - Subcarpetas `Logos (1)`, `logos grupo`, `emilio`, `european`, `NATURCOR` y `ARESA`.
  - El resto de carpetas de primer nivel de DROPBOX.
- PRODUCCION: `ETIQUETAS ANTIGUAS` (~129 MB) y la carpeta de urea «lote».
- CECOAGRO: CERTIFICACIÓN, MANTTO, OBJETIVOS y Subvenciones (no se entró).
- ARESA: una carpeta de ~31 MB cuyo nombre no se pudo resolver.
