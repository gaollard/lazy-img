import lazyimg from '@/main.js'

let observer = lazyimg({
	delay: 200,
	rootMargin: '0px',
  	threshold: 0,
  	selector: '.lazy-img'
})

observer.observe();