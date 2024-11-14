function updateUserData(userData, portfolio) {
    if (userData) {
        var grade = 'Unknown'
        if (userData.email) {
            grade = getUserGrade(userData.email.year)
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
        if (userData.email.initial) initial = userData.email.initial

        eUserName = `${initial}${lName}`.toLowerCase()

        // Username Override
        if (!!userData.email) {
          if (!!userData.email) {
            if (!!userData.email.username) {
              eUserName = userData.email.username
            }
          }
        }

        if (!userData.email) userData.email = {year: ''}
        if (!userData.email.year) userData.email.year = ''
        userData.email.address = `${eUserName}${userData.email.year}` + '@dtechhs.org'
    
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
    }
    return userData
}

function updateLeftData(userData) {
    let dateObjFromDate = new Date(userData.date)
    if (!!dateObjFromDate) {
      dateObjFromDate = dateObjFromDate.toDateString()
      if (dateObjFromDate === 'Invalid Date') dateObjFromDate = userData.date
    }
  
    let leftDefaultBio = defaultBio(userData.name, getUserGrade(userData.year), 'left')
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
    if (removeAnd) {
      removeAnd = ', '
    }
    else {
      removeAnd = ' and '
    }
    if (name.includes('(') && name.includes(')')) {
      name = name.split('(')[1].split(')')[0]
    }

    if (!!role === false) role = 'Member'
    if (w1 === 'left') {
        grade = 'Student'
    }

    var bio = `${name}${pronunciation || ''} is a ${grade}`
    if (w1 !== 'left') {
        bio += ' at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City'
    }
    if (w1 === 'left') {
        w1 = 'a'
      }
    bio += `${removeAnd}${w1} ${role} ${w2} Graphics for Good.`

    return bio
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