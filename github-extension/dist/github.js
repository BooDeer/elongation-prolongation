const storage = chrome.storage.sync;

let users = [];
storage.get(['list'], function(result) {
	users = result.list;
})
const removeUsers = () => {
	if (users) {
		for (let j = 0; j < users.length; j++) {
			let test = document.querySelectorAll(`#panel-1  [href="/${users[j]}"]`);
			console.log(test)
			for (let i = 0; i < test.length; i++)
			{
				let tmp = test[i]?.parentNode?.parentNode?.parentNode?.parentNode;
				tmp?.parentNode?.removeChild(tmp);
			}
		}
	}
}

const observer = new MutationObserver(list => {
	removeUsers();
  });
  observer.observe(document.body, {attributes: true, childList: true, subtree: true});

