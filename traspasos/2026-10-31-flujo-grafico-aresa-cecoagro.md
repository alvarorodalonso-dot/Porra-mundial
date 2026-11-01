# Traspaso: flujo de recursos gráficos para Aresa y Cecoagro

> Escrito el 31-oct-2026 desde una sesión de Claude Code en la nube (repositorio de la porra, que era
> el único accesible desde allí). **Este proyecto no tiene nada que ver con la porra.** Este fichero
> es solo un traspaso para que la instancia de Claude Code del PC de Álvaro retome la idea.
>
> **Instrucción para el Claude que lea esto:** la sesión en la nube NO tenía acceso al flujo de
> diseño gráfico ya montado para los piensos de mascotas (skill de "agencia de creación gráfica",
> carpetas, convenciones). Antes de proponer nada, localiza y lee ese trabajo en el equipo de
> Álvaro y úsalo como plantilla. Lo que viene abajo es la idea de Álvaro, no un plan validado.

## Objetivo (palabras de Álvaro, resumidas)

Replicar el flujo de organización y creación de recursos gráficos que ya funciona para los piensos
de mascotas, pero para el material de **Aresa** y **Cecoagro**, de forma que lo ejecuten **personas
de producción** (Roy, José, Silvia u otras) desde su propio Claude Code, no Álvaro desde su equipo.

- El material gráfico de Aresa y Cecoagro está en **SharePoint**.
- Necesidades iniciales: sobre todo **artes finales** y **renovación de sacos**, entre otras.
- Entregable que Álvaro quiere preparar: un **fichero .md** para pasárselo a esas personas y que lo
  ejecuten en su Claude Code. Está abierto a otra solución técnica si es mejor.

## Fases propuestas por Álvaro

1. **Inventario** de todos los recursos gráficos disponibles: logotipos, webs (revisarlas),
   packshots, artes gráficas, artes finales, etc. Objetivo: entender qué tipo de piezas se necesitan.
2. **Manual de identidad corporativa básico**, uno de Cecoagro y otro de Aresa, **supervisado por las
   personas responsables** de cada marca.
3. **Ordenar el material existente** y montar la **estructura de carpetas** para guardar las
   renovaciones y piezas futuras.
4. **Dejar la skill montada** y lista para que, cuando haga falta, las personas soliciten
   revisiones o piezas nuevas.

## Observaciones técnicas de la sesión en la nube (sugerencias, sin comprobar)

Ninguna de estas observaciones está comprobada. Hay que validarlas con el flujo de mascotas y con
la configuración real de cada equipo.

- **Una sola fuente de la skill.** Si cada persona copia un .md o una skill en su equipo, las copias
  irán divergiendo. Mejor tener la skill (y el manual de identidad) en un único sitio compartido y
  versionado (por ejemplo, una carpeta de SharePoint sincronizada o un repositorio Git) y que cada
  Claude Code la cargue desde allí. El .md para producción debería decir sobre todo *cómo
  instalar y conectar* esa skill compartida, más que contenerla entera.
- **Acceso a SharePoint.** Claude Code trabaja con archivos locales. Lo más probable es que cada
  persona necesite la biblioteca de SharePoint **sincronizada con OneDrive** en su PC y lanzar
  Claude Code dentro de esa carpeta. Hay que comprobar permisos de cada persona y si conviene usar
  además el conector de Microsoft 365. (Conocimiento general, puede estar desfasado.)
- **Un `CLAUDE.md` en la raíz de la carpeta gráfica** de cada marca (o de ambas) con las reglas:
  estructura de carpetas, nomenclatura de archivos, qué no se toca (originales, artes finales
  aprobadas), quién aprueba. Así cualquier Claude Code abierto allí las aplica sin depender del .md.
- **Fases 1–3 las haría mejor una sola persona** (o Álvaro) antes de repartir: inventario, manual y
  reordenación son trabajo de una vez y con decisiones. Repartir desde el principio a varias
  personas a la vez sobre las mismas carpetas puede generar duplicados o movimientos cruzados.
- **No mover ni borrar originales durante la reordenación** sin una copia o sin aprobación: primero
  inventario y propuesta de estructura, luego mover con aprobación.
- **Circuito de aprobación explícito**: quién valida el manual de Aresa, quién el de Cecoagro, y
  quién da el visto bueno a un arte final antes de imprenta. Falta que Álvaro lo concrete.

## Datos aportados por Álvaro

- Enlace de SharePoint facilitado el 31-oct-2026:
  https://alvarob27292879.sharepoint.com/:f:/g/IgBp6Q2R7PUrRpPm-KOlOzfiAfrc7Eg_3d9xKEnnHuf_Tfg?e=f61IuJ
  `alvarob27292879` es el SharePoint de la empresa: la cuenta alvaro.rodriguez@cecoagro.com
  cuelga de él. Comprobado con el conector de Microsoft 365. Un comentario anterior en este
  fichero que decía lo contrario era erróneo.
- Álvaro pidió revisar **toda la biblioteca MARKETING** de ese SharePoint. Primer mapa abajo.

## Inventario completo

Ver `traspasos/inventario/00-RESUMEN.md` (31-oct-2026) y los cuatro ficheros de detalle de esa carpeta.
Cubre MARKETING, DROPBOX (marketing y láminas), ARESA, CECOAGRO y PRODUCCION.

## Primer mapa (31-oct-2026, leído con el conector de Microsoft 365, solo 1–2 niveles)

Tamaños aproximados según SharePoint. No se ha abierto ningún fichero gráfico, solo se han
listado las carpetas.

**Biblioteca MARKETING** (raíz del SharePoint de la empresa):
- `ARESA/` (~660 MB)
  - `IMAGENES WEB ARESA/` (~500 MB)
  - `Imagenes instalaciones/` (~144 MB)
  - `Packaging/`: imágenes de sacos y envases. Bidón Hydroland, BigBags (PDF de julio de 2024),
    Calcimax, Cereales Agroland, Fertimón 9.8.17 / Cloruro / DAP, Maíz, Nitroland, Patatas,
    Pradera, Protech Plus y Viña. Son posibles packshots.
  - `Diseños Premio 24/` y unas cuantas fotos sueltas de la web (Campus Terra, valores).
- `CECOAGRO/` (~20 MB): `Campaña maíz 2024/`, `Imagenes instalaciones/` y `Mascotas/`. Hay poco material.
- `AVANTIS/`: `Packaging/`, lona de 300×300 y catálogo de piensos de ganadería.
- `Logos - TODO/`
  - `ARESA/`: `ARESA_Logo nuevo`, `ARESA_Logo nuevo_B&W y Negativos`, `_ARESA_Logo viejo` y
    `_ARESA_Logo 50 aniv`.
  - `logos y sacos antiguos/`: diseños de Agroland-Fertiland, Verdenatur, Fertimón, Naturcor,
    European, etiquetado de fertilizantes, sacos antiguos, logos del grupo, etc.
  - `O Santo/` y `UMAN_Logo/`.
  - Ficheros sueltos: `CECOAGRO_Logo.zip`, `LogoGrupoAresa.pdf` y logos y emblemas de Equinova.
- `Presentaciones empresas/`: dosieres de Aresa y del Grupo Aresa (ES/EN), `CECOAGRO.pptx` y
  la presentación del Grupo Aresa de 2022.
- `Digital/`: proveedores y agencias (Elogia, Esgalla, Goodbuy, RocketPlace…).
- `Videos/`: vídeo de presentación de Aresa y vídeo AGEF.
- `TODOCAMPO/` (diseños de nave y de Superfauna), `Redes Sociales/` y `Firmas correos/`.
- Ficheros sueltos en la raíz:
  - `CECOAGRO_ARQUITECTURA DE MARCApdf.pdf`: muy relevante para el manual de Cecoagro.
  - `Presupuesto y proyectos_ ANONIMO - Rebranding.pdf`.
  - `Apuntes ideas Marketing.pptx`.
  - `Pptos renovación material Premio 2024.xlsx`.

**Otras ubicaciones relevantes fuera de MARKETING:**
- `DROPBOX/7. Marketing/Diseño Envases/LAMINAS/ARESA/`: láminas de sacos de 5, 25 y 40 kg,
  `2024/` y `ANTIGUAS/` (~650 MB). Hay también `LAMINAS/CLIENTES/` (~630 MB) y `BIG BAGS/`.
  **Probablemente sean las artes finales de sacos**, clave para la renovación. Falta abrirlas.
- `DROPBOX/7. Marketing/` también tiene `LOGOs/`, `CATALOGOS/` y `PRESENTACIÓN ARESA/`, y existe
  `DROPBOX/ARESA - Carpeta Compartida JAC&ICC/1. ARESA/05. Marketing/`. Puede haber duplicados
  con la biblioteca MARKETING.
- `DROPBOX/10. Gestión de Envases/`: hay un `SCRAP ARESA.xlsx` con códigos de bobinas y sacos,
  útil para cruzar con las láminas.
- Bibliotecas de primer nivel del SharePoint: ADMINISTRACION, ARESA, INFORMES, EXPORT DOCS,
  LOGÍSTICA, CODIGO PILOTO AVANTIS, CECOAGRO, PRODUCCION, DOCUMENTOS, COMERCIAL, AvexAssets,
  DROPBOX y MARKETING. **Las bibliotecas ARESA, CECOAGRO y PRODUCCION no se han revisado.**

## El flujo de mascotas ya existe y vive en SharePoint

- Skill: `COMERCIAL/AvantisPET Graphic resources/.claude/skills/creative-agency/` (SKILL.md,
  roles/, scripts/, discurso/, grafico/, sector/, references/, fuentes.md).
- Manuales aprobados el 25-sep-2026: `1 Corporativo/1 Manual de marca/` y
  `2 Avantis Pet/1 Manual de marca/`. Los logotipos vectoriales maestros están en
  `_Fuentes originales/Logos/_vectorial/` y los trabajos, en `_Admin/creativo/<fecha>-<slug>/`.
- Por tanto, el patrón de «una sola copia de la skill, compartida en SharePoint» ya está en uso.
  Lo lógico es replicar esa estructura en una carpeta gemela para Aresa y Cecoagro.
- Puntos del SKILL.md (leído) que habrá que adaptar para que lo usen personas de producción:
  - Muchas decisiones están asignadas a Álvaro («DECISIÓN DE ÁLVARO: PENDIENTE…»).
  - El visto bueno de tirada lo dan «Álvaro o Ángel».
  - Usa scripts de Python con rutas de Windows y genera imágenes con la herramienta Higgsfield
    desde la línea de comandos.
  - Para Aresa y Cecoagro hay que decidir quién aprueba en cada caso y si el equipo de
    producción tendrá Python y Higgsfield.

## Datos que faltan (preguntar a Álvaro)

- Si la biblioteca MARKETING es el punto de partida único o hay que incluir también las bibliotecas
  ARESA, CECOAGRO y PRODUCCION, y la carpeta `DROPBOX/7. Marketing`.
- Dónde está la skill de agencia gráfica de mascotas y cómo se instaló.
- Responsables que supervisan cada manual de identidad.
- Quién de producción arranca (Roy, José, Silvia…) y qué piezas son prioritarias (¿qué sacos?).
- URLs de las webs de Aresa y Cecoagro a revisar.

## Próximo paso al abrir el PC

1. Leer este fichero y el flujo de mascotas existente.
2. Comprender la idea completa y proponer a Álvaro la forma técnica (un .md suelto vs. skill
   compartida + `CLAUDE.md` en la carpeta de SharePoint).
3. Redactar el .md (o paquete) para las personas de producción.

## Siguiente paso acordado (1-nov-2026): logotipos vectoriales

Faltan vectoriales de Cecoagro, Fertiland, Agroland, Nitroland, Fertimón, Protech, Verdenatur y
Naturcor (ver `inventario/00-RESUMEN.md`). Se usará el mismo método que en mascotas, descrito en
`COMERCIAL/AvantisPET Graphic resources/_Fuentes originales/Logos/_vectorial/LEEME.md`:
1. Primero, extraer el logo original de los PDF de imprenta: las láminas de sacos de
   `DROPBOX/7. Marketing/Diseño Envases/LAMINAS/ARESA/` (2024 y 2025) y `BIG BAGS`. Se reutiliza
   `extraer_logos_vectoriales.py` de esa carpeta.
2. Si no hay PDF con el logo, vectorizar desde imagen (`vectorizar_logos.py`) y marcarlo como
   «reconstrucción».
3. Nunca redibujar ni generar con IA. Salida en SVG, PDF y PNG de 3.000 px, con un LEEME de
   procedencia y fiabilidad de cada logo. Validación por el responsable de cada marca.
4. Abrir a mano `MARKETING/Logos - TODO/CECOAGRO_Logo.zip`, que el conector no puede leer.
Pendiente de decidir: dónde va la carpeta gemela de Aresa/Cecoagro en SharePoint.
