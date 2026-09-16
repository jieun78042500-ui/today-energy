import type { Metadata } from 'next';
import { PageHero, Learning } from '@/components/Experiences';
export const metadata: Metadata = { title: '천간지지 쉽게 이해하기 | 오늘의 기운',description:'하늘과 땅이 만드는 세상의 흐름을 쉽게 알아보세요.',openGraph:{title:'천간지지 쉽게 이해하기 | 오늘의 기운',description:'하늘과 땅이 만드는 세상의 흐름을 쉽게 알아보세요.',locale:'ko_KR',type:'website'} };
export default function Page(){return <section className="page-shell"><div className="container"><Learning/></div></section>}
