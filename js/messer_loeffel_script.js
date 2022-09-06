//Kontaktformular//
function kontaktfunction() {
	let a = document.getElementById('kontaktgrund');
	let Grund = a.options[a.selectedIndex].value;

	if (Grund == "_produktanfrage") {
		alert("Sehr geehrte:r Kund:in \nEs freut uns, dass Sie an unseren Produkten interessiert sind!\nLeider ist unsere Website gerade im Umbau.\nBei Anliegen melden Sie sich bitte telefonisch.\nIhr Team von den Stahlwaren HDI!")
	}
	else if (Grund == "_beschwerde") {
		alert("Sehr geehrte:r Kund:in \nEs tut uns leid, Ihnen einen Grund für eine Beschwerde gegeben zu haben.\nLeider ist unsere Website gerade im Umbau.\nBei Anliegen melden Sie sich bitte telefonisch.\nIhr Team von den Stahlwaren HDI!")
	}
	else if (Grund == "_ruecksendung") {
		alert("Sehr geehrte:r Kund:in \nEs tut uns leid, dass unser Produkt Sie nicht überzeugen konnte.\nLeider ist unsere Website gerade im Umbau.\nBei Anliegen melden Sie sich bitte telefonisch.\nIhr Team von den Stahlwaren HDI!")
	}
	else if (Grund == "_FragenAnregungen") {
		alert("Sehr geehrte:r Kund:in \nEs freut uns, dass Sie uns kontaktieren möchten!\nLeider ist unsere Website gerade im Umbau.\nBei Anliegen melden Sie sich bitte telefonisch.\nIhr Team von den Stahlwaren HDI!")
	}
}

function OhneAGB() {
	document.getElementById("submit").disabled = true;
	}

function Zustimmung() {
	let b = document.getElementById("AGB")
	if(b.checked) {
	document.getElementById("submit").disabled = false;
	}
	else  {
	document.getElementById("submit").disabled = true;
	}
}	

//IMG-Galerie slideshow//

let slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	}    
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}


// modals evtl Zusammenfügen für weniger functions?? //



function showproduktmodal1() {
	var produktmodal1 = document.getElementById("produktmodal1");
	produktmodal1.style.display = "none";
	if (produktmodal1.style.display === "none") {
    produktmodal1.style.display = "block";
  } else {
    produktmodal1.style.display = "none";
  }
}	

function closeproduktmodal1() {
	var produktmodal1 = document.getElementById("produktmodal1");
	if (produktmodal1.style.display === "none") {
    produktmodal1.style.display = "block";
  } else {
    produktmodal1.style.display = "none";
  }
}

function showproduktmodal2() {
	var produktmodal2 = document.getElementById("produktmodal2");
	produktmodal2.style.display = "none";
	if (produktmodal2.style.display === "none") {
    produktmodal2.style.display = "block";
  } else {
    produktmodal2.style.display = "none";
  }
}	

function closeproduktmodal2() {
	var produktmodal2 = document.getElementById("produktmodal2");
	if (produktmodal2.style.display === "none") {
    produktmodal2.style.display = "block";
  } else {
    produktmodal2.style.display = "none";
  }
}

function showproduktmodal3() {
	var produktmodal3 = document.getElementById("produktmodal3");
	produktmodal3.style.display = "none";
	if (produktmodal3.style.display === "none") {
    produktmodal3.style.display = "block";
  } else {
    produktmodal3.style.display = "none";
  }
}	

function closeproduktmodal3() {
	var produktmodal3 = document.getElementById("produktmodal3");
	if (produktmodal3.style.display === "none") {
    produktmodal3.style.display = "block";
  } else {
    produktmodal3.style.display = "none";
  }
}

function showproduktmodal4() {
	var produktmodal4 = document.getElementById("produktmodal4");
	produktmodal4.style.display = "none";
	if (produktmodal4.style.display === "none") {
    produktmodal4.style.display = "block";
  } else {
    produktmodal4.style.display = "none";
  }
}	

function closeproduktmodal4() {
	var produktmodal4 = document.getElementById("produktmodal4");
	if (produktmodal4.style.display === "none") {
    produktmodal4.style.display = "block";
  } else {
    produktmodal4.style.display = "none";
  }
}		