// variables
const body = document.getElementsByTagName("body");
const button = document.querySelector(".menubutton");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

// set menu initial state
let showMenu = false;
button.addEventListener("click", toggleMenu);
function toggleMenu() {
	if(!showMenu) {
		button.classList.add("close");
		menu.classList.add("show");
		nav.classList.add("show");
		body[0].classList.add("body-fixed");
		// reset menu state
		showMenu = true;
	} else {
		button.classList.remove("close");
		menu.classList.remove("show");
		nav.classList.remove("show");
		body[0].classList.remove("body-fixed");
		// reset menu state
		showMenu = false;
	}
}