# Landing

Marketing landing site built with Astro 6, Tailwind CSS v4, and deployed on Cloudflare Workers via Wrangler.

## Project Structure

```
src/
├── components/
│   ├── Navigation.astro     # Sticky nav bar with language switcher flyout
│   ├── Header.astro         # Page header (title + description)
│   ├── Footer.astro         # Site footer with columns, newsletter, social links
│   ├── HeroSection.astro    # Landing hero with badge, CTAs, screenshot
│   ├── LogoCloud.astro      # Partner logos grid
│   ├── FeatureCards.astro   # 3-column feature cards with icons
│   ├── FeatureGrid.astro    # Screenshot + 6 mini-features grid
│   ├── StatsSection.astro   # 4-column stats
│   ├── CtaSection.astro     # Call-to-action section
│   └── Icon.astro           # SVG icon renderer (outline + solid maps)
├── data/
│   ├── en/                  # English content
│   │   ├── home.ts          # Home page data (hero, features, stats, cta)
│   │   ├── layout.ts        # Header nav links, footer columns, newsletter
│   │   └── blog.ts          # Blog page labels
│   ├── es/                  # Spanish content (same structure as en/)
│   │   ├── home.ts
│   │   ├── layout.ts
│   │   └── blog.ts
│   └── blog/                # Blog posts (content collection)
│       ├── en/              # English posts (.md)
│       └── es/              # Spanish posts (.md)
├── layouts/
│   └── BaseLayout.astro     # Root layout with <html>, Navigation, Footer
├── pages/
│   ├── index.astro          # Root redirect → /en/
│   └── [locale]/
│       ├── index.astro      # Home page (dynamic per locale)
│       └── blog/
│           ├── index.astro  # Blog listing
│           └── [...slug].astro  # Blog post
├── utils/
│   └── i18n.ts              # Locale helpers (locales, labels, path utils)
├── content.config.ts        # Astro content collection config (blog schema)
└── styles.css               # Tailwind + Typography plugin
```

## i18n

All URLs are prefixed with the locale (`/en/`, `/es/`). The root `/` redirects to `/en/`.

- **Locales** are defined in `src/utils/i18n.ts` and `astro.config.mjs`
- **Page content** is loaded via dynamic imports from `src/data/{locale}/`
- **Blog posts** use a `locale` field in frontmatter and are stored in `src/data/blog/{locale}/`
- **Language switcher** in Navigation preserves the current path when switching

### Adding a new language

1. Add the locale code to `locales` in `src/utils/i18n.ts`
2. Add it to `localeNames` in the same file
3. Add it to `astro.config.mjs` → `i18n.locales`
4. Create `src/data/{locale}/` with `home.ts`, `layout.ts`, and `blog.ts`
5. Add blog posts in `src/data/blog/{locale}/`

## Blog

Uses Astro content collections with the `glob` loader. Posts are markdown files in `src/data/blog/{locale}/`.

### Frontmatter schema

```yaml
title: "Post Title"
description: "Short description"
pubDate: 2026-03-10
author: "Author Name"
image: "https://..." # optional
locale: "en"         # must match the folder
```

## Commands

| Command        | Action                                  |
| :------------- | :-------------------------------------- |
| `bun install`  | Install dependencies                    |
| `bun dev`      | Start dev server at `localhost:4321`    |
| `bun run build`| Build production site to `./dist/`      |
| `bun preview`  | Preview build locally                   |

## Tech Stack

- [Astro 6](https://astro.build) with i18n routing (`prefixDefaultLocale: true`)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography) for blog prose styling
- [`@tailwindplus/elements`](https://tailwindplus.com) for dialog, popover, and select components
- [Cloudflare Workers](https://workers.cloudflare.com) via Wrangler
