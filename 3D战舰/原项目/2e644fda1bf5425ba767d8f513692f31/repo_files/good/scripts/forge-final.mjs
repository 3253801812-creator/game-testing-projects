import { createReadStream, createWriteStream, mkdirSync, rmSync } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { resolve } from 'node:path';
const input=resolve('src/standalone.html');
const dir=resolve('dist');
rmSync(dir,{recursive:true,force:true});
mkdirSync(dir,{recursive:true});
await pipeline(createReadStream(input),createWriteStream(resolve('dist/index.html')));
console.log('coilfire drydock forged');
