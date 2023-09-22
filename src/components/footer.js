var pageDates = {
  // members: '04/27/2023'
}

var page = location.pathname.substring(1)
if (!!page === false) {
  page = 'index'
  // page = 'members'
}
if (!!pageDates[page]) {
  siteUpdatedDate = pageDates[page]
  var fWord = 'Page'
}