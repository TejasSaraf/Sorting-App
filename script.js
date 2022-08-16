let array = [];

window.onload = setup();
function setup() {
	let b = document.getElementById("bars");
	document.getElementById("d").innerText = "ms";

	if (array.length != parseInt(b.value)) {
		generateArray(parseInt(b.value));
	}
}


function reset() {
	location.reload();
}


function disable_buttons() {
	let input = document.getElementsByTagName("input");
	for (let i = 0; i < input.length; i++)
		input[i].disabled = true;
	return parseInt(document.getElementById("delay").value);
}


function enable_buttons() {
	let bar = document.getElementsByClassName("bar");
	for (let i = 0; i < bar.length; i++)
		bar[i].style.backgroundColor = "#33ff00";
	bar = document.getElementsByTagName("input");
	for (let i = 0; i < bar.length; i++)
		bar[i].disabled = false;

}


function generateArray(n) {
	array = [];
	let container = document.getElementById("container");
	n = n < 0 ? Math.random() * 80 : n;
	for (let i = 0; i < n; i++) {
		array.push('<div class="bar" id="' + i + '" style="height:' + (Math.random() * 80) + '%"></div>');
	}
	container.innerHTML = array.join('');
}


function Sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}






























