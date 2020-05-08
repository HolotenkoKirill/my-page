	var firstScreen = document.getElementById('Me');
	var films = document.getElementById('bgfilms');
	var stadium = document.getElementById('bgstadium');
	var text = document.getElementsByClassName('three-words');
	var headings = document.getElementsByTagName('H2');
	var table1 = document.getElementById('table1');
	var hcels = document.getElementsByTagName('TH');
	var cels = document.getElementsByTagName('TD');
	var dots = document.getElementsByClassName('round');
	var mail = document.getElementById('maillink');
	var mailpill = document.getElementById('mailbox');
	var bar = document.getElementsByClassName('navbar');
	var bartext = document.getElementsByClassName('nav-link');
	var emotions = document.getElementsByClassName('h3container');
	var emotionstext = document.getElementsByTagName('H3');

	function darkMode() {
	    firstScreen.style.background = "linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";
	    films.style.background = "linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";
	    stadium.style.background = "linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";
	    table1.style.background = "linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";
	    mail.style.background = "#fff";
	    mail.style.webkitBackgroundClip = "text";
	    mailpill.style.backgroundImage = "linear-gradient(transparent, transparent), linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";
	    for (i = 0; i < emotionstext.length; i++) {
	    	emotionstext[i].style.background="linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";	
	    	emotionstext[i].style.webkitBackgroundClip = "text";
	    }
	    for (i = 0; i < emotions.length; i++) {
	    	emotions[i].style.backgroundImage="linear-gradient(#110E33, #110E33), linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";	
	    }

	    for (i = 0; i < bartext.length; i++) {
	        bartext[i].style.color = "#D4D4D4";
	    }
	    for (i = 0; i < bar.length; i++) {
	        bar[i].style.background = "#110E33";
	    }

	    for (i = 0; i < dots.length; i++) {
	        dots[i].style.background = "linear-gradient(180deg, #CE6F00 0%, #FFE600 100%)";
	    }
	    for (i = 0; i < hcels.length; i++) {
	        hcels[i].style.background = "#110E33";
	        hcels[i].style.color = "#D4D4D4";
	    }
	    for (i = 0; i < cels.length; i++) {
	        cels[i].style.background = "#110E33";
	        cels[i].style.color = "#D4D4D4";
	    }
	    for (i = 0; i < text.length; i++) {
	        text[i].style.background = "linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";
	        text[i].style.webkitBackgroundClip = "text";
	    }
	    for (i = 0; i < headings.length; i++) {
	        headings[i].style.background = "linear-gradient(284.21deg, #149FDB 0%, #185BA4 31.86%, #1E57AD 51.04%, #1861A9 64.02%, #13A0DC 100%)";
	        headings[i].style.webkitBackgroundClip = "text";
	    }
	    document.body.style.background = "#110E33";
	    document.getElementById('connect').style.color = "#D4D4D4";
	    document.getElementById('itstime').style.color = "#D4D4D4";
	    document.getElementById('metal').style.color = "#D4D4D4";
	    document.getElementById('revolution').style.color = "#D4D4D4";
	    document.getElementById('family').style.color = "#D4D4D4";
	    document.getElementById('friends').style.color = "#D4D4D4";
	    document.getElementById('job').style.color = "#D4D4D4";
	}

	function lightMode() {
	    firstScreen.style.background = "linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";
	    films.style.background = "linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";
	    stadium.style.background = "linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";
	    table1.style.background = "linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";
	    mail.style.background = "linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";
	    mail.style.webkitBackgroundClip = "text";
	    mail.style.background = "#fff";
	    mail.style.webkitBackgroundClip = "text";
	    mailpill.style.backgroundImage = "linear-gradient(transparent, transparent),linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";
	    for (i = 0; i < emotionstext.length; i++) {
	    	emotionstext[i].style.background="linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";	
	    	emotionstext[i].style.webkitBackgroundClip = "text";
	    }
	    for (i = 0; i < emotions.length; i++) {
	    	emotions[i].style.backgroundImage="linear-gradient(#fff, #fff), linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";	
	    }

	    for (i = 0; i < bartext.length; i++) {
	        bartext[i].style.color = "#626262";
	    }
	    for (i = 0; i < bar.length; i++) {
	        bar[i].style.background = "#fff";
	    }
	    for (i = 0; i < dots.length; i++) {
	        dots[i].style.background = "linear-gradient(180deg, #71FFF6 0%, #78AEFF 100%)";
	    }
	    for (i = 0; i < hcels.length; i++) {
	        hcels[i].style.background = "#fff";
	        hcels[i].style.color = "#626262";
	    }
	    for (i = 0; i < cels.length; i++) {
	        cels[i].style.background = "#fff";
	        cels[i].style.color = "#626262";
	    }
	    for (i = 0; i < text.length; i++) {
	        text[i].style.background = "linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";
	        text[i].style.webkitBackgroundClip = "text";
	    }
	    for (i = 0; i < headings.length; i++) {
	        headings[i].style.background = "linear-gradient(295.65deg, #8E43FA 0%, #F3608B 51.56%, #FFA807 100%)";
	        headings[i].style.webkitBackgroundClip = "text";
	    }
	    document.body.style.background = "#fff";
	    document.getElementById('connect').style.color = "#626262";
	    document.getElementById('itstime').style.color = "#626262";
	    document.getElementById('metal').style.color = "#626262";
	    document.getElementById('revolution').style.color = "#626262";
	    document.getElementById('family').style.color = "#626262";
	    document.getElementById('friends').style.color = "#626262";
	    document.getElementById('job').style.color = "#626262";
	}