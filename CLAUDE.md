# Proyecto: Porra Mundial 2026 — memoria de traspaso

> Para que cualquier instancia de Claude (incl. cuenta nueva, mismo usuario Windows) continúe.
> Proyecto personal/lúdico. Detalle técnico completo en `README.md` — léelo.

## Qué es
PWA **"Auditor en vivo"** que audita en tiempo real los boletos de una porra del Mundial 2026
contra resultados reales. Ranking general automático + panel de auditoría por participante
(aciertos en verde, fallos en rojo). Estética modo oscuro esmeralda/pizarra.

## Stack
**Next.js** (App Router) + Tailwind, desplegado en **Vercel**. Backend proxy en rutas de API de
Next.js: el navegador nunca llama a la API externa (evita CORS en móvil).

## Fuentes de resultados (orden de preferencia)
1. **ESPN** (`site.api.espn.com/.../soccer/fifa.world/scoreboard?dates=20260611-20260719`) —
   PRINCIPAL: gratis, sin clave, COMPLETA, todo el torneo en 1 llamada. La ronda viene en
   `event.season.slug` con guiones (`round-of-32`); hay que normalizar guiones al clasificar.
2. **API-Football** solo con `API_FOOTBALL_KEY` de PAGO (el plan gratis NO da acceso a 2026).
3. **TheSportsDB** — gratis sin clave, pero datos INCOMPLETOS (le faltan partidos). Solo respaldo.
4. **Demo offline** — último recurso para que la app nunca quede en blanco.

> Mapear partidos por EQUIPOS (no por fecha): el calendario real no coincide con las fechas del Excel.
> Nombres de equipo en inglés normalizados en `lib/equipos.ts`. Placeholders de llaves sin definir
> ("Round of 32 X Winner") se filtran con `esPlaceholder`.

## GitHub / despliegue
- Repos: `alvarorodalonso-dot/porra-mundial-2026` (+ remoto `deploy`).
- Cada `git push` redespliega en Vercel solo. Variable de entorno: `API_FOOTBALL_KEY`.

## Archivos de datos sueltos (raíz de Projects, no en esta carpeta)
`af.json`, `espn.json`, `live1.json`, `liveN.json` son volcados de prueba de las APIs deportivas.

## Qué cuelga de la CUENTA (rehacer en cuenta nueva)
- Acceso GitHub `alvarorodalonso-dot` y al proyecto en Vercel.
- `API_FOOTBALL_KEY` (si se usa la fuente premium).

## Puesta en marcha local
`npm install` → `npm run dev` → http://localhost:3000 (funciona sin configurar nada con TheSportsDB).
