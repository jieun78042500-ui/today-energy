import {symbols} from './calculateFiveElements';
import type {Pillars} from './types';
export function calculateYinYang(p:Pillars){const all=symbols(p);const yang=all.length?Math.round(all.filter(x=>x.yinYang==='양').length/all.length*100):0;return {yang,yin:all.length?100-yang:0};}
