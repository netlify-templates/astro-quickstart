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
        var info = `${directoryPath}/${username}/info.js`
        if (fs.existsSync(info)) {
            info = fs.readFileSync(info, 'utf-8')
            if (info) {
                if (info.startsWith('var data = ')) info = info.slice('var data = '.length)
                // while (info.startsWith(`\n`)) info = info.slice('\n'.length)
                if (info.endsWith(`export default data`)) info = info.slice(0, -1*'export default data'.length)
                while (info.endsWith(`\n`)) info = info.slice(0, -2)
                if (info.startsWith('{') && info.endsWith('}')) {
                    console.log(`${i}: ${username}`)
                    info = JSON.parse(info)
                    info.username = username
                    
                    info = JSON.stringify(info, null, 2)
                    info = `var data = ${info}\n\nexport default data`
                    fs.writeFileSync( `${directoryPath}/${username}/info.js`, info)
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

function items(str, num) {
    var out = ''
    for (let i = num; i > 0; i--) {
        out += out.split('')[out.split('').length-i]
    }
    return out
}