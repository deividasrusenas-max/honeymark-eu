// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://honeymark.eu',
  integrations: [sitemap()],
  i18n: {
    locales: ['lt', 'lv', 'et', 'en'],
    defaultLocale: 'lt',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
