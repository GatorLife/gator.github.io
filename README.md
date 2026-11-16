# gator-info

The public information site at [info.gogator.ai](https://info.gogator.ai): a condensed version of the
GATOR product homepage, sharing its tokens, type and copy.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # outputs to dist/
```

Requires Node 20 or newer. Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

Copy lives in `src/content.ts` and mirrors the product homepage in GatorLife/Gator
(`apps/client-server/src/components/landing/home-content.ts`). Re-sync that file when the homepage
copy changes.
