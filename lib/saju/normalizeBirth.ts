import {Temporal} from '@js-temporal/polyfill';
import {lunarToSolar} from './lunarConversion';
import type {BirthInput,NormalizedBirth} from './types';
export function normalizeBirth(input:BirthInput,now=Temporal.Now.instant()):NormalizedBirth{
 if(!input||typeof input.birthDate!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(input.birthDate))throw new Error('생년월일을 YYYY-MM-DD 형식으로 입력해주세요.');
 if(input.birthTime!=null&&typeof input.birthTime!=='string')throw new Error('출생시간은 문자열이어야 합니다.');
 for(const key of ['timeUnknown','leapMonth'] as const)if(input[key]!==undefined&&typeof input[key]!=='boolean')throw new Error('시간 미상·윤달 여부는 true 또는 false여야 합니다.');
 if(input.timezone!==undefined&&(typeof input.timezone!=='string'||!input.timezone.trim()))throw new Error('시간대를 확인해주세요.');
 if(!['solar','lunar'].includes(input.calendarType))throw new Error('양력 또는 음력을 선택해주세요.');
 const year=Number(input.birthDate.slice(0,4));if(year<1900||year>2050)throw new Error('지원하는 출생연도는 1900~2050년입니다.');
 if(input.dayBoundary&&!['midnight','zi23'].includes(input.dayBoundary))throw new Error('날짜 변경 기준이 잘못되었습니다.');
 const timezone=input.timezone||'Asia/Seoul';try{now.toZonedDateTimeISO(timezone)}catch{throw new Error('유효한 시간대를 입력해주세요.');}
 const date=input.calendarType==='lunar'?lunarToSolar(input.birthDate,input.leapMonth===true):input.birthDate;
 let civil;try{civil=Temporal.PlainDate.from(date,{overflow:'reject'})}catch{throw new Error('존재하지 않는 날짜입니다.');}
 const time=input.timeUnknown||!input.birthTime?null:input.birthTime;
 if(time&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(time))throw new Error('출생시간을 00:00~23:59로 입력해주세요.');
 if(Temporal.PlainDate.compare(civil,now.toZonedDateTimeISO(timezone).toPlainDate())>0)throw new Error('미래 날짜는 입력할 수 없습니다.');
 if(time){let instant;try{instant=Temporal.ZonedDateTime.from(`${date}T${time}[${timezone}]`,{disambiguation:'reject'}).toInstant()}catch{throw new Error('이 지역의 시간 변경으로 존재하지 않거나 중복되는 출생시간입니다. 정확한 UTC 오프셋 시간대를 입력해주세요.');}if(Temporal.Instant.compare(instant,now)>0)throw new Error('미래 출생시간은 입력할 수 없습니다.');}
 return {solarDate:date,solarTime:time,originalCalendarType:input.calendarType,timezone,dayBoundary:input.dayBoundary||'midnight',original:{...input,timezone}};
}
