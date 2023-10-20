function showEruda() {
    var script = document.createElement('script');
    script.src="//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.addEventListener.onload = function () {
        eruda.init()
    };
}
showEruda()

if (!!parent) {
    if (!!parent.location) {
        if (!!parent.location.pathname) {
            var location = parent.location.pathname
            if (location.includes('://')) {
                location = location.split('://')[1]
            }
            if (location.endsWith('/')) {
                location.substring(0, location.split('').length)
            }
            if (!!location.endsWith('debug')) showEruda()
        }
    }
}