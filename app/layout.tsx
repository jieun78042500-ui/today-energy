import './saju-reference.css';
import type { Metadata } from 'next';
import './globals.css';
import { EnergyProvider } from '@/components/EnergyStore';
import { JourneyTools } from '@/components/JourneyTools';
import { Header, Footer } from '@/components/Shell';
export const metadata: Metadata = { metadataBase: new URL('https://oneul-energy-september.jieun78042500.chatgpt.site'), title: '오늘의 기운 | 오늘의 나와 하루 운세', description: '생년월일로 나의 사주와 천간지지를 알아보고, 오늘의 일진과 실천, 명언, 5분 운동을 확인하세요.', icons: { icon: '/favicon.svg' }, openGraph: { title: '오늘의 기운', description: '좋은 기운이, 좋은 하루를 만듭니다.', locale: 'ko_KR', type: 'website' } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="ko"><body><EnergyProvider><JourneyTools/><Header/><main>{children}</main><Footer/></EnergyProvider></body></html>; }


