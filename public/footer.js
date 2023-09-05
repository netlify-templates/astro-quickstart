var footer = document.createElement('footer')
var fSpan = footer.appendChild(document.createElement('span'))
var page = location.pathname.substring(1)
if (!!page === false) {
  page = 'index'
  // page = 'members'
}
var uMember = 'adarsh'
var uMemberName = `${uMember.split('')[0].toUpperCase()}${uMember.substring(1)}`
var fWord = 'Site'
if (!!pageDates[page]) {
  siteUpdatedDate = pageDates[page]
  fWord = 'Page'
}
var siteUpdatedDate = '09/01/2023'
var pageDates = {
  // members: '04/27/2023'
}

var unixSiteUpdated = new Date(siteUpdatedDate).getTime()/1000
var newSiteUpdatedDate = (new Date(siteUpdatedDate))
var siteUpdatedDateStr = String(newSiteUpdatedDate).substring(0, 15)
  .replace('Sun', 'Sunday')
  .replace('Mon', 'Monday')
  .replace('Tue', 'Tuesday')
  .replace('Wed', 'Wednesday')
  .replace('Thu', 'Thursday')
  .replace('Fri', 'Friday')
  .replace('Sat', 'Saturday')
  .replace('Jan', 'January')
  .replace('Feb', 'February')
  .replace('Mar', 'March')
  .replace('Apr', 'April')
  .replace('May', 'May')
  .replace('Jun', 'June')
  .replace('Jul', 'July')
  .replace('Aug', 'August')
  .replace('Sep', 'September')
  .replace('Oct', 'October')
  .replace('Nov', 'November')
  .replace('Dec', 'December')
var siteUpdatedDateStrS = siteUpdatedDateStr.split(' ')
if (siteUpdatedDateStrS[2].startsWith('0')) {
  siteUpdatedDateStrS[2] = siteUpdatedDateStrS[2].substring(1)
}
if (siteUpdatedDateStrS[2].endsWith('1') && siteUpdatedDateStr[2] !== '11') {
  siteUpdatedDateStrS[2] = `${siteUpdatedDateStrS[2]}st`
}
else if (siteUpdatedDateStrS[2].endsWith('2') && siteUpdatedDateStr[2] !== '12') {
  siteUpdatedDateStrS[2] = `${siteUpdatedDateStrS[2]}nd`
}
else if (siteUpdatedDateStrS[2].endsWith('3') && siteUpdatedDateStr[2] !== '13') {
  siteUpdatedDateStrS[2] = `${siteUpdatedDateStrS[2]}rd`
}
else {
  siteUpdatedDateStrS[2] = `${siteUpdatedDateStrS[2]}th`
}
siteUpdatedDateStr = `${siteUpdatedDateStrS[0]} ${siteUpdatedDateStrS[1]} ${siteUpdatedDateStrS[2]} ${siteUpdatedDateStrS[3]}`

fSpan.innerHTML = `${fWord} Updated on ${siteUpdatedDateStr} by&nbsp;<a href="/members/${uMember}">${uMemberName}</a>&nbsp;| Check Status at&nbsp;<a href="/status">/status</a>.`
document.body.appendChild(footer)