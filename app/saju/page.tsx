import type { Metadata } from 'next';
import { PageHero, Saju } from '@/components/Experiences';
export const metadata: Metadata = { title: '나의 사주 | 오늘의 기운',description:'타고난 기운을 이해하면, 오늘의 내가 더 선명해집니다.',openGraph:{title:'나의 사주 | 오늘의 기운',description:'타고난 기운을 이해하면, 오늘의 내가 더 선명해집니다.',locale:'ko_KR',type:'website'} };
export default function Page(){return <Saju/>}

