// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Nginx kök dizininde varsayılan olarak `/` kullanılır. GitHub Pages build'i
  // workflow içindeki ortam değişkenleriyle `/portfolio` yolunu korur.
  site: process.env.PUBLIC_SITE_URL || 'https://m3lhsnge.github.io',
  base: process.env.PUBLIC_BASE_PATH || '/',
});
