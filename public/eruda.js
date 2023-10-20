function showEruda() {
    var script = document.createElement('script');
    script.src="//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.addEventListener.onload = function () {
        eruda.init()
    };
}
// showEruda()

// if (!!parent) {
//     if (!!parent.location) {
//         var pLocation = parent.location.pathname
//         if (!!pLocation) {
//             if (pLocation.includes('://')) {
//                 pLocation = pLocation.split('://')[1]
//             }
//             if (pLocation.endsWith('/')) {
//                 pLocation.substring(0, pLocation.split('').length)
//             }
//             if (!!pLocation.endsWith('debug')) showEruda()
//         }
//     }
// }