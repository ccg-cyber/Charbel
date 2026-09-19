# Charbel “The Legacy” Geagea #22 — Champs

Live at **https://charbel.cierp.uk/**

A player profile, match recap, and a 9:16 WhatsApp Status poster generator for
Charbel Geagea (#22, Champs) and the 47-25 win over A Team on 19 September 2026.

React + Vite + Tailwind v4. Everything runs in the browser: no backend, no API
keys, no trackers. The poster is drawn on a `<canvas>` at 1080×1920 and saved
straight from the page, so it works offline once loaded.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # tsc --noEmit
npm run build    # -> dist/
```

## How it deploys

Push to `claude/charbel-app-deployment-fyb55y` (or `main`). The workflow in
`.github/workflows/deploy.yml` installs, typechecks, builds, and publishes
`dist/` to the **`gh-pages`** branch, which is what GitHub Pages serves.

The domain needs two things that are not in this repo:

1. **GitHub Pages** — Settings → Pages → source `gh-pages`, folder `/ (root)`,
   then tick **Enforce HTTPS**.
2. **Cloudflare DNS** — `CNAME charbel → ccg-cyber.github.io`, **DNS only**
   (grey cloud). Proxying it stops GitHub issuing the certificate.

`CNAME` and `.nojekyll` are written into `dist/` by the workflow rather than
kept in the source tree, because Pages reads them from the branch it serves.

---

## Changing the details

The match, the scores and the copy are written into the components directly:

| What | Where |
|---|---|
| Score, date, venue, the top ribbon | `src/components/VictoryRibbon.tsx` |
| Quarter-by-quarter table, highlights | `src/components/MatchRecapView.tsx` |
| Biography, creed, attribute bars | `src/components/ProfileView.tsx` |
| Poster layout and the 1080×1920 canvas | `src/utils/posterGenerator.ts` |
| Motto presets, filters, export buttons | `src/components/StatusPosterStudio.tsx` |
| Name, number, header actions | `src/components/Header.tsx` |

The link-preview card shown when the URL is shared on WhatsApp is
`public/og.png`, referenced absolutely from `index.html`. If the domain
changes, update the `og:url` and `og:image` values there too.

`public/charbel-the-legacy-app.zip` is the downloadable source behind the
“Download ZIP” button. It is generated from this tree — regenerate it when the
source changes, or the download will lag behind the live site.

---

## Notes on the mobile layout

The markup relies on an `xs` breakpoint (30rem) that **Tailwind v4 does not
ship**. It is defined in `src/index.css` under `@theme`. Removing that block
does not raise an error — the `xs:` classes just silently stop emitting CSS,
which previously left the score badge and the “Photo” label permanently hidden
on every device. Keep it.

Similarly, `neutral-850` / `neutral-750` are not real Tailwind colours; if they
reappear in the markup they render as no background at all.

Checked at 320, 360, 390, 412, 768, 1440 and 1920 px wide — no horizontal
overflow at any of them, and the quarter table fits without clipping the Final
column down to 320 px.
