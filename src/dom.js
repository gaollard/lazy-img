// 是否在可视区域内
export function inInterSection(element) {
  let offsetHeight = element.offsetHeight;
  let offsetTop = element.offsetTop;
  let scrollTop = window.scrollY;
  let winHeight = window.innerHeight;
  return offsetTop <= winHeight + scrollTop
}

// 添加事件
export function bindEvent(element, type, handle) {
  element.addEventListener(type, handle);
}

// 是否为IE浏览器（IE8以上都支持）
export const isIE = !!document.documentMode

// 是否支持交叉监听器
export const isSupportIO = !!window.IntersectionObserver
