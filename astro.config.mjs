import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import fs from 'fs';

const siteUrl = 'https://graphics-for-good.com';

const directoryPath = path.join('./', 'members');
const members = fs.readdirSync(directoryPath);

members.forEach((username, i) => {
    var isDir = fs.lstatSync(`${directoryPath}/${username}`).isDirectory()
    if (isDir) {
        var portfolio = []
        if (fs.existsSync(`${directoryPath}/${username}/portfolio/`)) {
            if (fs.lstatSync(`${directoryPath}/${username}/portfolio/`).isDirectory()) {
                portfolio = fs.readdirSync(`${directoryPath}/${username}/portfolio/`)
            }
        }

        portfolio = {
            username: username, 
            items: portfolio
        }
        fs.writeFileSync( `${directoryPath}/${username}/portfolio.js`, JSON.stringify(portfolio, null, 4))
    }
});

export default defineConfig({
    site: siteUrl,
    base: '/',
    trailingSlash: "ignore",
    integrations: [sitemap()],
});

function items(str, num) {
    var out = ''
    for (let i = num; i > 0; i--) {
        out += out.split('')[out.split('').length-i]
    }
    return out
}