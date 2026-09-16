import {buildSajuProfile,type SajuProfile} from './buildSajuProfile';
import {buildDaily} from './daily';
import {ENGINE_VERSION,type BirthInput} from './types';
import {normalizeBirth} from './normalizeBirth';
export type ProfileInput={year:string;month:string;day:string;hour:string;minute?:string;calendar?:'solar'|'lunar';leapMonth?:boolean;timezone?:string;dayBoundary?:'midnight'|'zi23'};
export function toBirthInput(p:ProfileInput):BirthInput{return {birthDate:`${p.year}-${p.month.padStart(2,'0')}-${p.day.padStart(2,'0')}`,birthTime:p.hour===''?null:`${p.hour.padStart(2,'0')}:${(p.minute||'00').padStart(2,'0')}`,timeUnknown:p.hour==='',calendarType:p.calendar||'solar',leapMonth:p.leapMonth||false,timezone:p.timezone||'Asia/Seoul',dayBoundary:p.dayBoundary||'midnight'};}
const memo=new Map<string,SajuProfile>();
export function profileResult(p:ProfileInput){if(!p.year)return null;const input=toBirthInput(p);const key=JSON.stringify(input);if(memo.has(key))return memo.get(key)!;const result=buildSajuProfile(input);if(memo.size>20)memo.clear();memo.set(key,result);return result;}
export function safeProfile(p:ProfileInput){try{return profileResult(p)}catch{return null}}
const dailyMemo=new Map<string,ReturnType<typeof buildDaily>>();
export function dailyResult(p:ProfileInput,date:string){const profile=safeProfile(p);const key=ENGINE_VERSION+JSON.stringify(profile?.birth||null)+date;let result=dailyMemo.get(key);if(!result){result=buildDaily(profile,date);if(dailyMemo.size>30)dailyMemo.clear();dailyMemo.set(key,result);}return {...result,date,exercise:result.exercise.category,exerciseRecommendation:result.exercise};}
// Detect accidental cache corruption, not an authentication mechanism.
function digest(value:unknown){let n=2166136261;for(const c of JSON.stringify(value))n=Math.imul(n^c.charCodeAt(0),16777619);return (n>>>0).toString(16)}
// Restore only in effects/actions. Version, normalized input and checksum must match.
export function persistCalculated(p:ProfileInput,date:string){
 try{if(p.year){const input=toBirthInput(p);const key=JSON.stringify(input);const saved=JSON.parse(localStorage.getItem('sajuProfile')||'null');if(saved?.engineVersion===ENGINE_VERSION&&saved.inputKey===key&&saved.checksum===digest(saved.data)&&JSON.stringify(saved.data.birth)===JSON.stringify(normalizeBirth(input)))memo.set(key,saved.data);}}catch{}
 const profile=safeProfile(p);const profileKey=JSON.stringify(profile?.birth||null);const dailyKey=ENGINE_VERSION+profileKey+date;
 try{const saved=JSON.parse(localStorage.getItem('dailyData_'+date)||'null');if(saved?.engineVersion===ENGINE_VERSION&&saved.profileKey===profileKey&&saved.data?.today?.date===date&&saved.checksum===digest(saved.data))dailyMemo.set(dailyKey,saved.data);}catch{}
 const result=dailyResult(p,date);
 try{const data=dailyMemo.get(dailyKey);localStorage.setItem('sajuProfile',JSON.stringify({engineVersion:ENGINE_VERSION,inputKey:JSON.stringify(toBirthInput(p)),data:profile,checksum:digest(profile)}));localStorage.setItem('dailyData_'+date,JSON.stringify({engineVersion:ENGINE_VERSION,profileKey,data,checksum:digest(data)}));for(const k of Object.keys(localStorage))if(k.startsWith('dailyData_')&&k!=='dailyData_'+date)localStorage.removeItem(k);}catch{}return result;
}
