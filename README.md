# PauseAI España — Presentaciones

Coleccion de presentaciones de PauseAI España, construidas con [Slidev](https://sli.dev/).

## Presentaciones

Las presentaciones se sirven en https://pauseai.es/presentaciones/. El listado completo se genera dinámicamente desde los `presentation.json` de cada presentación; ver `packages/landing/`.

## Quick Start

```bash
pnpm install

# Run a specific presentation
cd presentations/riesgos-ia-uma-2026-03
pnpm dev --port 3030

# Or from the root
pnpm --filter riesgos-ia-uma-2026-03 dev -- --port 3030

# Build & preview the landing index locally
cd packages/landing
pnpm dev   # builds + serves on http://localhost:8080
```

Open http://localhost:3030 for slides, http://localhost:3030/presenter for presenter mode.

## Project Structure

```
package.json               # Root workspace (shared linting/formatting)
pnpm-workspace.yaml        # Workspace definitions
CLAUDE.md                  # Project-wide Claude Code instructions

presentations/
  riesgos-ia-uma-2026-03/  # Each presentation is a self-contained Slidev project
    package.json            # Slidev deps + scripts
    slides.md               # Entry point
    slides/                 # Slide sections (one file per block)
    public/                 # Assets (logos, screenshots, videos)
    style.css               # Theme overrides
    global-bottom.vue       # Persistent footer
    CLAUDE.md               # Presentation-specific instructions
    presentation.json       # Metadata for the landing index
  etica-ia-ispln-2026-03/
    ...

packages/
  slidev-addon-pauseai/    # Shared Slidev components (videos, etc.)
  landing/                  # Generator for the /presentaciones/ index page

charts/                    # Helm charts for Kubernetes deployment
```

## Adding a New Presentation

1. Create a directory in `presentations/` following the naming convention: `<topic>-<venue>-<YYYY>-<MM>`
2. Add a `package.json` with Slidev as a dev dependency (use `slidev-addon-pauseai` for shared components)
3. Create `slides.md`, `slides/`, `public/`, `style.css`, `global-bottom.vue`
4. Add a `CLAUDE.md` with audience, structure, and sources
5. Add a `presentation.json` so the landing index picks it up:

```json
{
  "title": "Title",
  "subtitle": "Optional subtitle",
  "speaker": "Speaker name",
  "date": "YYYY-MM-DD",
  "dateApprox": false,
  "venue": "Venue · location",
  "language": "es",
  "description": "One-line description for the listing card."
}
```

Set `dateApprox: true` when only the month is known (the landing will render "abril de 2026" instead of "15 de abril de 2026").

## Docker Build

```bash
# Build all presentations into a single nginx image
# Each presentation is served under /presentaciones/<name>/ by default
docker build --platform linux/amd64 \
  -t harbor.danilupion.com/pauseai-es/presentaciones:latest .

# Override the base path prefix if needed
docker build --platform linux/amd64 \
  --build-arg BASE_PREFIX=/other-prefix/ \
  -t harbor.danilupion.com/pauseai-es/presentaciones:latest .
```

## Tech Stack

- **[Slidev](https://sli.dev/)** — Markdown-based presentation framework
- **pnpm workspaces** — Monorepo management
- **Vite + Vue** — Dev server and component system
