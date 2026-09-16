import {build} from 'esbuild';
import {mkdir,cp,writeFile,readFile} from 'node:fs/promises';
await mkdir('dist/server',{recursive:true});
await build({entryPoints:['server/worker.ts'],bundle:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/server/index.js',minify:true});
await cp('out','dist/client',{recursive:true});
await mkdir('dist/.openai',{recursive:true});
await writeFile('dist/.openai/hosting.json',await readFile('.openai/hosting.json'));
