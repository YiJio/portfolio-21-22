/* showcase functions */
var header = document.getElementById("images");
var img = header.getElementsByClassName("img");
var imgmain = document.getElementById("imgmain");
var textmain = document.getElementById("textmain");
// default already
var ele = document.getElementsByClassName("active");
var src = ele[0].src;
src = src.substr(src.lastIndexOf("/") + 1);
// when clicked
for(var i = 0; i < img.length; i++) {
	img[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
		src = ele[0].src;
		src = src.substr(src.lastIndexOf("/") + 1);
		var dot = src.lastIndexOf(".");
		var hyphen = src.lastIndexOf("-") + 1;
		var num = src.substr(hyphen, dot - hyphen) - 1;
		textmain.innerHTML = text[num];
		imgmain.src = "../images/full/" + src;
	});
}