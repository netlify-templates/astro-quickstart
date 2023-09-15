let interval = false

if (!!dTitle === false) {
  var dTitle = document.title
}
let i = 0
var MEMBER_WORK = {
  path: 'user_portfolios', 
  IMG_4052: {
    user: 'adarsh', 
    img: {
      element: 'img', 
      path: 'IMG_4052.png'
    }, 
    capt: '<a href="https://parks.RockGamerAK.com">A website</a> that <a href="/members/adarsh">Adarsh</a> made promoting saving parks!', 
    desc: 'Made by: <a href="/members/adarsh">Adarsh</a>',
  }, 
  'G4G-Ad': {
    user: 'hanlin', 
    img: {
      element: 'img', 
      path: 'G4G-Ad.svg',
    }, 
    capt: 'An Ad for <a href="/">Graphics for Good</a> made by <a href="/members/hanlin">Hanlin</a>!', 
    desc: 'Made by: <a href="/members/hanlin">Hanlin</a>', 
  }, 
  'Little-Wishes-Hospital-Gown-Feb-2023_4': {
    user: 'juhi', 
    img: {
      element: 'img', 
      path: 'Little-Wishes-Hospital-Gown-Feb-2023_4.png',
    }, 
    capt: 'An inspirational hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>', 
    desc: 'Made by: <a href="/members/juhi">Juhi</a>', 
  }, 
  'Little-Wishes-Hospital-Gown-Feb-2023_5': {
    user: 'juhi', 
    img: {
      element: 'img', 
      path: 'Little-Wishes-Hospital-Gown-Feb-2023_5.png',
    }, 
    capt: 'An uplifting hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>', 
    desc: 'Made by: <a href="/members/juhi">Juhi</a>', 
  }, 
  'Little-Wishes-Hospital-Gown-Feb-2023_6': {
    user: 'juhi', 
    img: {
      element: 'img', 
      path: 'Little-Wishes-Hospital-Gown-Feb-2023_6.png',
    }, 
    capt: 'A facinating hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>', 
    desc: 'Made by: <a href="/members/juhi">Juhi</a>', 
  }, 
  'Little-Wishes-Hospital-Gown-Feb-2023_7': {
    user: 'juhi', 
    img: {
      element: 'img', 
      path: 'Little-Wishes-Hospital-Gown-Feb-2023_7.png',
    }, 
    capt: 'An empowering hospital gown made for <a target="_blank" href="https://littlewishes.org">Little Wishes</a> by <a href="/members/juhi">Juhi</a>', 
    desc: 'Made by: <a href="/members/juhi">Juhi</a>', 
  }, 
  'Help-save-the-oceans_1': {
    user: 'samantha', 
    img: {
      element: 'img', 
      path: 'Help-save-the-oceans_1.svg',
    }, 
    capt: `One out of four posters made by <a href="/members/samantha">Samantha</a> to promote saving the oceans.`, 
    desc: `Made by: <a href="/members/samantha">Samantha</a>`, 
  }, 
  'Help-save-the-oceans_2': {
    user: 'samantha', 
    img: {
      element: 'img', 
      path: 'Help-save-the-oceans_2.svg',
    }, 
    capt: `Two out of four posters made by <a href="/members/samantha">Samantha</a> to promote saving the oceans.`, 
    desc: `Made by: <a href="/members/samantha">Samantha</a>`, 
  }, 
  'Help-save-the-oceans_3': {
    user: 'samantha', 
    img: {
      element: 'img', 
      path: 'Help-save-the-oceans_3.svg',
    }, 
    capt: `Three out of four posters made by <a href="/members/samantha">Samantha</a> to promote saving the oceans.`, 
    desc: `Made by: <a href="/members/samantha">Samantha</a>`, 
  }, 
  'Help-save-the-oceans_4': {
    user: 'samantha', 
    img: {
      element: 'img', 
      path: 'Help-save-the-oceans_4.svg',
    }, 
    capt: `Four out of four posters made by <a href="/members/samantha">Samantha</a> to promote saving the oceans.`, 
    desc: `Made by: <a href="/members/samantha">Samantha</a>`, 
  }, 
  "DON'T-EAT-FROGS": {
    user: 'isabelle', 
    img: {
      element: 'img', 
      path: "DON'T-EAT-FROGS.svg",
    }, 
    capt: `A poster made by <a href="/members/isabelle">Isabelle</a> demanding that you not eat frogs.`, 
    desc: `Made by: <a href="/members/samantha">Isabelle</a>`, 
  }, 
  'Untitled-(800-x-1000-px)': {
    user: 'isabelle', 
    img: {
      element: 'img', 
      path: 'Untitled-(800-x-1000-px).svg',
    }, 
    capt: `A scenescape of a frog chilling out made by <a href="/members/isabelle">Isabelle</a>.`, 
    desc: `Made by: <a href="/members/samantha">Isabelle</a>`, 
  }, 
  Elarra: {
    user: 'shikha', 
    img: {
      element: 'img', 
      path: 'Elarra.png',
    }, 
    capt: `Elarra made by <a href="/members/shikha">Shikha</a>.`, 
    desc: `Made by: <a href="/members/shikha">Shikha</a>`, 
  }, 
  Fairy: {
    user: 'shikha', 
    img: {
      element: 'img', 
      path: 'Fairy.png',
    }, 
    capt: `Fairy made by <a href="/members/shikha">Shikha</a>.`, 
    desc: `Made by: <a href="/members/shikha">Shikha</a>`, 
  }, 
  c3: {
    user: 'shikha', 
    img: {
      element: 'img', 
      path: 'c3.png',
    }, 
    capt: `A charecter made by <a href="/members/shikha">Shikha</a>.`, 
    desc: `Made by: <a href="/members/shikha">Shikha</a>`, 
  }, 
  Rapunzel: {
    user: 'shikha', 
    img: {
      element: 'img', 
      path: 'Rapunzel.png',
    }, 
    capt: `Rapunzel made by <a href="/members/shikha">Shikha</a>.`, 
    desc: `Made by: <a href="/members/shikha">Shikha</a>`, 
  }, 
  'Did-you-know': {
    user: 'shikha', 
    img: {
      element: 'img', 
      path: 'Did-you-know.svg',
    }, 
    capt: `A post made by <a href="/members/shikha">Shikha</a> for <a href="https://instagram.com/4goodgraphics">Our Instagram</a> to educate you about climate change.`, 
    desc: `Made by: <a href="/members/shikha">Shikha</a>`, 
  }, 
  "Women's-History-Month!": {
    user: 'shikha', 
    img: {
      element: 'iframe', 
      path: "Women's-History-Month!.pdf",
    }, 
    capt: `A post made by <a href="/members/shikha">Shikha</a> for <a href="https://instagram.com/4goodgraphics">Our Instagram</a> to talk to you about womans rights.`, 
    desc: `Made by: <a href="/members/shikha">Shikha</a>`, 
  }, 
  'Birds-are-essential-for-our-environment!': {
    user: 'isabelle', 
    img: {
      element: 'img', 
      path: 'Birds-are-essential-for-our-environment!.svg',
    }, 
    capt: `A post made by <a href="/members/isabelle">Isabelle</a> for <a href="https://instagram.com/4goodgraphics">Our Instagram</a> to educate you about how birds are essential for our environment!.`, 
    desc: `Made by: <a href="/members/isabelle">Isabelle</a>`, 
  }, 
}

//alert(Math.ceil((MEMBER_WORK.length)/3))
function showItem(img, c, element=false, capt=false, desc=false, user=false) {
  let path = `/assets/${null}/${null}`
  if (element===false&&capt===false&&desc===false) {
    if (c !== 'user_portfolios') {
      c = CLUB_PHOTOS
      path = `/assets/${c['path']}/${c[img]['path']}`
      element = 'img'
      capt = c[img]['capt']
      desc = c[img]['desc']
    }
    else {
      c = MEMBER_WORK
      user = c[img]['user']
      path = `/assets/members/${user}/portfolio/${c[img]['img']['path']}`
      element = c[img]['img']['element']
      let cLink = document.querySelector("#cSpan").parentNode
      cLink.href = `javascript:hideModal('${element.replace('img', 'div')}')`
      capt = c[img]['capt']
      desc = c[img]['desc']
      while (capt.includes('  ')) {
        capt = capt.replace('  ', ' ')
      }
      while (capt.includes('<a target="_blank" href="/')) {
        capt = capt.replace('<a target="_blank" href="/', '<a href="/')
      }
      while (desc.includes('  ')) {
        desc = desc.replace('  ', ' ')
      }
      while (desc.includes('<a&nbap;href="')) {
        desc = desc.replace('<a&nbap;href="', '<a target="_blank" href="')
      }
      while (desc.includes('<a target="_blank" href="/')) {
        desc = desc.replace('<a target="_blank" href="/', '<a href="/')
      }
      if (c[img]['img']['path'] === 'YouTube'){
        img = `https://www.youtube-nocookie.com/embed/${c[img]['img']['vid_id']}`
      }
      else {
        img = c[img]['img']['path']
      }
    }
  }
  if (element === 'img') {
    element = 'div'
  }
  if (element === 'iframe' && img.includes('://')) {
    path = img
  }
  else if (c['path'] === 'user_portfolios') {
    path = `/assets/members/${user}/portfolio/${img}`
  }
  showModal(element, path, capt, desc)
}

document.querySelector('.carousel').querySelector('ul').querySelectorAll('li').forEach(e => {
  e = e.querySelector('img')
  if (e.src.endsWith('/blank.png') === false) {
    let fname = e.src.split(`${location.host}/assets/members/`)[1].split('/')[3].split('.')[0]
    let capt = `${MEMBER_WORK[fname]['capt']}. Click to enlarge!`.replace('.. ', '. ').replace('..', '.').replace('!. ', '! ').replace('!.', '!')
    let tElement = document.querySelector('[tElement]')
    tElement.innerHTML = capt
    e.setAttribute('title', tElement.innerText)
    e.addEventListener('click', function(e) {
      showItem(fname, 'user_portfolios')
    })
  }
})

//document.querySelector('[tElement]').innerHTML = ''