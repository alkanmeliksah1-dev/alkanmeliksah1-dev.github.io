import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://meliksahalkan.com',
  trailingSlash: 'always',
  build: { assets: 'assets' },
});
