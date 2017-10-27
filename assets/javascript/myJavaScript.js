// Google Maps API Script

function myMap()
	{
		var mapOptions = {center: new google.maps.LatLng(19.1046072,73.0226508),zoom: 10,mapTypeId: google.maps.MapTypeId.ROADMAP}
		var map = new google.maps.Map(document.getElementById("map"),mapOptions);
	}


// When the user scrolls down 20px from the top of the document, show the button

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("myBtn").style.display = "block";
	    } else {
	        document.getElementById("myBtn").style.display = "none";
	    }
	}

	// When the user clicks on the button, scroll smoothly to the top of the document

	var timeOut;
	function scrollToTop() {
		if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
			window.scrollBy(0,-50);
			timeOut=setTimeout('scrollToTop()',10);
		}
		else clearTimeout(timeOut);
	}

/*
// Dropdown collapsed navbar menu options for small screens

function myFunction() {
	var x = document.getElementById("myTopnav");
	if(x.className == "navbar") {
		x.className += "responsive";
	}
	else {
		x.className = "navbar";
	}
}*/



/* Sliding Images Homepage

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 7000);    
} */