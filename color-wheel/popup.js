// When the button is clicked, inject setPageBackgroundColor into current page
let currColor = "#fff";

const selectElement = document.getElementById('inputColor');

selectElement.addEventListener('change', (e) => {
	const color = e.target.value;
	chrome.storage.sync.set({color});
})

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
	// console.log(color);
    document.body.style.backgroundColor = color;
  });
}