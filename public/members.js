var socials = document.querySelector('.socials')
var photos = document.querySelector('.photos')

var memberItemExistsWithNoInnerHTML = '\n        \n      '

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
          path: 'Little-Wishes-Hospital-Gown-Feb-2023_4.png',
        },
        capt: `An inspirational hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>`,
        desc: `Made by: <a href="/members/juhi">Juhi</a>`,
      },
      {
        img: {
          path: 'Little-Wishes-Hospital-Gown-Feb-2023_5.png',
        },
        capt: `An uplifting hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>`,
        desc: `Made by: <a href="/members/juhi">Juhi</a>`,
      },
      {
        img: {
          path: 'Little-Wishes-Hospital-Gown-Feb-2023_6.png',
        },
        capt: `A facinating hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>`,
        desc: `Made by: <a href="/members/juhi">Juhi</a>`,
      },
      {
        img: {
          path: 'Little-Wishes-Hospital-Gown-Feb-2023_7.png',
        },
        capt: `An empowering hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>`,
        desc: `Made by: <a href="/members/juhi">Juhi</a>`,
      },
    ],
  },  
}

var mname = ''
if (!!MEMBER_DATA[user]) {
  mname = MEMBER_DATA[user]['name']
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
  if (!!element === false) element = 'object'

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
  showModal(`${element}#photo`, path, capt, desc)
}


//var footerHTML = 
//document.querySelectorAll('footer')[
//  document.querySelectorAll('footer').length - 1
//].innerHTML
//document.querySelectorAll('footer')[
//  document.querySelectorAll('footer').length - 1
//].remove()
if (!!user) {
  if (socials.innerHTML === memberItemExistsWithNoInnerHTML) {
    socials.remove()
  }
  if (photos.innerHTML === memberItemExistsWithNoInnerHTML) {
    let possPortH2 = profile.querySelector('section > h2:has( + .photos)')
    if (!!possPortH2 === false) possPortH2 = document.querySelector('section > h2')
    if (possPortH2.textContent.toLowerCase() === 'portfolio') {
      possPortH2.remove()
    }
    photos.remove()
  }
}