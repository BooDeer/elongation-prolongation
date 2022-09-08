console.log("reached here :D")


setTimeout(() => {
	let test = document.querySelectorAll('[href="/mohamedhaddi"]');
	// console.log(test[0].parentNode.parentNode.parentNode.parentNode)
	for (let i = 0; i < test.length; i++)
	{
		let tmp = test[i].parentNode.parentNode.parentNode.parentNode;
		tmp?.parentNode?.removeChild(tmp);
	}
}, 1000);