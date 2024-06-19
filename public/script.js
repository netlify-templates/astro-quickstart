setHeight({target: window})
window.addEventListener('resize', setHeight)
function setHeight(e) {
  document.documentElement.style.setProperty('--dHeight', window.innerHeight)
}

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

let pathName = location.pathname
if (pathName.endsWith('/')) {
  pathName = pathName.substring(0, pathName.split('').length - 1)
}

let isTall = false
if (document.body.clientHeight < window.innerHeight) {
  isTall === true
  document.documentElement.classList.add('fullHeight')
  if (!!document.getElementsByTagName('main')[0]) {
    if (document.getElementsByTagName('main').length === 1) {
      document.getElementsByTagName('main')[0].style.flex = 1
    }
  }
  if (!!document.getElementsByClassName('hero')[0]) {
    document.getElementsByTagName('main')[0].style.display = 'flex'
    document.getElementsByTagName('main')[0].style.flexDirection = 'column'
    document.getElementsByClassName('hero')[0].style.flex = '1'
  }
  else {
    document.body.classList.add('fullHeight')
  }
}
else {
  document.documentElement.classList.remove('fullHeight')
  document.body.classList.remove('fullHeight')
}