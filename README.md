# Career Showcase

Vaishali Goel’s personal portfolio showcasing product management, enterprise engineering, and AI product development. The site brings together professional experience, project outcomes, detailed case studies, and writing about engineering and product leadership.

## Features

- Professional introduction, biography, skills, experience, education, and contact links.
- Enterprise project highlights covering modernization, work intake, compliance, integrations, and reporting.
- AI product showcases: Pantry to Plan, CareerFolio, AI Product Decision Assistant, I Got This, and StayOps AI.
- Dedicated case studies at `/work/:slug` and articles at `/writing/:slug`.
- Responsive layouts, Framer Motion animations, page metadata, error boundaries, and a not-found page.

Portfolio content is maintained in TypeScript files. The showcased AI products are separate projects linked from this site; their application code is not included here.

## Tech stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, TypeScript, Vite 7 |
| Styling and UI | Tailwind CSS 4, Radix UI, Lucide icons |
| Routing and animations | Wouter, Framer Motion |
| API foundation | Express 5, Zod, Pino |
| API tooling | OpenAPI, Orval, generated React Query client |
| Database foundation | PostgreSQL, Drizzle ORM |
| Package management | pnpm workspaces |

The portfolio renders local content and can run without the API or a database. The API currently provides a health endpoint, and the database package does not yet define application tables.

## Project structure

```text
artifacts/
  portfolio/          Main React and Vite portfolio
    src/components/   Shared components and UI primitives
    src/data/         Profile, projects, case studies, and articles
    src/pages/        Home, case study, writing, and not-found pages
    public/           Static assets
  api-server/         Express API server
  mockup-sandbox/     Separate Vite app for UI mockups
lib/
  api-spec/           OpenAPI specification and Orval configuration
  api-client-react/   Generated API client and React Query hooks
  api-zod/            Generated validation schemas
  db/                 Database connection and schema foundation
scripts/              Workspace utilities
```

## Getting started

Use Node.js 24 to match the repository’s Replit configuration, and install pnpm. The root install script requires pnpm rather than npm or Yarn.

**Platform setup:** `pnpm-workspace.yaml` excludes native binaries for macOS, Windows, and several Linux variants to target Replit’s Linux x64 environment. Before installing on another platform, remove the native-package exclusions relevant to your platform, including those for esbuild, Rollup, Lightning CSS, and Tailwind’s Oxide engine.

Run these commands from the repository root in a POSIX shell:

```bash
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio dev
```

Open `http://localhost:5173`.

Both `PORT` and `BASE_PATH` are required when Vite loads its configuration, including for builds and previews. Supply them through the shell as shown; the current configuration does not explicitly load them from a `.env` file.

## Development commands

```bash
# Start the portfolio
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio dev

# Type-check the portfolio
pnpm --filter @workspace/portfolio typecheck

# Build the portfolio
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio build

# Preview the production build
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/portfolio serve

# Type-check shared libraries and applications
pnpm run typecheck

# Type-check and build all packages with build scripts
PORT=5173 BASE_PATH=/ pnpm run build

# Regenerate API client and validation code
pnpm --filter @workspace/api-spec codegen

# Start the separate mockup sandbox
PORT=5174 BASE_PATH=/ pnpm --filter @workspace/mockup-sandbox dev
```

The portfolio build output is `artifacts/portfolio/dist/public`.

### Optional API server

Run the API in a separate terminal:

```bash
PORT=3001 ALLOWED_ORIGINS=http://localhost:5173 pnpm --filter @workspace/api-server dev
```

Visit `http://localhost:3001/api/healthz` to get `{"status":"ok"}`. The portfolio’s Vite configuration does not currently define an API proxy.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `PORT` | Required by both Vite apps and the API; use separate ports when running them together |
| `BASE_PATH` | Required URL base for both Vite apps, normally `/` |
| `ALLOWED_ORIGINS` | Comma-separated API CORS allowlist; defaults to an empty list |
| `DATABASE_URL` | PostgreSQL connection string when using the database package or Drizzle tooling |
| `REPL_ID` | Enables additional Replit development plugins when present outside production |

## Updating content

| Content | Location |
| --- | --- |
| Profile, project summaries, skills, experience, education, and social links | `artifacts/portfolio/src/data/content.ts` |
| Case study registry and content | `artifacts/portfolio/src/data/case-studies.ts` |
| Extended AI product case studies | Other `*-case-study.ts` files in `artifacts/portfolio/src/data/` |
| Articles | `artifacts/portfolio/src/data/writing-notes.ts` |
| Home page layout | `artifacts/portfolio/src/pages/home.tsx` |
| Navigation | `artifacts/portfolio/src/components/navbar.tsx` |
| Global styling | `artifacts/portfolio/src/index.css` |
| Images and static assets | `artifacts/portfolio/public/` |

The profile image is `/photo.jpg`. The content also defines a `resumeUrl` pointing to `/resume.pdf`, but that PDF is not included; add it to the public directory before using the link.

## Deployment

Build the portfolio and publish `artifacts/portfolio/dist/public` to a static host. Configure the host to serve `index.html` for application routes such as `/work/...` and `/writing/...` so direct links and refreshes work.

For a subdirectory deployment, set `BASE_PATH` to that prefix when building. Review root-relative asset paths such as `/photo.jpg` so they resolve under the prefix.

The optional Express API runs as a separate Node.js service and does not serve the portfolio’s static build.
