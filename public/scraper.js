if (location.pathname === '/scraper') {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var pr = urlParams.get('url')
  if (!pr) pr = prompt('URL PLEASE')
  if (pr !== null && !!pr) {
    scrape(pr)
  }
}
function scrape(p) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", scrapeActions)
  xhr.addEventListener("error", function() {
    location.href = p
  })
  xhr.open("GET", p);
  xhr.send();
}

function scrapeActions() {
  if (this.status === 200) {
    var response = this.response
    var innerHTML = response
      .split('<html')[1]
      .split('</html>')[0]
    innerHTML = innerHTML
      .split(`${innerHTML.split('>')[0]}>`)[1]
    document.documentElement.innerHTML = innerHTML
  }
  else location.href = p
}
