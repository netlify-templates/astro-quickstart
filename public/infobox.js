var msg = 'Hello, do you copy?'
var infoboxEnabled = false


// ======================== ALL CONFIGURATION IS ABOVE THIS LINE ========================

if (!!infoboxEnabled) ifEnabled()
function ifEnabled() {
    var infobox = document.getElementById('infobox')
    var inner = infobox.querySelector('.infobox-inner')
    
    
    setDim()
    function setDim() {
        infobox.style.setProperty('--h', `${infobox.clientHeight}px`)
        infobox.style.setProperty('--w', `${infobox.clientWidth}px`)
    }
    
    var prevMsg = localStorage.getItem('infoboxMsgHTML')
    if (prevMsg === null) {
        localStorage.setItem('infoboxMsgHTML', '')
        prevMsg = ''
    }
    
    var loadedInfobox = localStorage.getItem('loadedInfobox')
    if (loadedInfobox === null || msg !== prevMsg) {
        localStorage.setItem('loadedInfobox', false)
        loadedInfobox = 'false'
    }
    
    if (loadedInfobox === 'false') {
        setTimeout(function() {
            inner.innerHTML = msg
            infobox.show()
            setDim()
    
            localStorage.setItem('loadedInfobox', true)
            localStorage.setItem('infoboxMsgHTML', msg)
        }, 1000)
    }
}