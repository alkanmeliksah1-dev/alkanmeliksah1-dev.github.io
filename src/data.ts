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
    // Adres eklenince İletişim sayfasında görünür; boş olanlar gizlenir.
    youtube: 'https://www.youtube.com/@MelikşahAlkan',
    soundcloud: 'https://soundcloud.com/meliksahalkan',
    instagram: 'https://www.instagram.com/meliksah.alkan/',
    facebook: 'https://www.facebook.com/meliksah.alkan.79',
  },
};

// Menü. slug = sayfanın adresi.
export const nav: { slug: string; label: T }[] = [
  { slug: '', label: { en: 'Home', tr: 'Ana sayfa', fr: 'Accueil' } },
  { slug: 'about', label: { en: 'About', tr: 'Hakkında', fr: 'Biographie' } },
  { slug: 'approach', label: { en: 'Approach', tr: 'Yaklaşım', fr: 'Démarche' } },
  { slug: 'works', label: { en: 'Works', tr: 'Çalışmalar', fr: 'Œuvres' } },
  { slug: 'events', label: { en: 'Events', tr: 'Etkinlikler', fr: 'Événements' } },
  { slug: 'media', label: { en: 'Media', tr: 'Medya', fr: 'Médias' } },
  { slug: 'gallery', label: { en: 'Gallery', tr: 'Galeri', fr: 'Galerie' } },
  { slug: 'contact', label: { en: 'Contact', tr: 'İletişim', fr: 'Contact' } },
];

export const ui = {
  role: { en: 'Composer', tr: 'Besteci', fr: 'Compositeur' },
  roles: {
    en: 'Composer · Sound designer',
    tr: 'Besteci · Ses tasarımcısı',
    fr: 'Compositeur · Créateur sonore',
  },
  city: { en: 'Istanbul', tr: 'İstanbul', fr: 'Istanbul' },
  menu: { en: 'Menu', tr: 'Menü', fr: 'Menu' },
  close: { en: 'Close', tr: 'Kapat', fr: 'Fermer' },
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
  poster: { en: 'Poster', tr: 'Afiş', fr: 'Affiche' },
  listenOn: { en: 'Listen', tr: 'Dinle', fr: 'Écouter' },
  watchOn: { en: 'Watch', tr: 'İzle', fr: 'Voir' },
  contactLead: {
    en: 'For commissions, collaborations, scores and recordings.',
    tr: 'Sipariş eser, iş birliği, partisyon ve kayıt talepleri için.',
    fr: 'Pour commandes, collaborations, partitions et enregistrements.',
  },
  email: { en: 'Email', tr: 'E-posta', fr: 'E-mail' },
  basedIn: { en: 'Based in', tr: 'Yaşadığı yer', fr: 'Basé à' },
  elsewhere: { en: 'Elsewhere', tr: 'Diğer', fr: 'Ailleurs' },
};

// ---------- Yaklaşım ----------
// TR ve EN metinler Melikşah'ın kendi metni. FR çeviri taslağıdır, kontrol edilmeli.
export const statement: Record<Lang, string[]> = {
  tr: [
    'İstanbul merkezli besteci Melikşah Alkan (d. 2005), müziği salt fiziksel ve materyalist bir ses organizasyonu olarak ele almayı reddederek tüm sanatsal odağını sesin metafiziksel ve dramatik potansiyeline yöneltir.',
    'Her işitsel formun kendi "içsel zorunluluğu" etrafında şekillenmesi gerektiği fikrinden hareketle aldığı yapısal kararlar, sesin görünmeyen manevi katmanlarını ve içsel dinamiklerini açığa çıkarma gayesinin doğrudan bir sonucudur.',
    'Nitekim Alkan, akustik ve elektronik dokuları sahnede kendi gerçekliğini dayatan tiyatral karakterler gibi kurgularken, dramaturjiyi dekoratif bir eklenti olarak değil, inşa ettiği işitsel mimarinin organik bir bileşeni kılıp çok katmanlı ve tinsel bir ses mekânı yaratmaktadır.',
  ],
  en: [
    'Istanbul-based composer Melikşah Alkan (b. 2005) rejects the treatment of music as a purely physical and materialistic organization of sound, directing his entire artistic focus toward its metaphysical and dramatic potential.',
    'His structural decisions, driven by the idea that every auditory form must take shape around its own "inner necessity," are a direct result of his aim to reveal the invisible, spiritual layers and internal dynamics of sound.',
    'Indeed, as he constructs acoustic and electronic textures like theatrical characters imposing their own reality on stage, Alkan utilizes dramaturgy not as a decorative appendage, but as an organic component of the auditory architecture he builds, thereby creating a multi-layered and numinous sound space.',
  ],

  fr: [
    'Compositeur basé à Istanbul, Melikşah Alkan (né en 2005) refuse d’envisager la musique comme une simple organisation physique et matérialiste du son, et consacre toute son attention artistique au potentiel métaphysique et dramatique du son.',
    'Partant de l’idée que chaque forme sonore doit se construire autour de sa propre « nécessité intérieure », ses choix structurels découlent directement de la volonté de révéler les strates spirituelles invisibles et les dynamiques internes du son.',
    'Alkan conçoit les textures acoustiques et électroniques comme des personnages de théâtre qui imposent sur scène leur propre réalité. Loin de faire de la dramaturgie un ornement, il en fait une composante organique de l’architecture sonore qu’il édifie, créant un espace sonore spirituel aux multiples strates.',
  ],
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

// ---------- Eserler ----------
// Şimdilik iki bölüm. İleride büyük topluluk eserleri gelince üçüncü bir
// bölüm eklenebilir ("for many / for few / for stage" fikri).
export const categories: { id: string; image: string; title: T; blurb: T }[] = [
  {
    id: 'concert', image: 'mahzen-bow',
    title: { en: 'Concert', tr: 'Konser', fr: 'Concert' },
    blurb: { en: 'Chamber, solo & electronics', tr: 'Oda müziği, solo & elektronikler', fr: 'Chambre, solo & électroniques' },
  },
  {
    id: 'stage', image: 'stage-set',
    title: { en: 'Stage', tr: 'Sahne', fr: 'Scène' },
    blurb: { en: 'Theatre music & sound design', tr: 'Tiyatro müziği & ses tasarımı', fr: 'Musique & création sonore pour le théâtre' },
  },
];

type Link = { kind: 'listen' | 'watch'; url: string };
export const works: { year: string; cat: string; title: string; scoring: T; note?: T; poster?: string; links?: Link[] }[] = [
  {
    year: '2026', cat: 'concert', title: 'Ab-ı Revan', poster: 'poster-bilgi16',
    scoring: { en: 'for Les Solistes de l’Ensemble intercontemporain', tr: 'Les Solistes de l’Ensemble intercontemporain için', fr: 'pour Les Solistes de l’Ensemble intercontemporain' },
    note: { en: 'Premiered at Bilgi New Music Festival 16, Istanbul', tr: 'İlk seslendirme: Bilgi Yeni Müzik Festivali 16, İstanbul', fr: 'Création au Bilgi New Music Festival 16, Istanbul' },
    links: [{ kind: 'listen', url: 'https://soundcloud.com/meliksahalkan/ab-i-revan' }],
  },
  {
    year: '2025', cat: 'concert', title: 'Mahzen-ül Esrar', poster: 'poster-sy16',
    scoring: { en: 'for string quartet', tr: 'yaylı çalgılar dörtlüsü için', fr: 'pour quatuor à cordes' },
    note: { en: 'Semplice Quartet — Journey of Sound 16, Atatürk Cultural Centre; performed again at Journey of Sound 17', tr: 'Semplice Quartet — Sesin Yolculuğu 16, Atatürk Kültür Merkezi; Sesin Yolculuğu 17’de yeniden seslendirildi', fr: 'Semplice Quartet — Sesin Yolculuğu 16, Centre culturel Atatürk ; reprise à Sesin Yolculuğu 17' },
    links: [
      { kind: 'watch', url: 'https://youtu.be/PCFpS51N-qs' },
      { kind: 'listen', url: 'https://soundcloud.com/meliksahalkan/mahzen-ul-esrar' },
    ],
  },
  {
    year: '2026', cat: 'concert', title: 'ÖTEYAKADAN TAKAZA Act.0', poster: 'poster-iymg7',
    scoring: { en: 'for cello, electronics and performer', tr: 'viyolonsel, elektronikler ve oyuncu için', fr: 'pour violoncelle, électroniques et performeur' },
    note: { en: 'Niklas Seidl — İzmir New Music Days VII', tr: 'Niklas Seidl — İzmir Yeni Müzik Günleri VII', fr: 'Niklas Seidl — Journées de musique nouvelle d’Izmir VII' },
  },
  {
    year: '2025', cat: 'concert', title: 'Imaginary Dialogues of Mortality', poster: 'cover-gilgamesh3',
    scoring: { en: 'for trombone, harp and electronics', tr: 'trombon, arp ve elektronikler için', fr: 'pour trombone, harpe et électroniques' },
    note: { en: 'Honorable Mention, Gilgamesh International Composition Competition', tr: 'Mansiyon, Gılgamış Uluslararası Bestecilik Yarışması', fr: 'Mention honorable, Concours international Gilgamesh' },
  },
  {
    year: '2024', cat: 'concert', title: 'Butimar',
    scoring: { en: 'for solo flute', tr: 'solo flüt için', fr: 'pour flûte seule' },
  },
  {
    year: '2026', cat: 'stage', title: 'Tek Bi’ Mutlu An!', poster: 'poster-tekbimutluan',
    scoring: { en: 'Sound design · dir. & choreography İlyas Odman', tr: 'Ses tasarımı · yönetmen & koreograf İlyas Odman', fr: 'Création sonore · mise en scène & chorégraphie İlyas Odman' },
  },
  {
    year: '2026', cat: 'stage', title: 'Ro-Ap',
    scoring: { en: 'Music & sound design · Abdül Süsler', tr: 'Müzik & ses tasarımı · Abdül Süsler', fr: 'Musique & création sonore · Abdül Süsler' },
  },
  {
    year: '2026', cat: 'stage', title: 'Happy Days', poster: 'poster-mutlugunler',
    scoring: { en: 'Music & sound design · Samuel Beckett, dir. Abdül Süsler', tr: 'Müzik & ses tasarımı · Samuel Beckett, "Mutlu Günler", yön. Abdül Süsler', fr: 'Musique & création sonore · Samuel Beckett, m.e.s. Abdül Süsler' },
  },
  {
    year: '2026', cat: 'stage', title: 'A Place with the Pigs: A Personal Parable', poster: 'poster-domuzahiri',
    scoring: { en: 'Music & sound design · Athol Fugard, dir. Abdül Süsler', tr: 'Müzik & ses tasarımı · Athol Fugard, "Domuz Ahırı", yön. Abdül Süsler', fr: 'Musique & création sonore · Athol Fugard, m.e.s. Abdül Süsler' },
  },
];

// ---------- Nerede, ne zaman? (etkinlikler) ----------
// date: YYYY-MM-DD. Bugünden sonraki tarihler otomatik "Yaklaşan" altına düşer.
export const events: { date: string; time?: string; title: string; work?: string; performers: string; venue?: T; note?: T; poster?: string }[] = [
  {
    date: '2026-12-14',
    title: 'Ro-Ap',
    performers: 'Abdül Süsler',
    note: { en: 'Premiere · Music & sound design', tr: 'Prömiyer · Müzik & ses tasarımı', fr: 'Première · Musique & création sonore' },
  },
  {
    date: '2026-10-25', time: '20:00',
    title: 'İzmir New Music Days VII — Next Generation Series VII',
    work: 'ÖTEYAKADAN TAKAZA Act.0',
    performers: 'Niklas Seidl',
    venue: { en: 'MÜZİKSEV, İzmir', tr: 'MÜZİKSEV, İzmir', fr: 'MÜZİKSEV, İzmir' },
    note: { en: 'Workshops with Niklas Seidl, 22–24 October', tr: 'Niklas Seidl ile atölye çalışmaları, 22–24 Ekim', fr: 'Ateliers avec Niklas Seidl, 22–24 octobre' },
    poster: 'poster-iymg7',
  },
  {
    date: '2026-06-28', time: '20:00',
    title: 'Bilgi New Music Festival 16',
    work: 'Ab-ı Revan',
    performers: 'Les Solistes de l’Ensemble intercontemporain',
    venue: { en: 'Yeldeğirmeni Art Center, Istanbul', tr: 'Yeldeğirmeni Sanat Merkezi, İstanbul', fr: 'Centre d’art Yeldeğirmeni, Istanbul' },
    note: { en: 'Alain Billard, Jérôme Comte, Éric-Maria Couturier, Nicolas Crosse', tr: 'Alain Billard, Jérôme Comte, Éric-Maria Couturier, Nicolas Crosse', fr: 'Alain Billard, Jérôme Comte, Éric-Maria Couturier, Nicolas Crosse' },
    poster: 'poster-bilgi16',
  },
  {
    date: '2026-06-07',
    title: 'Tek Bi’ Mutlu An!',
    performers: 'İlyas Odman',
    venue: { en: 'ClapHall, Istanbul', tr: 'ClapHall, İstanbul', fr: 'ClapHall, Istanbul' },
    note: { en: 'Premiere · Sound design', tr: 'Prömiyer · Ses tasarımı', fr: 'Première · Création sonore' },
    poster: 'poster-tekbimutluan',
  },
  {
    date: '2026-05-08',
    title: 'Sesin Yolculuğu 17 — Young Composers Festival',
    work: 'Mahzen-ül Esrar',
    performers: '',
    venue: { en: 'MSGSÜ Sedad Hakkı Eldem Auditorium, Istanbul', tr: 'MSGSÜ Sedad Hakkı Eldem Oditoryumu, İstanbul', fr: 'Auditorium Sedad Hakkı Eldem (MSGSÜ), Istanbul' },
    note: { en: 'Mustafa Orhan & Mehmet Efe Özşahin (violins), Nazlı Hira Örsel (viola), Balkan Alya Özgür (cello)', tr: 'Mustafa Orhan & Mehmet Efe Özşahin (keman), Nazlı Hira Örsel (viyola), Balkan Alya Özgür (viyolonsel)', fr: 'Mustafa Orhan & Mehmet Efe Özşahin (violons), Nazlı Hira Örsel (alto), Balkan Alya Özgür (violoncelle)' },
    poster: 'poster-sy17',
  },
  {
    date: '2026-03-27',
    title: 'Happy Days (Mutlu Günler)',
    performers: 'Samuel Beckett · dir. Abdül Süsler',
    venue: { en: 'Istanbul Topkapı University, Kazlıçeşme Campus, G Block, Doğa Sigorta Conference Hall', tr: 'İstanbul Topkapı Üniversitesi, Kazlıçeşme Kampüsü, G Blok, Doğa Sigorta Konferans Salonu', fr: 'Université Topkapı d’Istanbul, campus de Kazlıçeşme, bloc G, salle de conférence Doğa Sigorta' },
    note: { en: 'Premiere · Music & sound design', tr: 'Prömiyer · Müzik & ses tasarımı', fr: 'Première · Musique & création sonore' },
    poster: 'poster-mutlugunler',
  },
  {
    date: '2026-03-25',
    title: 'A Place with the Pigs (Domuz Ahırı)',
    performers: 'Athol Fugard · dir. Abdül Süsler',
    venue: { en: 'Istanbul Topkapı University, Kazlıçeşme Campus, G Block, Doğa Sigorta Conference Hall', tr: 'İstanbul Topkapı Üniversitesi, Kazlıçeşme Kampüsü, G Blok, Doğa Sigorta Konferans Salonu', fr: 'Université Topkapı d’Istanbul, campus de Kazlıçeşme, bloc G, salle de conférence Doğa Sigorta' },
    note: { en: 'Premiere · Music & sound design', tr: 'Prömiyer · Müzik & ses tasarımı', fr: 'Première · Musique & création sonore' },
    poster: 'poster-domuzahiri',
  },
  {
    date: '2025-05-03', time: '20:30',
    title: 'Sesin Yolculuğu 16 — Young Composers Festival',
    work: 'Mahzen-ül Esrar',
    performers: 'Semplice Quartet',
    venue: { en: 'Atatürk Cultural Centre, Theatre Hall, Istanbul', tr: 'Atatürk Kültür Merkezi, Tiyatro Salonu, İstanbul', fr: 'Centre culturel Atatürk, salle de théâtre, Istanbul' },
    poster: 'poster-sy16',
  },
];

// ---------- Ne duyulur? (kayıtlar) ----------
export const recordings: { title: string; meta: T; type: 'youtube' | 'soundcloud'; url: string; id?: string }[] = [
  {
    title: 'Mahzen-ül Esrar', type: 'youtube', url: 'https://youtu.be/PCFpS51N-qs', id: 'PCFpS51N-qs',
    meta: { en: 'Semplice Quartet · Atatürk Cultural Centre, 2025', tr: 'Semplice Quartet · Atatürk Kültür Merkezi, 2025', fr: 'Semplice Quartet · Centre culturel Atatürk, 2025' },
  },
  {
    title: 'Ab-ı Revan', type: 'soundcloud', url: 'https://soundcloud.com/meliksahalkan/ab-i-revan',
    meta: { en: 'Les Solistes de l’Ensemble intercontemporain · 2026', tr: 'Les Solistes de l’Ensemble intercontemporain · 2026', fr: 'Les Solistes de l’Ensemble intercontemporain · 2026' },
  },
  {
    title: 'Mahzen-ül Esrar', type: 'soundcloud', url: 'https://soundcloud.com/meliksahalkan/mahzen-ul-esrar',
    meta: { en: 'Semplice Quartet · audio', tr: 'Semplice Quartet · ses kaydı', fr: 'Semplice Quartet · audio' },
  },
];

// ---------- Galeri ----------
// Her bölüm galeride bir sekme. alt = ekran okuyucular için açıklama (sayfada görünmez).
export const gallery: { id: string; title: T; items: { img: string; alt: string }[] }[] = [
  {
    id: 'portraits', title: { en: 'Portraits', tr: 'Portreler', fr: 'Portraits' },
    items: [
      { img: 'night', alt: 'Melikşah Alkan, Istanbul at night' },
      { img: 'studio', alt: 'Studio portrait' },
      { img: 'score', alt: 'Reading a score' },
      { img: 'reading', alt: 'Reading at a table' },
      { img: 'standing', alt: 'Among books' },
      { img: 'desk', alt: 'At the desk' },
      { img: 'railway', alt: 'On the railway tracks' },
    ],
  },
  {
    id: 'concerts', title: { en: 'Concerts', tr: 'Konserler', fr: 'Concerts' },
    items: [
      { img: 'mahzen-bow', alt: 'Mahzen-ül Esrar, Semplice Quartet, Atatürk Cultural Centre, 2025' },
      { img: 'sy17-concert', alt: 'Mahzen-ül Esrar, Sesin Yolculuğu 17, 2026' },
      { img: 'church-concert', alt: 'Ab-ı Revan, Les Solistes de l’Ensemble intercontemporain, Yeldeğirmeni, 2026' },
      { img: 'portrait', alt: 'After Ab-ı Revan, Yeldeğirmeni, 2026' },
      { img: 'cello', alt: 'Niklas Seidl, İzmir New Music Days VII, 2026' },
      { img: 'izmir-bow', alt: 'Next Generation Series VII, İzmir, 2026' },
    ],
  },
  {
    id: 'rehearsals', title: { en: 'Rehearsals', tr: 'Provalar', fr: 'Répétitions' },
    items: [
      { img: 'mahzen-rehearsal', alt: 'Mahzen-ül Esrar rehearsal' },
      { img: 'rehearsal', alt: 'Ab-ı Revan rehearsal, 2026' },
      { img: 'eic-group', alt: 'With Les Solistes de l’Ensemble intercontemporain, Istanbul, 2026' },
    ],
  },
  {
    id: 'posters', title: { en: 'Posters', tr: 'Afişler', fr: 'Affiches' },
    items: [
      { img: 'poster-iymg7', alt: 'İzmir New Music Days VII poster' },
      { img: 'cover-gilgamesh3', alt: 'Gilgamesh III — for harp, trombone and fixed media (album cover)' },
      { img: 'poster-nextgen7', alt: 'Next Generation Series VII' },
      { img: 'poster-bilgi16', alt: 'Bilgi New Music Festival 16 poster' },
      { img: 'poster-tekbimutluan', alt: 'Tek Bi’ Mutlu An! poster' },
      { img: 'poster-sy17', alt: 'Sesin Yolculuğu 17 poster' },
      { img: 'poster-mutlugunler', alt: 'Mutlu Günler (Happy Days) poster' },
      { img: 'poster-domuzahiri', alt: 'Domuz Ahırı (A Place with the Pigs) poster' },
      { img: 'poster-sy16', alt: 'Sesin Yolculuğu 16, Semplice Quartet poster' },
      { img: 'poster-jos16', alt: 'Journey of Sound 16 poster' },
    ],
  },
];

// ---------- Fotoğraflar ----------
// Mobilde fotoğrafın hangi kısmının görüneceği (yatay% dikey%)
export const focal: Record<string, string> = {
  'night-ext': '50% 30%', 'railway-ext': '50% 42%',
  night: '50% 32%', cello: '64% 50%', rehearsal: '50% 50%', curtaincall: '50% 25%',
  studio: '50% 35%', railway: '50% 8%', desk: '75% 40%', reading: '55% 35%', standing: '45% 35%',
  'church-concert': '50% 70%', 'mahzen-bow': '42% 50%', score: '40% 40%', 'poster-tekbimutluan': '50% 40%', 'stage-set': '45% 40%', 'church-concert-wide': '50% 60%', 'mahzen-rehearsal': '60% 30%', 'outside-close': '45% 25%',
};

// Her sayfanın arka plan fotoğrafı
export const photos = {
  home: 'night-ext',
  approach: 'reading',
  about: 'standing',
  works: 'church-concert-wide',
  events: 'cello',
  media: 'desk',
  gallery: 'rehearsal',
  contact: 'railway-ext',
  portrait: 'studio',
};
