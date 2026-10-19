import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

html = html.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/g, (_m, href) => {
  const cssPath = path.join(dist, href.replace(/^\//, ''));
  const css = fs.readFileSync(cssPath, 'utf8');
  return `<style>${css}</style>`;
});

html = html.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/g, (_m, src) => {
  const jsPath = path.join(dist, src.replace(/^\//, ''));
  const js = fs.readFileSync(jsPath, 'utf8');
  return `<script type="module">${js}<\/script>`;
});

const finalDir = path.join(root, 'final');
fs.mkdirSync(finalDir, { recursive: true });
fs.writeFileSync(path.join(finalDir, 'index.html'), html);
console.log('Created final/index.html as a single-file application.');
