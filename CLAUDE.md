# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The public information site for GATOR (General AI Training & Operational Readiness), served at
`info.gogator.ai`. It is a condensed version of the product homepage at `gogator.ai`
(GatorLife/Gator, `apps/client-server/src/components/landing/`): same tokens, type, class strings
and copy, without the scroll-driven hero video, the range replay or the agents section.

React + TypeScript, built with Vite. One static page, dark only.

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production (outputs to `dist/`)
- `npx vite preview` - Serve the production build

## Architecture

- **Entry point**: `src/main.tsx` renders `<App />` into `#root` and imports the fonts + stylesheet
- **Page**: `src/App.tsx` lists the sections in order; each lives in `src/sections/`
  (`SiteNav`, `Hero`, `Platform`, `Deployment`, `Proof`, `Closing`, `SiteFooter`).
- **Copy**: all of it is in `src/content.ts`, lifted verbatim from the product's
  `home-content.ts` and `site-copy.ts`. When the product homepage copy changes, re-sync this one
  file. Section files hold layout only.
- **Shared primitives**: `src/ui.tsx` holds the class-string constants (`EYEBROW`, `SECTION`,
  `HEADING`, `ACTION`) and small components (`Tag`, `PillarDot`, `StatementRow`, `SectionHeader`,
  `BriefingButton`, `GatorMark`). They are copied from the product's `HomeLanding.tsx`; keep them
  in step with it.
- **Styling**: Tailwind CSS v4, compiled at build time by `@tailwindcss/vite`
- **Icons**: `lucide-react`, 1.5px line icons, used sparingly (arrows only).

## Design rules

These come from the GATOR design system; follow them when adding anything.

- **Brand tokens live in exactly one place**: the `@theme` block in `src/index.css`. Names match
  the product's theme (`background`, `foreground`, `card`, `border`, `muted-foreground`,
  `primary`, `ai-accent`, `info`, `warning`). Do not hard-code hex in components.
- **Green is earned**: `primary` (#22c55e) is for the primary action and the cursor accent. Not
  for headings, rules or decoration.
- **Pillar colours are markers only**: lime (agentic), amber (sovereign) and blue (cloud) appear as
  small `PillarDot`s, never as a fill behind text.
- **Borders, not shadows**: structure comes from 1px `border` rules and `card` panels. No glow, no
  gradients. Sections carry `md:border-x` rails so the page reads as one grid.
- **Type**: IBM Plex Sans for reading, IBM Plex Mono for eyebrows, buttons, tags and telemetry.
  Display type is regular weight (400), large and tightly tracked; size carries hierarchy.
- **Square**: radii are 0 / 2px / 4px. Nothing is pill-shaped.
- **The mark** is the artwork at `public/gator-chevron.png`. Never redraw it as an SVG.
- **Voice**: direct, sentence case, numbers over adjectives. The name is always GATOR.

## Key Technical Details

- **Tailwind content scanning is scoped**: `src/index.css` opens with
  `@import "tailwindcss" source(none);` plus `@source "./";`, so only files under `src/` are
  scanned.
- **Fonts are self-hosted** via `@fontsource/ibm-plex-sans` and `@fontsource/ibm-plex-mono`
  (latin subsets, imported in `src/main.tsx`). Deliberately not Google Fonts: this site is opened
  on DoD networks that may block `fonts.googleapis.com`.
- **External links**: "Sign in" goes to `https://gogator.ai/login`; "Request a briefing" is a
  `mailto:` to support. Both are constants in `src/content.ts`.

## Deployment

Static site deployed to GitHub Pages by `.github/workflows/deploy.yml` (custom domain
`info.gogator.ai`, so `base: '/'` in the Vite config). The workflow runs on **Node 20** —
`@tailwindcss/oxide` requires Node >= 20, so do not lower it.
