# lazy-img

移动端0依赖的渐进增强的图片懒加载插件

## Build Setup

```bash

# serve with hot reload at localhost:8080
npm run start

# build release
npm run build
```
## example

```js

import lazyImg from 'mi-lazy-img'
let observer = lazyimg({
	delay: 200, // 当不支持 IntersectionObserver时，节流函数延迟时间(ms)
	rootMargin: '0px',
	threshold: 0,
	selector: '.lazy-img' // 元素的选择器
})

observer.observe();

```
