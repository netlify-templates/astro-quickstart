var socials = document.querySelector('.socials')
var photos = document.querySelector('.photos')

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
  var sHTML = socials.innerHTML
  while (sHTML.includes('\n')) sHTML = sHTML.replace('\n', '')
  while (sHTML.startsWith(' ')) sHTML = sHTML.substring(1)

  var pHTML = photos.innerHTML
  while (pHTML.includes('\n')) pHTML = pHTML.replace('\n', '')
  while (pHTML.startsWith(' ')) pHTML = pHTML.substring(1)

  console.log(sHMTL, pHTML)

  if (!!sHTML === false) {
    socials.remove()
  }
  if (!!pHTML === false) {
    let possPortH2 = profile.querySelector('section > h2:has( + .photos)')
    if (!!possPortH2 === false) possPortH2 = document.querySelector('section > h2')
    if (possPortH2.textContent.toLowerCase() === 'portfolio') {
      possPortH2.remove()
    }
    photos.remove()
  }
}