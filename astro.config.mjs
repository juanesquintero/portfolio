// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update this to the production domain once deployed (used for canonical URLs,
// Open Graph tags, sitemap and hreflang alternates).
const SITE = 'https://juanquintero.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
