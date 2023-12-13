var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
let item = !!urlParams.get('i')
let ITEMS = [
  'templates', 
  'sDrive', 
  'slack', 
]

let NAMES = {
  templates: 'Email Templates', 
  sDrive: 'Google Shared Drive', 
  slack: 'G4G Slack', 
}

let HTMLS = {
  templates: 'PGRpdiBpZD0iZW1haWx0ZW1wbGF0ZXRleHQiIGFsaWduPSJsZWZ0Ij48aDI+SGVyZSBhcmUgc29tZSBlbWFpbCB0ZW1wbGF0ZXMgaWYgeW91IGNhbnQgdGhpbmsgb2Ygb25lPC9oMj48L2Rpdj48Y2VudGVyPjxkaXYgY2xhc3M9InRlbXBsYXRlIiBhbGlnbj0ibGVmdCI+PHA+SGVsbG8gX19fX19fX18sIDxicj48YnI+SSdtIF9fX18gZnJvbSBncmFwaGljcyBmb3IgZ29vZC48YnI+IFdlJ3JlIGEgY2x1YiB0aGF0IHJlYWNoZXMgb3V0IHRvIG5vbnByb2ZpdHMgYW5kIG1ha2VzIGdyYXBoaWNzIGZvciB0aGVtLiA8YnI+SSB3b3VsZCBsaWtlIHRvIGtub3cgaWYgeW91IHdvdWxkIGJlIGludGVyZXN0ZWQgaW4gdXNpbmcgdGhpcyBhdHRhY2hlZCBncmFwaGljIGZvciB5b3VyIHdlYnNpdGUuIDxicj5Vc2luZyBvdXIgZ3JhcGhpY3Mgd291bGQgaGVscCBvdXIgY2x1YiBvdXQgYSBsb3QuPGJyPjxicj5UaGFuayB5b3UhIDxicj5fX19fIF9fX188YnI+RGVzaWduIFRlY2ggSGlnaCBTY2hvb2w8YnI+X19fX19fQGR0ZWNoaHMub3JnPC9wPjwvZGl2PjxkaXYgY2xhc3M9InRlbXBsYXRlIiBhbGlnbj0ibGVmdCI+PHA+SGVsbG8gX19fX19fX18sPGJyPlRoYW5rIHlvdSBmb3IgcmVwbHlpbmcgdG8gbXkgZW1haWwuPGJyPiBJIGFtIGhhcHB5IHRvIHdvcmsgd2l0aCB5b3Ugb24gdGhpcyBwcm9qZWN0Ljxicj48YnI+VGhhbmsgeW91ISA8YnI+X19fXyBfX19fPGJyPkRlc2lnbiBUZWNoIEhpZ2ggU2Nob29sPGJyPl9fX19fX0BkdGVjaGhzLm9yZzwvcD48L2Rpdj48ZGl2IGNsYXNzPSJ0ZW1wbGF0ZSIgYWxpZ249ImxlZnQiPjxwPkhlbGxvIF9fX19fX19fLDxicj5VbmZvcnR1bmF0bGV5IHdlIHdvdWxkbnQgYmUgYWJsZSB0byBkbyB0aGlzIHByb2plY3QgYmVjYXVzZSB3ZSBkbyBub3QgaGF2ZSB0aGUgcmVzb3VyY2VzIHRvIGNvbXBsYXRlIHRoaXMgcHJvamVjdDxicj48YnI+VGhhbmsgeW91ISA8YnI+X19fXyBfX19fPGJyPkRlc2lnbiBUZWNoIEhpZ2ggU2Nob29sPGJyPl9fX19fX0BkdGVjaGhzLm9yZzwvcD48L2Rpdj48ZGl2IGNsYXNzPSJ0ZW1wbGF0ZSIgYWxpZ249ImxlZnQiPjxwPkhlbGxvIF9fX19fX19fLDxicj5XZSBoYXZlIGJlZW4gd29ya2luZyBvbiB0aGlzIHByb2plY3QgZm9yIGEgd2hpbGUgYW5kIGhlcmUgYXJlIHNvbWUgb2YgdGhlIGdyYXBoaWNzIHdlIG1hZGU6PGJyPjxicj5UaGFuayB5b3UhIDxicj5fX19fIF9fX188YnI+RGVzaWduIFRlY2ggSGlnaCBTY2hvb2w8YnI+X19fX19fQGR0ZWNoaHMub3JnPC9wPjwvZGl2PjwvY2VudGVyPg==', 
  sDrive: 'PGEgb25sb2FkPSJsb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vZzRnLnJvY2tnYW1lcmFrLmNvbS9zRHJpdmUvTG9naW4nIj48L2E+', 
  slack: 'QXNrIDxhIGhyZWY9Ii9tZW1iZXJzLmh0bWw/bT1hZGFyc2giPkFkYXJzaDwvYT4gdG8gYWRkIHlvdSB0byA8YSBocmVmPSJodHRwczovL2dyYXBoaWNzNGdvb2Quc2xhY2suY29tIj5ncmFwaGljczRnb29kLnNsYWNrLmNvbTwvYT4h', 
}

if (item === true) {
  setItem()
}
else {
  addItems()
}

function addItems() {
  let element = document.querySelector('#portal .hero ul')
  ITEMS.forEach(item => {
    let iname = NAMES[item]
    
    let a = document.createElement('a')
    a.href = `/portal?i=${item}`
    
    let li = document.createElement('li')
    a.appendChild(li)
    li.innerHTML = iname

    element.appendChild(a)
    localStorage.setItem('p', correct)
  })
}

function setItem() {
  item = urlParams.get('i')
  let name = NAMES[item]
  let html = atob(HTMLS[item])
  document.title = `${name} | ${document.title.replace('Members ', '')}`
  let element = document.querySelector('section')
  element.className = 'pitem'
  element.querySelector('header').querySelector('h1').innerHTML = name
  element.querySelector('main').innerHTML = html// + atob('PHNjcmlwdCBzcmM9Ii9lcnVkYS5qcyI+PC9zY3JpcHQ+')
}