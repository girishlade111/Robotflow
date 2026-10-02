# Robotflow — Dark Robotics Landing Page (Next.js)

A dark-themed, single-page landing site for **Robotflow**, a robotic-technology brand/template. Built as a Next.js App Router site with a full shadcn-style component system, Framer Motion animations, and Tailwind CSS. Fully client-renderable — exported as static HTML so it can be hosted on any static host (GitHub Pages, Cloudflare Pages, etc.).

## Features

- **Dark, cinematic hero experience** — near-black `#020202` canvas with layered hero sections (`HeroSection`, `BlueHeroBlock`)
- **Sticky glassmorphism header** — blur backdrop, mobile menu, smooth anchor navigation
- **Showcase sections** — What's Included, Secondary Components, Main Pages, Utility Pages, "More Surprises", social/email capture block, and footer
- **Reusable animation utilities** — shared Framer Motion variants (`fadeInUp`, `fadeIn`, `staggerContainer`, `scaleUp`) in `src/lib/animations.ts`
- **shadcn/ui components** — button, card, dialog, accordion, form controls and more via `@/components/ui`
- **Inter typeface** (300–900 weights) loaded via `next/font/google`
- **Tailwind CSS + custom theme** — dark-mode-first design tokens in `globals.css`
- **dnd-kit sortable components** included for interactive list demos
- **Static export build** — `output: "export"` with unoptimized images; the site has no server dependencies at runtime

## Tech stack

- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS 4, shadcn/ui-style components
- Framer Motion, @dnd-kit
- Lucide icons

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:3000
npm run build      # static site in ./out/
```

Serve the `out/` folder with any static file server (e.g. `npx serve out`).

## Project structure

```
src/
  app/
    page.tsx            # landing page composition (all sections)
    layout.tsx          # root layout, metadata, Inter font, dark theme
    globals.css         # design tokens + custom styles
  components/
    sections/           # Header, HeroSection, WhatsIncluded, MainPages, ...
    ui/                 # reusable shadcn-style primitives
  lib/
    animations.ts       # shared Framer Motion variants
    utils.ts            # cn() class merging
    db.ts               # Prisma client (unused at runtime in static export)
mini-services/          # placeholder micro-service templates
agent-ctx/              # agent context notes
.zscripts/              # helper scripts
```

## Environment variables

None required for the static site. (`src/lib/db.ts` references `DATABASE_URL` only if you enable the Prisma/SQLite backend, which is not used by the landing page.)

## Deploy notes

- The repo ships with `output: "export"` in `next.config.ts`, so `npm run build` produces a fully static `out/` directory — deploy it to GitHub Pages / Cloudflare Pages / any static host.
- An unused hello-world route handler (`src/app/api/route.ts`) was removed, since static export supports no server routes.

---

## Author

**Built by Girish Lade** — [ladestack.in](https://ladestack.in)
