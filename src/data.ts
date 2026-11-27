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
  programNotes: { en: 'Programme note', tr: 'Program notu', fr: 'Note de programme' },
  program: { en: 'Programme', tr: 'Program', fr: 'Programme' },
  performers: { en: 'Performers', tr: 'İcracılar', fr: 'Interprètes' },
  credits: { en: 'Credits', tr: 'Künye', fr: 'Générique' },
  allWorks: { en: 'All works', tr: 'Tüm çalışmalar', fr: 'Toutes les œuvres' },
  allEvents: { en: 'All events', tr: 'Tüm etkinlikler', fr: 'Tous les événements' },
  premiere: { en: 'Premiere', tr: 'İlk seslendirme', fr: 'Création' },
  viewEvent: { en: 'Concert programme', tr: 'Konser programı', fr: 'Programme du concert' },
  source: { en: 'Source', tr: 'Kaynak', fr: 'Source' },
  album: { en: 'Album', tr: 'Albüm', fr: 'Album' },
  tracklist: { en: 'Tracklist', tr: 'Parça listesi', fr: 'Liste des titres' },
  composers: { en: 'Composers', tr: 'Besteciler', fr: 'Compositeurs' },
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
// Program notu: paragraf dizileri. Türkçe yoksa İngilizce gösterilir; Fransızca sayfalar da İngilizce notu gösterir.
type Notes = { en: string[]; tr?: string[]; fr?: string[] };
type Credit = { role: T; names: string };

export const works: {
  slug: string; year: string; cat: string; title: string; scoring: T; note?: T;
  links?: Link[]; notes?: Notes; credits?: Credit[]; event?: string;
  album?: { title: string; scoring: T; label: string; year: string; cover: string; lineup: { name: string; role: T }[]; tracks: [string, string][] };
}[] = [
  {
    slug: 'ab-i-revan', year: '2026', cat: 'concert', title: 'Ab-ı Revan', event: 'bilgi-new-music-festival-16',
    scoring: { en: 'for Les Solistes de l’Ensemble intercontemporain', tr: 'Les Solistes de l’Ensemble intercontemporain için', fr: 'pour Les Solistes de l’Ensemble intercontemporain' },
    note: { en: 'Premiered at Bilgi New Music Festival 16, Istanbul', tr: 'İlk seslendirme: Bilgi Yeni Müzik Festivali 16, İstanbul', fr: 'Création au Bilgi New Music Festival 16, Istanbul' },
    links: [{ kind: 'listen', url: 'https://soundcloud.com/meliksahalkan/ab-i-revan' }],
    notes: {
      tr: [
        'Ab-ı Revan, adını tasavvuf geleneğinde disiplin ve meşakkatle dolu bir hayatın ortasında bile kalpten durmaksızın akan bir sevinç, huzur ve iç berraklığı olarak tarif edilen hâlden alır. Eser, bu çelişkinin içinde doğan sesin izini sürer: dışarıda yoğun bir arınma pratiği, içeride ise her şeye rağmen taşan bir ferahlık. Müzik bu gerilimi bozmadan taşımayı amaçlar; hiç durmadan akan, ama nereye aktığını bilmeyen bir su gibi.',
      ],
      fr: [
        'Ab-ı Revan tire son nom d’un état que la tradition soufie décrit comme une joie, une paix et une clarté intérieure qui coulent sans cesse dans le cœur, même au sein d’une vie de discipline et d’épreuves. L’œuvre suit la voix qui naît de cette contradiction : au-dehors, une pratique intense de purification ; au-dedans, un soulagement qui déborde malgré tout. La musique cherche à maintenir cette tension intacte, comme une eau qui ne cesse jamais de couler, sans pourtant savoir où elle coule.',
      ],
      en: [
        'Ab-ı Revan takes its name from a state described in Sufi tradition as a joy, peace, and inner clarity that flows ceaselessly through the heart, even amid a life of discipline and hardship. The piece follows the voice born within this contradiction: an intense practice of purification on the outside, and within, a sense of relief that overflows regardless. The music aims to hold this tension intact, like water that never stops running, yet does not know where it runs.',
      ],
    },
  },
  {
    slug: 'oteyakadan-takaza-act-0', year: '2026', cat: 'concert', title: 'ÖTEYAKADAN TAKAZA Act.0', event: 'izmir-new-music-days-vii',
    scoring: { en: 'for a performer, an actor and electronics', tr: 'bir icracı, bir oyuncu ve elektronikler için', fr: 'pour un interprète, un acteur et électroniques' },
    note: { en: 'Niklas Seidl — İzmir New Music Days VII', tr: 'Niklas Seidl — İzmir Yeni Müzik Günleri VII', fr: 'Niklas Seidl — Journées de musique nouvelle d’Izmir VII' },
    notes: {
      fr: [
        'Öteyakadan Takaza Act.0 est une pièce de théâtre musical centrée sur le moment d’émergence du texte de Ferit Edgü, Orhan Duru : Ölmeden Önce - Öldükten Sonra. Sur scène est mis en jeu ce seuil où Edgü écrit le texte et où les mots n’ont pas encore entièrement trouvé leur forme. Le son, la parole et le corps comblent peu à peu le vide entre la mémoire et l’absence.',
        'Un instrument seul forme la colonne vertébrale de ce processus. Des motifs cycliques issus de l’instrument sont fragmentés et amplifiés par l’électronique, créant leur propre temps. À mesure que chaque timbre entendu s’infiltre dans les syllabes et se mêle à la formation du langage, l’écrit, l’entendu et l’imaginé s’entrelacent.',
        'Act.0, plutôt qu’une scène narrative au sens traditionnel, est une structure qui suit l’émergence même du texte à travers le son. Elle met en scène l’acte d’écrire non pas comme la simple transmission d’une pensée, mais comme un processus par lequel une figure absente prend forme physiquement. Dans cette représentation, tout ce processus s’incarne dans le corps d’un violoncelle.',
      ],
      tr: [
        'Öteyakadan Takaza Act.0, Ferit Edgü’nün Orhan Duru: Ölmeden Önce - Öldükten Sonra metninin ortaya çıkış anına odaklanan bir müzik tiyatrosudur. Sahnede, Edgü\'nün metni yazdığı ve kelimelerin henüz bütünüyle formunu bulmadığı o eşik canlandırılır. Ses, söz ve beden; hafıza ile yokluk arasındaki boşluğu yavaş yavaş kaplar.',
        'Bu sürecin omurgasını yalnız bir enstrüman oluşturur. Enstrümandan çıkan döngüsel motifler, elektroniklerle parçalanıp genişleyerek kendi zamanını yaratır. Duyulan her tını hecelere sızarak dilin oluşumuna karışırken; yazılan, duyulan ve hayal edilen iç içe geçer.',
        'Act.0, klasik anlamda bir anlatı sahnesinden ziyade; metnin bizzat ses üzerinden ortaya çıkışının izini süren bir yapıdır. Yazma eylemini salt bir düşüncenin aktarımı olarak değil; yokluğu hissedilen bir figürün fiziken biçim kazanma süreci olarak sahneler. Bu temsil özelinde, tüm bu oluşum süreci bir çellonun gövdesinde vücut bulur.',
      ],
      en: [
        'Öteyakadan Takaza Act.0 is a music theater piece that focuses on the emergence of Ferit Edgü’s text, Orhan Duru: Ölmeden Önce - Öldükten Sonra. On stage, the threshold where Edgü writes the text and words have not yet fully found their form is enacted. Sound, word, and body gradually fill the void between memory and absence.',
        'A solitary instrument forms the spine of this process. Cyclical motifs emerging from the instrument are fragmented and expanded by electronics, creating their own time. As every heard timbre seeps into syllables and blends into the formation of language; the written, the heard, and the imagined intertwine.',
        'Act.0, rather than a narrative scene in the traditional sense, is a structure that traces the very emergence of the text through sound. It stages the act of writing not merely as the transmission of a thought, but as a process through which an absent figure takes physical form. In this specific performance, this entire process is channeled through the body of a cello.',
      ],
    },
  },
  {
    slug: 'mahzen-ul-esrar', year: '2025', cat: 'concert', title: 'Mahzen-ül Esrar', event: 'sesin-yolculugu-16',
    scoring: { en: 'for string quartet', tr: 'yaylı çalgılar dörtlüsü için', fr: 'pour quatuor à cordes' },
    note: { en: 'Semplice Quartet — Journey of Sound 16, Atatürk Cultural Centre; performed again at Journey of Sound 17', tr: 'Semplice Quartet — Sesin Yolculuğu 16, Atatürk Kültür Merkezi; Sesin Yolculuğu 17’de yeniden seslendirildi', fr: 'Semplice Quartet — Sesin Yolculuğu 16, Centre culturel Atatürk ; reprise à Sesin Yolculuğu 17' },
    links: [
      { kind: 'watch', url: 'https://youtu.be/PCFpS51N-qs' },
      { kind: 'listen', url: 'https://soundcloud.com/meliksahalkan/mahzen-ul-esrar' },
    ],
    notes: {
      tr: [
        'Semplice Quartet için bestelenen ve Nizami Gencevi’nin 12. yüzyılda yazdığı aynı adlı eserden esinlenen Mahzen-ül Esrar, sanki zamanın sınırlarının dışında, bir boşlukta asılı kalmışçasına başlar. Nizami’nin “İnsan ruhunun derinliklerinde saklı hikmet, yalnızca nefsini arındıranların ulaşabileceği bir hazinedir” sözünün özünün izini sürerken eser, sessizlikten perküsif bir zenginliğe doğru kademeli bir dönüşüm sunar; tıpkı yedi vadiden geçebilmek için önce Huzur Denizi’ne dalması gereken Mahzen-ül Esrar yolcusunun yolculuğu gibi.',
        'Başlangıçta belirgin biçimde tanımlanmamış soyut müzikal çizgiler, giderek daha berrak bir yapıya evrilir ve açılış malzemesinin yankılarıyla doruğa ulaşır. Nizami’nin merkezî teması olan Nefis Terbiyesi’ni çağdaş bir ses çerçevesinde yeniden yorumlamayı amaçlayan Mahzen-ül Esrar, kadim bir metnin karanlıktan aydınlığa uzanan mistik yolculuğunu 21. yüzyılın tını renkleriyle yeniden canlandıran müzikal bir tahayyül ortaya koyar.',
      ],
      fr: [
        'Mahzen-ül Esrar, écrite pour le Semplice Quartet et inspirée de l’œuvre homonyme de Nizami Gandjavi au XIIe siècle, commence comme suspendue dans le vide, hors des limites du temps. Tout en suivant l’essence de cette parole de Nizami : « La sagesse cachée au fond de l’âme humaine est un trésor accessible seulement à ceux qui purifient leur nafs », la pièce présente une transformation progressive du silence vers une richesse percussive, à l’image du voyage du voyageur de Mahzen-ül Esrar, qui doit d’abord s’immerger dans la Mer de la Sérénité pour traverser les sept vallées.',
        'Les lignes musicales, d’abord abstraites et indistinctes, évoluent peu à peu vers une structure plus lumineuse, jusqu’à culminer dans des échos du matériau initial. Cherchant à réinterpréter le thème central de Nizami, la discipline de soi, dans un cadre sonore contemporain, Mahzen-ül Esrar propose une réinvention musicale du voyage mystique d’un texte ancien, des ténèbres vers la lumière, ravivé par les couleurs de timbre du XXIe siècle.',
      ],
      en: [
        'Mahzen-ül Esrar, composed for the Semplice Quartet and inspired by the work of the same name written by Nizami Ganjavi in the 12th century, begins as if suspended in a void, outside the bounds of time. While tracing the essence of Nizami’s statement, “The wisdom hidden in the depths of the human soul is a treasure accessible only to those who purify their nafs,” the piece presents a gradual transformation from silence to percussive richness—mirroring the journey of the traveler in Mahzen-ül Esrar, who must first immerse themselves in the Sea of Serenity to pass through the seven valleys.',
        'The initially abstract musical lines, not clearly defined at the beginning, gradually evolve into a more lucid structure, culminating in echoes of the opening material. Seeking to reinterpret Nizami’s central theme of Self-Discipline through a contemporary sonic framework, Mahzen-ül Esrar brings forth a musical reimagining of an ancient text’s mystical journey from darkness to light—revived through the timbral colors of the 21st century.',
      ],
    },
  },
  {
    slug: 'imaginary-dialogues-of-mortality', year: '2025', cat: 'concert', title: 'Imaginary Dialogues of Mortality',
    scoring: { en: 'for harp, trombone and electronics', tr: 'arp, trombon ve elektronikler için', fr: 'pour harpe, trombone et électroniques' },
    note: { en: 'Honorable Mention, Gilgamesh International Composition Competition · album Gilgamesh III', tr: 'Mansiyon, Gılgamış Uluslararası Bestecilik Yarışması · Gilgamesh III albümü', fr: 'Mention honorable, Concours international Gilgamesh · album Gilgamesh III' },
    album: {
      title: 'Gilgamesh III', year: '2026', label: 'Gilgamesh Arts & Culture Foundation', cover: 'cover-gilgamesh3',
      scoring: { en: 'for harp, trombone and electronics', tr: 'arp, trombon ve elektronikler için', fr: 'pour harpe, trombone et électroniques' },
      lineup: [
        { name: 'Jillian Lopez', role: { en: 'harp', tr: 'arp', fr: 'harpe' } },
        { name: 'Mattie Barbier', role: { en: 'trombone', tr: 'trombon', fr: 'trombone' } },
      ],
      // parçalar kapaktaki besteci sırasıyla aynı
      tracks: [
        ['Gilgamesh in front of Edens gates', 'Felipe Vasconcelos'], ['Fragments of the Flood', 'Shai Cohen'], ['Table 6', 'Pedro Brandão'],
        ['Shamhat', 'Alessio Ferrante'], ['Enkidu', 'Alejandro Marco Gómez Lopera'], ['Jya, Jayba, Shamkatum', 'Arad Noroozi'],
        ['Humbaba', 'Manolis Ekmektsoglou'], ['Song of Jungju', 'Jihyun Kim'], ['Wild Heart Enkidu', 'Soheil Shirangi'],
        ['Gilgamesh\'s Space Odyssey', 'Afamia Al-Dayaa'], ['Deluge', 'Daniel Krumland'], ['Imaginary Dialogues of Mortality', 'Melikşah Alkan'],
        ['How Should I answer the city?', 'Ali Araab'], ['Forest of Cedar / The Third Dream', 'Libby Fabricatore'], ['The Quest for the Cedar Forest', 'Erfan Javadi'],
      ],
    },
    notes: {
      tr: [
        'İnsanlığın yazıya geçirilmiş en eski anlatılarından biri olan Gılgamış Destanı, yaklaşık 4.000 yıl önce Sümer kil tabletlerine kazınmış olmasına rağmen güncelliğini korumaktadır. Uruk kralı Gılgamış’ın dostluk, kayıp, yas ve ölümsüzlük arayışı temaları etrafında örülen bu kadim hikâye, insanlığın varoluşsal sorulara yanıt arayışının evrensel bir yansımasıdır.',
        'Bu kompozisyon, Gılgamış’ın mitolojik yolculuğunun üç ayrı evresini bir ses manzarasında yeniden canlandırmayı amaçlar:',
        '1. Gılgamış ile Enkidu’nun Dostluğu: Bir çatışma olarak başlayıp giderek dostluğa dönüşen trombon ile arp arasındaki diyalog, Gılgamış’ın vahşi adam Enkidu ile ilişkisini temsil eder.',
        '2. Enkidu’nun Ölümü ve Yas: Elektronik sesler ile trombon arasındaki gergin pasajlar, Gılgamış’ın dostunun kaybı karşısındaki çaresizliğini ve kederini ifade eder.',
        '3. Ölümsüzlük Arayışı: Arp ve elektronik tınılar, Gılgamış’ın ölümsüzlük arayışındaki umut ve umutsuzluk gelgitlerini yansıtırken, eserin sonunda trombon insanın ölümlülüğünü kabullenişinin derin yankısını taşır.',
        'Bu kompozisyon, insanlığın en kadim hikâyelerinden birini 21. yüzyılın ses paletinde yeniden yorumlamak için akustik çalgıları —trombon ve arp— elektronik tınılarla bir araya getirir. Trombon, Gılgamış’ın kahramanca ve melankolik karakterini temsil eder; arp, mitolojik dünyanın gizemli atmosferini somutlaştırır; elektronik tınılar ise zamanın akışını simgeler.',
        'Gılgamış’ın yolculuğu aslında herkesin yolculuğudur: sevmek, kaybetmek ve nihayetinde ardında anlamlı bir hikâye bırakarak ölümlü doğamızı kabullenme çabası...',
      ],
      fr: [
        'L’Épopée de Gilgamesh, l’un des plus anciens récits écrits de l’humanité, reste d’actualité bien qu’elle ait été gravée sur des tablettes d’argile sumériennes il y a environ 4 000 ans. Ce récit ancien, tissé autour des thèmes de l’amitié, de la perte, du deuil et de la quête d’immortalité de Gilgamesh, roi d’Uruk, représente une réflexion universelle sur la recherche, par l’humanité, de réponses aux questions existentielles.',
        'Cette composition cherche à faire revivre trois phases distinctes du voyage mythologique de Gilgamesh dans un paysage sonore :',
        '1. L’amitié de Gilgamesh et d’Enkidu : le dialogue entre le trombone et la harpe, qui commence comme un conflit et se transforme peu à peu en amitié, représente la relation de Gilgamesh avec l’homme sauvage Enkidu.',
        '2. La mort d’Enkidu et le deuil : les passages tendus entre les sons électroniques et le trombone expriment l’impuissance et le chagrin de Gilgamesh face à la perte de son ami.',
        '3. La quête d’immortalité : la harpe et les timbres électroniques reflètent les marées d’espoir et de désespoir dans la quête d’immortalité de Gilgamesh, tandis qu’à la fin de la pièce, le trombone porte la résonance profonde de l’acceptation de la mortalité humaine.',
        'Cette composition réunit des instruments acoustiques — trombone et harpe — et des timbres électroniques pour réinterpréter l’une des plus anciennes histoires de l’humanité dans la palette sonore du XXIe siècle. Le trombone représente le caractère héroïque et mélancolique de Gilgamesh ; la harpe incarne l’atmosphère mystérieuse du monde mythologique ; et les timbres électroniques symbolisent l’écoulement du temps.',
        'Le voyage de Gilgamesh est, en vérité, celui de chacun : l’effort d’aimer, de perdre et, finalement, d’accepter notre nature mortelle tout en laissant derrière soi une histoire qui ait un sens...',
      ],
      // Jenny Lewis'in "After Gilgamesh" alıntısı telif nedeniyle buraya eklenmedi; istenirse
      // "A passage from ..." paragrafı alıntıyla birlikte üçüncü paragraftan sonra eklenebilir.
      en: [
        'The Epic of Gilgamesh, one of humanity\'s oldest written narratives, has remained relevant despite being inscribed on Sumerian clay tablets approximately 4,000 years ago. This ancient story, woven around the themes of friendship, loss, mourning, and the quest for immortality by Uruk\'s king Gilgamesh, represents a universal reflection of humanity\'s search for answers to existential questions.',
        'This composition aims to revive three distinct phases of Gilgamesh\'s mythological journey in a sonic landscape:',
        '1. The Friendship of Gilgamesh and Enkidu: The dialogue between trombone and harp, beginning as a conflict and gradually transforming into a friendship, represents Gilgamesh\'s relationship with the wild man Enkidu.',
        '2. Enkidu\'s Death and Mourning: The tense passages between electronic sounds and trombone express Gilgamesh\'s helplessness and grief in the face of his friend\'s loss.',
        '3. The Quest for Immortality: The harp and electronic timbres reflect the tides of hope and despair in Gilgamesh\'s search for immortality, while at the end of the piece, the trombone carries the deep resonance of accepting human mortality.',
        'This composition brings together acoustic instruments —trombone and harp— with electronic timbres to reinterpret one of humanity\'s most ancient stories in the 21st century\'s sound palette. The trombone represents Gilgamesh\'s heroic and melancholic character; the harp embodies the mysterious atmosphere of the mythological world; and the electronic timbres symbolize the flow of time.',
        'Gilgamesh\'s journey is, in fact, everyone\'s journey: the effort to love, lose, and ultimately accept our mortal nature while leaving behind a meaningful story...',
      ],
    },
  },
  {
    slug: 'butimar', year: '2024', cat: 'concert', title: 'Butimar',
    scoring: { en: 'for solo flute', tr: 'solo flüt için', fr: 'pour flûte seule' },
    notes: {
      tr: [
        'Bu eser, Fars mitolojisinden doğan ve daha sonra Türk-İslam kültüründe önem kazanan bir efsane olan Butimar kuşunun gizemli yaşamından ve trajik kaderinden esinlenmiştir. Butimar, denize duyduğu derin sevgiyle bilinir. Suyun üzerinde süzülür, yüzeyinin altına dalar, ama ondan asla içmez.',
        'Efsaneye göre Butimar denizi öylesine derinden sever ki ondan içmeye kıyamaz ve böylece susuzluktan ölür. Bu trajik paradoks —sevdiğinin yanı başında olup ona dokunamamak; hayat kaynağının içinde yaşayıp ondan pay alamamak— Butimar’ı aşkın ve hasretin güçlü bir simgesi hâline getirmiştir.',
        'Butimar efsanesi kadim Fars şiir geleneğine dayanır ve yalnızca mitolojik kahramanları değil, doğanın sembolik figürlerini de ölümsüzleştiren bir destan olan Firdevsî’nin Şehnâme’sinde anılır. Zamanla bu efsane Orta Doğu ve Orta Asya kültürlerine yayılmış; Farsça “su kuşu” anlamına gelen “bahri mâ”dan türeyen adı da Butimar’a dönüşmüştür.',
        'Bu müzik eseri, Butimar’ın denize olan tutkusunu, ona yakın olup ondan içememenin çelişkisini ve nihayetinde susuzluktan ölme kaderini betimler. Kuş denizin üzerinde süzülür, derinliklerine dalar, yeniden yükselir ve aşk uğruna feda ettiği hayatının son anlarında göğe yükselir. Flüt; kuşun sesini, derin iç çekişlerini ve denizle kurduğu duyusal bağı temsil ederken, nefesi ve tınlaması denizin enginliğini, erişilmezliğini ve derin iç yankılarını betimler.',
        'Bu eser, yalnızca bir kuşu betimlemenin ötesine geçer. İnsanlığın imkânsız özlemlerini, erişilebilir olanın içinde yaşarken erişilmez olana duyulan hasreti ve bu paradoksun yarattığı dayanılmaz gerilimi yansıtır.',
        'Batıdan doğuya uzanan efsanevi göçüyle Butimar kuşu, farklı kültürleri ve dünyaları birbirine bağlayan bir simge olarak belirir. Bu kompozisyon, onun mistik yolculuğunu, sevdiğine yakın olmanın hem sevincini hem acısını, solo flütün nefesi ve sesi aracılığıyla anlatmayı amaçlar.',
      ],
      fr: [
        'Cette pièce s’inspire de la vie mystérieuse et du destin tragique de l’oiseau Butimar, une légende née de la mythologie persane qui a ensuite pris une place importante dans la culture turco-islamique. Le Butimar est connu pour son profond amour de la mer. Il glisse au-dessus de l’eau, plonge sous sa surface, mais n’en boit jamais.',
        'Selon la légende, le Butimar aime la mer si profondément qu’il ne peut se résoudre à y boire, et meurt ainsi de soif. Ce paradoxe tragique — être auprès de ce que l’on aime sans pouvoir le toucher ; vivre au sein de sa source de vie sans pouvoir y prendre part — a fait du Butimar un puissant symbole de l’amour et du désir.',
        'La légende du Butimar s’enracine dans l’ancienne tradition poétique persane et est mentionnée dans le Shâhnâmeh de Ferdowsi, une épopée qui immortalise non seulement des héros mythiques, mais aussi des figures symboliques de la nature. Au fil du temps, cette légende s’est répandue dans les cultures du Moyen-Orient et d’Asie centrale, et le nom, dérivé du persan « bahri mâ », qui signifie « oiseau d’eau », est devenu Butimar.',
        'Cette œuvre musicale dépeint la passion du Butimar pour la mer, la contradiction d’en être proche sans pouvoir y boire et, finalement, son destin de mourir de soif. L’oiseau glisse au-dessus de la mer, plonge dans ses profondeurs, remonte, et dans les derniers instants de sa vie, sacrifiée par amour, s’élève vers le ciel. La flûte représente la voix de l’oiseau, ses profonds soupirs et son lien sensuel avec la mer, tandis que son souffle et sa résonance dépeignent l’immensité, l’inaccessibilité et les profonds échos intérieurs de la mer.',
        'Cette pièce va au-delà de la simple représentation d’un oiseau. Elle reflète les désirs impossibles de l’humanité, l’aspiration à l’inaccessible tout en vivant au sein de l’accessible, et la tension insupportable que crée ce paradoxe.',
        'Par sa migration légendaire d’ouest en est, l’oiseau Butimar apparaît comme un symbole reliant des cultures et des mondes différents. Cette composition cherche à raconter son voyage mystique, la joie comme la douleur d’être proche de ce qu’il aime, à travers le souffle et la voix de la flûte seule.',
      ],
      // Cahit Külebi'nin "Butimar" şiirinden alıntı telif nedeniyle buraya eklenmedi;
      // istenirse ilk paragraftan sonra eklenebilir.
      en: [
        'This piece is inspired by the mysterious life and tragic fate of the Butimar bird, a legend originating from Persian mythology that later gained prominence in Turkish-Islamic culture. The Butimar is known for its deep love of the sea. It glides over the water, dives beneath its surface, yet never drinks from it.',
        'According to legend, the Butimar loves the sea so deeply that it cannot bring itself to drink from it, and thus dies of thirst. This tragic paradox – being next to what you love, yet unable to touch it; living within your life source, but unable to partake in it – has made the Butimar a powerful symbol of love and longing.',
        'The Butimar legend is rooted in the ancient Persian poetic tradition and is mentioned in Firdausi\'s Shahnameh, an epic poem that immortalizes not only mythical heroes but also symbolic figures of nature. Over time, this legend spread across Middle Eastern and Central Asian cultures, and the name, derived from the Persian "bahri mâ" meaning "water bird," evolved into Butimar.',
        'This musical work portrays the Butimar\'s passion for the sea, the contradiction of being near it yet unable to drink from it, and ultimately, its fate of dying of thirst. The bird glides over the sea, dives into its depths, rises again, and in the final moments of its life, sacrificed for love, ascends to the sky. The flute represents the bird\'s voice, its deep sighs, and its sensual connection with the sea, while its breath and resonance depict the vastness, inaccessibility, and profound inner echoes of the sea.',
        'This piece goes beyond merely portraying a bird. It reflects humanity\'s impossible longings, the yearning for the unattainable while living within the attainable, and the unbearable tension this paradox creates.',
        'With its legendary migration from west to east, the Butimar bird emerges as a symbol bridging different cultures and worlds. This composition aims to narrate its mystical journey, both the joy and pain of being close to what it loves, through the breath and voice of the solo flute.',
      ],
    },
  },
  {
    slug: 'tek-bi-mutlu-an', year: '2026', cat: 'stage', title: 'Tek Bi’ Mutlu An!', event: 'tek-bi-mutlu-an',
    scoring: { en: 'Sound design · dir. & choreography İlyas Odman', tr: 'Ses tasarımı · yönetmen & koreograf İlyas Odman', fr: 'Création sonore · mise en scène & chorégraphie İlyas Odman' },
  },
  {
    slug: 'ro-ap', year: '2026', cat: 'stage', title: 'Ro-Ap', event: 'ro-ap',
    scoring: { en: 'Music & sound design · Abdül Süsler', tr: 'Müzik & ses tasarımı · Abdül Süsler', fr: 'Musique & création sonore · Abdül Süsler' },
  },
  {
    slug: 'happy-days', year: '2026', cat: 'stage', title: 'Happy Days', event: 'happy-days',
    scoring: { en: 'Music & sound design · Samuel Beckett, dir. Abdül Süsler', tr: 'Müzik & ses tasarımı · Samuel Beckett, "Mutlu Günler", yön. Abdül Süsler', fr: 'Musique & création sonore · Samuel Beckett, m.e.s. Abdül Süsler' },
  },
  {
    slug: 'a-place-with-the-pigs', year: '2026', cat: 'stage', title: 'A Place with the Pigs: A Personal Parable', event: 'a-place-with-the-pigs',
    scoring: { en: 'Music & sound design · Athol Fugard, dir. Abdül Süsler', tr: 'Müzik & ses tasarımı · Athol Fugard, "Domuz Ahırı", yön. Abdül Süsler', fr: 'Musique & création sonore · Athol Fugard, m.e.s. Abdül Süsler' },
  },
];

// ---------- Etkinlikler ----------
// date: YYYY-MM-DD. Bugünden sonraki tarihler otomatik "Yaklaşan" altına düşer.
// program: konserde çalınan eserler (me: true olan satır vurgulanır). credits: tiyatro ekibi.
type ProgramItem = { composer: string; work?: string; year?: string; me?: boolean };
const R = (en: string, tr: string, fr: string): T => ({ en, tr, fr });
const TOPKAPI = R('Istanbul Topkapı University, Kazlıçeşme Campus, G Block, Doğa Sigorta Conference Hall', 'İstanbul Topkapı Üniversitesi, Kazlıçeşme Kampüsü, G Blok, Doğa Sigorta Konferans Salonu', 'Université Topkapı d’Istanbul, campus de Kazlıçeşme, bloc G, salle de conférence Doğa Sigorta');

export const events: {
  slug: string; date: string; time?: string; title: string; work?: string; performers: string;
  venue?: T; note?: T; poster?: string; lineup?: { name: string; role: T }[];
  program?: ProgramItem[]; credits?: Credit[]; source?: string;
}[] = [
  {
    slug: 'ro-ap', date: '2026-12-14',
    title: 'Ro-Ap',
    performers: 'Abdül Süsler',
    note: R('Premiere · Music & sound design', 'Prömiyer · Müzik & ses tasarımı', 'Première · Musique & création sonore'),
  },
  {
    slug: 'izmir-new-music-days-vii', date: '2026-10-25', time: '20:00',
    title: 'İzmir New Music Days VII — Next Generation Series VII',
    work: 'ÖTEYAKADAN TAKAZA Act.0',
    performers: 'Niklas Seidl',
    venue: R('MÜZİKSEV, İzmir', 'MÜZİKSEV, İzmir', 'MÜZİKSEV, İzmir'),
    note: R('Concert “NOITU LOVE” · Workshops with Niklas Seidl, 22–24 October', '“NOITU LOVE” konseri · Niklas Seidl ile atölye çalışmaları, 22–24 Ekim', 'Concert « NOITU LOVE » · Ateliers avec Niklas Seidl, 22–24 octobre'),
    poster: 'poster-iymg7',
    lineup: [{ name: 'Niklas Seidl', role: R('cello', 'viyolonsel', 'violoncelle') }],
    program: [
      { composer: '—', work: 'Taş-doğaçlaması' },
      { composer: 'Juliana Hodkinson', work: 'Jounce', year: '2016' },
      { composer: 'Emir Ekberzade', work: 'Conflux', year: '2026' },
      { composer: 'Azra Kaya', work: 'heterotopia', year: '2026' },
      { composer: 'Steven Kazuo Takasugi', work: 'Letters from Prison', year: '2009' },
      { composer: 'Melikşah Alkan', work: 'ÖTEYAKADAN TAKAZA Act.0', year: '2026', me: true },
      { composer: 'Niklas Seidl', work: 'Malte Eister', year: '2009' },
      { composer: 'Kaan Selçuk', work: 'loops 1', year: '2026' },
      { composer: 'Jennifer Walshe', work: 'That\'s a lot of money at the top of a rocket', year: '2024' },
      { composer: 'Rolf Riehm', work: 'Ach, Königin', year: '2005' },
    ],
    source: 'https://init-i2.org/uncategorized/izmir-yeni-muzik-gunleri-vii-22-27-ekim-2026/',
  },
  {
    slug: 'bilgi-new-music-festival-16', date: '2026-06-28', time: '20:00',
    title: 'Bilgi New Music Festival 16',
    work: 'Ab-ı Revan',
    performers: 'Les Solistes de l’Ensemble intercontemporain',
    venue: R('Yeldeğirmeni Art Center, Kadıköy, Istanbul', 'Yeldeğirmeni Sanat, Kadıköy, İstanbul', 'Centre d’art Yeldeğirmeni, Kadıköy, Istanbul'),
    poster: 'poster-bilgi16',
    lineup: [
      { name: 'Alain Billard', role: R('clarinet / bass clarinet', 'klarnet / bas klarnet', 'clarinette / clarinette basse') },
      { name: 'Jérôme Comte', role: R('clarinet / bass clarinet', 'klarnet / bas klarnet', 'clarinette / clarinette basse') },
      { name: 'Éric-Maria Couturier', role: R('cello', 'viyolonsel', 'violoncelle') },
      { name: 'Nicolas Crosse', role: R('double bass', 'kontrbas', 'contrebasse') },
    ],
    program: [
      { composer: 'Atabak Amjadi', work: 'Âstâne' },
      { composer: 'Tarık Mutlugöz', work: 'The Night Sky' },
      { composer: 'Melikşah Alkan', work: 'Ab-ı Revan', year: '2026', me: true },
      { composer: 'Arda Yiğit Serbes', work: 'Anti-Being' },
      { composer: 'Deniz Hatipoğlu', work: 'Anacoluthon' },
      { composer: 'İrem Başer', work: 'instant bugs' },
      { composer: 'Anıl Çelik', work: 'Sem, the Maltese Knight' },
      { composer: 'Emir Ekberzade', work: 'Points and Lines' },
      { composer: 'Mert Altıparmak', work: 'Luminance' },
      { composer: 'Yağmur Kale', work: 'Self Portrait I' },
      { composer: 'Cenk Takınç', work: 'TÖZ' },
      { composer: 'Evrim Bozkan', work: 'Urth' },
    ],
  },
  {
    slug: 'tek-bi-mutlu-an', date: '2026-06-07',
    title: 'Tek Bi’ Mutlu An!',
    performers: 'İlyas Odman',
    venue: R('ClapHall, Istanbul', 'ClapHall, İstanbul', 'ClapHall, Istanbul'),
    note: R('Premiere · Sound design', 'Prömiyer · Ses tasarımı', 'Première · Création sonore'),
    poster: 'poster-tekbimutluan',
    credits: [
      { role: R('Director / choreographer', 'Yönetmen / koreograf', 'Mise en scène / chorégraphie'), names: 'İlyas Odman' },
      { role: R('Cast', 'Oyuncular', 'Distribution'), names: 'Aleyna Yılmaz, Beste Sevin, Neslihan Yıldırım, Nevin İnci, Tanem Yılmaz' },
      { role: R('Sound design', 'Ses tasarımı', 'Création sonore'), names: 'Melikşah Alkan' },
      { role: R('Lighting design', 'Işık tasarımı', 'Création lumière'), names: 'Serhat Barış' },
      { role: R('Costume design', 'Kostüm tasarımı', 'Costumes'), names: 'Hilal Polat' },
      { role: R('Dramaturgy', 'Dramaturji', 'Dramaturgie'), names: 'Nevin İnci' },
      { role: R('Assistants', 'Asistanlar', 'Assistants'), names: 'Canan Demir, Öyken Ege Acar' },
      { role: R('Poster design', 'Afiş tasarımı', 'Affiche'), names: 'Sıla Sert, Beste Sevin' },
    ],
  },
  {
    slug: 'sesin-yolculugu-17', date: '2026-05-08', time: '15:00',
    title: 'Sesin Yolculuğu 17 — Young Composers Festival',
    work: 'Mahzen-ül Esrar',
    performers: 'Mustafa Orhan, Mehmet Efe Özşahin, Nazlı Hira Örsel, Balkan Alya Özgür',
    venue: R('Mimar Sinan Fine Arts University, Sedad Hakkı Eldem Auditorium, Istanbul', 'Mimar Sinan Güzel Sanatlar Üniversitesi, Sedad Hakkı Eldem Oditoryumu, İstanbul', 'Université des beaux-arts Mimar Sinan, auditorium Sedad Hakkı Eldem, Istanbul'),
    note: R('Student Ensembles Concert II', '2. Konser — Öğrenci Toplulukları', 'Concert des ensembles d’étudiants II'),
    poster: 'poster-sy17',
    lineup: [
      { name: 'Mustafa Orhan', role: R('violin I', '1. keman', 'violon I') },
      { name: 'Mehmet Efe Özşahin', role: R('violin II', '2. keman', 'violon II') },
      { name: 'Nazlı Hira Örsel', role: R('viola', 'viyola', 'alto') },
      { name: 'Balkan Alya Özgür', role: R('cello', 'viyolonsel', 'violoncelle') },
    ],
    program: [
      { composer: 'Dilhan Hıdıroğlu', work: 'Kerpe\'yi Beklerken', year: '2026' },
      { composer: 'Hasti Esfandiari', work: 'Farklı Macera', year: '2026' },
      { composer: 'Nazrin İbrahimova', work: 'panic, attaC#k!', year: '2026' },
      { composer: 'Göksu Poyraz', work: 'Piyano için Üç Küçük Parça', year: '2026' },
      { composer: 'Hasan Burak Ünal', work: 'Paslanmış Kökler', year: '2026' },
      { composer: 'Leyla Ravza Albay', work: 'The Noise Between Voices', year: '2025' },
      { composer: 'Berzan Bayhan', work: 'Metropolitan Gündelikler', year: '2025' },
      { composer: 'Hümeyra Meriş Karslı', work: 'Üç Aydan Kesitler', year: '2025' },
      { composer: 'Batuhan Alper Bozkurt', work: 'Harmony and Anarchy', year: '2023' },
      { composer: 'Doruk Çınar Kardaş', work: 'Türk Ressamlardan İzlenimler', year: '2024' },
      { composer: 'Deniz Sipahioğlu', work: 'İki Keman için Birkaç Müzik!', year: '2026' },
      { composer: 'Deniz Eryiğit', work: '! Mozart\'ın Sigortaları Attı !', year: '2026' },
      { composer: 'Melikşah Alkan', work: 'Mahzen-ül Esrar', year: '2025', me: true },
      { composer: 'Orkay Pazarcı', work: '1982', year: '2024' },
      { composer: 'Hayal Candaş', work: 'An', year: '2026' },
    ],
    source: 'https://sesinyolculugu.com/festivaller/17-2/2-konser/',
  },
  {
    slug: 'happy-days', date: '2026-03-27',
    title: 'Happy Days (Mutlu Günler)',
    performers: 'Samuel Beckett · dir. Abdül Süsler',
    venue: TOPKAPI,
    note: R('Premiere · Music & sound design', 'Prömiyer · Müzik & ses tasarımı', 'Première · Musique & création sonore'),
    poster: 'poster-mutlugunler',
    credits: [
      { role: R('Text', 'Metin', 'Texte'), names: 'Samuel Beckett' },
      { role: R('Director', 'Yönetmen', 'Mise en scène'), names: 'Abdül Süsler' },
      { role: R('Cast', 'Oyuncular', 'Distribution'), names: 'Aleyna Yılmaz, Uğur Roman' },
      { role: R('Assistant directors', 'Yardımcı yönetmenler', 'Assistants à la mise en scène'), names: 'Beste Sevin, Neslihan Yıldırım' },
      { role: R('Directing assistants', 'Reji asistanları', 'Assistants de régie'), names: 'Salih Çağan Turucalı, Canan Demir' },
      { role: R('Music & sound design', 'Müzik ve ses tasarımı', 'Musique & création sonore'), names: 'Melikşah Alkan' },
      { role: R('Lighting design', 'Işık tasarımı', 'Création lumière'), names: 'Bedirhan İsabetli' },
      { role: R('Poster design', 'Afiş tasarımı', 'Affiche'), names: 'Su Eda Bostancı' },
    ],
  },
  {
    slug: 'a-place-with-the-pigs', date: '2026-03-25',
    title: 'A Place with the Pigs (Domuz Ahırı)',
    performers: 'Athol Fugard · dir. Abdül Süsler',
    venue: TOPKAPI,
    note: R('Premiere · Music & sound design', 'Prömiyer · Müzik & ses tasarımı', 'Première · Musique & création sonore'),
    poster: 'poster-domuzahiri',
    credits: [
      { role: R('Text', 'Metin', 'Texte'), names: 'Athol Fugard' },
      { role: R('Director', 'Yönetmen', 'Mise en scène'), names: 'Abdül Süsler' },
      { role: R('Cast', 'Oyuncular', 'Distribution'), names: 'Bedirhan İsabetli, Neslihan Yıldırım' },
      { role: R('Assistant director', 'Yardımcı yönetmen', 'Assistante à la mise en scène'), names: 'Aleyna Yılmaz' },
      { role: R('Directing assistant', 'Yönetmen yardımcısı', 'Assistant de régie'), names: 'Ege Acar' },
      { role: R('Set design', 'Dekor tasarımı', 'Scénographie'), names: 'Uğur Roman' },
      { role: R('Music & sound design', 'Müzik ve ses tasarımı', 'Musique & création sonore'), names: 'Melikşah Alkan' },
      { role: R('Technical', 'Teknik', 'Technique'), names: 'Salih Çağan Turucalı' },
      { role: R('Poster design', 'Afiş tasarımı', 'Affiche'), names: 'Su Eda Bostancı' },
    ],
  },
  {
    slug: 'sesin-yolculugu-16', date: '2025-05-03', time: '20:30',
    title: 'Sesin Yolculuğu 16 — Young Composers Festival',
    work: 'Mahzen-ül Esrar',
    performers: 'Semplice Quartet',
    venue: R('Atatürk Cultural Centre, Theatre Hall, Istanbul', 'Atatürk Kültür Merkezi, Tiyatro Salonu, İstanbul', 'Centre culturel Atatürk, salle de théâtre, Istanbul'),
    poster: 'poster-sy16',
    lineup: [
      { name: 'Murat Erginol', role: R('violin I', '1. keman', 'violon I') },
      { name: 'Yaren Budak', role: R('violin II', '2. keman', 'violon II') },
      { name: 'Pınar Dinçer', role: R('viola', 'viyola', 'alto') },
      { name: 'Burak Ayrancı', role: R('cello', 'viyolonsel', 'violoncelle') },
    ],
    program: [
      { composer: 'Anita Sağlam', work: 'Yaylı Dörtlü için Rondo', year: '2023' },
      { composer: 'Eylem Atalay', work: 'A Birth in 92\'', year: '2025' },
      { composer: 'Ahmet Cemal Öksüz', work: 'Boşluk', year: '2025' },
      { composer: 'Doğaç Öztürk', work: 'Serenity in Mass Extinction', year: '2025' },
      { composer: 'Melikşah Alkan', work: 'Mahzen-ül Esrar', year: '2025', me: true },
      { composer: 'Hasan Barış Gemici', work: 'İkircikli Zeybeği', year: '2022' },
      { composer: 'Kaan Selçuk', work: 'Yaylı Dördül için Parça', year: '2025' },
      { composer: 'Alphan Tokmakoğlu', work: 'Derdest' },
    ],
    source: 'https://sesinyolculugu.com/festivaller/16-2/3-konser/',
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
// Fotoğrafın hangi kısmının görüneceği (yatay% dikey%), kırpıldığında
export const focal: Record<string, string> = {
  'night-wide': '50% 30%', 'reading-wide': '81% 35%', railway2: '53% 14%',
  night: '50% 32%', cello: '64% 50%', rehearsal: '50% 50%', curtaincall: '50% 25%',
  studio: '50% 35%', railway: '50% 8%', desk: '75% 40%', reading: '55% 35%', standing: '42% 25%',
  'church-concert': '50% 70%', 'mahzen-bow': '44% 55%', score: '38% 30%', 'sy17-concert': '55% 55%',
  'poster-tekbimutluan': '50% 40%', 'stage-set': '45% 40%', 'mahzen-rehearsal': '60% 30%',
};

// Geniş ekranda yüzün yerleşimi: fx = yüzün fotoğraftaki yatay konumu (0–1),
// at = ekrandaki hedef konum (0–1) ya da 'between' (menü ile isim arasının tam ortası)
export const anchors: Record<string, { fx: number; at: number | 'between'; fit?: 'height' }> = {
  'night-wide': { fx: 0.5, at: 'between' },
  'reading-wide': { fx: 0.815, at: 0.95 },
  rehearsal: { fx: 0.5, at: 0.7, fit: 'height' },
  railway2: { fx: 0.53, at: 0.9, fit: 'height' },
  score: { fx: 0.4, at: 0.9, fit: 'height' },
  standing: { fx: 0.42, at: 0.9, fit: 'height' },
};

// Her sayfanın arka plan fotoğrafı
export const photos = {
  home: 'night-wide',
  approach: 'reading-wide',
  about: 'standing',
  works: 'score',
  events: 'sy17-concert',
  media: 'mahzen-bow',
  gallery: 'rehearsal',
  contact: 'railway2',
  portrait: 'studio',
};
