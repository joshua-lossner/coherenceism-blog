import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('journal')).sort((a,b) => +b.data.date - +a.data.date);
  const data = posts.map(p => ({
    title: p.data.title,
    slug: p.slug,
    excerpt: p.data.excerpt ?? '',
    tags: p.data.tags,
    form: p.data.form,
    river: p.data.river,
    date: p.data.date.toISOString()
  }));
  return new Response(JSON.stringify({ count: data.length, posts: data }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
