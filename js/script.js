//$( document ).ready(function() {


	var photo = document.getElementById("photo");

	var wave1 = document.getElementsByClassName("wave1");
	var wave2 = document.getElementsByClassName("wave2");
	var wave3 = document.getElementsByClassName("wave3");
	var whale = document.getElementsByClassName("whale");


	var duration = 1.2

	var moveWhale = function () {

		TweenMax.to(".whale", duration, { 

			//bottom: "25px", 
			ease:Linear.ease,
			rotation: 5,

			repeat: -1,
			yoyo: true,

		});

	}
	
	var moveWave1 = function(){

		TweenMax.to(".wave1", duration, { 

			bottom: "-90px", 
			left: "-110px",
			ease: Linear.ease,
			repeat: -1,
			yoyo: true,

		});
	}

	var moveWave2 = function(){

		TweenMax.to(".wave2", duration+0.5, { 

			bottom: "-90px", 
			left: "-50px",
			ease: Linear.ease,
			repeat: -1,
			yoyo: true,

		});
	}

	var moveWave3 = function(){

		TweenMax.to(".wave3", duration-.5, { 

			bottom: "-90px", 
			left: "-25px",
			ease: Linear.ease,
			repeat: -1,
			yoyo: true,

		});
	}

	moveWhale();
	moveWave1();
	moveWave2();
	moveWave3();









   
//});


