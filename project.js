// variables
var header = document.getElementById("images");
var img = header.getElementsByClassName("img");
var imgmain = document.getElementById("imgmain");
var textmain = document.getElementById("textmain");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
// default already
var ele = header.getElementsByClassName("active");
var src = ele[0].src;
src = src.substr(src.lastIndexOf("/") + 1);

// onclick functions for each image on the showcase
for(var i = 0; i < img.length; i++) {
	img[i].addEventListener("click", function() {
		var current = header.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
		changeSource(ele, 0);
	});
}

// function to change the source of the image
function changeSource(ele, index) {
	src = ele[index].src;
	src = src.substr(src.lastIndexOf("/") + 1);
	var dot = src.lastIndexOf(".");
	var hyphen = src.lastIndexOf("-") + 1;
	var num = src.substr(hyphen, dot - hyphen) - 1;
	textmain.innerHTML = text[num];
	imgmain.src = "../images/full/" + src;
}

// function to check the previous and next buttons (mobile)
function checkPrevNext(index) {
	// at the first image
	if(index == 0) { prev.className = "prev disabled"; }
	// prevents user from clicking more
	else if(index == -1) { prev.className = "prev disabled"; }
	// at the last image
	else if(index == img.length - 1) { next.className = "next disabled"; }
	// prevents user from clicking more
	else if(index == img.length) { next.className = "next disabled"; }
	else {
		prev.className = "prev";
		next.className = "next";
	}
}

// event listener for the previous button
prev.addEventListener("click", function() {
	var current = 0;
	// get current active image index
	for(var i = 0; i < img.length; i++) {
		if(img[i].className.includes("active")) { current = i; }
	}
	checkPrevNext(current - 1);
	if(current != 0) {
		img[current].className = "img";
		img[current - 1].className += " active";
		changeSource(img, current - 1);
	}
});

// event listener for the next button
next.addEventListener("click", function() {
	var current = 0;
	// get the current active image index
	for(var i = 0; i < img.length; i++) {
		if(img[i].className.includes("active")) { current = i; }
	}
	checkPrevNext(current + 1);
	if(current < img.length - 1) {
		img[current].className = "img";
		img[current + 1].className += " active";
		changeSource(img, current + 1);
	}
});