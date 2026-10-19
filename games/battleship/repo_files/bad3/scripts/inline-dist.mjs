import fs from 'node:fs/promises';
import path from 'node:path';

const distFile = path.resolve('dist/index.html');
const sourceFile = path.resolve('src/standalone.html');

// This project is authored as an already self-contained sonar console page.
// Re-emit it byte-for-byte so the packaging step never depends on another game.
const html = await fs.readFile(sourceFile, 'utf8');
if (!html.includes('THREE') || !html.includes('OrbitControls')) {
  throw new Error('Abyssal Sonar Oracle standalone entry is missing its 3D runtime references.');
}
if (/\/(?:assets|src)\//.test(html)) {
  throw new Error('Abyssal Sonar Oracle entry still references local runtime assets.');
}
await fs.mkdir(path.dirname(distFile), { recursive: true });
await fs.writeFile(distFile, html, 'utf8');
console.log('abyssal standalone entry verified and written');
