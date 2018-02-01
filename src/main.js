import {
    isIE,
    extend,
    bindEvent,
    isSupportIO,
    inInterSection
} from '@/utils/index'

// default config option
const defaultConfig = {
    rootMargin: '0px',
    threshold: 0,
    selector: '.lazy-img'
}

// make marks for element which has loaded successfully
const markAsLoaded = element => {
    element.setAttribute('data-loaded', true);
}

// judge a element if it is loaded with img resource
const isLoaded = element => {
    return element.getAttribute('data-loaded') === 'true'
}

// get element
const getElements = selector => {
    if (selector instanceof Element) {
        return [selector]
    }
    if (selector instanceof NodeList) {
        return selector
    }
    return document.querySelectorAll(selector)
}

// only for img tag now
const loadImg = (element) => {
    if (element.nodeName === 'IMG') {
        if (element.getAttribute('data-src')) {
            element.src = element.getAttribute('data-src')
        }
    }
}

// excute when element'invisibility changed
const onIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target)
            if (!isLoaded(entry.target)) {
                loadImg(entry.target)
                markAsLoaded(entry.target)
            }
        }
    })
}

const handleWindowScroll = (elements) => {
    console.log('scroll')
    elements.forEach(element => {
        console.log(element);
        if (inInterSection(element)) {
            console.log(element);
            if (!isLoaded(element)) {
                loadImg(element)
                markAsLoaded(element)
            }
        }
    })
}

const lazy = function(options = {}) {
    let observer;
    let params = extend({}, defaultConfig, options);
    let elements = getElements(params.selector), len = elements.length;
    if (isSupportIO) {
        observer = new IntersectionObserver(entries => {
            onIntersection(entries, observer)
        })
    }
    /**
     * 对外暴露两个方法
     */
    return {
        // 开始观测
        observe() {
            // if (isSupportIO) {
            //     for (let i = 0; i < len; i++) {
            //         if (isLoaded(elements[i])) {
            //             continue
            //         }
            //         if (observer) {
            //             observer.observe(elements[i]);
            //             continue
            //         }
            //         // 不支持时直接去加载吧
            //         load(elements[i]);
            //         markAsLoaded(elements[i]);
            //     }
            // }
            bindEvent(window, 'scroll', () => {
                handleWindowScroll(elements);
            })
        },
        // 直接触发
        triggerLoad(element) {
            if (isLoaded(element)) {
                return
            }
            load(element);
            markAsLoaded(element);
        }
    }
}

window.observer = lazy();
observer.observe();
