import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const worker=(await import(pathToFileURL(path.resolve('dist/server/index.js')))).default;
const root=path.resolve('dist/client');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2','.txt':'text/plain','.json':'application/json'};
const env={ASSETS:{async fetch(req){let pathname=decodeURIComponent(new URL(req.url).pathname);let filename=path.resolve(root,'.'+pathname);if(!filename.startsWith(root+path.sep)&&filename!==root)return new Response('Forbidden',{status:403});try{if((await stat(filename)).isDirectory())filename=path.join(filename,'index.html');const data=await readFile(filename);return new Response(data,{headers:{'Content-Type':mime[path.extname(filename)]||'application/octet-stream'}})}catch{return new Response(await readFile(path.join(root,'404.html')),{status:404,headers:{'Content-Type':'text/html'}})}}}};
http.createServer(async(req,res)=>{try{const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>20000){res.writeHead(413).end();return}chunks.push(chunk)}const request=new Request('http://127.0.0.1:3018'+req.url,{method:req.method,headers:req.headers,...(chunks.length?{body:Buffer.concat(chunks)}:{})});const response=await worker.fetch(request,env);res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));}catch{res.writeHead(500).end('Preview error')}}).listen(3018,'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:3018'));
