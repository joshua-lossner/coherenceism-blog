#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const JOURNAL_DIR = path.join('src','content','journal');

const RIVER_FROM_TAG = new Map([
  ['history-and-systems-through-coherence','history-systems'],
  ['ai-and-human-agency','agency'],
  ['rest-and-rhythm','rest-rhythm'],
  ['human-and-ai','human-ai'],
  ['awakening-and-alignment','awakening-alignment']
]);

const RIVER_KEYWORDS = {
  'rest-rhythm': ['rest','rhythm','recovery','pace','slow','sleep','restore','pause','breath','breathing'],
  'human-ai': ['ai','artificial','model','assistant','co-create','co-creating','language model','gpt','anthropic','openai'],
  'history-systems': ['system','systems','governance','history','institution','protocol','constitution','policy','structure'],
  'agency': ['agency','choice','defaults','freedom','decision','decide','options','futures','design'],
  'awakening-alignment': ['alignment','awaken','awakening','coherence','presence','resonance','attention','sensing']
};

function listFiles(dir) {
  return fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(f=>path.join(dir,f));
}

function parseFrontmatter(src) {
  if (!src.startsWith('---')) return { data:{}, body:src };
  const end = src.indexOf('\n---', 3);
  if (end === -1) return { data:{}, body:src };
  const yaml = src.slice(3, end).trim();
  const body = src.slice(end+4).replace(/^\s*\n/, '');
  const data = {};
  const lines = yaml.split(/\r?\n/);
  let i=0;
  while (i<lines.length) {
    const line = lines[i];
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (m) {
      const key = m[1];
      let val = m[2];
      if (val === '' && i+1<lines.length && lines[i+1].trim().startsWith('-')) {
        // array
        const arr = [];
        i++;
        while (i<lines.length && lines[i].trim().startsWith('-')) {
          arr.push(lines[i].replace(/^\s*-/,'').trim());
          i++;
        }
        data[key] = arr;
        continue;
      } else {
        data[key] = val.replace(/^"|"$/g,'');
      }
    }
    i++;
  }
  return { data, body };
}

function detectRiver(data, body) {
  if (data.river && typeof data.river === 'string') return data.river;
  if (Array.isArray(data.tags)) {
    for (const t of data.tags) {
      const k = String(t).toLowerCase().replace(/[^a-z0-9]+/g,'-');
      if (RIVER_FROM_TAG.has(k)) return RIVER_FROM_TAG.get(k);
    }
  }
  const lc = body.toLowerCase();
  let best = { river: 'rest-rhythm', score: 0 };
  for (const river of Object.keys(RIVER_KEYWORDS)) {
    let score = 0;
    for (const k of RIVER_KEYWORDS[river]) if (lc.includes(k)) score++;
    if (score > best.score) best = { river, score };
  }
  return best.river;
}

function firstHeading(body) {
  const m = body.match(/^#{1,3}\s+(.+)$/m);
  return m ? m[1].trim().replace(/^\*+|\*+$/g,'') : null;
}

function firstParagraph(body) {
  const clean = body.replace(/^#{1,6}\s+.*$/m,'').trim();
  const p = clean.split(/\n\s*\n/)[0] || '';
  return p.replace(/\s+/g,' ').trim();
}

function getDateFromFilename(file) {
  const m = path.basename(file).match(/(\d{4}-\d{2}-\d{2})/);
  if (m) return m[1];
  const d = new Date(fs.statSync(file).mtime);
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const dd = String(d.getDate()).padStart(2,'0');
  return `${d.getFullYear()}-${mm}-${dd}`;
}

function buildFrontmatter(data, body, filename) {
  const title = data.title || firstHeading(body) || path.basename(filename, '.md');
  const date = data.date || getDateFromFilename(filename);
  const river = detectRiver(data, body);
  const excerptRaw = data.excerpt || firstParagraph(body);
  const excerpt = excerptRaw ? (excerptRaw.length>220 ? (excerptRaw.slice(0,220).split(' ').slice(0,-1).join(' ') + '…') : excerptRaw) : '';
  const status = data.status || (data.published === 'true' || data.published === true ? 'published' : 'published');
  const form = data.form || 'journal';
  const featured = (typeof data.featured !== 'undefined') ? data.featured : false;
  const subtitle = data.subtitle || '';
  const tags = Array.isArray(data.tags) ? data.tags : [];
  const related = Array.isArray(data.related) ? data.related : [];
  const orderInRiver = data.orderInRiver || '';

  const lines = [];
  lines.push('---');
  lines.push(`title: ${title.replace(/"/g,'\\"')}`);
  lines.push(`date: ${date}`);
  lines.push(`river: ${river}`);
  lines.push(`rivers: []`);
  lines.push(`form: ${form}`);
  lines.push(`tags: ${tags.length? '['+tags.map(t=>String(t)).join(', ')+']' : '[]'}`);
  if (excerpt) lines.push(`excerpt: "${excerpt.replace(/"/g,'\\"')}"`);
  if (subtitle) lines.push(`subtitle: "${String(subtitle).replace(/"/g,'\\"')}"`);
  if (data.pullQuote) lines.push(`pullQuote: "${String(data.pullQuote).replace(/"/g,'\\"')}"`);
  lines.push(`related: ${related.length? '['+related.join(', ')+']' : '[]'}`);
  if (orderInRiver && !Number.isNaN(Number(orderInRiver))) lines.push(`orderInRiver: ${Number(orderInRiver)}`);
  lines.push(`status: ${status}`);
  lines.push(`featured: ${featured}`);
  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

function normalizeFile(file) {
  const raw = fs.readFileSync(file,'utf8');
  const { data, body } = parseFrontmatter(raw);
  // remove duplicate top heading matching title
  let newBody = body;
  const h = firstHeading(body);
  if (h && data.title && h.trim().toLowerCase() === String(data.title).trim().toLowerCase()) {
    newBody = body.replace(/^#{1,3}\s+.*\n?/, '');
  }
  const fm = buildFrontmatter(data, newBody, file);
  const updated = fm + newBody.trimStart();
  if (updated !== raw) {
    fs.writeFileSync(file, updated);
    console.log('Normalized:', file);
  }
}

for (const file of listFiles(JOURNAL_DIR)) {
  try { normalizeFile(file); } catch (e) { console.error('Error:', file, e.message); }
}

console.log('Normalization complete.');
