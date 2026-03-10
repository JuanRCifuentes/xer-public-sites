# Project Instructions

## Overview

Monorepo with two Astro sites deployed to Cloudflare Workers:

- **landing/** — Minimal landing page
- **docs/** — Documentation site (Astro Starlight, bilingual EN/ES)

## Tech Stack

- **Framework**: Astro (v5.x)
- **Package manager**: Bun (`bun.lock`)
- **Language**: TypeScript (strict config via `astro/tsconfigs/strict`)
- **Styling**: CSS (landing, docs)
- **Content**: Astro Content Collections with Markdown/MDX
- **Deployment**: Cloudflare Workers via Wrangler (static assets in `./dist`)

## Commands

All projects share the same commands, run from their directory:

```bash
bun dev       # Start dev server
bun build     # Build to ./dist
bun preview   # Preview production build
```

## Conventions

### Naming

- **Files/directories**: kebab-case
- **Astro components**: PascalCase (e.g., `BaseHead.astro`)
- **TypeScript/JS**: camelCase
- **SCSS variables**: SCREAMING_SNAKE_CASE for maps/constants

### Content

- **Docs**: MDX files in `docs/src/content/docs/`. English at root, Spanish under `es/`.
- **Releases**: MDX files in `docs/src/content/docs/versions/`. File names use underscores for version numbers (e.g., `2_0.mdx`).

### Assets

External assets are hosted at `https://xer-assets.juanrcifuentes.com/`. Reference them by URL, don't store them locally.

### Structure

Each site follows standard Astro layout:

```
<project>/
├── src/
│   ├── components/    # Reusable .astro components
│   ├── content/       # Content collections (if applicable)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   └── styles/        # Global styles (if applicable)
├── public/            # Static files
├── astro.config.mjs
├── wrangler.toml
└── package.json
```

## Important Notes

- No test framework is configured.
- Both sites are statically generated.
- The workspace root `package.json` defines workspaces but has no scripts — run commands inside each project directory.