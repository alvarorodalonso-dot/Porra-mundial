# 🏆 Porra Mundial 2026 · Auditor en vivo

Aplicación web progresiva (PWA) que **audita en tiempo real** los boletos de una
porra del Mundial 2026 contra los resultados reales del torneo.

- **Ranking general** ordenado automáticamente por puntuación.
- **Panel de auditoría** por participante: su quiniela frente a los resultados
  reales, aciertos en **verde** y fallos en **rojo/tachado**.
- **Backend proxy** integrado (rutas de API de Next.js) que consulta la API
  deportiva desde el servidor — el navegador **nunca** llama a la API externa,
  evitando por completo los errores **CORS** en móvil.
- Estética *"calidez analítica"*: modo oscuro esmeralda + pizarra.

---

## 🚀 Puesta en marcha (local)

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>. **Sin configurar nada** la app ya muestra los
**resultados reales** del Mundial vía [TheSportsDB](https://www.thesportsdb.com)
(gratis, sin clave ni registro).

### Fuentes de resultados (en orden de preferencia)

1. **API-Football** — si defines `API_FOOTBALL_KEY` (cuenta gratuita,
   100 req/día en [api-football.com](https://www.api-football.com/)). Datos más
   completos: eliminatorias y campeón mejor detectados.
2. **TheSportsDB** — *por defecto*, gratis y sin clave. Resultados reales del
   torneo. Es la opción "sin complicaciones".
3. **Demo offline** — solo si no hay conexión a ninguna fuente, para que la app
   nunca se quede en blanco.

El proxy descarta automáticamente partidos ajenos a la quiniela y mapea cada
resultado a su casilla oficial. La cabecera indica en todo momento qué fuente
está activa.

---

## ☁️ Despliegue en Vercel + GitHub

1. Sube este proyecto a un repositorio de **GitHub**.
2. En [Vercel](https://vercel.com) → **Add New Project** → importa el repo.
   Vercel detecta Next.js automáticamente (sin configuración extra).
3. En **Settings → Environment Variables** añade:
   - `API_FOOTBALL_KEY` = tu clave.
4. **Deploy**. Cada `git push` redespliega solo.

La PWA es instalable desde el móvil ("Añadir a pantalla de inicio").

---

## 🧮 Sistema de puntuación

| Concepto | Puntos |
|---|---|
| **Quiniela** (36 partidos de grupos) | +2 por acierto exacto de signo (1/X/2) |
| **Selecciones** (10 equipos) | Dieciseisavos +2 · Octavos +6 · Cuartos +14 · Semifinales +29 · Final +54 |
| **Campeón** | +40 si se acierta el campeón |

Los puntos de selecciones son **acumulativos por boleto**: cada uno de los 10
equipos aporta los puntos de la **ronda más lejana** que alcanza, y se suman.

---

## 🗂️ Arquitectura

```
app/
  layout.tsx              Layout raíz + metadatos PWA
  page.tsx                Vista principal (ranking + estado, cliente)
  globals.css             Estilos base (tema oscuro esmeralda)
  api/resultados/route.ts PROXY backend → API-Football / demo
components/
  Ranking.tsx             Lista ordenada de participantes
  AuditPanel.tsx          Panel de auditoría del boleto
lib/
  types.ts                Modelo de datos interno
  participantes.ts        BASE DE DATOS FIJA de boletos (inmutable)
  scoring.ts              Motor de puntuación
  equipos.ts              Normalización de nombres (inglés ↔ español)
  demo.ts                 Dataset de ejemplo
public/
  manifest.json, icon.svg PWA
```

### Flujo anti-CORS

```
Navegador  →  /api/resultados (servidor Next.js)  →  API-Football
   ▲                                                      │
   └──────────────  JSON normalizado  ◄───────────────────┘
```

El frontend solo conoce su propio dominio: **cero llamadas cross-origin**.
