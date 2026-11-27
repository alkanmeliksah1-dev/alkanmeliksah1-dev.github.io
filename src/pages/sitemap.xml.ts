// Arama motorları için site haritası: her sayfa üç dildeki karşılıklarıyla birlikte.
import { LANGS, nav, works, events } from '../data';
import { href } from '../lib';

const SITE = 'https://meliksahalkan.com';

export function GET() {
  const slugs = [
    ...nav.map((n) => n.slug),
    ...works.map((w) => `works/${w.slug}`),
    ...events.map((e) => `events/${e.slug}`),
  ];
  const alt = (slug: string) =>
    LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${href(l, slug)}"/>`).join('') +
    `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${href('en', slug)}"/>`;
  const urls = slugs.flatMap((s) => LANGS.map((l) => `<url><loc>${SITE}${href(l, s)}</loc>${alt(s)}</url>`));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
