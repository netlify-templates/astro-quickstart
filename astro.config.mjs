import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
});
