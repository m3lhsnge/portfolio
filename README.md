# Melih - Kişisel Portfolyo Web Sitesi

Bu proje, kişisel portfolyo ve profesyonel web sitesi olarak geliştirilmiştir. Hızlı ve modern web standartlarına uygun olması için **Astro** framework kullanılarak inşa edilmiştir.

## 🚀 Kullanılan Teknolojiler

*   **[Astro](https://astro.build/) (v6.x):** Projenin temel çatısı. Minimum JavaScript gönderimi (Zero-JS arsitektürü) ile yüksek performanslı statik site üretimi (SSG) için kullanılmıştır.
*   **HTML / CSS / JavaScript:** Standart web teknolojileri, Astro bileşenleri (.astro) içerisinde yapılandırılmıştır.
*   **Node.js (>=22.12.0):** Geliştirme ortamı ve derleme (build) işlemleri için gereklidir.
*   **GitHub Actions:** Sürekli Entegrasyon ve Dağıtım (CI/CD) süreçleri için kodlanmıştır. Projenin ana dallarına (`main`) yapılan her gönderimde (push) site otomatik derlenir.
*   **GitHub Pages:** Derlenen statik sitenin ücretsiz ve kesintisiz olarak yayınlanmasını sağlar (Hosting). 

## ⚙️ Mimari ve Yöntem

*   **Statik Site Üretimi (SSG):** Proje build edildiğinde, sunucu tarafında tüm sayfalar saf HTML, CSS ve gerekli olan yere JS dosyalarına dönüştürülür. Bu sayede sayfa yüklenme süreleri milisaniyeler seviyesine iner ve SEO puanı maksimuma çıkar.
*   **Otomatik Deployment:** `.github/workflows/deploy.yml` içindeki yapa sayesinde, kod GitHub'a gönderildiği an `withastro/action` tetiklenir, site derlenir ve doğrudan GitHub Pages ortamına aktarılır.

## 🛠️ Kurulum (Geliştiriciler İçin)

Projeyi kendi bilgisayarınızda çalıştırmak isterseniz:

1. Gereksinimler: Bilgisayarınızda **Node.js 22** veya üzeri bir sürüm kurulu olmalıdır.
2. Bağımlılıkları Yükleyin:
   ```bash
   npm install
   ```
3. Geliştirici Sunucusunu Başlatın:
   ```bash
   npm run dev
   ```
   Bu komut ile `http://localhost:4321` adresinden siteyi anlık test edebilirsiniz.

4. Üretime Hazırlama (Build):
   ```bash
   npm run build
   ```
