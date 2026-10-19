import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const target = path.resolve(root, '../../final/steel-tide-command/index.html');
let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

html = html.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/g, (_, href) => {
  const file = path.join(dist, href.replace(/^\//, ''));
  return `<style>\n${fs.readFileSync(file, 'utf8')}\n</style>`;
});

html = html.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/g, (_, src) => {
  const file = path.join(dist, src.replace(/^\//, ''));
  return `<script type="module">\n${fs.readFileSync(file, 'utf8')}\n<\/script>`;
});

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, html, 'utf8');
console.log(`Single-file build written to ${target}`);
