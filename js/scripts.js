// Text Fade-in
 $(document).ready(function(){
	$("#nameH1").addClass("load");
	$("#nameCaption").addClass("load");
	$("#comingSoon").addClass("load");
});

// Sidebar Navigation

function openNav() {
  document.getElementById("mySidenav").style.width = "15.6em";
  document.getElementById("mySidenav").style.width = "15.6vw";
  document.getElementById("main").style.marginLeft = "15.6em";
  document.getElementById("main").style.marginLeft = "15.6vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}