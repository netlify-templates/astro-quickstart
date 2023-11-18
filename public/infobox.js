var infoboxTransitionTime = '500ms'
var msg = 'Hello, do you copy?'
var infoboxEnabled = false


// ======================== ALL CONFIGURATION IS ABOVE THIS LINE ========================

if (!!infoboxEnabled) ifEnabled()
function ifEnabled() {
    var infobox = document.getElementById('infobox')
    infobox.style.setProperty('--transition-time', infoboxTransitionTime)

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
            showInfobox()
            setDim()
    
            localStorage.setItem('loadedInfobox', true)
            localStorage.setItem('infoboxMsgHTML', msg)
        }, 1000)
    }
}

function showInfobox() {
    infobox.show()
    infobox.style.opacity = 1
}
function closeInfobox() {
    infobox.style.opacity = 0
    var tTime = infoboxTransitionTime
    var valLen = 1
    var multAmt = 1
    if (tTime.endsWith('ms')) valLen++
    else multAmt = 1000
    tTime = parseFloat(tTime.substring(0, tTime.length-valLen))
    setTimeout(function() {
        infobox.close()
    }, tTime*multAmt)
}