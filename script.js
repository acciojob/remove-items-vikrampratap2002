let colors = document.getElementById("colorSelect");
let button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
	let index = colors.selectedIndex;
	colors.remove(index);
})