// =============================================================
//  Arama motorları ve paylaşım önizlemeleri için bilgiler.
//  Buradaki her şey sitenin kendi içeriğinden (data.ts) üretilir:
//  metinler, çeviriler, tarihler ya da afişler değişince bunlar da
//  kendiliğinden güncellenir. Elle tutulan tek şey PROFILE.
// =============================================================
import { site, ui, bio, statement, awards, works, events, recordings, gallery, type Lang } from './data';
import images from './images.json';
import { href, fullDate } from './lib';

const SITE = 'https://meliksahalkan.com';
const IMG = images as Record<string, { w: number; h: number; widths: number[] }>;
type T = Record<Lang, string>;
const R = (en: string, tr: string, fr: string): T => ({ en, tr, fr });

// İsmin farklı yazılışları ve alanlar: Google'ın sizi tanıması için.
export const PROFILE = {
  alternateNames: ['Meliksah Alkan', 'Melikşah ALKAN', 'MELİKŞAH ALKAN'],
  jobTitles: { en: ['Composer', 'Sound designer'], tr: ['Besteci', 'Ses tasarımcısı'], fr: ['Compositeur', 'Créateur sonore'] } as Record<Lang, string[]>,
  knowsAbout: ['Contemporary classical music', 'Music composition', 'Electroacoustic music', 'Sound design', 'Music theatre', 'Flute'],
  university: { name: 'İstanbul Topkapı Üniversitesi', alternateName: 'Istanbul Topkapı University' },
  portrait: 'portrait',
};

const url = (lang: Lang, slug = '') => `${SITE}${href(lang, slug)}`;
const imgUrl = (name: string) => `${SITE}/images/${name}.jpg`;
const PERSON_ID = `${SITE}/#person`;

// Metni cümle sınırından ~155 karakterde keser.
export const clip = (text: string, max = 155) => {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  // cümle sonları: noktalama + boşluk + büyük harf ya da tırnakla başlayan yeni cümle ("12. yüzyıl" bölünmez)
  let best = 0;
  for (const m of t.matchAll(/[.!?…](?=\s+[A-ZÇĞİÖŞÜÂÉÈÎÛ“"‘'(])/g)) {
    const end = (m.index ?? 0) + 1;
    if (end > max) break;
    best = end;
  }
  if (best >= 100) return t.slice(0, best);
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:·—–-]+$/, '') + '…';
};
const join = (xs: string[]) => [...new Set(xs.filter(Boolean))].join(', ');
const firstNote = (n?: { en: string[]; tr?: string[]; fr?: string[] }, lang: Lang = 'en') => (n ? (n[lang] ?? n.en)[0] : '');

const L = {
  works: R('Works by Melikşah Alkan', 'Melikşah Alkan’ın çalışmaları', 'Œuvres de Melikşah Alkan'),
  events: R('Concerts, premieres and performances of works by Melikşah Alkan', 'Melikşah Alkan’ın eserlerinin konserleri, prömiyerleri ve temsilleri', 'Concerts, créations et représentations des œuvres de Melikşah Alkan'),
  media: R('Recordings and videos of works by Melikşah Alkan', 'Melikşah Alkan’ın eserlerinin kayıtları ve videoları', 'Enregistrements et vidéos des œuvres de Melikşah Alkan'),
  gallery: R('Photographs of Melikşah Alkan', 'Melikşah Alkan fotoğrafları', 'Photographies de Melikşah Alkan'),
  contact: R('Contact Melikşah Alkan, composer and sound designer in Istanbul, or subscribe to news about upcoming premieres and concerts.',
    'İstanbul’da yaşayan besteci ve ses tasarımcısı Melikşah Alkan ile iletişime geçin ya da yeni prömiyer ve konser haberleri için bültene kaydolun.',
    'Contacter Melikşah Alkan, compositeur et créateur sonore à Istanbul, ou s’abonner aux nouvelles des prochaines créations et concerts.'),
  portrait: R('portrait', 'portre', 'portrait'),
};

// ---------- sayfa açıklamaları ----------
export const pageDescription = (lang: Lang, slug: string): string => {
  switch (slug) {
    case '': return clip(`${site.name} — ${ui.roles[lang]}, ${ui.city[lang]}. ${bio[lang][1] ?? ''}`);
    case 'about': return clip(bio[lang][0]);
    case 'approach': return clip(statement[lang][0]);
    case 'works': return clip(`${L.works[lang]}: ${join(works.map((w) => w.title))}.`);
    case 'events': return clip(`${L.events[lang]}: ${join(events.map((e) => e.title))}.`);
    case 'media': return clip(`${L.media[lang]}: ${join(recordings.map((r) => (typeof r.title === 'string' ? r.title : r.title[lang])))}.`);
    case 'gallery': return clip(`${L.gallery[lang]}: ${gallery.map((g) => g.title[lang].toLocaleLowerCase(lang)).join(', ')}.`);
    case 'contact': return L.contact[lang];
    default: return clip(`${site.name} — ${ui.roles[lang]}, ${ui.city[lang]}.`);
  }
};

type Work = (typeof works)[number];
type Ev = (typeof events)[number];
const workOf = (slug: string) => works.find((w) => w.slug === slug);

export const workDescription = (w: Work, lang: Lang) => {
  const what = w.scoring?.[lang] ?? w.role?.[lang] ?? '';
  return clip(`${w.title} (${w.year})${what ? ` — ${what}` : ''}. ${firstNote(w.notes, lang)}`);
};

const venueOf = (e: Ev, lang: Lang) => e.venue?.[lang] ?? '';
const whenOf = (e: Ev, lang: Lang) => (e.month ? fullDate(e.date, lang).replace(/^\d+\s/, '') : fullDate(e.date, lang)) + (e.time ? `, ${e.time}` : '');

const workPhrase = (w: Work | undefined, lang: Lang) => {
  if (!w) return site.name;
  if (w.cat !== 'concert') return `${(w.role?.[lang] ?? ui.roles[lang])}: ${site.name}`;
  return { en: `${w.title} by ${site.name}`, tr: `${site.name}’ın ${w.title} eseri`, fr: `${w.title} de ${site.name}` }[lang];
};

export const eventDescription = (e: Ev, lang: Lang) => {
  const where = [whenOf(e, lang), venueOf(e, lang)].filter(Boolean).join(' · ');
  return clip(`${e.title} — ${workPhrase(workOf(e.work), lang)}. ${where}.${e.performers ? ` ${e.performers}.` : ''}`, 200);
};

// ---------- paylaşım görselleri ----------
export type Share = { url: string; w: number; h: number; alt: string };
// .jpg yedekleri en çok 1200 px genişlikte üretiliyor
const share = (name: string, alt: string): Share | undefined => {
  const m = IMG[name]; if (!m) return undefined;
  const k = Math.min(1, 1200 / m.w);
  return { url: imgUrl(name), w: Math.round(m.w * k), h: Math.round(m.h * k), alt };
};
export const eventImage = (e: Ev, lang: Lang) => (e.poster ? share(e.poster, `${ui.poster[lang]}: ${e.title}`) : undefined);
export const workImage = (w: Work, lang: Lang) => {
  const e = events.find((x) => x.work === w.slug && x.poster);
  return e ? eventImage(e, lang) : undefined;
};

// ---------- yapılandırılmış veri (schema.org) ----------
const sameAs = () => Object.values(site.social).filter(Boolean);

export const personLd = (lang: Lang, full = false) => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: site.name,
  url: `${SITE}/`,
  ...(full ? {
    alternateName: PROFILE.alternateNames,
    image: imgUrl(PROFILE.portrait),
    jobTitle: PROFILE.jobTitles[lang],
    description: clip(bio[lang][0], 300),
    email: `mailto:${site.email}`,
    homeLocation: { '@type': 'Place', name: ui.city[lang] },
    alumniOf: { '@type': 'CollegeOrUniversity', ...PROFILE.university },
    knowsAbout: PROFILE.knowsAbout,
    award: awards.map((a) => `${a.what[lang]} (${a.when[lang]})`),
    sameAs: sameAs(),
  } : {}),
});

const websiteLd = (lang: Lang) => ({
  '@type': 'WebSite', '@id': `${SITE}/#website`, url: url(lang), name: site.name,
  inLanguage: lang, publisher: { '@id': PERSON_ID },
});

const crumbs = (lang: Lang, items: { name: string; slug: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: url(lang, it.slug) })),
});

export const pageLd = (lang: Lang, slug: string, label?: string) => {
  const graph: object[] = [websiteLd(lang), personLd(lang, slug === '' || slug === 'about')];
  if (slug === 'about') graph.push({ '@type': 'ProfilePage', url: url(lang, 'about'), mainEntity: { '@id': PERSON_ID }, inLanguage: lang });
  if (slug && label) graph.push(crumbs(lang, [{ name: site.name, slug: '' }, { name: label, slug }]));
  return { '@context': 'https://schema.org', '@graph': graph };
};

export const workLd = (w: Work, lang: Lang, section: string) => {
  const isMusic = w.cat === 'concert';
  const e = events.filter((x) => x.work === w.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personLd(lang),
      {
        '@type': isMusic ? 'MusicComposition' : 'CreativeWork',
        name: w.title, url: url(lang, `works/${w.slug}`), inLanguage: lang,
        dateCreated: w.year,
        description: workDescription(w, lang),
        ...(isMusic ? { composer: { '@id': PERSON_ID } } : { contributor: { '@id': PERSON_ID }, ...(w.role ? { creditText: `${site.name} — ${w.role[lang]}` } : {}) }),
        ...(w.text ? { author: { '@type': 'Person', name: w.text } } : {}),
        ...(w.director ? { director: { '@type': 'Person', name: w.director } } : {}),
        ...(w.award ? { award: w.award[lang] } : {}),
        ...(w.links?.length ? { sameAs: w.links.map((l) => l.url) } : {}),
        ...(e.length ? { subjectOf: e.map((x) => ({ '@type': x.kind === 'release' ? 'MusicAlbum' : 'Event', name: x.title, url: url(lang, `events/${x.slug}`) })) } : {}),
      },
      crumbs(lang, [{ name: site.name, slug: '' }, { name: section, slug: 'works' }, { name: w.title, slug: `works/${w.slug}` }]),
    ],
  };
};

export const eventLd = (e: Ev, lang: Lang, section: string) => {
  const w = workOf(e.work);
  const img = e.poster ? imgUrl(e.poster) : undefined;
  const page = url(lang, `events/${e.slug}`);
  const venue = venueOf(e, lang);
  const performers = (e.lineup?.map((p) => p.name) ?? (e.performers ? e.performers.split(/,\s*/) : [])).map((name) => ({ '@type': 'Person', name }));
  const comp = w ? { '@type': w.cat === 'concert' ? 'MusicComposition' : 'CreativeWork', name: w.title, url: url(lang, `works/${w.slug}`), [w.cat === 'concert' ? 'composer' : 'contributor']: { '@id': PERSON_ID } } : undefined;
  const node = e.kind === 'release'
    ? {
        '@type': 'MusicAlbum', name: e.title, url: page, ...(img ? { image: img } : {}),
        datePublished: e.month ? e.date.slice(0, 7) : e.date,
        ...(e.label ? { publisher: { '@type': 'Organization', name: e.label } } : {}),
        ...(performers.length ? { byArtist: performers } : {}),
        ...(comp ? { track: { '@type': 'MusicRecording', name: comp.name, recordingOf: comp } } : {}),
        description: eventDescription(e, lang),
      }
    : {
        '@type': e.kind === 'theatre' ? 'TheaterEvent' : 'MusicEvent',
        name: e.title, url: page, inLanguage: lang,
        startDate: e.time ? `${e.date}T${e.time}` : e.date,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        ...(venue ? { location: { '@type': 'Place', name: venue.split(',')[0].trim(), address: venue } } : {}),
        ...(img ? { image: [img] } : {}),
        description: eventDescription(e, lang),
        ...(performers.length ? { performer: performers } : {}),
        ...(comp ? { workPerformed: comp } : {}),
        ...(e.festival ? { superEvent: { '@type': 'Festival', name: e.festival[lang] } } : {}),
        ...(e.credits?.length ? { contributor: { '@id': PERSON_ID } } : {}),
      };
  return {
    '@context': 'https://schema.org',
    // mekânı henüz belli olmayan etkinlik, Google'a eksik veriyle bildirilmez; mekân eklenince kendiliğinden görünür
    '@graph': [personLd(lang), ...(e.kind === 'release' || venue ? [node] : []), crumbs(lang, [{ name: site.name, slug: '' }, { name: section, slug: 'events' }, { name: e.title, slug: `events/${e.slug}` }])],
  };
};

export const portraitAlt = (lang: Lang) => `${site.name} — ${L.portrait[lang]}`;
