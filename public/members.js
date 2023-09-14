var setMETA = true

var wWorks = []
if (!!dTitle == false) {
  var dTitle = document.title
}

var imageSize
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var urlPath = location.pathname
if (urlPath.endsWith('/')) {
  urlPath = urlPath.substring(0, urlPath.split('').length - 1)
}

var user = ''
if (urlPath.split('/').length >= 3) {
  user = urlPath.split('/')[2]
}
else user = urlParams.get('m')

var membersRedirect = {
  sam: 'samantha'
}

var MEMBERS = [
  'shikha', 
  'sayuri', 
  'adarsh', 
  'isabelle', 
  'hanlin', 
  'rien', 
  'samantha', 
  'chloe', 
]

var MEMBER_DATA = {
  shikha: {
    name: 'Shikha Iyer <span id="tag">(Club President)</span>',
    pronunciation: false, //'Shi-Ka (short i)',
    email: {
      g4g: true,
      dtech: {
        year: 25,
      },
    }, 
    pfp: {
      g4g: {
        sizes: [
          {
            ext: 'png',
            name: 'large'
          }, 
        ],
      },
      google: 'AD5-WCmPo7cOTdQEFaMGPX2MmQ9ThsEGHVVhebGKnqnoww',
    }, 
    location: {
      city: 'Bay Area', 
      state: '', 
    }, 
    bio: {
      w1: 'the', 
    },
    portfolio: [
      {
        img: {
          element: 'img',
          path: 'Elarra.jpg',
        },
        capt: `Elarra made by me.`,
        desc: `Made by: <a href="/members/shikha">Shikha</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Fairy.jpg',
        },
        capt: `Fairy made by me.`,
        desc: `Made by: <a href="/members/shikha">Shikha</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'c3.jpg',
        },
        capt: `A charecter made by me.`,
        desc: `Made by: <a href="/members/shikha">Shikha</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Rapunzel.jpg',
        },
        capt: `Rapunzel made by me.`,
        desc: `Made by: <a href="/members/shikha">Shikha</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Did-you-know.svg',
        },
        capt: `A poster made by <a href="/members/shikha">Shikha</a> for <a href="https://instagram.com/4goodgraphics">Our Instagram</a> to educate you about climate change.`,
        desc: `Made by: <a href="/members/shikha">Shikha</a>`,
      },
      {
        img: {
          element: 'iframe',
          path: "Women's-History-Month!.pdf",
        },
        capt: `A poster made by <a href="/members/shikha">Shikha</a> for <a href="https://instagram.com/4goodgraphics">Our Instagram</a> to talk to you about womans rights.`,
        desc: `Made by: <a href="/members/shikha">Shikha</a>`,
      },
    ],
  }, 
  sayuri: {
    name: 'Sayuri Rodrigo <span id="tag">(Club Vice-President)</span>',
    pronunciation: false, //'Sai-oo-ri',
    email: {
      g4g: false,
      dtech: {
        year: 25,
      },
    }, 
    pfp: {
      g4g: {
        sizes: [
          {
            ext: 'png',
            name: 'full', 
          }, 
        ],
      },
    },
    location: {
      city: 'Bay Area', 
      state: '', 
    }, 
    bio: {
      w1: 'the',
    }, 
  }, 
  adarsh: {
    name: 'Adarsh Kumar <span id="tag">(Website Manager/Designer)</span>',
    pronunciation: false, //'Uh-da-r-sh',
    email: {
      g4g: true,
      dtech: {
        year: 25,
      },
    }, 
    pfp: {
      g4g: {
        sizes: [
          {
            ext: 'png',
            name: 'full', 
          }, 
        ],
      },
      google: 'AEdFTp7icI4wRK0FPsc17CnhxoQslGk8Pj8cUQo8a6S80w',
    },
    location: {
      city: 'Bay Area', 
      state: '', 
    }, 
    bio: {
      w1: 'the',
      w2: 'for',
    }, 
    socials: [
      {
        handle: 'RockGamerAK',
        platforms: [
          'Website',
        ],
      },
      {
        handle: 'RockGamerHub',
        platforms: [
          'YouTube',
        ],
      },
      {
        handle: 'RockGamerAK',
        platforms: [
          'Instagram',
          'Threads',
          'Twitter',
          'TikTok',
          'Twitch',
          'Discord',
        ],
        discord: {
          id: '768273827549282305',
        },
      },
      {
        handle: 'akumarrws',
        platforms: [
          'Instagram',
        ],
      },
      {
        handle: 'akumar.transit',
        platforms: [
          'Instagram',
        ],
      },
      {
        handle: 'akumar.photos',
        platforms: [
          'Instagram',
        ],
      },
      {
        handle: 'akumarrws',
        platforms: [
          'Threads',
          'Twitter',
          'YouTube',
          'TikTok',
          'Discord',
        ],
        discord: {
          id: '1097241365198409728',
        },
      },
    ],
    portfolio: [
      {
        img: {
          element: 'img',
          path: 'IMG_4052.png'
        },
        capt: '<a href="https://parks.RockGamerAK.com">A website</a> that I made promoting saving parks!',
        desc: `Made by: <a href="/members/adarsh">Adarsh</a>`,
      },
    ],
  }, 
  isabelle: {
    name: 'Isabelle Anderson <span id="tag">(Website Designer)</span>',
    pronunciation: false, 
    email: {
      g4g: false,
      dtech: {
        year: 25,
      },
    },
    pfp: {
      google: 'AD5-WCnPy-2RCIBm3xW24x52NHYd1QawRjgezLuj1Pu2',
    },
    location: {
      city: 'Bay Area', 
      state: '', 
    }, 
    bio: {
      w1: false, 
      w2: 'for',
    }, 
    portfolio: [
      {
        img: {
          element: 'img',
          path: "DON'T-EAT-FROGS.svg",
        },
        capt: `A poster that I made demanding that you not eat frogs.`,
        desc: `Made by: <a href="/members/isabelle">Isabelle</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Untitled-(800-x-1000-px).svg',
        },
        capt: `A scenescape of a frog chilling out that I made.`,
        desc: `Made by: <a href="/members/isabelle">Isabelle</a>`,
      },
    ],
  }, 
  hanlin: {
    name: 'Hanlin Su',
    pronunciation: false, //'Han-lin', 
    email: {
      g4g: true,
      dtech: {
        year: 25,
      },
    }, 
    pfp: {
      g4g: {
        sizes: [
          {
            ext: 'png',
            name: 'full', 
          }, 
           {
             ext: 'svg',
             name: 'full', 
           }, 
        ],
      },
      google: 'AD5-WCnt_DoEt5klDUvrrysH-A3qw-DjgTdhqj5iPoUj',
    },
    location: {
      city: 'Bay Area', 
      state: '', 
    }, 
    bio: {
      custom: `Hanlin{pronouciation} also known to his online community as <a href="https://roblox.fandom.com/wiki/Community:JavaCreates">JavaCreates</a> (previously I_lovejava) is an animator and digital art creator as well as ${defaultBio().replace(`Hanlin{pronouciation} is `, '')} You can find his work on his <a href="https://youtube.com/JavaCreates">YouTube Channel</a>!`, 
    },
    socials: [
      {
        handle: 'JavaCreates',
        platforms: [
          'Website',
          'YouTube',
          'Twitter',
          'Instagram',
          'TikTok',
          // 'Discord', 
        ],
        // discord: {
        //   id: '924832680607092777', 
        // }
      },
      {
        handle: 'HedgeHogHanlin',
        platforms: [
          'Instagram',
        ],
      },
      // {
      //   handle: 'hedgehog888', 
      //   platforms: [
      //     'Discord', 
      //   ], 
      //   discord: {
      //     id: '924832680607092777',
      //   }, 
      // }, 
    ],
    portfolio: [
//      {
//        img: {
//          element: 'img',
//          path: 'G4G-Ad.svg',
//        },
//        capt: 'An Ad for <a href="/">Graphics for Good</a> made by <a href="/members/hanlin">Hanlin</a>!',
//        desc: 'Made by: <a href="/members/hanlin">Hanlin</a>',
//      },
    ],
  }, 
  rien: {
    name: 'Rien (Rick) Gupta',
    pronunciation: false, //'The same as Ryan or just Rick',
    email: {
      g4g: false,
      dtech: {
        year: 25,
      },
    }, 
    pfp: {
      g4g: {
        sizes: [
          {
            ext: 'png',
            name: 'full', 
          }, 
          // {
          //   ext: 'svg',
          //   name: 'full', 
          // }, 
        ],
      },
      google: 'AD5-WCk60XAYpME73oo8YLGZipFe9UtecC1erzLWnLrfCA',
    },
    location: {
      city: 'Bay Area', 
      state: '', 
    }, 
    socials: [
      {
        handle: 'the-only-rien-gupta',
        platforms: [
          'Linkedin'
        ]
      },
    ],
  }, 
  samantha: {
    name: 'Samantha (Sam) Wolff',
    pronunciation: false,
    email: {
      g4g: false,
      dtech: {
        year: 25,
      },
    },
    pfp: {
      google: 'AD5-WCnnmJnIpvLyc4r-7-dAAE4rSc8HOVtSXsuDb_xv',
    },
    location: {
      city: 'Bay Area', 
      state: '', 
    }, 
    portfolio: [
      {
        img: {
          element: 'img',
          path: 'Help-save-the-oceans_1.svg',
        },
        capt: `One out of four posters made by me to promote saving the oceans.`,
        desc: `Made by: <a href="/members/sam">Sam</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Help-save-the-oceans_2.svg',
        },
        capt: `Two out of four posters made by me to promote saving the oceans.`,
        desc: `Made by: <a href="/members/sam">Sam</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Help-save-the-oceans_3.svg',
        },
        capt: `Three out of four posters made by me to promote saving the oceans.`,
        desc: `Made by: <a href="/members/sam">Sam</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Help-save-the-oceans_4.svg',
        },
        capt: `Four out of four posters made by me to promote saving the oceans.`,
        desc: `Made by: <a href="/members/sam">Sam</a>`,
      },
    ],
  }, 
  chloe: {
    name: 'Chloe Mercado',
    pronunciation: false,
    email: {
      g4g: false,
      dtech: {
        year: 24,
      },
    },
    pfp: {
      google: 'ACB-R5R3uvqh3F5n8t4297Rm1M57q55OBM2PCQUxJ4qD065ycwSkULmW4CdIb4m5E-qD',
    },
    location: {
      city: 'Bay Area', 
      state: '', 
    }, 
  }, 
  juhi: {
    portfolio: [
      {
        img: {
          element: 'img',
          path: 'Little-Wishes-Hospital-Gown-Feb-2023_4.png',
        },
        capt: `An inspirational hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>`,
        desc: `Made by: <a href="/members/juhi">Juhi</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Little-Wishes-Hospital-Gown-Feb-2023_5.png',
        },
        capt: `An uplifting hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>`,
        desc: `Made by: <a href="/members/juhi">Juhi</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Little-Wishes-Hospital-Gown-Feb-2023_6.png',
        },
        capt: `A facinating hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>`,
        desc: `Made by: <a href="/members/juhi">Juhi</a>`,
      },
      {
        img: {
          element: 'img',
          path: 'Little-Wishes-Hospital-Gown-Feb-2023_7.png',
        },
        capt: `An empowering hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>`,
        desc: `Made by: <a href="/members/juhi">Juhi</a>`,
      },
    ],
  },  
}

var leftMembers = {
  juhi: {date: '04/07/2023'}, 
  yajaira: {date: 'a date in the month of march'},
  lorelai: {date: '04/25/2023 and graduated'},
  sam: {date: 'the start of 2023'}, 
  ryan: {date: 'an unknown date in 2022'},
  mychelle: {date: 'an unknown date in 2022'},
  olivia: {date: 'an unknown date in 2022'},
  michael: {date: 'an unknown date in 2022'},
  vivi: {date: 'an unknown date in 2022'},
  elliot: {date: 'an unknown date'},
  gwen: {date: 'an unknown date'},
}

var mname = ''
var oUName = ''
if (!!leftMembers[user]) {
  mname = `${user.split('')[0].toUpperCase()}${user.substring(1)}`
  oUName = `${user.split('')[0].toUpperCase()}${user.substring(1)}`
}
else if (!!MEMBER_DATA[user]) {
  mname = MEMBER_DATA[user]['name']
  oUName = MEMBER_DATA[user]['name']
}

function defaultBio(w1, w2, role) {
  if (!!w1 === false) {
    w1 = 'a'
  }
  if (!!w2 === false) {
    w2 = 'of'
  }
  if (!!user) {
    if (!!mname === false) {
      mname = ''
    }
    var uName = mname
    if (uName.includes(' <span id="tag">') || !!role) {
      if (!!role === false) {
        role = uName.split(' <span id="tag">(')[1].split(')</span>')[0].replace(',', '')
      }
      return `${uName.split(' <span id="tag">')[0].split(' ')[0]}{pronouciation} is ${w1} ${role} ${w2} the Graphics for Good club at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City.`
    }
    else {
      if (uName.includes('(') && uName.includes(')')) {
        uName = uName.split('(')[1].split(')')[0]
      }
      role = 'Member'
      return `${uName.split(' ')[0]}{pronouciation} is ${w1} ${role} ${w2} the Graphics for Good club at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City.`
    }
  }
  else {
    return ''
  }
}

var pfpI = 0
if (!!membersRedirect[user] === false && !!leftMembers[user] === false) {
  if (!!user && !!MEMBER_DATA[user]['name']) {
    if (!!MEMBER_DATA[user]['pfp']['g4g']) {
      MEMBER_DATA[user]['pfp']['g4g']['size'] = MEMBER_DATA[user]['pfp']['g4g']['sizes'][0]//Math.floor(Math.random() * MEMBER_DATA[user]['pfp']['g4g']['sizes'].length)]
    }
  }
}

var protocall = 'mailto:'

function addMembers() {
  document.querySelector('header').style.display = 'none'
  var element = document.getElementById('menu')
  MEMBERS.forEach(member => {
    var a = document.createElement('a')
    element.appendChild(a)
    a.href = `/members/${member}`

    var li = document.createElement('li')
    a.appendChild(li)
    uname = MEMBER_DATA[member]['name']
    li.innerHTML = uname
  })
  document.querySelector('header').style.display = ''
}

function setMember() {
  var pfp = MEMBER_DATA[user]['pfp']
  var hasPfp = !!pfp['g4g']
  var size = ''
  if (hasPfp === true) {
    ext = pfp['g4g']['size']['ext']
    size = pfp['g4g']['size']['name'].replace('full', '')
    if (!!size === false || size === 'full') {
      size = ''
    }
    pfp = `/assets/members/${user}/pfps/pfp-${size}.${ext}`.replace('-.', '.')
  }
  else {
    pfp = `https://lh3.googleusercontent.com/a-/${pfp['google']}=s128`
  }
  var emailObj = MEMBER_DATA[user]['email']
  var username = ''
  var domain = ''
  var email = ''
  if (!!emailObj['g4g']) {
    if (
      mname.includes('<span id="tag">(') &&
      mname.includes(')</span>')
    ) {
      mname = mname.split('<span id="tag">(')[0]
      username = user
    }
    else {
      username = user
    }
    domain = 'graphics-for-good.com'
  }
  else {
    if (
      mname.includes('<span id="tag">(') &&
      mname.includes(')</span>')
    ) {
      mname = mname.split('<span id="tag">(')[0]
      if (mname.split(' ').length <= 3) {
        username = `${mname.split('')[0]}${mname.split(' ')[1]}${MEMBER_DATA[user]['email']['dtech']['year']}`.toLowerCase()
      }
    }
    else {
      username = `${mname.split('')[0]}${mname.split(' ')[mname.split(' ').length - 1]}${MEMBER_DATA[user]['email']['dtech']['year']}`.toLowerCase()
    }
    domain = 'dtechhs.org'
  }
  email = `${username}@${domain}`
  
  var userLocation = MEMBER_DATA[user]['location']
  
  var sElement = document.querySelector('#socials')
  var socials = MEMBER_DATA[user]['socials']
  if (!!socials === false) {
    socials = []
  }
  socials.forEach(social => {
    var handle = social['handle']
    var platforms = social['platforms']
    var icons = {}
    var domains = {
      Threads: 'threads.net',
      Twitter: 'x.com', 
      Twitch: 'twitch.tv',
      Linkedin: 'linkedin.com/in',
    }
    var ats = {
      Threads: '@', 
      TikTok: '@',
      Twitter: '@',
      YouTube: '@',
    }
    platforms.forEach(p => {
      var icon = `/assets/icons/${p.toLowerCase()}.${String(!!icons[p]).replace('false', 'svg').replace('true', icons[p])}`
      var iTitle = ''
      var url = ''
      var who = ''
      var useWho = false
      wWorks.forEach(w => {
        if (
          handle.toLowerCase()
            .includes(w.toLowerCase()) ||
          w.toLowerCase()
            .includes(handle.toLowerCase())
        ) {
          who = `${mname.split(' ')[0]}'s`.replace("s's", "s'")
          if (p === 'Discord') {
            useWho = true
          }
        }
      })
      if (
        handle.toLowerCase()
          .includes(mname.split(' ')[0].toLowerCase())
      ) {
        who = `${mname.split(' ')[0]}'s`.replace("s's", "s'")
        wWorks.push(handle)
      }
      else if (useWho === false) {
        who = `${String(!!ats[p]).replace('false', '').replace('true', ats[p])}${handle} on`
      }

      if (p === 'Website') {
        if (!!social['website']) {
          url = social['website']
        }
        else {
          url = `https://${handle}.com`
        }
        who = mname.split(' ')[0]
        iTitle = `${who}'s Website`.replace("s's", "s'")
      }
      else {
        url = `https://${String(!!domains[p]).replace('false', `${p}.com`).replace('true', domains[p])}/${String(!!ats[p]).replace('false', '').replace('true', ats[p])}${handle}`
        iTitle = `${who} ${p.replace('Twitter', 'X')}`
      }

      var li = sElement.appendChild(document.createElement('li'))
      var a = li.appendChild(document.createElement('a'))
      // a.href = url
      a.setAttribute('data-href', url)
      a.target = '_blank'
      a.style.backgroundImage = `url('${icon}')`
      a.setAttribute('title', iTitle)
      a.addEventListener('click', function(e) {
        let hRef = e.target.getAttribute('data-href')
        hRef = `/scraper?url=${hRef}`
        window.open(hRef)
      })
      sElement.style.display = ''
    })
  })

  var pronc = MEMBER_DATA[user]['pronunciation']
  if (pronc !== false) {
    pronc = ` (Pronounced: ${pronc}),`
  }
  else {
    pronc = ''
  }
  var bio = MEMBER_DATA[user]['bio']
  var role = 'Member'
  if (oUName.includes(' <span id="tag">(') && oUName.includes(')</span>')) {
    role = oUName.split(' <span id="tag">(')[1].split(')</span>')[0].replace(',', '')
  }
  if (!!bio) {
    if (!!bio['w1'] && !!bio['w2']) bio = defaultBio(bio['w1'], bio['w2'], role)
    else if (!!bio['w1']) bio = defaultBio(bio['w1'], false, role)
    else if (!!bio['custom']) bio = bio['custom']
    else bio = defaultBio(false, false, role)
  }
  else bio = defaultBio(false, false, role)
  //  bio = String(Boolean(bio)).replace('true', bio)
  while (bio.includes('<a href="')) {
    bio = bio.replace('<a href="', '<a target="_blank" href="')
  }
  bio = bio.replace('{pronouciation}', pronc)

  if (user === 'mission') {
    location.href = '/mission'
  }
  else {
    var nTitle = `${mname} | ${document.title.split(' | ')[1]}`
    document.querySelector('[tElement]').innerHTML = bio.replace('{pronouciation}', '')
    var nBio = document.querySelector('[tElement]').innerText
    document.title = nTitle
    if (!!setMETA === true) {
      // document.querySelector('meta[property="title"][content]').setAttribute('content', nTitle)
      // document.querySelector('meta[property="og:title"][content]').setAttribute('content', nTitle)
      document.querySelector('meta[property="description"][content]').setAttribute('content', nBio)
      document.querySelector('meta[property="og:description"][content]').setAttribute('content', nBio)
    }
    dTitle = document.title
    var uName = mname
    if (uName.includes(' <span id="tag">') === false) {
      if (uName.includes('(') && uName.includes(')')) {
        uName = `${uName.split('(')[1].split(')')[0]} ${uName.split(' ')[uName.split(' ').length - 1]}`
      }
    }
    var pElement = document.querySelector('span#pfp')
    pElement.style.backgroundImage = `url('${pfp}')`
    pElement.style.display = ''
    if (hasPfp === true) {
      pElement.addEventListener('click', function(e) {
        showItem(pfp, 'div', `<a href="/members/${user}">${uName}</a>${size}`, `<a href='/members/${user}'>${uName}</a>'s ${size} G4G PFP`.replace("s'</a>s", 's</a>').replace('  ', ' '))
      })
    }
    else {
      pElement.addEventListener('click', function(e) {
        showItem(pfp.replace('s128', 's0'), 'div', `<a href="/members/${user}">${uName}</a>`, `<a href='/members/${user}'>${uName}</a>'s Google PFP`.replace("s's"))
      })
    }
    pElement.setAttribute('draggable', false)
    var nElement = document.querySelector('h1#name')
    nElement.innerHTML = mname
    nElement.style.display = ''
    var eElement = document.querySelector('main#profile > section > a#email')
    eElement.innerHTML = email
    eElement.href = `${protocall}${email}`
    eElement.target = `_blank`
    eElement.style.display = ''
    var lElement = document.querySelector('main#profile > section > a#location')
    if (!!userLocation) {
      let userState = userLocation['state']
      let userCity = userLocation['city']
      if (!userState && userState != '') userState = 'CA'
      userLocation = `${userCity}, ${userState}<HELLO>`
        .replace(', <HELLO>', '')
        .replace('<HELLO>', '')
      let userMapLocation = userLocation
      while (userMapLocation.includes(' ')) {
        userMapLocation = userMapLocation.replace(' ', '+')
      }
      userMapLocation = `https://www.google.com/maps/place/${userMapLocation}`
      lElement.querySelector('span').innerHTML = userLocation
      lElement.href = userMapLocation
      lElement.target = `_blank`
      lElement.style.display = ''
    }
    var bElement = document.querySelector('p#bio')
    bElement.innerHTML = bio.replace('{pronouciation}', '')
    bElement.style.display = ''

    var user_photos = MEMBER_DATA[user]['portfolio']
    if (!!user_photos) {
      if (user_photos.length > 0) {
        profile = document.querySelector('main#profile')
        section = profile.querySelector('section')
        var h1 = document.createElement('h1')
        h1.innerHTML = 'Portfolio'
        section.appendChild(h1)
        var li = document.createElement('li')
        var photos = document.createElement('ul')
        photos.id = 'photos'
        section.appendChild(photos)
        photos.appendChild(li)
        photos.style = 'height: auto; gap: 25px;'
        user_photos.forEach(photo => {
          var path = ''
          var element = photo['img']['element']
          if (element !== 'iframe') {
            path = `/assets/members/${user}/portfolio/previews/${photo['img']['path'].replace('.svg', '.png')}`
          }
          else if (photo['img']['path'].endsWith('.pdf')) {
            path = `/assets/members/${user}/portfolio/previews/${photo['img']['path'].replace('.pdf', '.png')}`
          }
          else {
            path = photo['img']['path']
          }
  
          var capt = photo['capt']
          while (capt.includes('<a target="_blank" href="/')) {
            capt = capt.replace('<a target="_blank" href="/', '<a href="/')
          }
  
          var desc = photo['desc']
          while (desc.includes('<a target="_blank" href="/')) {
            desc = desc.replace('<a target="_blank" href="/', '<a href="/')
          }
  
          var name = photo['img']['path']
  
          var img = document.createElement('img')
          if (path === 'YouTube') {
            name = `https://www.youtube-nocookie.com/embed/${photo['img']['vid_id']}?rel=0`
            img.src = `https://img.youtube.com/vi/${photo['img']['vid_id']}/maxresdefault.jpg`
          }
          else {
            img.src = path
          }
          img.addEventListener('click', function(e) {
            showItem(name, element, capt, desc, 'p')
          })
          var tElement = document.querySelector('[tElement]')
          tElement.innerHTML = `${capt}. Click to enlarge!`.replace('..', '.').replace('!.', '!')
          img.setAttribute('title', tElement.innerText)
          li.appendChild(img)
        })
        //      document.querySelector('[tElemment]').innerHTML = ''
      }
    }
  }
  if (document.body.clientHeight < window.innerHeight) {
//    var fElement = document.createElement('footer')
//    fElement.innerHTML = footerHTML
//    document.body.appendChild(fElement)
    /*fElement*/
    if (!!document.querySelector('footer') === false) {
      //while(!!document.querySelector('footer') === false) {
        if (!!document.querySelector('footer')) {
//          document.querySelector('footer').style.marginTop = '25px'
        }
      //}
    }
    else {
//      document.querySelector('footer').style.marginTop = '25px'
    }
//    document.querySelector('#profile').style.marginBottom = '0'
  }
}

function showItem(img, element, capt, desc, c) {
  var cLink = document.querySelector("#cSpan").parentNode
  cLink.href = `javascript:hideModal('${element.replace('img', 'div')}')`
  while (capt.includes('  ')) {
    capt = capt.replace('  ', ' ')
  }
  while (capt.includes('<a target="_blank" href="/')) {
    capt = capt.replace('<a target="_blank" href="/', '<a href="/')
  }
  while (desc.includes('  ')) {
    desc = desc.replace('  ', ' ')
  }
  while (desc.includes('<a target="_blank" href="/')) {
    desc = desc.replace('<a target="_blank" href="/', '<a href="/')
  }

  if (element === 'img') {
    element = 'div'
  }
  var tElement = document.querySelector('[tElement]')
  tElement.innerHTML = capt
  var path = ''
  if (c === 'p') {
    if (img.endsWith('.pdf') || element !== 'iframe') {
      path = `/assets/members/${user}/portfolio/${img}`
    }
    else {
      path = img
    }
  }
  else {
    path = img
  }
  showModal(element, path, capt, desc)
}

if (!!membersRedirect[user]) {
  location.href = `/members/${membersRedirect[user]}`
}

if (!!leftMembers[user] === false && !!user) {
  var pfpI = 0
  if (!!MEMBER_DATA[user]['pfp']) {
    if (!!MEMBER_DATA[user]['pfp']['g4g']) {
      if (MEMBER_DATA[user]['pfp']['g4g']['sizes'].length > 1) {
        var ctrlPressed = false
        var pPressed = false
        window.addEventListener("keyup", function(event) {
          if (ctrlPressed && pPressed) {
            ctrlPressed = false
            pPressed = false
            changePFP()
            event.preventDefault()
          }
        })
        window.addEventListener("keydown", function(event) {
          if (event.key.toLowerCase() === 'control') {
            ctrlPressed = true
          }
          if (event.key.toLowerCase() === 'p') {
            pPressed = true
          }
          if (ctrlPressed && pPressed) {
            event.preventDefault()
          }
        })
      }
    }
  }

  function changePFP() {
    // mname = String(Boolean(mname)).replace('true', mname)
    if (oUName.includes('<span id="tag">(') && !!mname.includes(')</span>')) {
      oUName = mname.split('<span id="tag">(')[0]
    }

    var pfpElement = document.querySelector('#pfp')
    var size = pfpElement.style.backgroundImage
    size = size.replace('url("', '').replace('")', '')
    size = size.split(`/assets/members/${user}/pfp`)[1]
    size = size.split('.')[0].replace('-', '')
    if (!!size === false) {
      size = 'full'
    }
    if (pfpI >= MEMBER_DATA[user]['pfp']['g4g']['sizes'].length - 1) {
      pfpI = 0
    }
    else {
      pfpI++
    }
    var newSize = MEMBER_DATA[user]['pfp']['g4g']['sizes'][pfpI]['name'].replace('full', '')
    var newExt = MEMBER_DATA[user]['pfp']['g4g']['sizes'][pfpI]['ext']
    var pfp = `/assets/members/${user}/pfps/pfp-${newSize}.${newExt}`.replace('-.', '.')
    pfpElement.style.backgroundImage = `url("${pfp}")`
    pfpElement.addEventListener('click', function(e) {
      showItem(pfp, 'div', `<a href="/members/${user}">${mname}</a> ${newSize}`, `<a href='/members/${user}'>${mname}</a>'s ${newSize} G4G PFP")`.replace("s</a>'s", 's</a>').replace('  ', ' '))
    })
    var modal = document.getElementById('modal')
    if (modal.style.display !== 'none') {
      var content = modal.getElementsByTagName('content')[0]
      var top = content.querySelector('#top')
      var bottom = content.querySelector('#bot')
      var mPfpElement = content.querySelector('div#photo')
      mPfpElement.style.background = `url('${pfp}')`
      mPfpElement.style.backgroundRepeat = 'no-repeat'
      mPfpElement.style.backgroundSize = 'contain'
      mPfpElement.style.backgroundPositionX = 'center'
      newSize = newSize
      var topInnerHTML = `<a href="/members/${user}">${mname}</a>${newSize}`
      var bottomInnerHTML = `<a href='/members/${user}'>${`${mname}</a>'s`.replace("s</a>'s", 's</a>')} ${newSize} G4G PFP`
      top.innerHTML = topInnerHTML
      bottom.innerHTML = bottomInnerHTML
    }
  }
}

//var footerHTML = 
//document.querySelectorAll('footer')[
//  document.querySelectorAll('footer').length - 1
//].innerHTML
//document.querySelectorAll('footer')[
//  document.querySelectorAll('footer').length - 1
//].remove()
if ((!!user && (!!MEMBER_DATA[user]['name']) || !!leftMembers[user]) && !!hasAddedMemberInfo === false) {
  var contentEle = document.createElement('section')
  contentEle.id = 'content'
  document.body.appendChild(contentEle)

  document.getElementsByTagName('header')[0].setAttribute('bBorder', '')

  var main = document.createElement('main')
  main.id = 'profile'
  main.className = 'profile'
  document.body.appendChild(main)
  
  var section = document.createElement('section')
  main.appendChild(section)

  if (!!leftMembers[user] === false) {
    let theElements = []
    var pfp = document.createElement('span')
    pfp.id = 'pfp'
    pfp.src = '/assets/blank.png'
    theElements.push(pfp)
    section.appendChild(pfp)

    var nameEle = document.createElement('h1')
    nameEle.id = 'name'
    theElements.push(nameEle)
    section.appendChild(nameEle)

    var emailEle = document.createElement('a')
    emailEle.id = 'email'
    theElements.push(emailEle)
    section.appendChild(emailEle)

    var locationEle = document.createElement('a')
    locationEle.id = 'location'
    theElements.push(locationEle)

    var locationIcon = document.createElement('div')
    locationEle.appendChild(locationIcon)
    
    var locationSpan = document.createElement('span')
    locationEle.appendChild(locationSpan)
    
    section.appendChild(locationEle)

    var socialsEle = document.createElement('ul')
    socialsEle.id = 'socials'
    theElements.push(socialsEle)
    section.appendChild(socialsEle)

    var bio = document.createElement('p')
    bio.id = 'bio'
    theElements.push(bio)
    section.appendChild(bio)

    theElements.forEach(function(e) {
      e.style.display = 'none'
    })
  }
  else {
    var bio = document.createElement('p')
    bio.id = 'bio'
    let leftDefaultBio = defaultBio().replace('{pronouciation}', '').replace(' is ', ' was ')
    leftDefaultBio.substring(0, leftDefaultBio.split('').length - 1)
    var bioText = `${leftDefaultBio} until ${leftMembers[user]['date']}.`
    bio.innerHTML = bioText
    section.appendChild(bio)
//    var fElement = document.createElement('footer')
//    fElement.innerHTML = footerHTML
//    document.body.appendChild(fElement)
  }

  var tEle = document.createElement('span')
  tEle.style.display = 'none'
  tEle.id = 'hidden'
  tEle.className = 'hidden'
  tEle.setAttribute('hidden', '')
  tEle.setAttribute('tElement', '')
  document.body.appendChild(tEle)

  if (!!leftMembers[user] === false) {
    setMember()
  }
}
else if (!!user && (!!MEMBER_DATA[user]['name']) || !!leftMembers[user]) {}
else {
  if (!!createdMainMembersPageContent === false) {
    var hero = document.createElement('section')
    hero.className = 'hero fullHeight'
    hero.id = 'content'
    document.body.appendChild(hero)
  
    var menu = document.createElement('ul')
    menu.id = 'menu'
    menu.className = 'profile'
    hero.appendChild(menu)
  
    var menuH1 = document.createElement('h1')
    menuH1.innerHTML = 'Club Members'
    menu.appendChild(menuH1)
  
    addMembers()
  }
}