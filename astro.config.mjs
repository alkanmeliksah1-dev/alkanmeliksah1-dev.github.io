import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://meliksahalkan.com',
  trailingSlash: 'always',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { assets: 'assets', inlineStylesheets: 'always' },
});
