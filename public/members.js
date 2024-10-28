var profile = document.querySelector('.profile')

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
  if (!element) element = 'object'
  if (element === 'img') element = 'div'

  var cLink = document.querySelector("#cSpan").parentNode
  cLink.href = `javascript:hideModal('${element}')`

  if (capt.includes('  ')) {
    capt = capt.split('  ').join(' ')
  }
  if (capt.includes('<a target="_blank" href="/')) {
    capt = capt.split('<a target="_blank" href="/').join('<a href="/')
  }
  if (desc.includes('  ')) {
    desc = desc.split('  ').join(' ')
  }
  if (desc.includes('<a target="_blank" href="/')) {
    desc = desc.split('<a target="_blank" href="/').join('<a href="/')
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
  showModal(`${element}#photo`, path, capt, desc)
}