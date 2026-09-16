import {Solar} from 'lunar-typescript';
import {Temporal} from '@js-temporal/polyfill';
import {pillar,STEMS,BRANCHES,type NormalizedBirth,type Pillars} from './types';
// lunar-typescript solar terms use UTC+08; compare the birth instant in that frame.
function yearMonth(b:NormalizedBirth,time:string){const z=Temporal.ZonedDateTime.from(`${b.solarDate}T${time}[${b.timezone}]`).withTimeZone('+08:00');const l=Solar.fromYmdHms(z.year,z.month,z.day,z.hour,z.minute,z.second).getLunar();return [l.getYearInGanZhiExact(),l.getMonthInGanZhiExact()];}
export function calculatePillars(b:NormalizedBirth){const warnings:string[]=[];const [year,month]=yearMonth(b,b.solarTime||'12:00');let date=Temporal.PlainDate.from(b.solarDate);const hour=b.solarTime?Number(b.solarTime.slice(0,2)):null;if(b.dayBoundary==='zi23'&&hour!==null&&hour>=23)date=date.add({days:1});const day=pillar(Solar.fromYmd(date.year,date.month,date.day).getLunar().getDayInGanZhi());const result:Pillars={year:pillar(year),month:pillar(month),day,hour:null};
 if(hour!==null){const branch=Math.floor((hour+1)/2)%12;result.hour={stem:STEMS[(STEMS.indexOf(day.stem)%5*2+branch)%10],branch:BRANCHES[branch]};}
 else{warnings.push('출생시간 미상: 시주를 제외한 비율입니다.');const first=yearMonth(b,'00:00'),last=yearMonth(b,'23:59');if(first[0]!==last[0]){result.year=null;warnings.push('입춘 경계일입니다. 출생시간을 알아야 년주를 확정할 수 있습니다.');}if(first[1]!==last[1]){result.month=null;warnings.push('절기 경계일입니다. 출생시간을 알아야 월주를 확정할 수 있습니다.');}if(b.dayBoundary==='zi23'){result.day=null;warnings.push('23시 날짜 변경 기준은 시간 미상일 때 일주도 확정할 수 없습니다.');}}
 return {pillars:result,warnings};}
