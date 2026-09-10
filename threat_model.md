# Threat Model

## Project Overview

A personal portfolio website with a companion Express 5 API server, built on Node.js 24 / TypeScript 5.9 with a pnpm monorepo. The portfolio is a static React/Vite site (deployed at `/`). The API server (deployed at `/api`) currently exposes only a single health-check endpoint (`GET /api/healthz`). A PostgreSQL + Drizzle ORM layer exists in the codebase but no schema tables have been defined yet. The app is not currently deployed to production.

**Tech stack:** Express 5, Vite/React, Drizzle ORM + PostgreSQL, Zod validation, Pino logging.

## Assets

- **Portfolio content** — static professional content (name, email, LinkedIn). This is intentionally public; exposure is by design.
- **Database credentials** — `DATABASE_URL` in environment. No tables exist yet, but the connection pool is initialized at startup. Compromise allows full database access.
- **Future user data** — no user accounts, sessions, or sensitive API endpoints exist yet; this asset will emerge as the app grows.

## Trust Boundaries

- **Browser → API server** — all client requests cross this boundary. Express must authenticate and authorize any future sensitive routes server-side; the client is untrusted.
- **API server → PostgreSQL** — application code has direct DB access via connection pool. Any SQL injection at the API layer would yield full database read/write.
- **Public vs. authenticated surface** — currently the entire API surface is public (health check only). No authenticated surface exists yet.

## Scan Anchors

- **Production entry points:** `artifacts/api-server/src/app.ts` (Express app setup), `artifacts/api-server/src/routes/index.ts` (route mounting), `artifacts/api-server/src/routes/health.ts` (only route)
- **Highest-risk code areas (current):** `artifacts/api-server/src/app.ts` — CORS and middleware config; `lib/db/src/index.ts` — DB connection initialization
- **Public surface:** All of `/api/*` is currently public; no authenticated routes exist
- **Dev-only:** `artifacts/mockup-sandbox/` — design/mockup sandbox, not a production endpoint; Vite dev plugins (cartographer, devBanner) are conditionally excluded from production builds

## Threat Categories

### Spoofing

No authentication mechanism exists. When authenticated routes are added, the application must enforce session/token validation server-side on every protected endpoint. Currently not applicable as no protected endpoints exist.

### Tampering

No user-submitted data is processed beyond the health endpoint. As routes are added, all database queries must use Drizzle's parameterized query interface (already enforced by the ORM) and never string-concatenated SQL.

### Information Disclosure

- The CORS policy is currently configured as wildcard (`app.use(cors())`), which accepts requests from any origin. While the current single endpoint (`/healthz`) is entirely public and carries no sensitive data, this will become a real vulnerability the moment cookie-based sessions, JWTs, or sensitive data endpoints are added.
- Error responses must not include stack traces in production. Pino logging correctly redacts `Authorization` and `Cookie` headers.
- `DATABASE_URL` is supplied via environment variable and is not logged or embedded in code.

### Denial of Service

No rate limiting is configured on the API server. For the current health endpoint this is low impact, but rate limiting should be added (e.g., `express-rate-limit`) before any compute-intensive or data-serving endpoints go live.

### Elevation of Privilege

No roles or admin surfaces exist. When introduced, role checks must be enforced server-side and database lookups must be scoped to the caller's identity.
