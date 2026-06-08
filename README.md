# Juan Quintero — Portfolio

A modern, responsive, high-performance personal portfolio for **Juan Quintero**, Senior Full-Stack
Software Engineer. Built with **Astro** + **TypeScript** + **Tailwind CSS**, fully **bilingual
(English / Spanish)** and **deploy-ready for Vercel**.

- ⚡️ Static, fast-loading single-page site (zero JS framework runtime)
- 🌗 Dark theme with blue accents, smooth scroll-reveal animations
- 🌎 Bilingual content (`/` English, `/es/` Spanish) with SEO `hreflang` alternates
- ♿️ Accessible, semantic HTML with skip-to-content and reduced-motion support
- 🔎 SEO metadata: Open Graph, Twitter cards, canonical URLs, JSON-LD `Person`, sitemap
- 🧩 Component-based architecture driven by editable data files

## 🚀 Tech stack

Astro 5 · TypeScript · Tailwind CSS · `@astrojs/sitemap` · Inter (variable font)

## 📁 Project structure

```text
/
├── public/
│   ├── cv/Juan-Quintero-CV.pdf   # CV served by the "Download CV" button
│   ├── favicon.svg
│   ├── og-image.svg              # social share image
│   └── robots.txt
├── src/
│   ├── components/               # Hero, About, Skills, Experience, Projects, Contact, …
│   ├── data/
│   │   ├── content/
│   │   │   ├── en.json           # ← ALL English copy (edit here)
│   │   │   └── es.json           # ← ALL Spanish copy (edit here)
│   │   ├── site.ts               # language-neutral facts (dates, tech, links)
│   │   ├── types.ts              # TypeScript contracts
│   │   └── i18n.ts               # joins copy + facts per locale
│   ├── layouts/Layout.astro      # <head>, SEO, structured data
│   ├── pages/
│   │   ├── index.astro           # English (/)
│   │   └── es/index.astro        # Spanish (/es/)
│   └── styles/global.css         # theme tokens, animations
├── astro.config.mjs              # i18n + sitemap config
└── tailwind.config.mjs           # dark + blue theme
```

## ✍️ Editing content

All visible text lives in **two mirror JSON files** so you can update copy and translations without
touching components:

- `src/data/content/en.json` — English
- `src/data/content/es.json` — Spanish

Language-neutral facts (dates, tech stacks, social URLs, email, CV path) live once in
`src/data/site.ts`, keyed by stable `id`s that the JSON entries reference — so English and Spanish
never drift on the facts. The TypeScript types in `src/data/types.ts` keep both languages in sync;
`npm run check` flags any structural mismatch.

To replace the CV, drop your file at `public/cv/Juan-Quintero-CV.pdf`.

## 🧞 Commands

Run from the project root (examples use `npm`; `bun` / `pnpm` work too):

| Command           | Action                                            |
| :---------------- | :------------------------------------------------ |
| `npm install`     | Install dependencies                              |
| `npm run dev`     | Start dev server at `http://localhost:4321`       |
| `npm run build`   | Build the production site to `./dist/`            |
| `npm run preview` | Preview the production build locally              |
| `npm run check`   | Type-check Astro/TS files                         |

**Requires Node.js 18.20+ (or 20+ / 22+).**

## 💻 Local development

```sh
npm install
npm run dev
# open http://localhost:4321  (Spanish at http://localhost:4321/es/)
```

## 🏗️ Build

```sh
npm run build      # outputs static files to ./dist
npm run preview    # serve ./dist locally to verify
```

## ▲ Deploy to Vercel

This is a **static** Astro site, so no adapter is needed.

**Option A — Dashboard (recommended)**

1. Push this repository to GitHub/GitLab.
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Astro: **Build Command** `astro build`, **Output Directory** `dist`.
4. Click **Deploy**.

**Option B — Vercel CLI**

```sh
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

After deploying, update the `SITE` constant in `astro.config.mjs` and the `Sitemap:` line in
`public/robots.txt` to your production domain so canonical URLs, Open Graph tags, `hreflang`
alternates and the sitemap point at the right place.
