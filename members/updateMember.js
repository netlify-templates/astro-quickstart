function updateUserData(userData) {
    if (userData.default) {
        userData = userData.default

        var grade = 'Unknown'
        if (userData.email) {
            grade = getUserGrade(userData.email.dtech.year)
        }
        if ((grade === 'Graduated' && userData.status !== 'activeGrad') || userData.status === 'inactive') {
            userData = updateLeftData(userData)
            return userData
        }
        
        if (!!userData.role === false) userData.role = {}
        if (!!userData.role.name === false) {
            userData.role.name = 'Member'
        }
        if (!userData.pfp) userData.pfp = {}
        if (userData.pfp.g4g) {
            userData.pfp.url = `/assets/members/${userData.username}/pfps/pfp-${userData.pfp.g4g.sizes[0].name}.${userData.pfp.g4g.sizes[0].ext}`.replace('-full', '')
        }
        else {
            if (!userData.pfp.google) userData.pfp.google = {}
            if (!!userData.pfp.google.a === false) {
            userData.pfp.google.a = 'a'
            }
            userData.pfp.url = `https://lh3.googleusercontent.com/${userData.pfp.google.a}/${userData.pfp.google.url}=s128`
        }
    
    
        if (!userData.email) userData.email = {}
        if (!!userData.email.g4g) {
            userData.email.address = `${userData.username}@graphics-for-good.com`
        }
        else {
            let uName = userData.name
    
            let eUserName = uName
            if (eUserName.includes(' ')) {
                eUserName = eUserName.split(' ')
            }
            else eUserName = [eUserName]
            let lName = eUserName[eUserName.length-1]
            if (lName.includes('-')) {
                lName = lName.split('-')
                lName = lName.join('')
            }

            var initial = eUserName[0].slice(0, 1)
            if (userData.email.dtech.initial) initial = userData.email.dtech.initial

            eUserName = `${initial}${lName}`.toLowerCase()
            // if (!!userData.email) {
            //   if (!!userData.email.dtech) {
            //     if (!!userData.email.dtech.email) {
            //       eUserName = userData.email.dtech.email
            //     }
            //   }
            // }
            if (!userData.email.dtech) userData.email.dtech = {year: 0}
            userData.email.address = `${eUserName}${userData.email.dtech.year}` + '@dtechhs.org'
        }
    
        if (userData.location) {
            if (!Array.isArray(userData.location) && typeof userData.location !== 'object') userData.location = {}
            if (userData.location.city && userData.location.state) userData.location.combined = `${userData.location.city}, ${userData.location.state}`
            else if (userData.location.city) userData.location.combined = userData.location.city
            else if (userData.location.state) userData.location.combined = userData.location.state

            if (userData.location.city || userData.location.state) {
                userData.location.mapLink = userData.location.combined
                while (userData.location.mapLink.includes(' ')) {
                    userData.location.mapLink = userData.location.mapLink.split(' ').join('+')
                }
                userData.location.mapLink = `https://www.google.com/maps/place/${userData.location.mapLink}`
            }
        }
    
        if (userData.socials) {
            userData.socials.forEach(function(social, i) {
            userData.socials[i].icon = `/assets/icons/${social.name.toLowerCase()}.svg`
            })
        }
        else userData.socials = []
    
        if (!!userData.bio === false) {
            userData.bio = {}
        }
        if (!!userData.bio.custom) {
            userData.bio.result = userData.bio.custom
        }
        else {
            if (!!userData.bio.w1 === false) userData.bio.w1 = false
            if (!!userData.bio.w2 === false) userData.bio.w2 = false
            if (!!userData.bio.removeAnd === false) userData.bio.removeAnd = false
    
            var role = userData.bio.role
            if (!role) role = userData.role.name
    
            var pronounciation = ''
            if (!!userData.pronunciation) {
                pronounciation = userData.pronunciation
            }
            
            userData.bio.result = defaultBio(userData.name, grade, userData.bio.w1, userData.bio.w2, role, pronounciation, userData.bio.removeAnd)
            if (!!userData.bio.end) {
            if (userData.bio.result.endsWith(' ') === false) {
                userData.bio.result = `${userData.bio.result} `
            }
            userData.bio.result = `${userData.bio.result}${userData.bio.end}`
            }
        }
    
        if (userData.portfolio) {
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
            pName = pName.join('.')
    
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
    
            var capt = photo.capt
            while (capt.includes('<a target="_blank" href="/')) {
                capt = capt.replace('<a target="_blank" href="/', '<a href="/')
            }
    
            var desc = photo.desc
            while (desc.includes('<a target="_blank" href="/')) {
                desc = desc.replace('<a target="_blank" href="/', '<a href="/')
            }
    
            if (pPath === 'YouTube') {
                pPath = `https://www.youtube-nocookie.com/embed/${pImg.vid_id}?rel=0`
                path = `https://img.youtube.com/vi/${pImg.vid_id}/maxresdefault.jpg`
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
        }
        else userData.portfolio = []
    }
    return userData
}

function updateLeftData(userData) {
    let dateObjFromDate = new Date(userData.date)
    if (!!dateObjFromDate) {
      dateObjFromDate = dateObjFromDate.toDateString()
      if (dateObjFromDate === 'Invalid Date') dateObjFromDate = userData.date
    }
  
    let leftDefaultBio = defaultBio(userData.name, getUserGrade(userData.year))
        .replace(' a Member of ', ' was a Member of ')
    leftDefaultBio = leftDefaultBio.slice(0, leftDefaultBio.length - 1)
    var bioText = `${leftDefaultBio} until ${dateObjFromDate}.`
  
    if (typeof userData.graduated === 'object' && !!userData.graduated[0] === false) {
      bioText = `${bioText} They graduated in ${userData.graduated.year}`
    }

    userData.bio = {result: bioText}

    return userData
  }
  
function defaultBio(name, grade, w1, w2, role, pronunciation, removeAnd) {
    if (!!w1 === false) {
      w1 = 'a'
    }
    if (!!w2 === false) {
      w2 = 'of'
    }
    if (!!name === false) {
      name = ''
    }
    if (!removeAnd === false) {
      removeAnd = ', '
    }
    else {
      removeAnd = ' and '
    }
    if (name.includes('(') && name.includes(')')) {
      name = name.split('(')[1].split(')')[0]
    }
    if (!!role === false) role = 'Member'
    return `${name}${pronunciation || ''} is a ${grade} at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City${removeAnd}${w1} ${role} ${w2} the Graphics for Good club.`
}

function getUserGrade(gradYear) {
    let century = parseInt(`${new Date().getFullYear().toString().slice(0, 2)}00`)
    gradYear += century
    let currentYear = new Date().getFullYear()
    let yearsLeft = gradYear - currentYear
  
    let currentMonth = new Date().getMonth()+1
    if (currentMonth < 6) {
        yearsLeft++
    }
    
    let currentDate = new Date().getDate()
    if (currentMonth === 6 && currentDate <= 30/2) {
        yearsLeft++
    }
  
    let gradesObj = [
        'Senior', 
        'Junior', 
        'Sophomore', 
        'Freshman'
    ]
    let grade = ''
    yearsLeft--
    if (yearsLeft >=0 && yearsLeft < 5) {
        grade = gradesObj[yearsLeft]
    }
    else if (yearsLeft < 1) {
        grade = 'Graduated'
    }
    else {
        grade = 'Unknown'
    }
    return grade
}
  
export default updateUserData