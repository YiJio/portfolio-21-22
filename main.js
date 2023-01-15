// variables
const body = document.getElementsByTagName("body");
var refresh = document.getElementById("refresh");
var mepic = document.getElementById("mepic");
var dserv = document.getElementById("services");
if(dserv) { var dservb = dserv.getElementsByClassName("item"); }
var posts = document.getElementById("posts");
if(posts) { var pitem = posts.getElementsByClassName("item"); }
const card = document.querySelector(".posts .item");
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

// refresh to switch profile picture
if(refresh) {
	refresh.addEventListener("click", function() {
		if(mepic.src.includes('8')) { mepic.src = '../images/profile/profile4.png'; }
		else { mepic.src = '../images/profile/profile8.png'; }
	});
}

/*card.onmousemove = function (e) {
  const x = e.pageX - card.offsetLeft;
  const y = e.pageY - card.offsetTop;

  card.style.setProperty( '--x', x + 'px' );
  card.style.setProperty( '--y', y + 'px' );
}*/
/*if(posts) {
	for(var i = 0; i < pitem.length; i++) {
		pitem[i].onmouseover = function(e) { this.style.zIndex = '9'; }
		pitem[i].onmouseout = function(e) { this.style.zIndex = '1'; }
	}
}*/

// bind link to main boxes
if(dserv) {
	for(var i = 0; i < dservb.length; i++) {
		dservb[i].addEventListener("click", function() {
			/*var id = this.id;
			if(id == 'dev') { window.location.href = 'develop.html'; }
			else if(id == 'des') { window.location.href = 'design.html'; }
			else if(id == 'dra') { window.location.href = 'draw.html'; }*/
			window.location.href = 'work.html';
		});
	}
}

function reveal() {
  var reveals = document.querySelectorAll(".lang .reveal");
  var reveals2 = document.querySelectorAll(".soft .reveal");
  var reveals3 = document.querySelectorAll("#exp .reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("fade-left");
    }
  }
  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals2[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals2[i].classList.add("animate-in");
    }
  }
  for (var i = 0; i < reveals3.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals3[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals3[i].classList.add("animate-in");
    }
  }
}

$(".box .pc").each(function() {
	$(this).animate({
		width: $(this).html(),
    }, 1500);
});

window.addEventListener("scroll", reveal);