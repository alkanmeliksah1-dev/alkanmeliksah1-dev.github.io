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
  forms: {
    // İletişim formu: FormSubmit üzerinden doğrudan info@ adresine gelir.
    // İlk mesajda FormSubmit bir "Activate" e-postası yollar; bir kez onaylamak yeterli.
    contact: 'https://formsubmit.co/ajax/info@meliksahalkan.com',
    // Bülten: Brevo'da her dil için oluşturulan formun "action" adresi (…sibforms.com/serve/…).
    // Boş bırakılırsa abonelik talepleri e-postayla info@ adresine gelir (hiçbiri kaybolmaz).
    newsletter: { en: '', tr: '', fr: '' } as Record<'en' | 'tr' | 'fr', string>,
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
  rights: { en: 'All rights reserved.', tr: 'Tüm hakları saklıdır.', fr: 'Tous droits réservés.' },
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
  aboutPlay: { en: 'About the play', tr: 'Oyun hakkında', fr: 'À propos de la pièce' },
  program: { en: 'Programme', tr: 'Program', fr: 'Programme' },
  performers: { en: 'Performers', tr: 'İcracılar', fr: 'Interprètes' },
  credits: { en: 'Credits', tr: 'Künye', fr: 'Générique' },
  allWorks: { en: 'All works', tr: 'Tüm çalışmalar', fr: 'Toutes les œuvres' },
  allEvents: { en: 'All events', tr: 'Tüm etkinlikler', fr: 'Tous les événements' },
  premiere: { en: 'Premiere', tr: 'İlk seslendirme', fr: 'Création' },
  viewEvent: { en: 'Concert programme', tr: 'Konser programı', fr: 'Programme du concert' },
  source: { en: 'Sources', tr: 'Kaynaklar', fr: 'Sources' },
  album: { en: 'Album', tr: 'Albüm', fr: 'Album' },
  f_scoring: { en: 'Instrumentation', tr: 'Kadro', fr: 'Effectif' },
  f_role: { en: 'Role', tr: 'Görev', fr: 'Rôle' },
  f_text: { en: 'Text', tr: 'Metin', fr: 'Texte' },
  f_director: { en: 'Director', tr: 'Yönetmen', fr: 'Mise en scène' },
  f_award: { en: 'Award', tr: 'Ödül', fr: 'Distinction' },
  f_performances: { en: 'Performances', tr: 'Seslendirmeler', fr: 'Exécutions' },
  f_premiere: { en: 'Premiere', tr: 'Prömiyer', fr: 'Première' },
  f_release: { en: 'Release', tr: 'Yayın', fr: 'Parution' },
  f_date: { en: 'Date', tr: 'Tarih', fr: 'Date' },
  f_venue: { en: 'Venue', tr: 'Mekân', fr: 'Lieu' },
  f_label: { en: 'Label', tr: 'Yayıncı', fr: 'Label' },
  f_work: { en: 'Work', tr: 'Çalışma', fr: 'Œuvre' },
  f_performers: { en: 'Performers', tr: 'İcracılar', fr: 'Interprètes' },
  tba: { en: 'To be announced', tr: 'Açıklanacak', fr: 'À annoncer' },
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
  // ---------- iletişim sayfası formları ----------
  tabMessage: { en: 'Message', tr: 'Mesaj', fr: 'Message' },
  tabNewsletter: { en: 'Newsletter', tr: 'Bülten', fr: 'Lettre' },
  fName: { en: 'Name', tr: 'Ad soyad', fr: 'Nom' },
  fNameOpt: { en: 'Name (optional)', tr: 'Ad (isteğe bağlı)', fr: 'Prénom (facultatif)' },
  fEmail: { en: 'Email', tr: 'E-posta', fr: 'E-mail' },
  fSubject: { en: 'Subject', tr: 'Konu', fr: 'Objet' },
  fSubjectPick: { en: 'Select a subject', tr: 'Konu seçin', fr: 'Choisir un objet' },
  fMessage: { en: 'Message', tr: 'Mesaj', fr: 'Message' },
  fSend: { en: 'Send', tr: 'Gönder', fr: 'Envoyer' },
  fSubscribe: { en: 'Subscribe', tr: 'Abone ol', fr: 'S’abonner' },
  fSending: { en: 'Sending…', tr: 'Gönderiliyor…', fr: 'Envoi…' },
  subjects: {
    en: ['Commission / new work', 'Performance', 'Scores & recordings', 'Theatre & stage music', 'Press & media', 'Other'],
    tr: ['Eser siparişi', 'Seslendirme / icra', 'Partisyon ve kayıt', 'Tiyatro ve sahne müziği', 'Basın ve medya', 'Diğer'],
    fr: ['Commande / nouvelle œuvre', 'Interprétation', 'Partitions et enregistrements', 'Théâtre et musique de scène', 'Presse et médias', 'Autre'],
  } as Record<Lang, string[]>,
  msgOk: {
    en: 'Thank you, your message has arrived. I will get back to you as soon as possible.',
    tr: 'Teşekkürler, mesajınız ulaştı. En kısa sürede size dönüş yapacağım.',
    fr: 'Merci, votre message est bien arrivé. Je vous répondrai dès que possible.',
  },
  msgErr: {
    en: 'The message could not be sent. Please write directly to',
    tr: 'Mesaj gönderilemedi. Lütfen doğrudan şu adrese yazın:',
    fr: 'Le message n’a pas pu être envoyé. Écrivez directement à',
  },
  nlLead: {
    en: 'Sign up with your email address to receive news and updates.',
    tr: 'Haberler ve güncellemeler için e-posta adresinizle kaydolun.',
    fr: 'Inscrivez-vous avec votre adresse e-mail pour recevoir les nouvelles et actualités.',
  },
  nlNote: {
    en: 'Your address is used only for this newsletter and never shared. You can unsubscribe at any time with the link in every email.',
    tr: 'Adresiniz yalnızca bu bülten için kullanılır, kimseyle paylaşılmaz. Her e-postadaki bağlantıyla istediğiniz an ayrılabilirsiniz.',
    fr: 'Votre adresse sert uniquement à cette lettre et n’est jamais partagée. Vous pouvez vous désabonner à tout moment via le lien présent dans chaque e-mail.',
  },
  nlConfirm: {
    en: 'Almost done: please confirm your subscription with the link we have just sent to your inbox.',
    tr: 'Neredeyse tamam: e-posta kutunuza gönderilen bağlantıyla aboneliğinizi onaylayın.',
    fr: 'Presque terminé : confirmez votre abonnement grâce au lien envoyé dans votre boîte de réception.',
  },
  nlOk: {
    en: 'Thank you, you are subscribed.',
    tr: 'Teşekkürler, aboneliğiniz alındı.',
    fr: 'Merci, votre abonnement est enregistré.',
  },
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
  slug: string; year: string; cat: string; title: string;
  scoring?: T;                         // konser: kadro
  role?: T; text?: string; director?: string;   // sahne: görev, metin, yönetmen
  award?: T; links?: Link[]; notes?: Notes;
}[] = [
  {
    slug: 'ab-i-revan', year: '2026', cat: 'concert', title: 'Ab-ı Revan',
    scoring: { en: 'for Les Solistes de l’Ensemble intercontemporain', tr: 'Les Solistes de l’Ensemble intercontemporain için', fr: 'pour Les Solistes de l’Ensemble intercontemporain' },
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
    slug: 'oteyakadan-takaza-act-0', year: '2026', cat: 'concert', title: 'ÖTEYAKADAN TAKAZA Act.0',
    scoring: { en: 'for a performer, an actor and electronics', tr: 'bir icracı, bir oyuncu ve elektronikler için', fr: 'pour un interprète, un acteur et électroniques' },
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
    slug: 'mahzen-ul-esrar', year: '2025', cat: 'concert', title: 'Mahzen-ül Esrar',
    scoring: { en: 'for string quartet', tr: 'yaylı çalgılar dörtlüsü için', fr: 'pour quatuor à cordes' },
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
    award: { en: 'Honorable Mention, Gilgamesh International Composition Competition', tr: 'Mansiyon, Gılgamış Uluslararası Bestecilik Yarışması', fr: 'Mention honorable, Concours international de composition Gilgamesh' },
    scoring: { en: 'for harp, trombone and electronics', tr: 'arp, trombon ve elektronikler için', fr: 'pour harpe, trombone et électroniques' },
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
    slug: 'tek-bi-mutlu-an', year: '2026', cat: 'stage', title: 'Tek Bi’ Mutlu An!',
    role: { en: 'Sound design', tr: 'Ses tasarımı', fr: 'Création sonore' }, director: 'İlyas Odman',
    notes: {
      tr: [
        'Koreograf / Rejisör İlyas Odman’ın tiyatronun farklı konumlarından gelen beş katılımcıyla gerçekleştirilen “Tek Bi’ Mutlu An!” oyunu Devised Tiyatro teknikleriyle, kolektif olarak üretilmiş bir kara komedidir.',
        'Tiyatro dediğimiz büyük sektörün içinde kendilerine ait bir yer arayan beş kadın; pozisyonlarını, yaşadıklarını, hissettiklerini sizlere beş tiradla anlatmaya çalışıyor. Beş kadının yolculuğu devam ettikçe seyirci kendini sürekli değişen bir pozisyonda; oyunun, tiyatronun bir parçası olarak buluyor. Peki tiyatro nedir?',
        'Oyun boyunca beş kadın Tek Bi’ Mutlu An’ın peşinde koşarken elmas gibi parlayacak. Biz sizinle gökteki elmaslar gibi güzeliz!',
      ],
      en: [
        'Created by choreographer and director İlyas Odman with five participants who come from different positions within theatre, “Tek Bi’ Mutlu An!” (A Single Happy Moment!) is a black comedy made collectively through devised theatre techniques.',
        'Five women searching for a place of their own within the vast industry we call theatre try to tell you, in five monologues, about their positions, what they have lived through and what they feel. As the five women’s journey goes on, the audience finds itself in an ever-shifting position, as part of the play and of theatre itself. So what is theatre?',
        'Throughout the play, the five women will shine like diamonds as they chase a single happy moment. You and we are as beautiful as the diamonds in the sky!',
      ],
      fr: [
        'Créé par le chorégraphe et metteur en scène İlyas Odman avec cinq participantes venues de différentes positions du théâtre, « Tek Bi’ Mutlu An! » (Un seul moment heureux !) est une comédie noire produite collectivement selon les techniques du théâtre de création collective (devised theatre).',
        'Cinq femmes qui cherchent leur propre place au sein de cette vaste industrie qu’on appelle le théâtre tentent de vous raconter, en cinq tirades, leurs positions, ce qu’elles ont vécu et ce qu’elles ressentent. À mesure que le voyage des cinq femmes se poursuit, le public se retrouve dans une position sans cesse changeante, comme partie prenante de la pièce et du théâtre. Alors, qu’est-ce que le théâtre ?',
        'Tout au long de la pièce, les cinq femmes brilleront comme des diamants en courant après un seul moment heureux. Vous et nous, nous sommes beaux comme les diamants dans le ciel !',
      ],
    },
  },
  {
    slug: 'ro-ap', year: '2026', cat: 'stage', title: 'Ro-Ap',
    role: { en: 'Music, sound design and mixing', tr: 'Müzik, ses tasarımı ve miksaj', fr: 'Musique, création sonore et mixage' }, text: 'Mustafa Ergüven', director: 'Abdül Süsler',
  },
  {
    slug: 'happy-days', year: '2026', cat: 'stage', title: 'Happy Days',
    role: { en: 'Music & sound design', tr: 'Müzik ve ses tasarımı', fr: 'Musique & création sonore' }, text: 'Samuel Beckett', director: 'Abdül Süsler',
    notes: {
      tr: [
        '‘’Şu anda neysem, hep o oldum. Ama hep de daha önce olduğumdan farklı. Biriyim. Diyorum ki biriyim! Bir biri, bir öteki. İnsanın söyleyebileceği o kadar az şey var ki… Kollarım, göğüslerim, ne kolu, ne göğsü? Willie. Ne Willie’si? Benim Willie’m… İşte bilmemek, tam olarak bilmemek. Şükürler olsun, daha ne isteyebilirim ki?’’',
        'Her geçen gün biraz daha dibe battığımız bir dünyada; kumun, sessizliğin ve sahte gülüşlerin arasından sesleniyoruz.',
        'Winnie; beline kadar gömüldüğü çorak bir çölün ortasında, çantasındaki küçük dünyası ve ‘bitmeyen’ umuduyla kendine sahte bir cennet inşa ediyor. Willie ise, tüm eylemsizliğiyle orada, tam karşımızda “yanındayken yok olmanın” hikâyesini anlatıyor.',
        'Biz size “mutlu günler” vadetmiyoruz; biz size o yıkıntının içinde neden hâlâ saçımızı taradığımızı, neden konuşmaya devam ettiğimizi ve bizi kurtarmayan o mücadeleye neden sıkı sıkıya sarıldığımızı anlatıyoruz…',
      ],
      en: [
        '“What I am now, I have always been. And yet always different from what I was before. I am one. I say I am one! One and another. There is so little one can say… My arms, my breasts — what arms, what breasts? Willie. What Willie? My Willie… That is what not knowing is, not quite knowing. Thank God, what more could I ask for?”',
        'In a world where we sink a little deeper with each passing day, we call out from among the sand, the silence and the false smiles.',
        'Winnie, buried up to her waist in the middle of a barren desert, builds herself a false paradise out of the little world in her bag and her ‘never-ending’ hope. Willie, in all his inaction, is right there in front of us, telling the story of “vanishing while being by someone’s side.”',
        'We do not promise you “happy days”; we tell you why, amid that ruin, we still comb our hair, why we keep on talking, and why we cling so tightly to the struggle that does not save us…',
      ],
      fr: [
        '« Ce que je suis maintenant, je l’ai toujours été. Et pourtant toujours autre que ce que j’étais avant. Je suis une. Je dis que je suis une ! Une et une autre. Il y a si peu de choses qu’on puisse dire… Mes bras, mes seins — quels bras, quels seins ? Willie. Quel Willie ? Mon Willie… Voilà ce que c’est que ne pas savoir, ne pas savoir tout à fait. Dieu merci, que demander de plus ? »',
        'Dans un monde où nous nous enfonçons chaque jour un peu plus, nous lançons notre voix depuis le sable, le silence et les faux sourires.',
        'Winnie, enterrée jusqu’à la taille au milieu d’un désert aride, se bâtit un faux paradis avec le petit monde de son sac et son espoir « sans fin ». Willie, dans toute son inaction, est là, juste en face de nous, et raconte l’histoire de « disparaître tout en étant à côté ».',
        'Nous ne vous promettons pas de « beaux jours » ; nous vous racontons pourquoi, au milieu de ces ruines, nous nous peignons encore les cheveux, pourquoi nous continuons à parler, et pourquoi nous nous accrochons si fort à cette lutte qui ne nous sauve pas…',
      ],
    },
  },
  {
    slug: 'a-place-with-the-pigs', year: '2026', cat: 'stage', title: 'A Place with the Pigs: A Personal Parable',
    role: { en: 'Music & sound design', tr: 'Müzik ve ses tasarımı', fr: 'Musique & création sonore' }, text: 'Athol Fugard', director: 'Abdül Süsler',
    notes: {
      tr: [
        'Sovyetler Birliği döneminde, savaştan kaçıp evindeki domuz ahırına saklanan Pavel’in ve onu saklayan eşi Praskovya’nın hayatı; korku ve suçluluk duygusuyla 41 yıl süren bir hapse dönüşür. Pavel zaman zaman özgürlüğüne kavuşma isteği duysa da; dış dünyanın onu yargılayacağı düşüncesiyle ahırın güvenli pisliğinde yaşamaya devam eder. Bu büyük sırla yıllar içinde yalnızlaşan ve korkularıyla hareket eden evli bir çifte dönüşürler. Artık hayattaki tek arzuları daha büyük bir ahır ya da mutlu bir yaşam değildir; yakalanmamak ve kendilerini idam mangasında bulmamaktır…',
        'Peki asıl hapis hangisidir? Domuz ahırının dört duvarı mıdır yoksa insanın kendi vicdanıyla, kendi zihninde inşa ettiği midir?',
        '– Yaşam devam ediyor, Pavel.\n+ Kimin yaşamı?\n– Sanırım, herkesin.\n+ Benimki de mi?',
      ],
      en: [
        'In the Soviet era, the life of Pavel, who deserts the war and hides in the pigsty at his home, and of his wife Praskovya, who hides him, turns into a prison of fear and guilt that lasts forty-one years. Though Pavel at times longs to regain his freedom, the thought that the outside world will judge him keeps him living in the safe filth of the sty. Carrying this great secret, over the years they become a married couple grown lonely and driven by their fears. Their only wish in life is no longer a bigger sty or a happy life; it is not to be caught, not to find themselves before a firing squad…',
        'So which is the real prison? The four walls of the pigsty, or the one a person builds in their own mind, with their own conscience?',
        '– Life goes on, Pavel.\n+ Whose life?\n– Everybody’s, I suppose.\n+ Mine too?',
      ],
      fr: [
        'À l’époque soviétique, la vie de Pavel, qui a déserté la guerre pour se cacher dans la porcherie de sa maison, et de sa femme Praskovya, qui le cache, se change en une prison de peur et de culpabilité qui dure quarante et un ans. Même si Pavel aspire parfois à retrouver sa liberté, la pensée que le monde extérieur le jugera le fait rester dans la saleté rassurante de la porcherie. Avec ce grand secret, ils deviennent au fil des ans un couple isolé, mû par ses peurs. Leur seul désir n’est plus une porcherie plus grande ni une vie heureuse : c’est de ne pas être pris, de ne pas se retrouver devant le peloton d’exécution…',
        'Quelle est donc la vraie prison ? Les quatre murs de la porcherie, ou celle que l’on bâtit dans sa propre tête, avec sa propre conscience ?',
        '– La vie continue, Pavel.\n+ La vie de qui ?\n– Celle de tout le monde, je crois.\n+ La mienne aussi ?',
      ],
    },
  },
];

// ---------- Etkinlikler ----------
// date: YYYY-MM-DD. Bugünden sonraki tarihler otomatik "Yaklaşan" altına düşer.
// program: konserde çalınan eserler (me: true olan satır vurgulanır). credits: tiyatro ekibi.
type ProgramItem = { composer: string; work?: string; year?: string; me?: boolean };
const R = (en: string, tr: string, fr: string): T => ({ en, tr, fr });
const PIGS_CREDITS: Credit[] = [
      { role: R('Text', 'Metin', 'Texte'), names: 'Athol Fugard' },
      { role: R('Director', 'Yönetmen', 'Mise en scène'), names: 'Abdül Süsler' },
      { role: R('Cast', 'Oyuncular', 'Distribution'), names: 'Bedirhan İsabetli, Neslihan Yıldırım' },
      { role: R('Assistant director', 'Yardımcı yönetmen', 'Assistante à la mise en scène'), names: 'Aleyna Yılmaz' },
      { role: R('Directing assistant', 'Yönetmen yardımcısı', 'Assistant de régie'), names: 'Ege Acar' },
      { role: R('Set design', 'Dekor tasarımı', 'Scénographie'), names: 'Uğur Roman' },
      { role: R('Music & sound design', 'Müzik ve ses tasarımı', 'Musique & création sonore'), names: 'Melikşah Alkan' },
      { role: R('Technical', 'Teknik', 'Technique'), names: 'Salih Çağan Turucalı' },
      { role: R('Poster design', 'Afiş tasarımı', 'Affiche'), names: 'Su Eda Bostancı' },
    ];
const TOPKAPI = R('Istanbul Topkapı University, Kazlıçeşme Campus, G Block, Doğa Sigorta Conference Hall, Istanbul', 'İstanbul Topkapı Üniversitesi, Kazlıçeşme Kampüsü, G Blok, Doğa Sigorta Konferans Salonu, İstanbul', 'Université Topkapı d’Istanbul, campus de Kazlıçeşme, bloc G, salle de conférence Doğa Sigorta, Istanbul');

// Etkinlik türü: konser, tiyatro prömiyeri ya da albüm yayını.
// work: bu etkinlikteki kendi çalışmanın slug'ı (çalışmalar sayfasıyla bağlantı buradan kurulur).
// month: true ise yalnızca ay ve yıl gösterilir.
export const eventKinds: Record<'concert' | 'theatre' | 'release', T> = {
  concert: R('Concert', 'Konser', 'Concert'),
  theatre: R('Theatre', 'Tiyatro', 'Théâtre'),
  release: R('Album release', 'Albüm yayını', 'Sortie d’album'),
};
export const events: {
  slug: string; kind: 'concert' | 'theatre' | 'release'; date: string; month?: boolean; time?: string;
  title: string; work: string; venue?: T; label?: string; performers?: string;
  poster?: string; lineup?: { name: string; role: T }[];
  program?: ProgramItem[]; credits?: Credit[]; sources?: string[];
  premiere?: boolean; festival?: T;
}[] = [
  {
    slug: 'gilgamesh-iii', kind: 'release', date: '2026-12-01', month: true,
    title: 'Gilgamesh III', work: 'imaginary-dialogues-of-mortality',
    label: 'Gilgamesh Arts & Culture Foundation', venue: R('Los Angeles, USA', 'Los Angeles, ABD', 'Los Angeles, États-Unis'), performers: 'Jillian Lopez, Mattie Barbier',
    poster: 'cover-gilgamesh3',
    lineup: [
      { name: 'Jillian Lopez', role: R('harp', 'arp', 'harpe') },
      { name: 'Mattie Barbier', role: R('trombone', 'trombon', 'trombone') },
    ],
    program: [
      { composer: 'Felipe Vasconcelos', work: 'Gilgamesh in front of Edens gates' },
      { composer: 'Shai Cohen', work: 'Fragments of the Flood' },
      { composer: 'Pedro Brandão', work: 'Table 6' },
      { composer: 'Alessio Ferrante', work: 'Shamhat' },
      { composer: 'Alejandro Marco Gómez Lopera', work: 'Enkidu' },
      { composer: 'Arad Noroozi', work: 'Jya, Jayba, Shamkatum' },
      { composer: 'Manolis Ekmektsoglou', work: 'Humbaba' },
      { composer: 'Jihyun Kim', work: 'Song of Jungju' },
      { composer: 'Soheil Shirangi', work: 'Wild Heart Enkidu' },
      { composer: 'Afamia Al-Dayaa', work: 'Gilgamesh\'s Space Odyssey' },
      { composer: 'Daniel Krumland', work: 'Deluge' },
      { composer: 'Melikşah Alkan', work: 'Imaginary Dialogues of Mortality', year: '2025', me: true },
      { composer: 'Ali Araab', work: 'How Should I answer the city?' },
      { composer: 'Libby Fabricatore', work: 'Forest of Cedar / The Third Dream' },
      { composer: 'Erfan Javadi', work: 'The Quest for the Cedar Forest' },
    ],
    sources: ['https://gilgamesh.foundation/competition-3/'],
  },
  {
    slug: 'ro-ap', kind: 'theatre', date: '2026-12-14', time: '20:00', premiere: true,
    title: 'Ro-Ap', work: 'ro-ap', poster: 'poster-roap',
    credits: [
      { role: R('Project advisor', 'Proje danışmanı', 'Conseiller du projet'), names: 'Prof. Dr. Süreyya Temel' },
      { role: R('Assistant director', 'Yönetmen yardımcısı', 'Assistant à la mise en scène'), names: 'Görkem Ergin' },
      { role: R('Cast', 'Oyuncular', 'Distribution'), names: 'Aleyna Yılmaz, Betül Nazar Albayrak, Buse Enginbağ, İrem Karaarslan, Melisa Akuş, Miray Aşkayanar, Neslihan Yıldırım, Sena Pampal, Tuğçe Enginbağ' },
      { role: R('Cinematography', 'Görüntü yönetmeni', 'Image'), names: 'Salih Özoğul' },
      { role: R('Editing', 'Kurgu', 'Montage'), names: 'Rumeysa Özoğul' },
      { role: R('Directing assistants', 'Reji asistanları', 'Assistantes de régie'), names: 'Aleyna Yılmaz, Miray Aşkayanar' },
      { role: R('Movement design', 'Hareket tasarımı', 'Mouvement'), names: 'Melisa Akuş' },
      { role: R('Music, sound design and mixing', 'Müzik, ses tasarımı ve miksaj', 'Musique, création sonore et mixage'), names: 'Melikşah Alkan' },
      { role: R('Poster design', 'Afiş tasarımı', 'Affiche'), names: 'Su Eda Bostancı' },
      { role: R('Technical team', 'Teknik ekip', 'Équipe technique'), names: 'Atakan Yunus Uludağ, Muhammed Işıktaş, Ramazan Metin, Umut Yaşar İnan, Yusuf Akıl' },
    ],
  },
  {
    slug: 'izmir-new-music-days-vii', kind: 'concert', date: '2026-10-25', time: '20:00',
    title: 'İzmir New Music Days VII — Next Generation Series VII', work: 'oteyakadan-takaza-act-0',
    venue: R('MÜZİKSEV, İzmir', 'MÜZİKSEV, İzmir', 'MÜZİKSEV, İzmir'), performers: 'Niklas Seidl',
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
    sources: ['https://init-i2.org/uncategorized/izmir-yeni-muzik-gunleri-vii-22-27-ekim-2026/'],
  },
  {
    slug: 'bilgi-new-music-festival-16', kind: 'concert', date: '2026-06-28', time: '20:00',
    title: 'Bilgi New Music Festival 16', work: 'ab-i-revan',
    venue: R('Yeldeğirmeni Art Center, Kadıköy, Istanbul', 'Yeldeğirmeni Sanat Merkezi, Kadıköy, İstanbul', 'Centre d’art Yeldeğirmeni, Kadıköy, Istanbul'),
    performers: 'Les Solistes de l’Ensemble intercontemporain',
    poster: 'poster-bilgi16-main',
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
    sources: ['https://music.bilgi.edu.tr/tr/organizasyonlar/bilgi-yeni-muzik-festivali/yeni-muzik-serisi/bilgi-yeni-muzik-festivali-16/', 'https://www.bilgi.edu.tr/tr/etkinlik/13742/bilgi-yeni-muzik-festivali-16/'],
  },
  {
    slug: 'tek-bi-mutlu-an', kind: 'theatre', date: '2026-06-07', time: '20:30', premiere: true,
    title: 'Tek Bi’ Mutlu An!', work: 'tek-bi-mutlu-an',
    venue: R('ClapHall, Istanbul', 'ClapHall, İstanbul', 'ClapHall, Istanbul'),
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
    sources: ['https://tiyatrolar.com.tr/tiyatro/tek-bi-mutlu-an', 'https://biletinial.com/tr-tr/tiyatro/tek-bi-mutlu-an'],
  },
  {
    slug: 'sesin-yolculugu-17', kind: 'concert', date: '2026-05-08', time: '15:00',
    title: 'Sesin Yolculuğu 17 — Young Composers Festival', work: 'mahzen-ul-esrar',
    venue: R('Mimar Sinan Fine Arts University, Sedad Hakkı Eldem Auditorium, Istanbul', 'Mimar Sinan Güzel Sanatlar Üniversitesi, Sedad Hakkı Eldem Oditoryumu, İstanbul', 'Université des beaux-arts Mimar Sinan, auditorium Sedad Hakkı Eldem, Istanbul'),
    performers: 'Mustafa Orhan, Mehmet Efe Özşahin, Nazlı Hira Örsel, Balkan Alya Özgür',
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
    sources: ['https://sesinyolculugu.com/festivaller/17-2/2-konser/'],
  },
  {
    slug: 'happy-days', kind: 'theatre', date: '2026-03-27', time: '20:00', premiere: true,
    title: 'Happy Days (Mutlu Günler)', work: 'happy-days',
    venue: TOPKAPI, poster: 'poster-mutlugunler',
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
    slug: 'a-place-with-the-pigs-genc-gunler', kind: 'theatre', date: '2026-05-10', time: '15:00',
    title: 'A Place with the Pigs (Domuz Ahırı)', work: 'a-place-with-the-pigs',
    festival: R('40th Genç Günler Festival', '40. Genç Günler', '40e festival Genç Günler'),
    venue: R('Üsküdar Kerem Yılmazer Stage, Istanbul', 'Üsküdar Kerem Yılmazer Sahnesi, İstanbul', 'Scène Kerem Yılmazer, Üsküdar, Istanbul'),
    poster: 'poster-gencgunler40', credits: PIGS_CREDITS,
    sources: ['https://sehirtiyatrolari.ibb.istanbul/Artist/Detail/392'],
  },
  {
    slug: 'a-place-with-the-pigs-pau', kind: 'theatre', date: '2026-05-06', time: '20:00',
    title: 'A Place with the Pigs (Domuz Ahırı)', work: 'a-place-with-the-pigs',
    festival: R('Pamukkale University 15th Theatre Festival', 'Pamukkale Üniversitesi 15. Tiyatro Festivali', '15e Festival de théâtre de l’Université Pamukkale'),
    venue: R('Hasan Kasapoğlu Cultural Centre, Pamukkale University, Denizli', 'Hasan Kasapoğlu Kültür Merkezi, Pamukkale Üniversitesi, Denizli', 'Centre culturel Hasan Kasapoğlu, Université Pamukkale, Denizli'),
    poster: 'poster-pau15', credits: PIGS_CREDITS,
    sources: ['https://www.instagram.com/hayalperdemiz/'],
  },
  {
    slug: 'a-place-with-the-pigs', kind: 'theatre', date: '2026-03-25', time: '20:00', premiere: true,
    title: 'A Place with the Pigs (Domuz Ahırı)', work: 'a-place-with-the-pigs',
    venue: TOPKAPI, poster: 'poster-domuzahiri',
    credits: PIGS_CREDITS,
  },
  {
    slug: 'sesin-yolculugu-16', kind: 'concert', date: '2025-05-03', time: '20:30',
    title: 'Sesin Yolculuğu 16 — Young Composers Festival', work: 'mahzen-ul-esrar',
    venue: R('Atatürk Cultural Centre, Theatre Hall, Istanbul', 'Atatürk Kültür Merkezi, Tiyatro Salonu, İstanbul', 'Centre culturel Atatürk, salle de théâtre, Istanbul'),
    performers: 'Semplice Quartet',
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
    sources: ['https://sesinyolculugu.com/festivaller/16-2/3-konser/', 'https://www.cornucopia.net/events/semplice-quartet1'],
  },
];

// ---------- Ne duyulur? (kayıtlar) ----------
// Medya. event = ilgili etkinlik (yer, tarih ve icracılar oradan gelir; her kayıtta aynı düzen).
// section: 'recordings' (kayıtlar) ya da 'talks' (söyleşiler).
export const mediaSections: { id: 'recordings' | 'talks'; title: T }[] = [
  { id: 'recordings', title: { en: 'Recordings', tr: 'Kayıtlar', fr: 'Enregistrements' } },
  { id: 'talks', title: { en: 'Conversations', tr: 'Söyleşiler', fr: 'Entretiens' } },
];
export const recordings: { section: 'recordings' | 'talks'; title: string | T; event: string; type: 'youtube' | 'soundcloud'; url: string; id?: string; listen?: string }[] = [
  {
    section: 'recordings', title: 'Ab-ı Revan', event: 'bilgi-new-music-festival-16',
    type: 'soundcloud', url: 'https://soundcloud.com/meliksahalkan/ab-i-revan',
  },
  {
    section: 'recordings', title: 'Mahzen-ül Esrar', event: 'sesin-yolculugu-16',
    type: 'youtube', url: 'https://youtu.be/PCFpS51N-qs', id: 'PCFpS51N-qs',
    listen: 'https://soundcloud.com/meliksahalkan/mahzen-ul-esrar',
  },
  {
    section: 'talks', title: { en: 'Conversation at MÜZİKSEV', tr: 'MÜZİKSEV’de söyleşi', fr: 'Entretien au MÜZİKSEV' }, event: 'izmir-new-music-days-vii',
    type: 'youtube', url: 'https://www.youtube.com/watch?v=nRWSITAPrCY', id: 'nRWSITAPrCY',
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
      { img: 'poster-roap', alt: 'Ro-Ap poster' },
      { img: 'poster-iymg7', alt: 'İzmir New Music Days VII poster' },
      { img: 'cover-gilgamesh3', alt: 'Gilgamesh III — album cover' },
      { img: 'poster-nextgen7', alt: 'Next Generation Series VII' },
      { img: 'poster-bilgi16-main', alt: 'Bilgi New Music Festival 16 poster' },
      { img: 'poster-bilgi16', alt: 'Bilgi New Music Festival 16 programme' },
      { img: 'poster-tekbimutluan', alt: 'Tek Bi’ Mutlu An! poster' },
      { img: 'poster-gencgunler40', alt: '40th Genç Günler programme, Üsküdar Kerem Yılmazer Stage' },
      { img: 'poster-pau15', alt: 'Pamukkale University 15th Theatre Festival poster' },
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
  'bg-score': '32% 35%', 'bg-drawing': '55% 45%', 'bg-curtain': '47% 30%', 'bg-rehearse': '48% 25%', 'bg-rehearsal': '50% 55%', 'bg-eic': '62% 12%',
  'night-wide': '50% 30%', 'reading-wide': '81% 35%', railway: '53% 14%',
  night: '50% 32%', cello: '64% 50%', rehearsal: '50% 50%', curtaincall: '50% 25%',
  studio: '50% 35%', desk: '75% 40%', reading: '55% 35%', standing: '42% 25%',
  'church-concert': '50% 70%', 'mahzen-bow': '44% 55%', score: '38% 30%', 'sy17-concert': '55% 55%',
  'poster-tekbimutluan': '50% 40%', 'stage-set': '45% 40%', 'mahzen-rehearsal': '60% 30%',
};

// Geniş ekranda yüzün yerleşimi: fx = yüzün fotoğraftaki yatay konumu (0–1),
// at = ekrandaki hedef konum (0–1) ya da 'between' (menü ile isim arasının tam ortası)
export const anchors: Record<string, { fx: number; at: number | 'between'; fit?: 'height' }> = {
  'night-wide': { fx: 0.5, at: 'between' },
  'reading-wide': { fx: 0.953, at: 0.93 },
  standing: { fx: 0.42, at: 0.9, fit: 'height' },
  'bg-score': { fx: 0.32, at: 0.86, fit: 'height' },
  'bg-drawing': { fx: 0.55, at: 0.88, fit: 'height' },
  'bg-curtain': { fx: 0.58, at: 0.93, fit: 'height' },
  'bg-rehearse': { fx: 0.48, at: 0.9, fit: 'height' },
};

// Her sayfanın arka plan fotoğrafı
export const photos = {
  home: 'night-wide',
  approach: 'bg-drawing',
  about: 'reading-wide',
  works: 'bg-score',
  events: 'bg-rehearse',
  media: 'bg-curtain',
  gallery: 'bg-rehearsal',
  contact: 'bg-eic',
  portrait: 'studio',
};
