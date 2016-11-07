import { each, stopEvent, executeOnMatch } from './_helpers'


const xhr = new XMLHttpRequest();
const resultContainer = document.querySelector('.dribbble .row')

const username = 'setgraphic'
const token = 'd522fe822b17d1979a40b8c12afde958fec96078aa9b3d02836af6af3423bdf1'
// console.log(resultContainer);

xhr.open('GET', `https://api.dribbble.com/v1/users/${ username }/shots?access_token=${ token }`);
xhr.send(null); // would contain data if we were posting

xhr.onreadystatechange = function() {

	const DONE = 4 // readyState 4 means the request is done.
	const OK = 200 // status 200 is a successful return
	let html = ''

  if (xhr.readyState === DONE) {
		console.log('DONE: ' + xhr.readyState)

		if (xhr.status === OK) {
			console.log('OK: ' + xhr.status)
			//console.log(xhr.responseText) // this is the returned data

			const json = JSON.parse(xhr.responseText);

			for (var i = 0; i < json.length; i++) {

				const obj = json[i]

        //console.log(obj.id)

				html += `

					<div class="column small-auto medium-4 large-3">
						<div class="dribbble__card" data-url="${obj.html_url}">
              <img class="thumbnail" src="${obj.images.normal }" data-src="${obj.images.hidpi }" />
							<h3>${obj.title }</h3>
							${obj.description}
						</div>
					</div>
				`;

			}

      resultContainer.innerHTML = html

      Array.prototype.forEach.call(document.querySelectorAll('.thumbnail'), function(elem) {
			     elem.onclick = function(e) {
				    var src  = elem.getAttribute('data-src')
				    var html = '<img src="' + src + '">'
				    basicLightbox.create(html).show()
			    }
		  })

		} else {
			console.log('Error: ' + xhr.status); // an error occurred during the request
		}

	}

}
