// Public -------------------------------------------------------------- //

export const each = function(data, fn) {

	if (data==null) return false

	if ((data).constructor===Object) return [].forEach.call(Object.keys(data), (key) => fn(data[key], key, data))
	return [].forEach.call(data, (item, i) => fn(item, i, data))

}

export const stopEvent = function(e = {}) {

	if (typeof e.stopPropagation === 'function') e.stopPropagation()
	if (typeof e.preventDefault === 'function')  e.preventDefault()

}

export const executeOnMatch = function(query, fn) {

	return function(e) {

		let elem = e.target.closest(query)

		if (elem!=null) {
			stopEvent(e)
			fn(elem)
		}

	}

}

export const hasTouchscreen = function() {

	const mobileDevice = (/Android|iPhone|iPad|iPod/i).test(navigator.userAgent || navigator.vendor || window.opera)
	const onTouchEnd   = ('ontouchend' in document.documentElement)

	return (mobileDevice && onTouchEnd)

}

export const debounce = function(fn, duration) {

	let timeout = null

	return (...args) => {

		clearTimeout(timeout)

		timeout = setTimeout(() => fn(...args), duration)

	}

}

export const timeout = function(fn, delay) {

	setTimeout(() => {
		requestAnimationFrame(fn)
	}, delay)

}

export const ajaxget = function(url, next) {

	let xhr = new XMLHttpRequest()

	xhr.open('GET', url)
	xhr.onload = () => next(xhr)
	xhr.onerror = () => next(xhr)
	xhr.withCredentials = true
	xhr.send()

}