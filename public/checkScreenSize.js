setInterval(checkSize, 1)

function checkSize() {
  let wWidth = document.documentElement.clientWidth
  if (wWidth <= 800) {
    let amt = Math.ceil(wWidth/25)-33
    amt = amt-amt-amt
    if (wWidth < 800) {
      amt = amt-1
    }
    document.documentElement.style.width = `calc(100% + calc(32px*${amt}))`
  }
}