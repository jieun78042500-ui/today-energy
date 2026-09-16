import type { Metadata } from 'next';
import { PageHero, Exercise } from '@/components/Experiences';
export const metadata: Metadata = { title: '5분 운동 | 오늘의 기운',description:'몸이 가벼워지면, 마음도 가벼워집니다.',openGraph:{title:'5분 운동 | 오늘의 기운',description:'몸이 가벼워지면, 마음도 가벼워집니다.',locale:'ko_KR',type:'website'} };
export default function Page(){return <section className="page-shell"><div className="container"><Exercise/></div></section>}
