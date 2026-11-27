// Yapay zekâ asistanları (ChatGPT, Perplexity vb.) için sitenin kısa, düz metin özeti.
// Tamamen data.ts'ten üretilir.
import { site, ui, bio, statement, works, events, awards, education } from '../data';
import { href } from '../lib';

const SITE = 'https://meliksahalkan.com';

export function GET() {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.name} — ${ui.roles.en}, ${ui.city.en}. ${bio.en[0]}`,
    '',
    ...bio.en.slice(1), '',
    '## Approach', '', ...statement.en, '',
    '## Works', '',
    ...works.map((w) => `- [${w.title}](${SITE}${href('en', `works/${w.slug}`)}) (${w.year})${w.scoring ? ` — ${w.scoring.en}` : w.role ? ` — ${w.role.en}` : ''}`),
    '', '## Events', '',
    ...events.map((e) => `- [${e.title}](${SITE}${href('en', `events/${e.slug}`)}) — ${e.date}${e.venue ? `, ${e.venue.en}` : ''}`),
    '', '## Awards', '', ...awards.map((a) => `- ${a.what.en} (${a.when.en})`),
    '', '## Education', '', ...education.map((e) => `- ${e.what.en} (${e.years})`),
    '', '## Links', '',
    `- Website (English): ${SITE}/`, `- Türkçe: ${SITE}/tr/`, `- Français: ${SITE}/fr/`,
    ...Object.entries(site.social).filter(([, u]) => u).map(([k, u]) => `- ${k[0].toUpperCase() + k.slice(1)}: ${u}`),
    `- Email: ${site.email}`, '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
