function showItem(path, c, element='object', capt=false, desc=false, user=false) {
  let path = `/assets/${null}/${null}`
  if (element === 'img') {
    element = 'object'
  }
  if (element === 'iframe' && img.includes('://')) {
    path = img
  }
  showModal(element, path, capt, desc)
}

document.querySelectorAll('main .split > section img').forEach(e => {
  let path = e.src
  if (path.includes('://')) {
    path = path.split('://')[1]
    if (path.split('/')[0] === location.host) {
      path = path.split('/')
      path.shift()
      path = path.join('/')
    }
  }
    
  let capt = `${e.alt}. Click to enlarge!`.replace('.. ', '. ').replace('..', '.').replace('!. ', '! ').replace('!.', '!')
  e.title = capt
    
  let element = e.getAttribute('data-element')
  if (!!element === false) {
    element = 'img'
  }

  e.addEventListener('click', function(event) {
    showItem(path, CLUB_PHOTOS['path'], element)
  })
})

//document.querySelector('[tElement]').innerHTML = ''