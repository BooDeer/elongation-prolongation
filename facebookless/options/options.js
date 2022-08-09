const storage = chrome.storage.sync;

//* check the checked checkboxes checked previously by the checkboxer when he checked the checkboxes.
(() => {
	console.log("===> initial function")
	document.querySelectorAll('input').forEach(elem => {
		storage.get(elem.id, (e) => {
			console.log(e)
			console.log(Object.values(e)[0])
			if (Object.values(e)[0] === true)
			{
				elem.checked = true;
			}
		})
	})
})()

// Selecting the [save change] button
const buttonElem = document.querySelector('button');

buttonElem.addEventListener("click", (e) => {
	// Denies the form to reload the page.
	e.preventDefault();

	//selecting all the forms.
	document.querySelectorAll('input').forEach(elem => {
		var obj = {};
		let key = elem.id;
		obj[key] = elem.checked

		storage.set(obj)
	})
})
