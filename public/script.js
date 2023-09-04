let siteUpdatedDate = '09/01/2023'
let pageDates = {
  // members: '04/27/2023'
}

setTimeout(function() {
  document.body.removeAttribute('data-new-gr-c-s-check-loaded')
  document.body.removeAttribute('data-gr-ext-installed')
}, 1000)

var isBeta = !!localStorage.getItem('isBeta')
if (isBeta) document.body.classList.add('isBeta')

if (!!queryString === false) {
  var queryString = window.location.search;
}
if (!!urlParams === false) {
  var urlParams = new URLSearchParams(queryString);
}

if (location.href.includes('&&')) {
  location.href = location.href.replace('&&', '&')
}
else if (location.href.includes('?&')) {
  location.href = location.href.replace('?&', '?')
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// var hasVisited = !!getCookie('hasVisited')
// setCookie('hasVisited', 'areYouHere', ((1/24)/60))
// if (!!getCookie('hasVisited') === 'areYouHere') {
//   if (!!getCookie('hasVisited') === false) {
//     hasVisited = !!localStorage.getItem('hasVisited')
//   }
//   setCookie('hasVisited', hasVisited, ((1/24)/60))
// }

let overflow = urlParams.get('o')
let parentC = parent.location.host.split('.')[1] !== 'id'
let domain = location.host.includes('graphics-for-good')
// if ((hasVisited === false && parentC) && (domain && overflow !== 'n')) {
//   var path = location.pathname
//   if (path === '/') {
//     path = `/index${location.search}`
//   }
//   else {
//     path = `${path}${location.search}`
//   }
//   localStorage.clear()
//   location.href = `/welcome?p=${path}`
// }

if (overflow === 'n') {
  document.documentElement.setAttribute('style', 'overflow: hidden;')
}


document.querySelector('.logo').addEventListener('click', function(e) {
  location.href = '/'
})

document.querySelectorAll('a').forEach(a => {
  if(!!a.target === false) {
    if (a.href.startsWith('/') === false) {
      if (a.href.includes('://')) {
        if (a.href.split('://')[1].startsWith(location.host) === false) {
          a.target = '_blank'
        }
      }
    }
  }
})

let globalHeight = document.querySelector('nav').clientHeight

function scrollToNum(st=globalHeight) {
  location.href = '#content'
//  document.querySelector('a#go2content').style.display = 'none'
//  document.querySelector('nav').querySelectorAll('a').forEach(e => {
//    e.setAttribute('tabindex', -1)
//  })
//  document.documentElement.scrollTop = st
//  setTimeout(function() {
//    document.querySelector('a#go2content').style.display = ''
//    document.querySelector('nav').querySelectorAll('a').forEach(e => {
//      e.removeAttribute('tabindex')
//    })
//  }, 1)
}

let footer = document.createElement('footer')
let fSpan = footer.appendChild(document.createElement('span'))
let page = location.pathname.substring(1)
if (!!page === false) {
  page = 'index'
  // page = 'members'
}
let uMember = 'adarsh'
let uMemberName = `${uMember.split('')[0].toUpperCase()}${uMember.substring(1)}`
let fWord = 'Site'
if (!!pageDates[page]) {
  siteUpdatedDate = pageDates[page]
  fWord = 'Page'
}
let unixSiteUpdated = new Date(siteUpdatedDate).getTime()/1000
let newSiteUpdatedDate = (new Date(siteUpdatedDate))
let siteUpdatedDateStr = String(newSiteUpdatedDate).substring(0, 15)
  .replace('Sun', 'Sunday')
  .replace('Mon', 'Monday')
  .replace('Tue', 'Tuesday')
  .replace('Wed', 'Wednesday')
  .replace('Thu', 'Thursday')
  .replace('Fri', 'Friday')
  .replace('Sat', 'Saturday')
  .replace('Jan', 'January')
  .replace('Feb', 'February')
  .replace('Mar', 'March')
  .replace('Apr', 'April')
  .replace('May', 'May')
  .replace('Jun', 'June')
  .replace('Jul', 'July')
  .replace('Aug', 'August')
  .replace('Sep', 'September')
  .replace('Oct', 'October')
  .replace('Nov', 'November')
  .replace('Dec', 'December')
let siteUpdatedDateStrS = siteUpdatedDateStr.split(' ')
if (siteUpdatedDateStrS[2].endsWith('1')) {
  siteUpdatedDateStrS[2] = `${siteUpdatedDateStrS[2]}st`
}
else if (siteUpdatedDateStrS[2].endsWith('2')) {
  siteUpdatedDateStrS[2] = `${siteUpdatedDateStrS[2]}nd`
}
else if (siteUpdatedDateStrS[2].endsWith('3')) {
  siteUpdatedDateStrS[2] = `${siteUpdatedDateStrS[2]}rd`
}
else {
  siteUpdatedDateStrS[2] = `${siteUpdatedDateStrS[2]}th`
}
siteUpdatedDateStr = `${siteUpdatedDateStrS[0]} ${siteUpdatedDateStrS[1]} ${siteUpdatedDateStrS[2]} ${siteUpdatedDateStrS[3]}`

fSpan.innerHTML = `${fWord} Updated on ${siteUpdatedDateStr} by&nbsp;<a href="/members/${uMember}">${uMemberName}</a>&nbsp;| Check Status at&nbsp;<a href="/status">/status</a>.`
document.body.appendChild(footer)

let pathName = location.pathname
if (pathName.endsWith('/')) {
  pathName = pathName.substring(0, pathName.split('').length - 1)
}

let csI = 0
let csINT = false
checkSetFooter()
if (location.pathname.startsWith('/members') && location.pathname.endsWith('/members') === false) {
  csINT = setInterval(checkSetFooter, 10)
}
function checkSetFooter() {
  setTimeout(function() {
    if (document.body.clientHeight <= window.innerHeight) {
      document.documentElement.classList.add('fullHeight')
      let hasHero= false
      document.documentElement.querySelectorAll('body > *').forEach(function(e) {
        if (e.classList.includes('hero')) hasHero = true
      })
      if (hasHero === false) {
        document.body.classList.add('fullHeight')
        // footer.style.position = 'absolute'
        // footer.style.bottom = '0'
      }
    }
    else {
      document.documentElement.classList.remove('fullHeight')
      document.body.classList.remove('fullHeight')
      // footer.style.position = ''
      // footer.style.bottom = ''
    }
    csI++
    if (csI >= 1000 && !!csINT) {
      clearInterval(csINT)
    }
  }, 0)
}

let isTall = false
if (document.body.clientHeight < window.innerHeight) {
  isTall === true
  if (!!document.getElementsByClassName('hero')[0]) {
    document.getElementsByClassName('hero')[0].style.flex = '1'
  }
}

let navigation = document.getElementsByTagName('nav')[0]

if (!!document.querySelector('#content')) {
  let nHeight = navigation.clientHeight
  if (navigation.getAttribute('bBorder') === '') {
    nHeight+=2
  }
  document.getElementById('content').style.paddingTop = `${nHeight}px`
}