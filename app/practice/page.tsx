import type { Metadata } from 'next';
import { PageHero, Practice } from '@/components/Experiences';
export const metadata: Metadata = { title: '오늘 한 가지 실천 | 오늘의 기운',description:'작은 실천이 모여, 더 좋은 내가 됩니다.',openGraph:{title:'오늘 한 가지 실천 | 오늘의 기운',description:'작은 실천이 모여, 더 좋은 내가 됩니다.',locale:'ko_KR',type:'website'} };
export default function Page(){return <section className="page-shell"><div className="container"><Practice/></div></section>}
