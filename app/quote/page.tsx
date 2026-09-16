import type { Metadata } from 'next';
import { PageHero, Quotes } from '@/components/Experiences';
export const metadata: Metadata = { title: '오늘의 명언 | 오늘의 기운',description:'좋은 문장은, 좋은 오늘을 만듭니다.',openGraph:{title:'오늘의 명언 | 오늘의 기운',description:'좋은 문장은, 좋은 오늘을 만듭니다.',locale:'ko_KR',type:'website'} };
export default function Page(){return <section className="page-shell"><div className="container"><Quotes/></div></section>}
