import {normalizeBirth} from './normalizeBirth';
import {calculatePillars} from './calculatePillars';
import {calculateFiveElements} from './calculateFiveElements';
import {calculateYinYang} from './calculateYinYang';
import {ELEMENTS,ENGINE_VERSION,type BirthInput} from './types';
export function buildSajuProfile(input:BirthInput){const birth=normalizeBirth(input);const {pillars,warnings}=calculatePillars(birth);const fiveElements=calculateFiveElements(pillars);const values=Object.values(fiveElements);const strongest=ELEMENTS.filter(e=>fiveElements[e]===Math.max(...values));const weakest=ELEMENTS.filter(e=>fiveElements[e]===Math.min(...values));return {engineVersion:ENGINE_VERSION,birth,pillars,dayMaster:pillars.day?.stem||null,fiveElements,yinYang:calculateYinYang(pillars),elementInsight:{strongest,weakest},warnings};}
export type SajuProfile=ReturnType<typeof buildSajuProfile>;
