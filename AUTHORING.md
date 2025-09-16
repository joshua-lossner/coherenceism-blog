# Coherenceism Journal — Authoring Guide

## Frontmatter (required)
- title: string
- date: YYYY-MM-DD
- river: rest-rhythm | human-ai | history-systems | agency | awakening-alignment
- form: journal | essay | announcement | transmission

## Frontmatter (recommended)
- subtitle: short supportive line
- tags: [list]
- excerpt: 1–2 sentences (≤220 chars). If omitted, first paragraph is used. Keeping excerpts short makes feed cards uniform.
- pullQuote: one resonant line
- related: [slugs] to suggest cross‑links
- orderInRiver: number (for curated river order)
- status: draft | published
- featured: true | false

## Writing tips
- Voice: first‑person, reflective, grounded; limit jargon.
- Length: keep excerpts short for uniform cards; titles ~6–12 words.
- Rivers: pick exactly one primary river; add optional secondary via `rivers: []`.
- Cross‑links: add 1–2 related entries to guide deeper reading within the same river.

## Creating a new post
```
npm run new:post "Title" <river> <form>
```
Examples:
- `npm run new:post "Attention Gardening" awakening-alignment journal`
- `npm run new:post "Living Constitutions" history-systems essay`

## Consistency & layout
- Cards are uniform via line clamps (2 lines for titles, 3 for excerpts). Prefer concise titles and excerpts.
- Excerpt fallback uses first paragraph; keep it 1–2 sentences.
- River filter persists via URL and localStorage; share links with `?river=<slug>`.
- Featured card appears only on the unfiltered home feed (not when a river is selected).

## OG images
- Every post has an OG image at `/og/<slug>.svg`, tinted to the river color.
- Subtitles appear under titles when present.
