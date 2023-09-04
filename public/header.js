let isSmallScreen = false
let header = document.querySelector('.header > .nav')
let btnsDiv = header.querySelector('div')
let openSVG = header.querySelector('.nav-hbg')
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
  if (isSmallScreen === false && width < 624) isSmallScreen = true
  if (width >= 624) {
    isSmallScreen = false
    if (isSmallScreen === false) btnsDiv.style.gridTemplateColumns = '0fr'
  }
})