import type {Metadata} from 'next';
import {MyRecord} from '@/components/Records';
export const metadata:Metadata={title:'나의 기록 | 오늘의 기운',description:'방문과 실천, 운동, 저장한 명언을 통해 나의 작은 변화를 돌아보세요.',openGraph:{title:'나의 기록 | 오늘의 기운',description:'나를 돌본 시간, 차곡차곡 쌓이는 작은 변화.'}};
export default function Page(){return <section className="page-shell"><div className="container"><MyRecord/></div></section>}
