import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const require = createRequire(import.meta.url);
let ts;
try {
  ts = require('typescript');
} catch {
  const globalRoot = execFileSync('npm', ['root', '-g'], { encoding: 'utf8' }).trim();
  ts = require(path.join(globalRoot, 'typescript', 'lib', 'typescript.js'));
}
let engine = ts.transpileModule(fs.readFileSync(path.join(root, 'src', 'engine.ts'), 'utf8'), {
  compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020, strict: true }
}).outputText.replace(/\bexport\s+(?=(?:class|function|const|let|var)\b)/g, '');
let ui = fs.readFileSync(path.join(root, 'scripts', 'fallback-ui.js'), 'utf8');
const start = ui.indexOf("const root = document.getElementById('root');");
if (start < 0) throw new Error('fallback UI adapter entry missing');
ui = ui.slice(start)
  .replace(/^import\s+\{\s*CrapsEngine\s*\}\s+from\s+['"]\.\/engine\.js['"];?\s*$/m, '')
  .replace(/^import\s+\{\s*VARIANT\s*\}\s+from\s+['"]\.\/variant\.js['"];?\s*$/m, '');
const js = `"use strict";\n${engine}\nconst VARIANT='production';\n${ui}`;
const css = fs.readFileSync(path.join(root, 'src', 'index.css'), 'utf8')
  .split(/\r?\n/).filter(line => !line.trim().startsWith('@tailwind')).join('\n');
const dist = path.join(root, 'dist');
const assets = path.join(dist, 'assets');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(assets, { recursive: true });
fs.writeFileSync(path.join(assets, 'app.js'), js);
fs.writeFileSync(path.join(assets, 'index.css'), css);
fs.writeFileSync(path.join(dist, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no"><meta name="color-scheme" content="dark"><title>Classic Bubble Craps</title><link rel="stylesheet" href="./assets/index.css"></head><body><div id="root"></div><script defer src="./assets/app.js"></script></body></html>\n`);
console.log(`Offline fallback build complete: ${dist}`);
