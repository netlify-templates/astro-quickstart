let state = {
  nav: false,
  footer: false,
}

const nav = document.getElementsByTagName('nav')[0]
// nav.style.position = 'absolute'
const foot = document.getElementsByTagName('footer')[0]

let shadows = {
  nav: nav.style.boxShadow, 
  footer: foot.style.boxShadow, 
}

const navWatcher = document.createElement('div')
const footerWatcher = document.createElement('div')

navWatcher.setAttribute('data-nav-scroll-watcher', '')
footerWatcher.setAttribute('data-footer-scroll-watcher', '')

nav.after(navWatcher)
foot.after(footerWatcher)

const navObserver = new IntersectionObserver(function(entries) {
  if (!nav.className.includes('appearing') && !nav.className.includes('disappearing')) {
    nav.classList.add('appearing')
  }
  nav.classList.toggle('disappearing', !entries[0].isIntersecting)
  nav.classList.toggle('appearing')
})

const footerObserver = new IntersectionObserver(function(entries) {
  foot.classList.toggle('disappearing', !entries[0].isIntersecting)
})

if (document.body.clientHeight > window.innerHeight) {
  navObserver.observe(navWatcher)
  footerObserver.observe(footerWatcher)
}