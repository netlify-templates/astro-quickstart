if (location.pathname !== '/' && (location.pathname !== '/work.html' && location.pathname !== '/work')) {
  document.documentElement.className = 'fullHeight'
  document.body.className = 'fullHeight'
}

var title = document.title
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
let contactSubmit = !!urlParams.get('ty')
if (contactSubmit) {
  let element = document.querySelector('form[method="POST"]')
  element.parentNode.querySelector('div h3').style.display = ''
  element.style.display = 'none'
}

function sendMessage() {
  let element = document.querySelector('form[method="POST"]')
  let name = !!element.querySelector('input[type="text"]').value
  let email = !!element.querySelector('input[type="email"]').value
  let message = !!element.querySelector('textarea').value
  if (name && email && message) {
    window.open('?ty=1#contact')
  }
}