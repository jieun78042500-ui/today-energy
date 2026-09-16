import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:'https://oneul-energy-september.jieun78042500.chatgpt.site/sitemap.xml'};}
