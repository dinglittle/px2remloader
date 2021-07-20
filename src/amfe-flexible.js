let docEl = document.documentElement;
var dpr = window.devicePixelRatio || 1
function setBodyFontSize () {
  if (document.body) {
    document.body.style.fontSize = (12 * dpr) + 'px'
  } else {
    // 当纯HTML被完全加载以及解析时，DOMContentLoaded 事件会被触发，而不必等待样式表，图片或者子框架完成加载
    document.addEventListener('DOMContentLoaded', setBodyFontSize)
  }
}
setBodyFontSize()
function setRemUnit () {
  // 750px
  let rem = docEl.clientWidth / 10 // 实际宽度/10 就是一个 rem 大小
  docEl.style.fontSize = rem + 'px'
}
setRemUnit()
window.addEventListener('resize', setRemUnit)