// =============================================================
//  Sitenin tüm içeriği burada. Metin değiştirmek, eser ya da
//  etkinlik eklemek için yalnızca bu dosyayı düzenlemek yeterli.
// =============================================================

export const LANGS = ['en', 'tr', 'fr'] as const;
export type Lang = (typeof LANGS)[number];
type T = Record<Lang, string>;

export const site = {
  name: 'Melikşah Alkan',
  email: 'info@meliksahalkan.com',
  social: {
    // Adres eklenince menüde ve İletişim sayfasında görünür.
    instagram: '',
    youtube: '',
    soundcloud: '',
  },
};

export const nav: { slug: string; label: T }[] = [
  { slug: 'why', label: { en: 'Why', tr: 'Neden', fr: 'Pourquoi' } },
  { slug: 'who', label: { en: 'Who', tr: 'Kim', fr: 'Qui' } },
  { slug: 'what', label: { en: 'What', tr: 'Ne', fr: 'Quoi' } },
  { slug: 'when', label: { en: 'When', tr: 'Ne zaman', fr: 'Quand' } },
  { slug: 'listen', label: { en: 'Watch & Listen', tr: 'İzle & Dinle', fr: 'Voir & Écouter' } },
  { slug: 'contact', label: { en: 'Contact', tr: 'İletişim', fr: 'Contact' } },
];

export const ui = {
  role: { en: 'Composer', tr: 'Besteci', fr: 'Compositeur' },
  roles: {
    en: 'Composer · Flutist · Sound designer',
    tr: 'Besteci · Flütçü · Ses tasarımcısı',
    fr: 'Compositeur · Flûtiste · Créateur sonore',
  },
  city: { en: 'Istanbul', tr: 'İstanbul', fr: 'Istanbul' },
  enter: { en: 'Enter', tr: 'Gir', fr: 'Entrer' },
  menu: { en: 'Menu', tr: 'Menü', fr: 'Menu' },
  education: { en: 'Education', tr: 'Eğitim', fr: 'Formation' },
  masterclasses: { en: 'Masterclasses', tr: 'Masterclass\'lar', fr: 'Masterclasses' },
  awards: { en: 'Awards', tr: 'Ödüller', fr: 'Distinctions' },
  upcoming: { en: 'Upcoming', tr: 'Yaklaşan', fr: 'À venir' },
  past: { en: 'Past', tr: 'Geçmiş', fr: 'Passés' },
  noUpcoming: {
    en: 'New dates will be announced soon.',
    tr: 'Yeni tarihler yakında duyurulacak.',
    fr: 'De nouvelles dates seront bientôt annoncées.',
  },
  listenSoon: {
    en: 'Recordings and videos will appear here soon.',
    tr: 'Kayıtlar ve videolar yakında burada olacak.',
    fr: 'Enregistrements et vidéos bientôt disponibles ici.',
  },
  contactLead: {
    en: 'For commissions, collaborations, scores and recordings.',
    tr: 'Sipariş eser, iş birliği, partisyon ve kayıt talepleri için.',
    fr: 'Pour commandes, collaborations, partitions et enregistrements.',
  },
  email: { en: 'Email', tr: 'E-posta', fr: 'E-mail' },
  basedIn: { en: 'Based in', tr: 'Yaşadığı yer', fr: 'Basé à' },
  follow: { en: 'Follow', tr: 'Takip', fr: 'Suivre' },
};

// ---------- Neden (sanatsal yaklaşım) ----------
export const why: T = {
  tr: 'Alkan\'ın kompozisyon dili, görünen ve görünmeyen arasındaki boşluktan doğar. Kutsal bir eşik olarak ses anlayışının rehberlik ettiği eserleri, dinleyiciyi yapının çözüldüğü ve geriye kalanın saf varlık olduğu içe doğru çeker.',
  en: 'Alkan\'s compositional language emerges from the space between the visible and the unseen. Guided by an understanding of sound as a sacred threshold, his works draw the listener inward, where structure dissolves and what remains is pure presence.',
  fr: 'Le langage compositionnel d\'Alkan naît de l\'espace entre le visible et l\'invisible. Guidées par une conception du son comme seuil sacré, ses œuvres attirent l\'auditeur vers l\'intérieur, là où la structure se dissout et où ne demeure que la présence pure.',
};

// ---------- Kim (biyografi) ----------
export const bio: Record<Lang, string[]> = {
  tr: [
    'İstanbul merkezli besteci Melikşah Alkan (d. 2005), resmi müzik eğitimine on beş yaşında başlamıştır. Flütçü olarak edindiği geçmiş, bestecilik pratiğini icracı perspektifinden kazandığı içgörülerle zenginleştirmiştir. Hâlen Uğurcan Öztekin ve Emre Dündar rehberliğinde kompozisyon çalışmalarını sürdürmekte, elektronik müzik alanında ise Furkan Keçeli ile çalışmaktadır. Alkan, çeşitli koro ve orkestralarda hem enstrümantalist hem de korist olarak geniş çapta performanslar gerçekleştirmiş, ayrıca yardımcı şef olarak görev almıştır. Pierluigi Billone, Enis Gümüş ve Mehmet Ali Uzunselvi ile masterclass çalışmalarına katılmıştır. Müzik kariyerine yönelmeden önce ulusal matematik olimpiyatlarına katılarak analitik becerilerini ortaya koymuştur.',
    'Çeşitli eserleri Sesin Yolculuğu Genç Besteciler Festivali, Bilgi Yeni Müzik Festivali ve İzmir Yeni Müzik Günleri kapsamında Semplice Quartet, Ensemble Intercontemporain ve Niklas Seidl tarafından seslendirilmiş ve ayrıca Gılgamış Uluslararası Bestecilik Yarışması\'nda mansiyon ödülüne layık görülmüştür. Athol Fugard\'ın "A Place with the Pigs: A Personal Parable", Samuel Beckett\'in "Happy Days", Abdül Süsler\'in "Ro-Ap" ve İlyas Odman\'ın "Tek Bi\' Mutlu An" adlı yapımlarında müzik ve ses tasarımcısı olarak görev almıştır.',
  ],
  en: [
    'Istanbul-based composer Melikşah Alkan (b. 2005) began his formal music education at the age of fifteen. His background as a flutist has enriched his compositional craft with practical insights from a performer\'s perspective. Currently studying composition under the guidance of Uğurcan Öztekin and Emre Dündar, and working on electronic music with Furkan Keçeli, Alkan has performed extensively as both an instrumentalist and choir singer in various choirs and orchestras, additionally serving as an assistant conductor. He has participated in masterclasses with Pierluigi Billone, Enis Gümüş and Mehmet Ali Uzunselvi. Prior to pursuing music, he demonstrated analytical skills through his participation in national mathematics olympiads.',
    'His various works have been performed at the Journey of Sound Young Composers Festival, the Bilgi New Music Festival and the Izmir New Music Days by Semplice Quartet, Ensemble Intercontemporain and Niklas Seidl, and he has been awarded an honorable mention at the Gilgamesh International Composition Competition. He served as the music and sound designer for Athol Fugard\'s "A Place with the Pigs: A Personal Parable", Samuel Beckett\'s "Happy Days", Abdül Süsler\'s "Ro-Ap", and İlyas Odman\'s "Tek Bi\' Mutlu An".',
  ],
  // TASLAK ÇEVİRİ — Fransızca bilen birine kontrol ettirilmeli.
  fr: [
    'Compositeur basé à Istanbul, Melikşah Alkan (né en 2005) commence sa formation musicale à l\'âge de quinze ans. Son parcours de flûtiste nourrit son écriture d\'une connaissance concrète du point de vue de l\'interprète. Il étudie actuellement la composition auprès d\'Uğurcan Öztekin et d\'Emre Dündar, et la musique électronique avec Furkan Keçeli. Il s\'est largement produit comme instrumentiste et choriste au sein de divers chœurs et orchestres, et a également occupé la fonction de chef assistant. Il a participé à des masterclasses avec Pierluigi Billone, Enis Gümüş et Mehmet Ali Uzunselvi. Avant de se consacrer à la musique, il a fait preuve de ses aptitudes analytiques en participant aux olympiades nationales de mathématiques.',
    'Ses œuvres ont été interprétées par le Semplice Quartet, l\'Ensemble intercontemporain et Niklas Seidl dans le cadre du Festival des jeunes compositeurs Sesin Yolculuğu, du Bilgi New Music Festival et des Journées de musique nouvelle d\'Izmir. Il a reçu une mention honorable au Concours international de composition Gilgamesh. Il a signé la musique et la création sonore de « A Place with the Pigs: A Personal Parable » d\'Athol Fugard, « Happy Days » de Samuel Beckett, « Ro-Ap » d\'Abdül Süsler et « Tek Bi\' Mutlu An » d\'İlyas Odman.',
  ],
};

export const education: { years: string; what: T }[] = [
  {
    years: '2024 –',
    what: {
      en: 'BA Composition, İstanbul Topkapı University',
      tr: 'Kompozisyon Lisans, İstanbul Topkapı Üniversitesi',
      fr: 'Licence de composition, Université Topkapı d\'Istanbul',
    },
  },
  {
    years: '2021 – 2023',
    what: {
      en: 'Flute, Buca Işılay Saygın Fine Arts High School',
      tr: 'Flüt, Buca Işılay Saygın Güzel Sanatlar Lisesi',
      fr: 'Flûte, Lycée des beaux-arts Buca Işılay Saygın',
    },
  },
];

export const masterclasses = [
  { who: 'Pierluigi Billone', when: { en: 'May 2025', tr: 'Mayıs 2025', fr: 'mai 2025' } },
  { who: 'Enis Gümüş', when: { en: 'Nov 2025', tr: 'Kasım 2025', fr: 'nov. 2025' } },
  { who: 'Mehmet Ali Uzunselvi', when: { en: 'Nov 2025', tr: 'Kasım 2025', fr: 'nov. 2025' } },
];

export const awards: { what: T; when: T }[] = [
  {
    what: {
      en: 'Gilgamesh International Composition Competition — Honorable Mention',
      tr: 'Gılgamış Uluslararası Bestecilik Yarışması — Mansiyon',
      fr: 'Concours international de composition Gilgamesh — Mention honorable',
    },
    when: { en: 'June 2025', tr: 'Haziran 2025', fr: 'juin 2025' },
  },
];

// ---------- Ne (eserler) ----------
// Kategoriler bobbygemusic.com'daki gibi: çoklar için / azlar için / sahne için
export const categories: { id: string; image: string; title: T; blurb: T }[] = [
  {
    id: 'many',
    image: 'rehearsal',
    title: { en: 'for many', tr: 'çoklar için', fr: 'pour plusieurs' },
    blurb: { en: 'Ensemble', tr: 'Topluluk', fr: 'Ensemble' },
  },
  {
    id: 'few',
    image: 'cello',
    title: { en: 'for few', tr: 'azlar için', fr: 'pour peu' },
    blurb: { en: 'Chamber & solo', tr: 'Oda müziği & solo', fr: 'Musique de chambre & solo' },
  },
  {
    id: 'stage',
    image: 'curtaincall',
    title: { en: 'for stage', tr: 'sahne için', fr: 'pour la scène' },
    blurb: { en: 'Theatre & sound design', tr: 'Tiyatro & ses tasarımı', fr: 'Théâtre & création sonore' },
  },
];

export const works: { year: string; cat: string; title: string; scoring: T; note?: T }[] = [
  {
    year: '2026', cat: 'many', title: 'Ab-ı Revan',
    scoring: { en: 'for Ensemble Intercontemporain', tr: 'Ensemble Intercontemporain için', fr: 'pour l\'Ensemble intercontemporain' },
    note: { en: 'Premiered at Bilgi New Music Festival 16, Istanbul', tr: 'İlk seslendirme: Bilgi Yeni Müzik Festivali 16, İstanbul', fr: 'Création au Bilgi New Music Festival 16, Istanbul' },
  },
  {
    year: '2025', cat: 'few', title: 'Mahzen-ül Esrar',
    scoring: { en: 'for string quartet', tr: 'yaylı çalgılar dörtlüsü için', fr: 'pour quatuor à cordes' },
    note: { en: 'Semplice Quartet — Journey of Sound 16, AKM', tr: 'Semplice Quartet — Sesin Yolculuğu 16, AKM', fr: 'Semplice Quartet — Sesin Yolculuğu 16, AKM' },
  },
  {
    year: '2025', cat: 'few', title: 'Imaginary Dialogues of Mortality',
    scoring: { en: 'for trombone, harp and electronics', tr: 'trombon, arp ve elektronik için', fr: 'pour trombone, harpe et électronique' },
    note: { en: 'Honorable Mention, Gilgamesh International Composition Competition', tr: 'Mansiyon, Gılgamış Uluslararası Bestecilik Yarışması', fr: 'Mention honorable, Concours international Gilgamesh' },
  },
  {
    year: '2024', cat: 'few', title: 'Butimar',
    scoring: { en: 'for solo flute', tr: 'solo flüt için', fr: 'pour flûte seule' },
  },
  { year: '2026', cat: 'stage', title: 'Tek Bi\' Mutlu An', scoring: { en: 'İlyas Odman', tr: 'İlyas Odman', fr: 'İlyas Odman' } },
  { year: '2026', cat: 'stage', title: 'Ro-Ap', scoring: { en: 'Abdül Süsler', tr: 'Abdül Süsler', fr: 'Abdül Süsler' } },
  { year: '2026', cat: 'stage', title: 'Happy Days', scoring: { en: 'Samuel Beckett', tr: 'Samuel Beckett', fr: 'Samuel Beckett' } },
  { year: '2026', cat: 'stage', title: 'A Place with the Pigs: A Personal Parable', scoring: { en: 'Athol Fugard', tr: 'Athol Fugard', fr: 'Athol Fugard' } },
];

// ---------- Ne zaman (etkinlikler) ----------
// date: YYYY-MM-DD. Bugünden sonraki tarihler otomatik "Yaklaşan" altına düşer.
export const events: { date: string; title: string; work: string; performers: string; venue: T }[] = [
  {
    date: '2026-06-28',
    title: 'Bilgi New Music Festival 16',
    work: 'Ab-ı Revan',
    performers: 'Ensemble Intercontemporain',
    venue: { en: 'Yeldeğirmeni Art Center, Istanbul', tr: 'Yeldeğirmeni Sanat Merkezi, İstanbul', fr: 'Centre d\'art Yeldeğirmeni, Istanbul' },
  },
  {
    date: '2025-05-03',
    title: 'Sesin Yolculuğu 16 — Young Composers Festival',
    work: 'Mahzen-ül Esrar',
    performers: 'Semplice Quartet',
    venue: { en: 'Atatürk Cultural Center, Istanbul', tr: 'Atatürk Kültür Merkezi, İstanbul', fr: 'Centre culturel Atatürk, Istanbul' },
  },
];

// ---------- Fotoğraflar ----------
// public/images içindeki dosya adları (.webp + .jpg)
// Mobilde fotoğrafın hangi kısmının görüneceği (yatay% dikey%)
export const focal: Record<string, string> = { cello: '64% 50%', rehearsal: '50% 50%', curtaincall: '50% 25%', outside: '60% 40%' };

export const photos = {
  home: ['cello', 'rehearsal', 'curtaincall'],
  why: 'curtaincall',
  who: 'cello',
  what: 'rehearsal',
  when: 'outside',
  moments: ['outside', 'rehearsal', 'cello'],
  listen: 'cello',
  contact: 'rehearsal',
  portrait: 'portrait',
};
