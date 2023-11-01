var closeFunction = hideModal//modal.close()
var dTitle = document.title

function checkIfOuterModal(e) {
  const dimensions = modal.getBoundingClientRect()
  if (
    e.clientX < dimensions.left || 
    e.clientX > dimensions.right || 
    e.clientY < dimensions.top || 
    e.clientY > dimensions.bottom
  ) return true
  else return false
}

function checkIfInnerModal(e) {
  const dimensions = modal.getBoundingClientRect()
  if (
    e.clientX > dimensions.left && 
    e.clientX < dimensions.right && 
    e.clientY > dimensions.top && 
    e.clientY < dimensions.bottom
  ) return true
  else return false
}

modal.addEventListener("click", function(e) {
  if (checkIfOuterModal(e)) {
    hideModal()
    //closeFunction
  }
})

modal.addEventListener('mouseover', function(e) {
  if (checkIfInnerModal(e)) {
    modal.classList.add('isHover')
  }
  else {
    modal.classList.remove('isHover')
  }
})
modal.addEventListener('mouseout', function(e) {
  modal.classList.remove('isHover')
})


function showModal(element, path, capt, desc) {
  var modal = document.getElementById('modal')
  var content = modal.getElementsByTagName('content')[0]
  // selecting the modal iframe and setting the src attribute to the "url" param
  var iElement = content.querySelector(`${element}#photo`)
  if (window.innerWidth < window.innerHeight) {
    iElement.className = 'h'
  }
  if (window.innerHeight < window.innerWidth) {
    iElement.className = 'w'
  }
  iElement.style.display = ''
  if (element === 'div') {
    iElement.style.background = `url('${path}')`
    iElement.style.backgroundRepeat = 'no-repeat'
    iElement.style.backgroundSize = 'contain'
    iElement.style.backgroundPositionX = 'center'
  }
  else {
    iElement.src = path
  }
  // selecting the modal and setting the style to ''
  modal.showModal()
  let tElement = document.querySelector('[telement]')
  tElement.innerHTML = capt
  while (tElement.innerHTML.includes('&nbsp;')) {
    tElement.innerHTML = tElement.innerHTML.replace('&nbsp;', ' ')
  }
  if (dTitle.includes(' | ')) {
    document.title = `${tElement.innerText} | ${dTitle.split(' | ')[1]}`
  }
  else {
    document.title = `${tElement.innerText} | ${dTitle}`
  }
  content.querySelector('#top').innerHTML = capt
  content.querySelector('#bot').innerHTML = desc
  var sElement = document.createElement('style')
  sElement.innerHTML = '::-webkit-scrollbar {width: 0 !important;}'
  document.head.appendChild(sElement)
}

function hideModal(element='div') {
  var modal = document.getElementById('modal')
  var content = modal.getElementsByTagName('content')[0]
  modal.close()
  // selecting the modal iframe and setting the src attribute to location.href
  if (element === 'div') {
    content.querySelector(`${element}#photo`).style.background = ''
  }
  else {
    content.querySelector(`${element}#photo`).src = location.href
  }
  content.querySelector(`${element}#photo`).style.display = 'none'
  document.title = dTitle
  content.querySelector('#top').innerHTML = ''
  content.querySelector('#bot').innerHTML = ''
  var sElement = document.head.querySelectorAll('style')[document.head.querySelectorAll('style').length - 1]
  if (sElement.innerHTML === '::-webkit-scrollbar {width: 0 !important;}') {
    sElement.remove()
  }
}