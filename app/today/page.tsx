import type { Metadata } from 'next';
import { PageHero, Today } from '@/components/Experiences';
export const metadata: Metadata = { title: '오늘의 나 | 오늘의 운세와 일진',description:'오늘의 기운을 확인하고, 더 좋은 선택을 해보세요.',openGraph:{title:'오늘의 나 | 오늘의 운세와 일진',description:'오늘의 기운을 확인하고, 더 좋은 선택을 해보세요.',locale:'ko_KR',type:'website'} };
export default function Page(){return <section className="page-shell"><div className="container"><Today/></div></section>}
