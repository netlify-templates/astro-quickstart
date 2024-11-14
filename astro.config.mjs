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
        var info = `${directoryPath}/${username}/info.json`
        if (fs.existsSync(info)) {
            info = fs.readFileSync(info, 'utf-8')
            if (info) {
                if (info.startsWith('{') && info.endsWith('}')) {
                    info = JSON.parse(info)
                    info.username = username
                    
                    info = JSON.stringify(info, null, 2)
                    info = `var data = ${info}\n\nexport default data`
                    fs.writeFileSync( `${directoryPath}/${username}/info.js`, info)
                    fs.unlinkSync( `${directoryPath}/${username}/info.json`)
                }
            }
        }

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
        portfolio = `var items = ${JSON.stringify(portfolio, null, 4)}\n\nexport default items`

        fs.writeFileSync( `${directoryPath}/${username}/portfolio.js`, portfolio)
    }
});

export default defineConfig({
    site: siteUrl,
    base: '/',
    trailingSlash: "ignore",
    integrations: [sitemap()],
});