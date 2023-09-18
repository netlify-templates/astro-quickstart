import defaultBio from './defaultBio.js'

function updateLeftMemberData(userData) {
  let dateObjFromDate = new Date(userDate.date)
  if (!!dateObjFromDate) {
    dateObjFromDate = dateObjFromDate.toDateString()
    userDate.date = dateObjFromDate
  }

  let leftDefaultBio = defaultBio()
    .replace('{pronouciation}', '')
    .replace(' is ', ' was ')
  leftDefaultBio.substr(0, leftDefaultBio.length - 1)
  var bioText = `${leftDefaultBio} until ${userData.date}.`
  
  if (typeof userData.graduated === 'object' && !!userData.graduated[0] === false) {
    bioText = `${bioText} They graduated in ${userData.graduated.year}`
  }
  userData.bio = bioText
}
  
export default updateLeftMemberData  