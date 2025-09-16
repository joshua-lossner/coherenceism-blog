import { getEntryBySlug, getCollection } from 'astro:content';
import { RIVERS } from '../../content/rivers';

export async function GET({ params, site }) {
  const slug = params.slug!;
  const entry = await getEntryBySlug('journal', slug);
  if (!entry) return new Response('Not found', { status: 404 });
  const { data } = entry;
  const river = RIVERS[data.river];
  const color = river?.color || '#8FD694';
  const title = data.title;
  const subtitle = data.subtitle || '';

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0B1012"/>
        <stop offset="100%" stop-color="#0D1417"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect x="60" y="60" width="1080" height="510" fill="none" stroke="${color}" stroke-width="4"/>
    <text x="90" y="140" fill="${color}" font-family="IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="28" letter-spacing="2">${river?.label?.toUpperCase() || 'COHERENCEISM'}</text>
    <foreignObject x="90" y="170" width="1020" height="380">
      <div xmlns="http://www.w3.org/1999/xhtml" style="color:#E6E7EB;font-family:Inter, 'Source Sans 3', system-ui;-webkit-font-smoothing:antialiased;">
        <div style="font-size:56px;line-height:1.15;font-weight:800;">${escapeHtml(title)}</div>
        ${subtitle ? `<div style='margin-top:12px;color:#A4ADB5;font-size:28px;line-height:1.3;font-weight:500;'>${escapeHtml(subtitle)}</div>` : ''}
      </div>
    </foreignObject>
    <text x="90" y="560" fill="#A4ADB5" font-family="IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="22">Coherenceism Journal</text>
  </svg>`;

  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
}

export async function getStaticPaths() {
  const posts = await getCollection('journal');
  return posts.map((p) => ({ params: { slug: p.slug } }));
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
