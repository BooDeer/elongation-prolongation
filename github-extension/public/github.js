console.log("reached here :D")

const storage = chrome.storage.sync;

let users = [];
storage.get(['list'], function(result) {
	console.log("result ==>" , result.list[0])
	users = result.list;
})
const removeUsers = () => {
	for (let j = 0; j < users.length; j++) {
		// console.log("users[j] ==>" , users[j])
		let test = document.querySelectorAll(`[href="/${users[j]}"]`);
		// console.log(test.length)
		for (let i = 0; i < test.length; i++)
		{
			let tmp = test[i]?.parentNode?.parentNode?.parentNode?.parentNode;
			tmp?.parentNode?.removeChild(tmp);
		}
	}
}


// setTimeout(() => {
// 	console.log("users ==>" , users)

// 	removeUsers();
// 	document.querySelector('[data-disable-with="Loading more…"]').addEventListener("click", () => {
// 		setTimeout(() => {
// 			removeUsers();
// 		}, 3000)
// 	})
// }, 1000);
const observer = new MutationObserver(list => {
	// console.log('mutation list', list);
	removeUsers();
  });
  observer.observe(document.body, {attributes: true, childList: true, subtree: true});