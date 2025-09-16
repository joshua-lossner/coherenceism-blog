#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = process.argv[2];
if (!SRC_DIR) {
  console.error('Usage: node scripts/import-journals.mjs "/absolute/or/relative/path/to/source"');
  process.exit(1);
}

const DEST_DIR = path.join('src','content','journal');
if (!fs.existsSync(DEST_DIR)) fs.mkdirSync(DEST_DIR, { recursive: true });

const RIVER_KEYWORDS = {
  'rest-rhythm': ['rest','rhythm','recovery','pace','slow','sleep','restore','pause','breath','breathing'],
  'human-ai': ['ai','artificial','model','assistant','co-create','co-creating','language model','gpt','anthropic','openai'],
  'history-systems': ['system','systems','governance','history','institution','protocol','constitution','policy','structure'],
  'agency': ['agency','choice','defaults','freedom','decision','decide','options','futures','design'],
  'awakening-alignment': ['alignment','awaken','awakening','coherence','presence','resonance','attention','sensing']
};

const rivers = Object.keys(RIVER_KEYWORDS);

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}

function detectRiver(text) {
  const lc = text.toLowerCase();
  let best = { river: 'rest-rhythm', score: 0 };
  for (const river of rivers) {
    const kws = RIVER_KEYWORDS[river];
    let score = 0;
    for (const k of kws) { if (lc.includes(k)) score++; }
    if (score > best.score) best = { river, score };
  }
  return best.score > 0 ? best.river : 'rest-rhythm';
}

function firstHeading(body) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

function firstParagraph(body) {
  const clean = body.replace(/^#\s+.*$/m,'').trim();
  const p = clean.split(/\n\s*\n/)[0] || '';
  return p.replace(/\s+/g,' ').trim();
}

function findDateFromFilename(file) {
  const m = path.basename(file).match(/(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  const stat = fs.statSync(file);
  const d = new Date(stat.mtime);
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const dd = String(d.getDate()).padStart(2,'0');
  return `${d.getFullYear()}-${mm}-${dd}`;
}

function walk(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir,f);
    const s = fs.statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (/\.md$/i.test(f)) out.push(p);
  }
  return out;
}

const files = walk(SRC_DIR);
let imported = 0;
for (const f of files) {
  const raw = fs.readFileSync(f,'utf8');
  // crude frontmatter split
  let body = raw;
  if (raw.startsWith('---')) {
    const idx = raw.indexOf('\n---', 3);
    if (idx !== -1) body = raw.slice(idx+4);
  }
  const title = firstHeading(body) || path.basename(f, path.extname(f));
  const excerptRaw = firstParagraph(body);
  const excerpt = excerptRaw.length > 220 ? (excerptRaw.slice(0,220).split(' ').slice(0,-1).join(' ') + '…') : excerptRaw;
  const date = findDateFromFilename(f);
  const river = detectRiver(raw);
  const slug = `${date}-${slugify(title)}`;
  const dest = path.join(DEST_DIR, `${slug}.md`);
  if (fs.existsSync(dest)) { console.warn('Skip (exists):', dest); continue; }

  const fm = [
    '---',
    `title: ${title.replace(/"/g,'\"')}`,
    `subtitle: `,
    `date: ${date}`,
    `river: ${river}`,
    `rivers: []`,
    `form: journal`,
    `tags: []`,
    `excerpt: ${excerpt ? '"'+excerpt.replace(/"/g,'\"')+'"' : ''}`,
    `pullQuote: `,
    `related: []`,
    `orderInRiver: `,
    `status: published`,
    `featured: false`,
    '---',
    ''
  ].join('\n');

  // Remove first heading if present to avoid double title
  const cleanedBody = body.replace(/^#\s+.*\n?/, '').trimStart();
  fs.writeFileSync(dest, fm + cleanedBody);
  console.log('Imported:', dest);
  imported++;
}

console.log(`\nDone. Imported ${imported} file(s) into ${DEST_DIR}`);

