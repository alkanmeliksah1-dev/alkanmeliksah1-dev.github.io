# meliksahalkan.com

Melikşah Alkan'ın besteci sitesi. [Astro](https://astro.build) ile üretilir, GitHub Actions ile GitHub Pages'e yayınlanır. Site üç dillidir: İngilizce (`/`), Türkçe (`/tr/`), Fransızca (`/fr/`).

## Neyi nereden değiştiririm?

- `src/data.ts`: tüm metinler, biyografi, eserler, etkinlikler, menü isimleri, sosyal medya linkleri ve hangi sayfada hangi fotoğrafın kullanılacağı
- `src/styles/site.css`: renkler, fontlar ve tüm görünüm (en üstteki değişkenler)
- `public/images/`: fotoğraflar (her biri `.webp` + `.jpg`)
- `src/pages/[...lang]/`: sayfa düzenleri

`main` dalına her gönderimde site otomatik olarak yeniden yayınlanır. Ayrıca haftada bir kendiliğinden derlenir, böylece tarihi geçen etkinlikler "Geçmiş" altına düşer.

## Bilgisayarda çalıştırmak

```
npm install
npm run dev
```

## Yeni fotoğraf eklemek

Fotoğrafın yüksek çözünürlüklü JPG'sini bir klasöre koyup şu komutu çalıştır; tüm boyutları ve `src/images.json`'u üretir:

```
python3 scripts/responsive.py <kaynak-klasör> public/images src/images.json
```

## İletişim formu ve bülten

- **Mesaj formu** FormSubmit üzerinden info@meliksahalkan.com adresine gelir. İlk mesajdan sonra gelen "Activate Form" e-postasındaki düğmeye bir kez basmak yeterli.
- **Bülten formu** `src/data.ts` içindeki `site.forms.newsletter` adreslerine (Brevo, dil başına bir form) gönderir. Adresler boşken abonelik talepleri e-postayla info@ adresine gelir.
- Kurulum adımları ve otomatik e-posta metinleri: "Bülten ve iletişim formu: kurulum ve otomatik e-postalar" dokümanı.
