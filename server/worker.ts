import {buildSajuProfile} from '../lib/saju/buildSajuProfile';
import {interpretSaju} from '../lib/saju/interpret';
import {buildDaily} from '../lib/saju/daily';
import type {BirthInput} from '../lib/saju/types';
type Env={ASSETS:{fetch:(request:Request)=>Promise<Response>}};
const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export async function api(request:Request){const path=new URL(request.url).pathname.replace(/\/$/,'');if(!['/api/saju/calculate','/api/saju/interpret','/api/daily'].includes(path))return json({error:'API를 찾을 수 없습니다.'},404);if(request.method!=='POST')return json({error:'POST 요청을 사용해주세요.'},405);if(!request.headers.get('content-type')?.includes('application/json'))return json({error:'JSON 형식으로 요청해주세요.'},415);try{const text=await request.text();if(text.length>20000)return json({error:'요청이 너무 큽니다.'},413);const body=JSON.parse(text);if(!body||typeof body!=='object'||Array.isArray(body))throw new Error('입력 객체가 필요합니다.');if(path==='/api/saju/calculate')return json(buildSajuProfile(body as BirthInput));
// Recompute from normalized provenance. Never trust caller-supplied pillar/score claims.
const original=body.sajuProfile?.birth?.original;if(!original)throw new Error('계산 API에서 받은 sajuProfile이 필요합니다.');const p=buildSajuProfile(original);if(path==='/api/saju/interpret')return json(interpretSaju(p));if(typeof body.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(body.date))throw new Error('YYYY-MM-DD 날짜를 입력해주세요.');const result=buildDaily(p,body.date);return json({...result,...result.interaction});}catch(error){return json({error:error instanceof Error?error.message:'입력을 확인해주세요.'},400)}}
export default {async fetch(request:Request,env:Env){if(new URL(request.url).pathname.startsWith('/api/'))return api(request);return env.ASSETS.fetch(request);}};
