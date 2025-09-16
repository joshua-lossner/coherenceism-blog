export async function GET({ site }) {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://coherenceism.blog';
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' }});
}

