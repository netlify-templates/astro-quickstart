if (!!window) {
    if (!!parent) {
        var pLocation = parent.location
        if (!!pLocation) {
            var pLocationPathname = pLocation.pathname
            if (!!pLocationPathname) {
                if (pLocationPathname.includes('://')) {
                    pLocationPathname = pLocationPathname.split('://')[1]
                }
                if (pLocationPathname.includes('/')) {
                    pLocationPathname = pLocationPathname.split('/')
                    if (pLocationPathname.endsWith('/')) {
                        pLocationPathname.substring(0, pLocationPathname.split('').length)
                    }
                    var canProceed = false
                    if (pLocationPathname.length < 1) {
                        if (pLocationPathname[1] === 'debug') canProceed = true
                    }
                    else {
                        pLocationPathname.forEach(function(p, i) {
                            if (p === 'debug') canProceed = true
                        })
                    }
                    if (!!canProceed) showEruda()
                }
            }
        }
    }
}

function showEruda() {
    var script = document.createElement('script');
    script.src="//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.addEventListener.onload = function () {
        eruda.init()
    };
}
