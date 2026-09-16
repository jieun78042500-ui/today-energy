import Link from 'next/link';
export default function NotFound(){return <section className="page-shell"><div className="container page-heading"><h1>잠시, 길을 벗어났네요.</h1><p>아래 버튼으로 오늘의 기운을 다시 만나보세요.</p><Link href="/" className="button primary" style={{marginTop:24}}>홈으로 돌아가기</Link></div></section>}
