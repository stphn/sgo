// Object.assign polyfill from https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// Required by basicLightbox, but not supported by IE11.

if (typeof Object.assign != 'function') {

	Object.assign = function(target) {

		if (target==null) {
			throw new TypeError('Cannot convert undefined or null to object')
		}

		target = Object(target)

		for (let index = 1; index < arguments.length; index++) {

			let source = arguments[index]

			if (source != null) {

				for (let key in source) {

					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key]
					}

				}

			}

		}

		return target

	}

}