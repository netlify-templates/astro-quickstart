var currImgS = [
  2, 
  8, 
]
function setImg(car=0) {
  let carousel = document.querySelectorAll('.carousel')[car]
  let ul = carousel.querySelector('ul.imgs')
  let imgs = ul.querySelectorAll('img')
  let oActive = ul.querySelector('.active')
  oActive.querySelectorAll('div').forEach(e => {
    e.style.display = 'none'
  })
  oActive.className = ''
  ul.querySelector('.left').className = ''
  ul.querySelector('.right').className = ''
  imgs[currImgS[car]].className = 'active'
  imgs[currImgS[car] - 1].className = 'left'
  imgs[currImgS[car] + 1].className = 'right'
}
setImg()

function goBack(car=0) {
  let carousel = document.querySelectorAll('.carousel')[car]
  var bAHref = carousel.querySelectorAll('a')[0]
  var fAHref = carousel.querySelectorAll('a')[carousel.querySelectorAll('a').length - 1]
  var bArrow = carousel.querySelectorAll('img')[0]
  var fArrow = carousel.querySelectorAll('img')[carousel.querySelectorAll('img').length - 1]
  let ul = carousel.querySelector('ul.imgs')
  let imgs = ul.querySelectorAll('img')
  currImgS[car]--
  imgs[currImgS[car] - 1].style.display = ''
  imgs[currImgS[car] + 2].style.display = 'none'
  setImg(car)
  if (currImgS[car] - 2 < 0) {
    bAHref.removeAttribute('href')
    bArrow.src = '/assets/blank.png'
    bArrow.removeAttribute('onclick')
  }
  else {
    fAHref.href = `javascript:goForw(${car})`
    fArrow.src = '/assets/arrows/R.svg'
  }
}

function goForw(car=0) {
  let carousel = document.querySelectorAll('.carousel')[car]
  var bAHref = carousel.querySelectorAll('a')[0]
  var fAHref = carousel.querySelectorAll('a')[carousel.querySelectorAll('a').length - 1]
  var bArrow = carousel.querySelectorAll('img')[0]
  var fArrow = carousel.querySelectorAll('img')[carousel.querySelectorAll('img').length - 1]
  let ul = carousel.querySelector('ul.imgs')
  let imgs = ul.querySelectorAll('img')
  currImgS[car]++
  imgs[currImgS[car] - 2].style.display = 'none'
  imgs[currImgS[car] + 1].style.display = ''
  setImg(car)
  if (currImgS[car] + 2 >= imgs.length) {
    fAHref.removeAttribute('href')
    fArrow.src = '/assets/blank.png'
    fArrow.removeAttribute('onclick')
  }
  else {
    bAHref.href = `javascript:goBack(${car})`
    bArrow.src = '/assets/arrows/L.svg'
  }
}