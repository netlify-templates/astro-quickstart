var memberItemExistsWithNoInnerHTML = '\n        \n      '
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

var MEMBER_DATA = {
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
  juhi: {
    date: '04/07/2023'
  }, 
  sam: {
    date: 'the start of 2023'
  }, 
  gwen: {
    date: 'an unknown date'
  },
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
if (!!user && !!MEMBER_DATA[user] && !!leftMembers[user] === false) {
  if (!!MEMBER_DATA[user]['name']) {
    if (!!MEMBER_DATA[user]['pfp']['g4g']) {
      MEMBER_DATA[user]['pfp']['g4g']['size'] = MEMBER_DATA[user]['pfp']['g4g']['sizes'][0]//Math.floor(Math.random() * MEMBER_DATA[user]['pfp']['g4g']['sizes'].length)]
    }
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


//var footerHTML = 
//document.querySelectorAll('footer')[
//  document.querySelectorAll('footer').length - 1
//].innerHTML
//document.querySelectorAll('footer')[
//  document.querySelectorAll('footer').length - 1
//].remove()
if ((!!user && !!leftMembers[user]) && !!hasAddedMemberInfo === false) {
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

  var bio = document.createElement('p')
  bio.id = 'bio'
  let leftDefaultBio = defaultBio().replace('{pronouciation}', '').replace(' is ', ' was ')
  leftDefaultBio.substring(0, leftDefaultBio.split('').length - 1)
  var bioText = `${leftDefaultBio} until ${leftMembers[user]['date']}.`
  bio.innerHTML = bioText
  section.appendChild(bio)
//  var fElement = document.createElement('footer')
//  fElement.innerHTML = footerHTML
//  document.body.appendChild(fElement)

  var tEle = document.createElement('span')
  tEle.style.display = 'none'
  tEle.id = 'hidden'
  tEle.className = 'hidden'
  tEle.setAttribute('hidden', '')
  tEle.setAttribute('tElement', '')
  document.body.appendChild(tEle)
}
else if (!!user) {
  if (socials.innerHTML === memberItemExistsWithNoInnerHTML) {
    socials.remove()
  }
  if (photos.innerHTML === memberItemExistsWithNoInnerHTML) {
    let possPortH2 = profile.querySelector('section > h2')
    if (possPortH2.textContent.toLowerCase() === 'portfolio') {
      possPortH2.remove()
    }
    photos.remove()
  }
}