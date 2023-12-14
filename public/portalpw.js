var correct = 'Z3JhcGhpY3M0Z29vZA==';
var user_password = false
const urlParam = new URLSearchParams(window.location.search);
if (Boolean(urlParam.get('i')) === true && localStorage.getItem('p') === correct) {
  user_password = localStorage.getItem('p')
  localStorage.setItem('p', false)
  localStorage.removeItem('p')
  login()
}
else {
  var login = document.querySelector('.login')
  var button = login.querySelector('.btn')
  var password = login.getElementById('password')
  button.addEventListener('click', function() {
    user_password = password.value
    login()
  })
  password.addEventListener('keypress', function(e) {
    if (e.key == 'Enter') {
      user_password = password.value
      login()    
    }
  })
}

function login() {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', `/portal/landing/`)
  xhr.addEventListener('load', xhrAct)
  xhr.send()  
}

function xhrAct() {
  var HTML = this.responseText.replace('<!DOCTYPE html>', '')
  if (user_password === correct) {
    HTML = atob(HTML)
    var footer = document.querySelector('footer')
    footer.remove()
    var fHTML = footer.outerHTML
    document.body.innerHTML += HTML + fHTML
  
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