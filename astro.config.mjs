import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import fs from 'fs';

const siteUrl = 'https://graphics-for-good.com';

const directoryPath = path.join('./', 'members');
const files = fs.readdirSync(directoryPath);

const memberUrls = []
files.forEach((file, i) => {
    var isDir = fs.lstatSync(`${directoryPath}/${file}`).isDirectory()
    if (isDir) {
        if (!file.startsWith('_')) {
            var info = `${directoryPath}/${file}/info.js`
            if (fs.existsSync(info)) {
                info = fs.readFileSync(info, 'utf-8')
                if (info) {
                    if (info.startsWith('var data = ')) info = info.slice('var data = '.length)
                    if (info.endsWith(`\n\nexport default data`)) info = info.slice(0, -1*'\n\nexport default data'.length)
                    if  (info.startsWith('{') && info.endsWith('}')) {
                        info = JSON.parse(info)
                        if (i <= 1) console.log(info)
                        var status = info.status
                        memberUrls.push(`${siteUrl}/members/${file}`);
                    }
                }
            }
        }
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