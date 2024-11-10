var profile = document.querySelector('.profile')

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var urlPath = location.pathname
if (urlPath.endsWith('/')) {
  urlPath = urlPath.substring(0, urlPath.split('').length - 1)
}

var user = ''
if (urlPath.split('/').length >= 3) {
  user = urlPath.split('/')[2]
}
else user = urlParams.get('m')