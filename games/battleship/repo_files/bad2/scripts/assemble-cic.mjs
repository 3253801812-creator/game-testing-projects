import { readFile, writeFile, mkdir } from 'node:fs/promises';
const source=new URL('../src/standalone.html',import.meta.url);
const target=new URL('../dist/index.html',import.meta.url);
const body=await readFile(source,'utf8');
if(!/canvas[^>]+game/i.test(body)) throw new Error('CIC canvas contract missing');
await mkdir(new URL('../dist/',import.meta.url),{recursive:true});
await writeFile(target,body,'utf8');
console.log('blacktide CIC entry assembled');
