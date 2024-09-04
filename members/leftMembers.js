function updateLeftData(userData, defaultBio) {
  let dateObjFromDate = new Date(userData.date)
  if (!!dateObjFromDate) {
    dateObjFromDate = dateObjFromDate.toDateString()
    userData.date = dateObjFromDate
  }

  let leftDefaultBio = defaultBio(userData.name)
    .replace('{pronunciation}', '')
    .replace(' is ', ' was ')
  leftDefaultBio = leftDefaultBio.substr(0, leftDefaultBio.length - 1)
  var bioText = `${leftDefaultBio} until ${userData.date}.`

  if (typeof userData.graduated === 'object' && !!userData.graduated[0] === false) {
    bioText = `${bioText} They graduated in ${userData.graduated.year}`
  }
  userData.bio = bioText

  return userData
}

export default updateLeftData