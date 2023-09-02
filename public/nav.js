let isSmall = false
let navBtns = document.querySelector('nav > div#nav-btns')
let btnsDiv = navBtns.querySelector('div')
let openSVG = navBtns.querySelector('#nav-hbg')
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