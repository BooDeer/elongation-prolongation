const storage = chrome.storage.sync;


//* Output the name of the current website. (for debugging)
// console.log(window.location.hostname)



if (window.location.hostname.includes("facebook")) {
	storage.get("facebook", (e) => {
		if (Object.values(e)[0] === true){
			const target = document.querySelector('[role="main"]')
			// setTimeout(null, 3000);
			target.parentNode.removeChild(target);
		}
	})
} else if (window.location.hostname.includes("instagram")) {
	storage.get("instagram", (e) => {
		if (Object.values(e)[0] === true){
			setTimeout(() => {
				const target = document.querySelector('main')
				target.parentNode.removeChild(target);
			}, 1100);
		}
	})
} else if (window.location.hostname.includes("twitter")) {
	storage.get("twitter", (e) => {
		if (Object.values(e)[0] === true){
			setTimeout(() => {
				const target = document.querySelector('[role="region"]')
				//TODO: should I delete the trend border too?
				// console.log(target.firstChild)
				target.parentNode.removeChild(target);
			}, 3000);
			//! Sadly it takes a lot of time to render this element thus the long timeout
		}
})} else if (window.location.hostname.includes("reddit")) {
	storage.get("reddit", (e) => {
		if (Object.values(e)[0] === true){
			setTimeout(() => {
				const target = document.querySelectorAll('[style="max-width:100%"')
				// for (let i = 0; i < target.length; i++)
				target[1].removeChild(target[1].firstChild);
				// for (let e in target)
					// e.parentNode.removeChild(e);
				// target.parentNode.removeChild(target);
			}, 500);
		}
})}