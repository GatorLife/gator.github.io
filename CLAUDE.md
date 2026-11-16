# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The public capability overview for GATOR (General AI Training & Operational Readiness), served at
`info.gogator.ai`. It is **one printable sheet**: a single US Letter page that looks the same on
screen and on paper. It must always fit one page. Do not turn it into a scrolling site.

The look follows the GATOR capability sheets (white paper, ink text, green rules and mono labels)
and the copy follows the product homepage at `gogator.ai`.

React + TypeScript, built with Vite.

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production (outputs to `dist/`)
- `npx vite preview` - Serve the production build (use this to verify printing)

## Architecture

- **Entry point**: `src/main.tsx` renders `<App />` into `#root` and imports the fonts + stylesheet
- **Sheet**: `src/App.tsx` holds the whole page. `<main id="sheet">` is a fixed 816 x 1056 px box
  (8.5 x 11 in at 96 px per inch) laid out in pixel units, with its blocks spread by
  `justify-between`. A screen-only toolbar above it has the Print and Request a briefing buttons.
- **Copy**: all of it is in `src/content.ts`, drawn from the product homepage
  (GatorLife/Gator, `apps/client-server/src/components/landing/home-content.ts`) and cut to fit.
  `App.tsx` holds layout only.
- **Styling**: Tailwind CSS v4, compiled at build time by `@tailwindcss/vite`

## The one-page rule

- The sheet has `overflow-hidden` and a fixed height, so copy that runs long is **clipped, not
  wrapped onto a second page**. After any copy or layout change, check the fit: in the browser
  console, `sheet.scrollHeight` must equal `1056`, and the blocks should keep visible gaps.
- To verify printing, build, run `npx vite preview`, and print to PDF. The result must be exactly
  one Letter page. "Background graphics" must be on in the print dialog.
- The print rules are at the bottom of `src/index.css`: `@page { size: letter; margin: 0 }`, exact
  colour printing, and a sheet height a hair under 11in so rounding never adds a blank page.
- If something new must go on the sheet, something else comes off.

## Design rules

- **Brand tokens live in exactly one place**: the `@theme` block in `src/index.css`. Do not
  hard-code hex in `App.tsx`.
- **Green**: `green` (#22c55e) is for rules, borders and fills only. Green text on paper uses
  `green-ink` (#117937), which passes contrast.
- **Type**: IBM Plex Sans for reading; IBM Plex Mono, uppercase and letter-spaced, for section
  labels, tags and metadata.
- **Borders, not shadows**. Radii are 0 or 4px. Nothing is pill-shaped.
- **The mark** is the artwork at `public/gator-chevron.png`. Never redraw it as an SVG.
- **Voice**: direct, sentence case, numbers over adjectives. The name is always GATOR. Anything
  not yet fielded sits under the "In development" label.
- **Fonts are self-hosted** via `@fontsource` (latin subsets, imported in `src/main.tsx`).
  Deliberately not Google Fonts: this site is opened on DoD networks that may block
  `fonts.googleapis.com`, and a fallback font would change line breaks and break the one-page fit.

## Deployment

Static site deployed to GitHub Pages by `.github/workflows/deploy.yml` (custom domain
`info.gogator.ai`, so `base: '/'` in the Vite config). The workflow runs on **Node 20** —
`@tailwindcss/oxide` requires Node >= 20, so do not lower it.
