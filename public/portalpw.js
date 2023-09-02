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
var HTML = atob('PGhlYWRlciBzdHlsZT0ibWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsiPjxoMT5NZW1iZXIgUG9ydGFsPC9oMT48L2hlYWRlcj48bWFpbiBpZD0icG9ydGFsIj48L21haW4+')
if (user_password === correct) {
  let header = document.createElement('header')
  header.style = 'min-height: 100px !important; display: flex; align-items: center;'
  
  let section = document.createElement('section')
  section.id = 'content'
  header.appendChild(section)

  let h1 = document.createElement('h1')
  h1.innerHTML = 'Member Portal'
  section.appendChild(h1)

  let main = document.createElement('main')
  main.id = 'portal'

  document.body.appendChild(header)
  document.body.appendChild(main)

  let script = document.createElement('script')
  script.src = '/portal.js'
  document.body.appendChild(script)
  document.documentElement.className = 'fullHeight'
  document.body.className = 'fullHeight'
}
else {
  history.back()
  location.href = '/wrong-portal-password'
}