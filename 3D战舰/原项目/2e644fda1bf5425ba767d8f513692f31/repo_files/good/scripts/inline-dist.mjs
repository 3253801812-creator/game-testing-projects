import fs from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
let html = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (cssMatch) {
  const css = await fs.readFile(path.join(dist, cssMatch[1].replace(/^\//, '')), 'utf8');
  html = html.replace(cssMatch[0], `<style>${css}</style>`);
}
const jsMatch = html.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);
if (jsMatch) {
  const js = await fs.readFile(path.join(dist, jsMatch[1].replace(/^\//, '')), 'utf8');
  html = html.replace(jsMatch[0], `<script type="module">${js}<\/script>`);
}
await fs.mkdir(path.resolve('final'), { recursive: true });
await fs.writeFile(path.resolve('final/index.html'), html);
console.log('Created final/index.html');
