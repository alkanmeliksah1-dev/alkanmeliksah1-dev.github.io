// Arama motorları için site haritası: her sayfa üç dildeki karşılıkları ve görselleriyle birlikte.
import { LANGS, nav, works, events, gallery, photos } from '../data';
import { href } from '../lib';

const SITE = 'https://meliksahalkan.com';
const img = (name: string) => `${SITE}/images/${name}.jpg`;
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// her sayfada gösterilen başlıca görseller (Google Görseller için)
const imagesOf = (slug: string): string[] => {
  if (slug === '') return [photos.home];
  if (slug === 'about') return [photos.portrait, photos.about];
  if (slug === 'gallery') return gallery.flatMap((g) => g.items.map((i) => i.img));
  if (slug.startsWith('events/')) { const e = events.find((x) => `events/${x.slug}` === slug); return e?.poster ? [e.poster] : []; }
  if (slug.startsWith('works/')) { const w = slug.slice(6); return events.filter((x) => x.work === w && x.poster).map((x) => x.poster!); }
  const p = (photos as Record<string, string>)[slug];
  return p ? [p] : [];
};

export function GET() {
  const slugs = [
    ...nav.map((n) => n.slug),
    ...works.map((w) => `works/${w.slug}`),
    ...events.map((e) => `events/${e.slug}`),
  ];
  const alt = (slug: string) =>
    LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${href(l, slug)}"/>`).join('') +
    `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${href('en', slug)}"/>`;
  const pics = (slug: string) => [...new Set(imagesOf(slug).filter(Boolean))].map((n) => `<image:image><image:loc>${esc(img(n))}</image:loc></image:image>`).join('');
  const urls = slugs.flatMap((s) => LANGS.map((l) => `<url><loc>${SITE}${href(l, s)}</loc>${alt(s)}${pics(s)}</url>`));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
