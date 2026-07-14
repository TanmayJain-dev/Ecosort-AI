# EcoSort AI

A real-time, LLM-powered web app that classifies any waste item and returns specific, actionable disposal instructions — powered by the Gemini API. Built for the IBM SkillsBuild AI Internship (SDG 12: Responsible Consumption).

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm --filter @workspace/ecosort-ai run dev` — run the frontend (requires PORT + BASE_PATH)
- `pnpm run typecheck` — typecheck all packages

## Stack

- **Monorepo**: pnpm workspaces, Node.js 24, TypeScript 5.9
- **Frontend**: React 19 + Vite 7, Tailwind CSS v4, Framer Motion, Wouter
- **API**: Express 5 + pino logger
- **AI**: Google Gemini API (`gemini-2.5-flash`) via `@google/generative-ai`
- **Build**: esbuild (API), Vite (frontend)

## Where things live

```
artifacts/
  api-server/       Express API — POST /api/classify calls Gemini
  ecosort-ai/       React frontend — src/pages/Home.tsx is the main UI
lib/
  api-spec/         OpenAPI spec (source of truth for API contract)
  api-zod/          Generated Zod schemas from the spec
render.yaml         Render deployment blueprint (both services)
artifacts/ecosort-ai/vercel.json  Vercel deployment config (frontend only)
```

## Environment Variables

| Variable | Where | Description |
|---|---|---|
| `GEMINI_API_KEY` | API server | Your Google Gemini API key |
| `PORT` | Both | Port to listen on (injected by host) |
| `BASE_PATH` | Frontend (Replit only) | URL prefix, e.g. `/` |
| `VITE_API_URL` | Frontend (external hosting) | Full URL of the API server, e.g. `https://ecosort-api.onrender.com` |

## Deploying externally

**Render** — connect your repo and select `render.yaml`. Two services are created automatically. Set `GEMINI_API_KEY` on the API service, then set `VITE_API_URL` on the frontend service to the API's URL and redeploy.

**Vercel** (frontend only) — import the repo, set root to `artifacts/ecosort-ai`, set `VITE_API_URL` to your hosted API URL.

## Architecture decisions

- Gemini API called server-side (API key never exposed to the browser)
- Frontend falls back to local keyword-matching (`src/lib/classify.ts`) if the API call fails
- No database — the classify endpoint is fully stateless
- `BASE_PATH` / `PORT` are optional at build time so the same Vite config works on Replit and Render/Vercel

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._
