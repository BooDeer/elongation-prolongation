const storage = chrome.storage.sync;

if (window.location.hostname.includes("facebook"))
{
	storage.get("facebook", (e) => {
		if (Object.values(e)[0] === true){
			const target = document.querySelector('[role="main"]')
			setTimeout(null, 3000);
			target.parentNode.removeChild(target);
		}
	})
}