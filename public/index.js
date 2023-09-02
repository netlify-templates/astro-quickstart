var globalTemoutTiming = 100
var fs = require('fs')
var express = require('express')
var app = express()
var dnsWorking = false
var forcedHttp = false
var forcedHttps = true
var components = [
  {
    name: 'metaTags', 
  }, 
  {
    name: 'nav', 
    attributes: [
      'bBorder'
    ]
  }, 
  {
    name: 'globalScripts', 
  }, 
  {
    name: 'infoBox', 
  }, 
]
var componentHTML = {
  metaTags: '', 
  nav: '', 
  globalScripts: '', 
}

components.forEach(function(c, i) {
  let cName = c['name']
  fs.readFile(`${__dirname}/components/${cName}.html`, 'utf8', function(error, pgResp) {
    if (!!error === false) {
      componentHTML[cName] = pgResp
    }
  })
})

function getHTML(file) {
  var fHTML = ''
  while (file.includes('///')) {
    file = file.replace('///', '/')
  }
  file = `${__dirname}/${file}`
  fs.readFile(file, 'utf8', function(error, pgResp) {
    if (!!error === false) {
      components.forEach(function(c, i) {
        let cName = c['name']
        let cAttributes = c['attributes']
        if (!!cAttributes) {
          let occurences = pgResp.split(`<${cName}`)
          occurences.shift()
          occurences.forEach(function(o, i2) {
            o = o.split('>')[0]
            cAttributes.forEach(function(a, i3) {
              if (o.includes(a)) {
                if (pgResp.includes(`<${cName} ${a} />`) || pgResp.includes(`<${cName} ${a}/>`)) {
                  let theHTML = componentHTML[cName].replace(`<${cName}>`, `<${cName} ${a}>`)
                  pgResp = pgResp.replace(`<${cName} ${a} />`, theHTML)
                }
              }
              else {
                if (pgResp.includes(`<${cName} />`) || pgResp.includes(`<${cName}/>`)) {
                  pgResp = pgResp.replace(`<${cName} />`, componentHTML[cName])
                }
              }
            })
          })
        }
        else {
          if (pgResp.includes(`<${cName} />`) || pgResp.includes(`<${cName}/>`)) {
            pgResp = pgResp.replace(`<${cName} />`, componentHTML[cName])
          }
        }
      })
      fileContentHTML = pgResp
      return pgResp
    }
  })
}

const logname = __dirname + "/logs/" + Date().split(" GMT")[0] + ".log"
function Logger(data) {
  fs.appendFile(logname, '@<' + Date.now() + '>:[' + data + ']\n', function(err) {
    if (err) throw err;
    console.log(data);
  });
}

let notFounds = [
  'components*',
  'important*',
  'logs*',
  'portal-login.js',
]

let redirectMode = 'redirect'//'send'
let REDIRECTS = [
  {
    origin: '/meta_image',
    destination: '/assets/Logo.svg',
  },
  {
    origin: '/Sign-Up',
    destination: 'https://forms.gle/45U85diuWCgg5kJb9',
  },
  {
    origin: '/status',
    destination: 'https://www.whatsmydns.net/#CNAME/www.graphics-for-good.com',
  },
  {
    origin: '/favicon.ico',
    destination: '/favicon.png',
  },
  {
    origin: '/sitemap_index.xml',
    destination: '/sitemap.xml',
  },
]

function getNewUrl(protocol, host, path) {
  if (host.endsWith('.rockgamerak.repl.co')) {
    if (forcedHttps) {
      if (protocol.includes('https') === false) {
        protocol = protocol.replace('http', 'https')
      }
    }
    else if (forcedHttp) {
      protocol = protocol.replace('https', 'http')
    }
    if (host.endsWith('.rockgamerak.repl.co')) {
      host = `${host.split('.app')[0]}.com`
    }
  }
  return `${protocol}://${host}${path}`
}

app.get('/', function(req, res) {
  if (req.get('host').endsWith('.rockgamerak.repl.co') && dnsWorking === true) {
    res.redirect(getNewUrl(req.protocol, req.get('host'), req.originalUrl))
  }
  else {
    getHTML(`index.html`)
    setTimeout(function() {
      res.send(fileContentHTML)
      fileContentHTML = ''
    }, globalTemoutTiming)
  }
})

notFounds.forEach(path => {
  app.get(path, function(req, res) {
    if (req.get('host').endsWith('.rockgamerak.repl.co') && dnsWorking === true) {
      res.redirect(getNewUrl(req.protocol, req.get('host'), req.originalUrl))
    }
    else {
      getHTML(`404.html`)
      setTimeout(function() {
        res.send(fileContentHTML)
        fileContentHTML = ''
      }, globalTemoutTiming)
    }
  })
})

REDIRECTS.forEach(redirect => {
  let origin = redirect['origin']
  let destination = redirect['destination']
  origin = `/${origin}`.replace('//', '/')
  if (destination.includes('://') === false) {
    destination = `/${destination}`.replace('//', '/')
  }
  var fExtIsHTML = false
  if (destination.split('/')[destination.split('/').length - 1].includes('.')) {
    if (destination.split('/')[destination.split('/').length - 1].split('.')[1] === 'html') {
      fExtIsHTML = true
    }
  }
  else {
    fExtIsHTML = true
  }

  app.get(redirect['origin'], function(req, res) {
    if (req.get('host').endsWith('.rockgamerak.repl.co') && dnsWorking === true) {
      res.redirect(getNewUrl(req.protocol, req.get('host'), req.originalUrl))
    }
    else {
      if (
        destination.includes('://') === false &&
        redirectMode.toLowerCase() === 'send'
      ) {
        if (fExtIsHTML) {
          getHTML(`${destination}`)
          setTimeout(function() {
            res.send(fileContentHTML)
            fileContentHTML = ''
          }, globalTemoutTiming)
        }
        else {
          res.sendFile(`${__dirname}/${destination}`)
        }
      }
      else {
        res.redirect(redirect['destination'])
      }
    }
  })
})

app.get('/members/*', function(req, res) {
  if (req.get('host').endsWith('.rockgamerak.repl.co') && dnsWorking === true) {
    res.redirect(getNewUrl(req.protocol, req.get('host'), req.originalUrl))
  }
  else {
    getHTML(`/members.html`)
    setTimeout(function() {
      res.send(fileContentHTML)
      fileContentHTML = ''
    }, globalTemoutTiming)
  }
})

app.post('/portal', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

app.get('*', function(req, res) {
  if (req.get('host').endsWith('.rockgamerak.repl.co') && dnsWorking === true) {
    res.redirect(getNewUrl(req.protocol, req.get('host'), req.originalUrl))
  }
  else {
    let page = req.originalUrl.split('?')[0]
    var params = req.query
    let redirect = false
    var status = false
    let hasFile = true
    let newPage = page.substring(0, page.split('').length - 1).split('/')[page.substring(0, page.split('').length - 1).split('/').length - 1].includes('.')
    if (page.endsWith('/')) {
      page = page.substring(0, page.split('').length - 1)
      if (newPage) {
        redirect = 'error'
      }
      else if (newPage === false) {
        redirect = true
      }
    }
    let file = '/index.html'
    var fExtIsHTML = false
    if (page.split('/')[page.split('/').length - 1].includes('.')) {
      if (page.split('/')[page.split('/').length - 1].split('.')[1] === 'html') {
        fExtIsHTML = true
      }
      file = `/${page}`
    }
    else {
      fExtIsHTML = true
      file = `/${page}.html`
    }
    if (!!fs.existsSync(`${__dirname}/${file}`) === false || params.error === '' || (req.originalUrl.startsWith('/members') && !!params.m)) {
      file = '/404.html'
      hasFile = false
      status = 404
    }
    if ((redirect && redirect !== 'error') && hasFile) {
      res.redirect(page)
    }
    else if (!!redirect && (hasFile === false || redirect === 'error')) {
      res.redirect(`${page}?error&referer=${req.originalUrl}`)
    }
    else {
      if (!!status) {
        if (status === 404 && page !== '/favicon.ico') {
          console.error(`A user navigated to "${req.originalUrl}" and the file "${file}" was displayed to the user.`)
          Logger(`A user navigated to "${req.originalUrl}" and the file "${file}" was displayed to the user.`)
        }
        if (fExtIsHTML) {
          getHTML(`${file}`)
          setTimeout(function() {
            res.status(status).send(fileContentHTML)
            fileContentHTML = ''
          }, globalTemoutTiming)
        }
        else {
          res.status(status).sendFile(`${__dirname}/${file}`)
        }
      }
      else {
        if (fExtIsHTML) {
          getHTML(`${file}`)
          setTimeout(function() {
            res.send(fileContentHTML)
            fileContentHTML = ''
          }, globalTemoutTiming)
        }
        else {
          res.sendFile(`${__dirname}/${file}`)
        }
      }
    }
  }
});

app.listen(3000)