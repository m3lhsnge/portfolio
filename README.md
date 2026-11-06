# Melih Aka — Portfolio

Melih Aka'nın seçili web, backend, mobil ve gömülü sistem projelerini sunan kişisel portföy sitesi. Astro ile tamamen statik üretilir; Nginx üzerinde ek bir Node.js süreci olmadan yayınlanır.

## Teknoloji

- Astro 6
- HTML, CSS ve TypeScript
- Statik site üretimi (SSG)
- Mobil öncelikli, erişilebilir arayüz
- Düşük donanımlı cihazlara uyarlanan canvas yıldız animasyonu

## Termux üzerinde geliştirme

Node.js 22 veya üzeri bir sürümle:

```bash
git clone https://github.com/m3lhsnge/portfolio.git
cd portfolio
npm ci
npm run dev -- --host 0.0.0.0
```

Aynı Wi-Fi ağındaki başka bir cihazdan Termux'un gösterdiği yerel IP ve `4321` portu kullanılarak önizleme açılabilir.

Üretim derlemesi:

```bash
npm run build
```

Yayınlanacak statik dosyalar `dist/` klasöründe oluşur.

## Nginx ile yayınlama

Site bir alan adının kökünde yayınlanacaksa varsayılan build yeterlidir. Termux Nginx'in belge kökü çoğunlukla `$PREFIX/share/nginx/html` dizinidir; kendi yapılandırmanızdaki `root` değerini esas alın.

Örnek Nginx sunucu bloğu:

```nginx
server {
    listen 8080;
    server_name _;
    root /data/data/com.termux/files/usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Gerçek alan adı kullanıldığında canonical ve sosyal paylaşım URL'lerinin doğru oluşması için build sırasında adres verilebilir:

```bash
PUBLIC_SITE_URL=https://ornek.com/ npm run build
```

Site bir alt dizinde yayınlanacaksa iki değişken birlikte kullanılmalıdır:

```bash
PUBLIC_SITE_URL=https://ornek.com/portfolio/ PUBLIC_BASE_PATH=/portfolio npm run build
```

Ardından `dist/` içeriğini Nginx belge köküne kopyalayın ve Nginx yapılandırmasını yeniden yükleyin.

## GitHub Pages

`.github/workflows/deploy.yml`, `main` dalına gönderilen değişiklikleri `/portfolio` taban yoluyla ayrıca GitHub Pages'e derler. Nginx build'i ise varsayılan olarak kök `/` yolunu kullanır; iki yayın hedefi birbirini bozmaz.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Statik üretim çıktısını oluşturur |
| `npm run preview` | Üretim çıktısını yerelde önizler |
