import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const hidden = ['/reviews', '/work/glasmore-dental', '/404'];

export default defineConfig({
  site: 'https://christophernoblett.ie',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({ filter: (page) => !hidden.some((p) => page.includes(p)) }),
  ],
});
