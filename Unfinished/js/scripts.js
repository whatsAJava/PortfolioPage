// Text Fade-in
 $(document).ready(function(){
	$("#nameH1").addClass("load");
	$("#nameCaption").addClass("load");
});

// Sidebar Navigation

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}