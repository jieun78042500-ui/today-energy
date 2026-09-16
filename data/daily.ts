import { dateKey,dayIndex } from './content';
export type Profile={nickname:string;year:string;month:string;day:string;hour:string;minute?:string;leapMonth?:boolean;timezone?:string;dayBoundary?:'midnight'|'zi23';calendar:'solar'|'lunar';reminder:boolean};
export const emptyProfile:Profile={nickname:'',year:'',month:'',day:'',hour:'',minute:'00',leapMonth:false,timezone:'Asia/Seoul',dayBoundary:'midnight',calendar:'solar',reminder:false};
export {categories,flowMessages,missions,quoteCategories,library} from './catalog';
import {dailyResult} from '../lib/saju/client';
export const getDaily=dailyResult;
export function addDays(key:string,delta:number){const d=new Date(key+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+delta);return dateKey(d);}
export function weekKeys(key:string){const day=new Date(key+'T12:00:00Z').getUTCDay();return Array.from({length:7},(_,i)=>addDays(key,i-(day+6)%7));}
export function displayDate(key:string){return new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',dateStyle:'long'}).format(new Date(key+'T12:00:00Z'));}
