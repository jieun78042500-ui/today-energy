import {Solar} from 'lunar-typescript';
import {Temporal} from '@js-temporal/polyfill';
import {pillar} from './types';
export function calculateTodayPillar(date?:string,timezone='Asia/Seoul'){const today=Temporal.Now.zonedDateTimeISO(timezone).toPlainDate();const d=date?Temporal.PlainDate.from(date,{overflow:'reject'}):today;if(d.year<1900||d.year>2050)throw new Error('지원 날짜는 1900~2050년입니다.');return {date:d.toString(),timezone,...pillar(Solar.fromYmd(d.year,d.month,d.day).getLunar().getDayInGanZhi())};}
