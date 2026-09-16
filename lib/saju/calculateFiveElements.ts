import {ELEMENTS,type Element,type Pillars} from './types';
export function symbols(p:Pillars){return Object.values(p).flatMap(x=>x?[x.stem,x.branch]:[]);}
// Visible stems and principal branch elements only, equal weights; not hidden stems/seasonal strength.
export function calculateFiveElements(p:Pillars){const all=symbols(p);const counts=ELEMENTS.map(e=>all.filter(x=>x.element===e).length);const raw=counts.map(n=>all.length?n/all.length*100:0);const rounded=raw.map(Math.floor);let left=all.length?100-rounded.reduce((a,b)=>a+b,0):0;const order=raw.map((v,i)=>({i,r:v-rounded[i]})).sort((a,b)=>b.r-a.r);for(const {i} of order){if(left-->0)rounded[i]++;}return Object.fromEntries(ELEMENTS.map((e,i)=>[e,rounded[i]])) as Record<Element,number>;}
