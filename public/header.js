let isSmall = false
let nav = document.querySelector('.header > .nav')
let btnsDiv = nav.querySelector('div')
let openSVG = nav.querySelector('.nav-hbg')
let closeSVG = btnsDiv.querySelector('div.nav-info > :last-child')
openSVG.addEventListener('click', function(e) {
  btnsDiv.classList.add('ready')
  btnsDiv.style.gridTemplateColumns = '0fr'
})
closeSVG.addEventListener('click', function(e) {
  btnsDiv.style.gridTemplateColumns = '1fr'
})
window.addEventListener('resize', function(e) {
  let width = window.innerWidth
  if (isSmall === false && width < 624) isSmall = true
  if (width >= 624) {
    isSmall = false
    if (isSmall === false) btnsDiv.style.gridTemplateColumns = '0fr'
  }
})