var correct = 'Z3JhcGhpY3M0Z29vZA==';
var user_password
const urlParam = new URLSearchParams(window.location.search);
if (Boolean(urlParam.get('i')) === true && localStorage.getItem('p') === correct) {
  user_password = localStorage.getItem('p')
  localStorage.setItem('p', false)
  localStorage.removeItem('p')
}
else {
  user_password = btoa(prompt('Enter Password: '));
}

var xhr = new XMLHttpRequest()
xhr.open('GET', `/portal/landing/`)
xhr.addEventListener('load', xhrAct())
xhr.send()

function xhrAct() {
  var HTML = atob(this.responseText)
  if (user_password === correct) {
    document.body.innerHTML += HTML
  
    let script = document.createElement('script')
    script.src = '/portal.js'
    document.body.appendChild(script)
    // document.documentElement.className = 'fullHeight'
    // document.body.className = 'fullHeight'
  }
  else {
    history.back()
    location.href = '/wrong-portal-password'
  }
}