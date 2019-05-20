// Text Fade-in
 $(document).ready(function(){
	$("#nameH1").addClass("load");
	$("#nameCaption").addClass("load");
	$("#comingSoon").addClass("load");
});

// Sidebar Navigation

function openNav(x) {
  
	if (x.matches) {
		document.getElementById("mySidenav").style.width = "30.2em";
		document.getElementById("mySidenav").style.width = "30.2vw";
		document.getElementById("main").style.marginLeft = "30.2em";
		document.getElementById("main").style.marginLeft = "30.2vw";
		x.addListener(openNav);
	} else {
	document.getElementById("mySidenav").style.width = "15.6em";
	document.getElementById("mySidenav").style.width = "15.6vw";
	document.getElementById("main").style.marginLeft = "15.6em";
	document.getElementById("main").style.marginLeft = "15.6vw";
	}
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


/*
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
} */

var x = window.matchMedia("(max-width: 450px)")
// myFunction(x) // Call listener function at run time
// Attach listener function on state changes