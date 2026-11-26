import { LANGS, type Lang } from './data';

// Sayfa adresleri: İngilizce kökte, diğer diller /tr/ ve /fr/ altında.
export const href = (lang: Lang, slug = '') => {
  const prefix = lang === 'en' ? '/' : `/${lang}/`;
  return slug ? `${prefix}${slug}/` : prefix;
};

export const langPaths = () => LANGS.map((l) => ({ params: { lang: l === 'en' ? undefined : l }, props: { lang: l } }));

const MONTHS: Record<Lang, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  tr: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  fr: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
};

export const dateParts = (iso: string, lang: Lang) => {
  const [y, m, d] = iso.split('-').map(Number);
  return { day: String(d), month: MONTHS[lang][m - 1], year: String(y) };
};
