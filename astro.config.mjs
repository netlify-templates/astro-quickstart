import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import fs from 'fs';

const siteUrl = 'https://graphics-for-good.com';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const directoryPath = path.join('./', 'members');
const files = fs.readdirSync(directoryPath);

const memberUrls = []
files.forEach((file) => {
    var isDir = fs.lstatSync(`${directoryPath}/${file}`).isDirectory()
    if (isDir) {
        const fileName = file.split('.')[0];
        memberUrls.push(`${siteUrl}/members/${fileName}`);
    }
});

export default defineConfig({
    site: siteUrl,
    trailingSlash: "ignore",
    integrations: [sitemap({
        customPages: [].concat(memberUrls),
        priority: 0.5,
        changefreq: 'monthly'
    })],
});