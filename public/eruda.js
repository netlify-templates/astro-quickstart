var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() };
setTimeout(function() {
  if (!!document.getElementById('eruda').getAttribute('style')) {
    document.getElementById('eruda').removeAttribute('style')  
  }
}, 100)
