var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var isMagic = urlParams.get('magic')
if (!!isMagic) {
  isMagic = isMagic.replace('y', true).replace('1', true)
}
function magic(car=0) {
  document.querySelector('nav').setAttribute('bBorder', '')
  let carousel = document.querySelectorAll('.carousel')[car]
  let ul = carousel.querySelector('ul')
  carousel.querySelectorAll('img')[0].parentNode.style.display = 'none'
  carousel.querySelectorAll('img')[carousel.querySelectorAll('img').length - 1].parentNode.style.display = 'none'
  ul.querySelectorAll('img[src="assets/blank.png"]').forEach(e => {
    e.parentNode.style.display = 'none'
  })
  ul = carousel.querySelector('ul')
  ul.removeAttribute('class')
  carousel.parentNode.style.maxWidth = '636px'
  ul.style.maxWidth = '636px'
  ul.id = 'photos'
  let newLi = document.createElement('li')
  let imgSCode = ''
  ul.querySelectorAll('li').forEach(e => {
    if (e.querySelector('img').src !== `${location.protocol}//${location.host}/assets/blank.png`) {
      imgSCode = imgSCode + e.innerHTML
    }
    e.style.display = 'none'
  })
  newLi.innerHTML = imgSCode
  newLi.id = 'newLi'
  ul.appendChild(newLi)
  let h1 = carousel.parentNode.querySelector('h1')
  h1.setAttribute('onclick', 'undo()')
  h1.setAttribute('title', 'Click here to convery back to a carousel!')
}

function undo() {
  document.querySelector('nav').removeAttribute('bBorder')
  carousel = document.querySelector('.carousel')
  carousel.querySelectorAll('img')[0].parentNode.style.display = ''
  carousel.querySelectorAll('img')[carousel.querySelectorAll('img').length - 1].parentNode.style.display = ''
  ul = carousel.querySelector('ul')
  ul.querySelector('.left').style.display = ''
  ul.querySelector('.active').style.display = ''
  ul.querySelector('.right').style.display = ''
  ul.querySelectorAll('.top').forEach(e => {
    if (e.parentNode.className !== 'active') {
      e.style.display = ''
    }
  })
  ul.querySelectorAll('.bottom').forEach(e => {
    if (e.parentNode.className !== 'active') {
      e.style.display = ''
    }
  })
  ul.querySelectorAll('img[src="assets/blank.png"]').forEach(e => {
    e.parentNode.style.display = 'none'
  })
  ul.className = 'imgs'
  carousel.parentNode.style.maxWidth = ''
  ul.style.maxWidth = ''
  ul.removeAttribute('id')
  let newLi = ul.querySelector('#newLi')
  newLi.remove()
  let h1 = carousel.parentNode.querySelector('h1')
  h1.parentNode.querySelector('h1').setAttribute('onclick', 'magic()')
  h1.setAttribute('title', 'Click here to convert to list!')
}

if (isMagic) {
  magic()
}