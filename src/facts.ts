// Çalışma, etkinlik ve medya kartlarında her yerde aynı sırada, aynı biçimde gösterilen bilgiler.
// Düzen: üstte küçük etiket (festival / etkinlik adı), büyük başlık (çalışmanın adı),
// altında etiketsiz düz satırlar: kim tarafından, nerede, ne zaman.
import { eventKinds, events, works, type Lang } from './data';
import { fullDate } from './lib';

type Work = (typeof works)[number];
type Event = (typeof events)[number];

export const eventDate = (e: Event, lang: Lang) => {
  const d = fullDate(e.date, lang);
  const shown = e.month ? d.replace(/^\d+\s+/, '').replace(/^(\w)/, (c) => c.toUpperCase()) : d;
  return e.time ? `${shown}, ${e.time}` : shown;
};

export const eventsOf = (w: Work) => events.filter((e) => e.work === w.slug).sort((a, b) => b.date.localeCompare(a.date));
export const workOf = (e: Event) => works.find((x) => x.slug === e.work);

const L_TEXT: Record<Lang, string> = { en: 'Text', tr: 'Metin', fr: 'Texte' };
const L_DIR: Record<Lang, string> = { en: 'Director', tr: 'Yönetmen', fr: 'Mise en scène' };
const venueTba: Record<Lang, string> = { en: 'Venue to be announced', tr: 'Mekân açıklanacak', fr: 'Lieu à annoncer' };

// Büyük harfe çevirme: Türkçe adlar Türkçe kurala (i → İ), İngilizce adlar İngilizce kurala (i → I) göre.
const TR_WORDS = new Set(['sesin', 'bilgi', 'müziksev']);
const isTr = (w: string) => /[ğışçöüİĞŞÇÖÜ]/.test(w) || TR_WORDS.has(w.toLocaleLowerCase('tr'));
export const upper = (text: string) => text.split(/(\s+)/).map((w) => w.toLocaleUpperCase(isTr(w) ? 'tr' : 'en')).join('');

// Küçük üst etiket (büyük harfle): konserde festival/etkinlik adı, albümde albüm adı + tür, tiyatroda tür.
export const eventEyebrow = (e: Event, lang: Lang) => {
  const kind = eventKinds[e.kind][lang].toLocaleUpperCase(lang);
  return e.kind === 'concert' ? upper(e.title) : e.kind === 'release' ? `${upper(e.title)} · ${kind}` : kind;
};

// Büyük başlık: konser ve albümde çalışmanın adı, tiyatroda oyunun adı.
export const eventHeading = (e: Event) => (e.kind === 'theatre' ? e.title : workOf(e)?.title ?? e.title);

// Başlığın altındaki silik satır: konser eserlerinde kadro (çalgılar), tiyatroda Melikşah'ın görevi.
export const workSub = (w: Work | undefined, lang: Lang) => (w ? (w.scoring ?? w.role)?.[lang] ?? '' : '');

// Kim: icracılar ya da (tiyatroda) metin yazarı ve yönetmen. k = küçük etiket.
export const eventWho = (e: Event, lang: Lang): { k?: string; v: string }[] => {
  if (e.kind === 'theatre') {
    const w = workOf(e);
    return [w?.text && { k: L_TEXT[lang], v: w.text }, w?.director && { k: L_DIR[lang], v: w.director }].filter(Boolean) as { k?: string; v: string }[];
  }
  return e.performers ? [{ v: e.performers }] : [];
};

// Nerede ve ne zaman
export const eventWhere = (e: Event, lang: Lang, noTime = false) =>
  [e.kind === 'release' ? e.label : e.venue?.[lang] ?? venueTba[lang], noTime ? fullDate(e.date, lang) : eventDate(e, lang)].filter(Boolean).join(' · ');

export const kindLabel = (e: Event, lang: Lang) => eventKinds[e.kind][lang];
