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

## Datos que faltan (preguntar a Álvaro)

- Ruta o nombre exacto de las bibliotecas de SharePoint de Aresa y Cecoagro.
- Dónde está la skill de agencia gráfica de mascotas y cómo se instaló.
- Responsables que supervisan cada manual de identidad.
- Quién de producción arranca (Roy, José, Silvia…) y qué piezas son prioritarias (¿qué sacos?).
- URLs de las webs de Aresa y Cecoagro a revisar.

## Próximo paso al abrir el PC

1. Leer este fichero y el flujo de mascotas existente.
2. Comprender la idea completa y proponer a Álvaro la forma técnica (un .md suelto vs. skill
   compartida + `CLAUDE.md` en la carpeta de SharePoint).
3. Redactar el .md (o paquete) para las personas de producción.
