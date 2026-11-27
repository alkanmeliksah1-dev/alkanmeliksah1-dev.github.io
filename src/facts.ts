// Çalışma ve etkinlik bilgilerini her yerde aynı sırada, aynı etiketlerle üretir.
import { eventKinds, events, ui, works, type Lang } from './data';
import { fullDate, href } from './lib';

export type Row = { label: string; value: string; href?: string }[];
type Work = (typeof works)[number];
type Event = (typeof events)[number];

export const eventDate = (e: Event, lang: Lang) => {
  const d = fullDate(e.date, lang);
  const shown = e.month ? d.replace(/^\d+\s+/, '').replace(/^(\w)/, (c) => c.toUpperCase()) : d;
  return e.time ? `${shown} · ${e.time}` : shown;
};

export const eventsOf = (w: Work) => events.filter((e) => e.work === w.slug).sort((a, b) => a.date.localeCompare(b.date));

// Çalışma satırları
export const workFacts = (w: Work, lang: Lang): { label: string; items: { text: string; href?: string }[] }[] => {
  const rows: { label: string; items: { text: string; href?: string }[] }[] = [];
  if (w.scoring) rows.push({ label: ui.f_scoring[lang], items: [{ text: w.scoring[lang] }] });
  if (w.role) rows.push({ label: ui.f_role[lang], items: [{ text: w.role[lang] }] });
  if (w.text) rows.push({ label: ui.f_text[lang], items: [{ text: w.text }] });
  if (w.director) rows.push({ label: ui.f_director[lang], items: [{ text: w.director }] });
  const evs = eventsOf(w);
  if (evs.length) {
    const label = evs[0].kind === 'release' ? ui.f_release[lang] : evs[0].kind === 'theatre' ? ui.f_premiere[lang] : ui.f_performances[lang];
    rows.push({ label, items: evs.map((e) => ({ text: `${eventDate(e, lang).split(' · ')[0]} — ${e.title}`, href: href(lang, `events/${e.slug}`) })) });
  }
  if (w.award) rows.push({ label: ui.f_award[lang], items: [{ text: w.award[lang] }] });
  return rows;
};

// Etkinlik satırları
export const eventFacts = (e: Event, lang: Lang): { label: string; items: { text: string; href?: string }[] }[] => {
  const w = works.find((x) => x.slug === e.work);
  const rows: { label: string; items: { text: string; href?: string }[] }[] = [];
  rows.push({ label: ui.f_date[lang], items: [{ text: eventDate(e, lang) }] });
  if (e.kind === 'release') rows.push({ label: ui.f_label[lang], items: [{ text: e.label ?? ui.tba[lang] }] });
  else rows.push({ label: ui.f_venue[lang], items: [{ text: e.venue?.[lang] ?? ui.tba[lang] }] });
  if (w) rows.push({ label: ui.f_work[lang], items: [{ text: w.title, href: href(lang, `works/${w.slug}`) }] });
  if (e.kind === 'theatre') {
    if (w?.text) rows.push({ label: ui.f_text[lang], items: [{ text: w.text }] });
    if (w?.director) rows.push({ label: ui.f_director[lang], items: [{ text: w.director }] });
    if (w?.role) rows.push({ label: ui.f_role[lang], items: [{ text: w.role[lang] }] });
  } else if (e.performers) rows.push({ label: ui.f_performers[lang], items: [{ text: e.performers }] });
  return rows;
};

export const kindLabel = (e: Event, lang: Lang) => eventKinds[e.kind][lang];
