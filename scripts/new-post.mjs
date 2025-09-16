#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const [, , ...args] = process.argv;
if (args.length === 0) {
console.error('Usage: npm run new:post "Title of Post" [river=rest-rhythm] [form=journal]');
  process.exit(1);
}

const title = args[0];
const river = (args[1] || 'rest-rhythm');
const formArg = (args[2] || 'journal').toLowerCase();
const form = ['journal','essay','announcement','transmission'].includes(formArg) ? formArg : 'journal';

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const slugSafe = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const filename = `${yyyy}-${mm}-${dd}-${slugSafe}.md`;
const dir = path.join('src','content','journal');
const filepath = path.join(dir, filename);

const frontmatter = `---\n`+
`title: ${title}\n`+
`date: ${yyyy}-${mm}-${dd}\n`+
`subtitle: \n`+
`river: ${river}\n`+
`rivers: []\n`+
`form: ${form}\n`+
`tags: []\n`+
`excerpt: \n`+
`pullQuote: \n`+
`related: []\n`+
`orderInRiver: \n`+
`status: published\n`+
`featured: false\n`+
`---\n\nStart writing here.\n`;

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
if (fs.existsSync(filepath)) {
  console.error('File already exists:', filepath);
  process.exit(1);
}
fs.writeFileSync(filepath, frontmatter);
console.log('Created', filepath);
