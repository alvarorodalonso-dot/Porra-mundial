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
1. **API-Football** si se define `API_FOOTBALL_KEY` (cuenta gratis, 100 req/día).
2. **TheSportsDB** — por defecto, gratis y sin clave.
3. **Demo offline** — fallback para que la app nunca quede en blanco.

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
