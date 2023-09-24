let CLUB_PHOTOS = {
  path: 'club_photos', 
  IMG_0496: {
    path: 'IMG_0496.jpg', 
    capt: 'A photo of the members of the club!', 
    desc: '<a href="/members/juhi">Juhi</a>, <a href="/members/sayuri">Sayuri</a>, <a href="/members/adarsh">Adarsh</a>, <a href="/members/isabelle">Isabelle</a>, and <a href="/members/shikha">Shikha</a> are pictured.',
  }, 
}
//alert(Math.ceil((MEMBER_WORK.length)/3))
function showItem(path, c, element='img', capt=false, desc=false, user=false) {
  let path = `/assets/${null}/${null}`
  if (element === 'img') {
    element = 'div'
  }
  if (element === 'iframe' && img.includes('://')) {
    path = img
  }
  showModal(element, path, capt, desc)
}

if (location.pathname === '/') {
  document.querySelectorAll('main .split > section img').forEach(e => {
    let path = e.scroll
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
}

//document.querySelector('[tElement]').innerHTML = ''