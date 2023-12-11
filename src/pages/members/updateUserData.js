import defaultBio from './defaultBio.js'
import getUserGrade from './getUserGrade.js'

function updateUserData(userData) {
  userData.nameNoTitle = userData.name

  if (!!userData.role === false) userData.role = {}
  if (!!userData.role.name === false) {
    userData.role.name = 'Member'
    userData.role.hide = true
  }
  if (!!userData.role.hide === false) userData.role.hide = false

  if (!!userData.pfp.g4g) {
    userData.pfp.url = `/assets/members/${userData.username}/pfps/pfp-${userData.pfp.g4g.sizes[0].name}.${userData.pfp.g4g.sizes[0].ext}`.replace('-full', '')
  }
  else {
    if (!!userData.pfp.google.a === false) {
      userData.pfp.google.a = 'a'
    }
    userData.pfp.url = `https://lh3.googleusercontent.com/${userData.pfp.google.a}/${userData.pfp.google.url}=s128`
  }
  
  if (!!userData.email.g4g) {
    userData.email.address = `${userData.username}@graphics-for-good.com`
  }
  else {
    let uName = userData.name

    let eUserName = uName.split(' ')
    eUserName = `${eUserName[0].split('')[0]}${eUserName[eUserName.length-1]}`
    // if (!!userData.email) {
    //   if (!!userData.email.dtech) {
    //     if (!!userData.email.dtech.email) {
    //       eUserName = userData.email.dtech.email
    //     }
    //   }
    // }
    userData.email.address = `${eUserName}${userData.email.dtech.year}`.toLowerCase() + '@dtechhs.org'
  }
  
  userData.location.combined = `${userData.location.city}, ${userData.location.state}<BLAHBLAH>`
    .replace(', <BLAHBLAH>', '').replace('<BLAHBLAH>', '')
  
  userData.location.mapLink = userData.location.combined
  while (userData.location.mapLink.includes(' ')) {
    userData.location.mapLink = userData.location.mapLink.replace(' ', '+')
  }
  userData.location.mapLink = `https://www.google.com/maps/place/${userData.location.mapLink}`
  
  userData.socials.forEach(function(social, i) {
    userData.socials[i].icon = `/assets/icons/${social.name.toLowerCase()}.svg`
  })
  
  var grade = getUserGrade(userData.email.dtech.year)

  if (!!userData.bio === false) {
    userData.bio = {}
  }
  if (!!userData.bio.custom) {
    userData.bio.result = userData.bio.custom.replace('{pronunciation}', '')
  }
  else {
    if (!!userData.bio.w1 === false) userData.bio.w1 = false
    if (!!userData.bio.w2 === false) userData.bio.w2 = false
    if (!!userData.bio.removeAnd === false) userData.bio.removeAnd = false
    userData.bio.result = defaultBio(userData.name, grade, userData.bio.w1, userData.bio.w2, userData.role.name, userData.bio.removeAnd)
    if (!!userData.bio.end) {
      if (userData.bio.result.endsWith(' ') === false) {
        userData.bio.result = `${userData.bio.result} `
      }
      userData.bio.result = `${userData.bio.result}${userData.bio.end}`
    }
  }

  if (userData.bio.result.includes('{pronunciation}')) {
    // if (!!userData.pronunciation) {
    //   userData.bio.result = userData.bio.result.replace('{pronunciation}', userData.pronunciation)
    // }
    // else {
      userData.bio.result = userData.bio.result.replace('{pronunciation}', '')
    // }
  }
  
  userData.portfolio.forEach(function(photo, i) {
    var path = ''
    var pImg = photo.img
    var element = pImg.element
    if (!!element === false) element = 'object'
      
    var pPath = pImg.path
    var pName = pPath.split('.')
    var pExt = pName.pop()
    if (pName.length === 3) {
      pExt = `${pName.pop()}.${pExt}`
    }
    pName = pPath.join('.')

    if (pExt.endsWith('pdf') || pExt.endsWith('svg')) {
      if (pExt.includes('.')) pExt = pExt.split('.')
      else pExt = [pExt]
      pExt.pop()
      pExt = `${pExt.join('.')}png`
    }
  
    if (!pPath.includes('://')) {
      path = `/assets/members/${userData.username}/portfolio/previews/${pName}.${pExt}`
    }
    else {
      path = pPath
    }
                    
    var capt = photo['capt']
    while (capt.includes('<a target="_blank" href="/')) {
      capt = capt.replace('<a target="_blank" href="/', '<a href="/')
    }
                    
    var desc = photo['desc']
    while (desc.includes('<a target="_blank" href="/')) {
      desc = desc.replace('<a target="_blank" href="/', '<a href="/')
    }
  
    if (pPath === 'YouTube') {
      pPath = `https://www.youtube-nocookie.com/embed/${pImg['vid_id']}?rel=0`
      path = `https://img.youtube.com/vi/${pImg['vid_id']}/maxresdefault.jpg`
    }
    var title = `${capt}. Click to enlarge!`.replace('..', '.').replace('!.', '!')
    title = title.split('<')
    title.forEach(function(t, i) {
      if (t.includes('>')) {
        t = t.split('>')[1]
        title[i] = t
      }
    })
    title = title.join('')
    let onclickVal = "showItem('" + pPath + "', '" + element + "', '" + capt + "', '" + desc + "', 'p'"  + ")"
    userData.portfolio[i].src = path
    userData.portfolio[i].title = title
    userData.portfolio[i].onclick = onclickVal
  })

  return userData
}
  
export default updateUserData