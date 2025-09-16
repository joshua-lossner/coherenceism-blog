import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const base = site?.toString() ?? 'http://localhost:4321/';
  const posts = (await getCollection('journal')).sort((a,b) => +b.data.date - +a.data.date);

  const urls: { loc: string; lastmod?: string; }[] = [
    { loc: new URL('/', base).toString() },
    { loc: new URL('/archives', base).toString() },
    { loc: new URL('/essays', base).toString() },
    { loc: new URL('/announcements', base).toString() },
    { loc: new URL('/search', base).toString() },
  ];

  for (const p of posts) {
    urls.push({ loc: new URL(`/journal/${p.slug}`, base).toString(), lastmod: p.data.date.toISOString() });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>`: ''}</url>`).join('\n') +
  `\n</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' }});
}

