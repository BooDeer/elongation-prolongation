
console.log("test reaching here");

const target = document.querySelector('[role="main"]')
setTimeout(null, 3000);
console.log(target);
target.parentNode.removeChild(target);
console.log("did I find it?");