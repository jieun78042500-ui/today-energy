import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/saju/','/cheongan-jiji/','/today/','/practice/','/quote/','/exercise/','/my-record/'].map(path=>({url:'https://oneul-energy-september.jieun78042500.chatgpt.site'+path,changeFrequency:'weekly',priority:path==='/'?1:0.8}));}

