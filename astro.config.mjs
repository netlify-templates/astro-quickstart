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
                var items = fs.readdirSync(`${directoryPath}/${username}/portfolio/`)
                items.forEach(i => {
                    portfolio.push({
                        file: `${username}-${i}`
                    })
                    fs.copySync(`${directoryPath}/${username}/portfolio/${i}`, `${directoryPath}/${username}/renamedPortfolio/${username}-${i}`)
                })
            }
        }


        var info = `${directoryPath}/${username}/info.json`
        if (fs.existsSync(info)) {
            info = fs.readFileSync(info, 'utf-8')
            if (info) {
                if (info.startsWith('{') && info.endsWith('}')) {
                    info = JSON.parse(info)
                    info.username = username
                    info.portfolio = portfolio
                    
                    info = JSON.stringify(info, null, 2)
                    info = `var data = ${info}\n\nexport default data`
                    fs.writeFileSync( `${directoryPath}/${username}/info.js`, info)
                }
            }
        }
    }
});

export default defineConfig({
    site: siteUrl,
    base: '/',
    trailingSlash: "ignore",
    integrations: [sitemap()],
});