# Coherenceism Journal (Astro)

- Stack: Astro, Markdown-first, static build
- Content: `src/content/journal/*.md`
- Layout: Systems Garden — calm palette, river accents

## Dev
- Install deps: `npm install`
- Run dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

### Working with cora (AI Context)
- This repo uses `cora/` as a submodule for the AI context and commands.
- Load cora context: see `AGENT_STARTUP.md` (reads `cora/context/...`).
- Update cora to latest main: `npm run cora:update` (then commit submodule pointer).
- Validate cora context shape: `npm run cora:validate`.

## Authoring
- Guide: see `AUTHORING.md`
- Create a post: `npm run new:post "Title" <river> <form>`

## Navigation
- Left sidebar lists All Posts and Rivers; Rivers link to `/?river=<slug>`.
- Banner shows current filter and tint; Clear resets to All.

## Routes
- `/` Home feed (shows a featured post when unfiltered)
- `/page/[n]` Paginated feed (filter preserved)
- `/journal/[slug]` Post page (sidebar present)
- `/rivers/[river]` River page (curated/chronological toggle)
- `/tags`, `/tags/[tag]` Tag index and listings
- `/rss.xml`, `/sitemap.xml`, `/robots.txt`
- `/og/[slug].svg` Per-post OG image

## Notes
- Cards are uniform via 2-line title/3-line excerpt clamps.
- Optional self-hosted fonts: add WOFF2 into `public/fonts/` to enable `fonts.css`.

## Coherence Setup Checklist
- Identity & Nav: align site identity and cross-site nav with the Coherence Network.
- Privacy: start from a privacy-first policy (see `docs/privacy-policy-template.md`).
- Design Tokens: centralize palette/typography/spacing (see `docs/design-tokens.md`).

## Deploy to Vercel
- This repo is configured for Vercel static output.
- Steps:
  1. Push to GitHub.
  2. Import the repo in Vercel, framework will auto-detect Astro.
  3. Vercel uses `vercel.json` → build `npm run build`, output `dist/`.
  4. Set `site` in `astro.config.mjs` to your production domain for canonical URLs.
