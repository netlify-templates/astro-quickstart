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

// var hasVisited = localStorage.getItem('hasVisited')

let overflow = urlParams.get('o')
let parentC = parent.location.host.split('.')[1] !== 'id' && (!parent.location.href.includes('--') && !location.href.includes('--'))
let domain = location.host.includes('graphics-for-good')
// if ((hasVisited === 'FALSE' && parentC) && (domain && overflow !== 'n')) {
//   var path = location.pathname
//   if (path === '/') {
//     path = `/index${location.search}`
//   }
//   else {
//     path = `${path}${location.search}`
//   }
//   localStorage.clear()
//   location.href = `/welcome?p=${path}`
//   localStorage.setItem('hasVisited', 'TRUE')
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

let pathName = location.pathname
if (pathName.endsWith('/')) {
  pathName = pathName.substring(0, pathName.split('').length - 1)
}

let isTall = false
if (document.body.clientHeight < window.innerHeight) {
  isTall === true
  document.documentElement.classList.add('fullHeight')
  if (!!document.getElementsByClassName('hero')[0]) {
    document.getElementsByClassName('hero')[0].style.height = '100%'
  }
  else {
    document.body.classList.add('fullHeight')
  }
  if (!!document.querySelector('main')) {
    if (document.querySelectorAll('main').length === 1) {
      document.querySelector('main').style.flex = 1
    }
  }
}
else {
  document.documentElement.classList.remove('fullHeight')
  document.body.classList.remove('fullHeight')
}