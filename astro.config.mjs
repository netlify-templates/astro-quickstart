import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://graphics-for-good.com',
    trailingSlash: "ignore",
    integrations: [sitemap()],
});