# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GATOR Flyer is a single-page marketing website for GATOR (General AI Training & Operational
Readiness), a cyber readiness assessment platform. The site is built with React + TypeScript and
uses Vite as the build tool.

The page is a faithful web rendering of the GATOR capability-overview flyer: same sections, same
verbatim copy, same palette and typography. It reflows responsively on screen, and an
`@media print` layer reproduces the original as a single full-bleed US Letter page.

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (opens at http://localhost:3000)
- `npm run build` - Build for production (outputs to `dist/`)
- `npx vite preview` - Serve the production build (use this to verify the print layout)

## Architecture

This is a simple single-page React application:

- **Entry point**: `src/main.tsx` renders `<App />` into `#root` and imports the fonts + stylesheet
- **Main component**: `src/App.tsx` contains the entire page. Flyer copy lives in `const` arrays at
  the top of the file so content edits never touch layout. Small local helpers (`Section`,
  `BodyCopy`, `Classification`, `ContactLines`, `ChevronMark`) carry the repeating patterns.
- **Styling**: Tailwind CSS v4, compiled at build time by `@tailwindcss/vite`
- **Icons**: none. The flyer uses only dots, squares, pills and the chevron mark, all drawn in CSS
  or inline SVG.

## Key Technical Details

- **Brand tokens live in exactly one place**: the `@theme` block in `src/index.css`. Brand green is
  `#7AC943`, with `#5E9E33` for section rules and pill borders. Do not hard-code hex in `App.tsx`.
- **Tailwind content scanning is scoped**: `src/index.css` opens with
  `@import "tailwindcss" source(none);` plus `@source "./App.tsx";`. Automatic detection is off, so
  only classes used in `App.tsx` are compiled and the 46 unused shadcn components in
  `src/components/ui/` contribute nothing to the bundle. **If you add a component file that uses
  Tailwind classes, add an `@source` line for it or its classes will silently not compile.**
- **Fonts are self-hosted** via `@fontsource/ibm-plex-sans` and `@fontsource/ibm-plex-mono`
  (latin subsets, imported in `src/main.tsx`). Deliberately not Google Fonts: this site is opened on
  DoD networks that may block `fonts.googleapis.com`, and a silent fallback to system sans would
  change line breaks and push the print layout onto a second page.
- **The print layer** is at the bottom of `src/index.css`. The whole layout is rem-based, so the
  single `html { font-size }` value inside `@media print` tunes the page fit — if the output ever
  spills to two pages, adjust that one number. `@page { margin: 0 }` is what lets the header and
  footer bands bleed to the paper edge.
- Uses `@` path alias pointing to `./src` (configured in `vite.config.ts`)
- Vite config includes versioned package aliases, needed only by the unused shadcn components

## Deployment

Static site deployed to GitHub Pages by `.github/workflows/deploy.yml` (custom domain
`info.gogator.ai`, so `base: '/'` in the Vite config). The workflow runs on **Node 20** —
`@tailwindcss/oxide` requires Node >= 20, so do not lower it.
