export function isObject(obj) {
    return typeof obj === 'object' &&
        obj !== null &&
        obj.constructor &&
        obj.constructor === Object;
}

export function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}

export function extend(...args) {
    const to = Object(args[0]);
    for (let i = 1; i < args.length; i += 1) {
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
            const keysArray = Object.keys(Object(nextSource));
            for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        Utils.extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        extend(to[nextKey], nextSource[nextKey]);
                    } else {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
    }
    return to;
}

// 是否为IE浏览器（IE8以上都支持）
export const isIE = !!document.documentMode

// 是否支持交叉监听器
export const isSupportIO = !!window.IntersectionObserver

// 添加事件
export function bindEvent(element, type, handle) {
    element.addEventListener(type, handle);
}

// 是否在可视区域内
export function inInterSection(element) {
    let offsetWidth = element.offsetWidth;
    let offsetHeight = element.offsetHeight;

    let offsetTop = element.offsetTop;
    let offsetLeft = element.offsetLeft;

    let scrollLeft = window.scrollX;
    let scrollTop = window.scrollY;

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    return ((offsetTop <= winHeight + scrollTop) && (offsetLeft <= winWidth + scrollLeft))
}
