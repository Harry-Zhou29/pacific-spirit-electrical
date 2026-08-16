import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pacificspiritelectrical.ca',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
