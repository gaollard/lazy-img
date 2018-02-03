import {
  now,
  extend,
  throttle
} from '@/utils'

import {
  isIE,
  bindEvent,
  isSupportIO,
  inInterSection
} from '@/dom'

// default config option
const defaultConfig = {
  delay: 200,
  rootMargin: '0px',
  threshold: 0,
  selector: '.lazy-img'
}

// make marks for element which has loaded successfully
const markAsLoaded = element => {
  element.setAttribute('data-loaded', true)
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
  elements.forEach(element => {
    if (inInterSection(element)) {
      if (!isLoaded(element)) {
        loadImg(element)
        markAsLoaded(element)
      }
    }
  })
}

export default function (options = {}) {
  let observer
  let params = extend({}, defaultConfig, options)
  let elements = getElements(params.selector), len = elements.length
  return {
    observe() {
      console.log(isSupportIO ? '支持IntersectionObserver' : '不支持IntersectionObserver');
      if (isSupportIO) {
        observer = new IntersectionObserver(entries => {
          onIntersection(entries, observer)
        })
        for (let i = 0; i < len; i++) {
          if (isLoaded(elements[i])) {
            continue
          }
          if (observer) {
            observer.observe(elements[i])
            continue
          }
        }
        return
      }
      handleWindowScroll(elements)
      bindEvent(window, 'scroll', throttle(function() {
        handleWindowScroll(elements)
      }, params.delay));
    },
    triggerLoad(element) {
      if (isLoaded(element)) {
        return
      }
      load(element);
      markAsLoaded(element);
    }
  }
}