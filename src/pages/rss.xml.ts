import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = (await getCollection('journal')).filter(p => p.data.status !== 'draft').sort((a,b) => +b.data.date - +a.data.date);
  const items = posts.map((p) => {
    const url = new URL(`/journal/${p.slug}`, site).toString();
    const title = p.data.title;
    const description = p.data.excerpt || '';
    const pubDate = p.data.date.toUTCString();
    return `
      <item>
        <title><![CDATA[${title}]]></title>
        <link>${url}</link>
        <guid>${url}</guid>
        <pubDate>${pubDate}</pubDate>
        <description><![CDATA[${description}]]></description>
      </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Coherenceism Journal</title>
      <link>${site}</link>
      <description>Transmissions and journals from the coherence field.</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }});
}
