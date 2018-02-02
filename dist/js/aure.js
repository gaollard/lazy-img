!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},observer=void 0,params=(0,_utils.extend)({},defaultConfig,options),elements=getElements(params.selector),len=elements.length;return{observe:function(){if(console.log(_dom.isSupportIO?"支持IntersectionObserver":"不支持IntersectionObserver"),_dom.isSupportIO){observer=new IntersectionObserver(function(entries){onIntersection(entries,observer)});for(var i=0;i<len;i++)isLoaded(elements[i])||observer&&observer.observe(elements[i])}else handleWindowScroll(elements),(0,_dom.bindEvent)(window,"scroll",(0,_utils.throttle)(function(){handleWindowScroll(elements)},params.delay))},triggerLoad:function(element){isLoaded(element)||(load(element),markAsLoaded(element))}}};var _utils=__webpack_require__(1),_dom=__webpack_require__(2),defaultConfig={delay:200,rootMargin:"0px",threshold:0,selector:".lazy-img"},markAsLoaded=function(element){element.setAttribute("data-loaded",!0)},isLoaded=function(element){return"true"===element.getAttribute("data-loaded")},getElements=function(selector){return selector instanceof Element?[selector]:selector instanceof NodeList?selector:document.querySelectorAll(selector)},loadImg=function(element){"IMG"===element.nodeName&&element.getAttribute("data-src")&&(element.src=element.getAttribute("data-src"))},onIntersection=function(entries,observer){entries.forEach(function(entry){entry.intersectionRatio>0&&(observer.unobserve(entry.target),isLoaded(entry.target)||(loadImg(entry.target),markAsLoaded(entry.target)))})},handleWindowScroll=function(elements){elements.forEach(function(element){(0,_dom.inInterSection)(element)&&(isLoaded(element)||(loadImg(element),markAsLoaded(element)))})}},function(module,exports,__webpack_require__){"use strict";function now(){return(new Date).getTime()}function isObject(obj){return"object"===(void 0===obj?"undefined":_typeof(obj))&&null!==obj&&obj.constructor&&obj.constructor===Object}function nextTick(callback){var delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return setTimeout(callback,delay)}function extend(){for(var to=Object(arguments.length<=0?void 0:arguments[0]),i=1;i<arguments.length;i+=1){var nextSource=arguments.length<=i?void 0:arguments[i];if(void 0!==nextSource&&null!==nextSource)for(var keysArray=Object.keys(Object(nextSource)),nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex+=1){var nextKey=keysArray[nextIndex],desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);void 0!==desc&&desc.enumerable&&(isObject(to[nextKey])&&isObject(nextSource[nextKey])?Utils.extend(to[nextKey],nextSource[nextKey]):!isObject(to[nextKey])&&isObject(nextSource[nextKey])?(to[nextKey]={},extend(to[nextKey],nextSource[nextKey])):to[nextKey]=nextSource[nextKey])}}return to}function myDebounce(fn,delay){var lastTime,timeId=null;return function(){lastTime?(now(),clearTimeout(timeId),timeId=setTimeout(function(){fn(),lastTime=void 0},delay)):(lastTime=now(),timeId=setTimeout(function(){fn(),lastTime=void 0},delay))}}function debounce(func,wait,immediate){var timeout,args,context,timestamp,result,later=function later(){var last=now()-timestamp;last<wait&&last>=0?timeout=setTimeout(later,wait-last):(timeout=null,immediate||(result=func.apply(context,args),timeout||(context=args=null)))};return function(){context=this,args=arguments,timestamp=now();var callNow=immediate&&!timeout;return timeout||(timeout=setTimeout(later,wait)),callNow&&(result=func.apply(context,args),context=args=null),result}}function throttle(func,wait,options){var context,args,result,timeout=null,previous=0;options||(options={});var later=function(){previous=!1===options.leading?0:now(),timeout=null,result=func.apply(context,args),timeout||(context=args=null)};return function(){var curTime=now();previous||!1!==options.leading||(previous=curTime);var remaining=wait-(curTime-previous);return context=this,args=arguments,remaining<=0||remaining>wait?(timeout&&(clearTimeout(timeout),timeout=null),previous=curTime,result=func.apply(context,args),timeout||(context=args=null)):timeout||!1===options.trailing||(timeout=setTimeout(later,remaining)),result}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};exports.now=now,exports.isObject=isObject,exports.nextTick=nextTick,exports.extend=extend,exports.myDebounce=myDebounce,exports.debounce=debounce,exports.throttle=throttle},function(module,exports,__webpack_require__){"use strict";function inInterSection(element){var offsetTop=(element.offsetHeight,element.offsetTop),scrollTop=window.scrollY;return offsetTop<=window.innerHeight+scrollTop}function bindEvent(element,type,handle){element.addEventListener(type,handle)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.inInterSection=inInterSection,exports.bindEvent=bindEvent;exports.isIE=!!document.documentMode,exports.isSupportIO=!!window.IntersectionObserver}]);