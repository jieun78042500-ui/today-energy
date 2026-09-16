import type {Metadata} from 'next';
import {MyPage} from '@/components/Records';
export const metadata:Metadata={title:'마이페이지 | 오늘의 기운',description:'닉네임, 생년월일과 나의 기록을 관리하세요.',robots:{index:false,follow:true},openGraph:{title:'마이페이지 | 오늘의 기운',description:'나의 정보를 관리하고 하루를 준비하세요.'}};
export default function Page(){return <section className="page-shell"><div className="container"><MyPage/></div></section>}
