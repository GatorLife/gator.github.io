# gator-info

The GATOR capability overview at [info.gogator.ai](https://info.gogator.ai): one printable US Letter
sheet in the dark theme, the same on screen and on paper.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # outputs to dist/
```

Requires Node 20 or newer. Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

Copy lives in `src/content.ts`. The sheet must always fit one page; see `CLAUDE.md` for how to check.
