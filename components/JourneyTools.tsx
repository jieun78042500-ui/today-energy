"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const routes=['/saju','/cheongan-jiji','/today','/practice','/quote','/exercise','/my-record','/mypage'];
export function JourneyTools(){const router=useRouter();useEffect(()=>{const context=(document as Document & {modelContext?:{registerTool:(tool:unknown,options:{signal:AbortSignal})=>unknown}}).modelContext;if(!context?.registerTool)return;const lifecycle=new AbortController();try{Promise.resolve(context.registerTool({name:'navigate_daily_guide',title:'오늘의 기운 페이지 열기',description:'Open a daily guide page. Navigation only; does not save or complete a practice.',inputSchema:{type:'object',properties:{path:{type:'string',enum:routes}},required:['path'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input:unknown){const path=(input as {path?:unknown})?.path;if(typeof path!=='string'||!routes.includes(path))throw new Error('지원하지 않는 페이지입니다.');router.push(path);return {status:'navigation_started',path};}},{signal:lifecycle.signal})).catch(()=>{});}catch{}return()=>lifecycle.abort();},[router]);return null;}

