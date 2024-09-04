
let lastStatus = 1
$(document).ready(function(){
	$('#slide-btn3').click(function(){
		console.log(lastStatus);
		$('.carousel-item').removeClass("animate-slide12")
		$('.carousel-item').removeClass("animate-slide13")
		$('.carousel-item').removeClass("animate-slide21")
		$('.carousel-item').removeClass("animate-slide23")
		$('.carousel-item').removeClass("animate-slide31")
		$('.carousel-item').removeClass("animate-slide32")
		if(lastStatus == 1){
			$('.carousel-item').addClass("animate-slide13")
		}
		else if(lastStatus == 2){
			$('.carousel-item').addClass("animate-slide23")
		}
		lastStatus = 3
		$('#slide-btn3').css("background-color", "white")
		$('#slide-btn1').css("background-color", "#ffffff6b")
		$('#slide-btn2').css("background-color", "#ffffff6b")
	})
	$('#slide-btn2').click(function(){
		console.log(lastStatus);
		$('.carousel-item').removeClass("animate-slide12")
		$('.carousel-item').removeClass("animate-slide13")
		$('.carousel-item').removeClass("animate-slide21")
		$('.carousel-item').removeClass("animate-slide23")
		$('.carousel-item').removeClass("animate-slide31")
		$('.carousel-item').removeClass("animate-slide32")
		if(lastStatus == 1){
			$('.carousel-item').addClass("animate-slide12")
		}
		else if(lastStatus == 3){
			$('.carousel-item').addClass("animate-slide32")
		}
		lastStatus = 2
		$('#slide-btn3').css("background-color", "#ffffff6b")
		$('#slide-btn1').css("background-color", "#ffffff6b")
		$('#slide-btn2').css("background-color", "white")
	})
	$('#slide-btn1').click(function(){
		console.log(lastStatus);
		$('.carousel-item').removeClass("animate-slide12")
		$('.carousel-item').removeClass("animate-slide13")
		$('.carousel-item').removeClass("animate-slide21")
		$('.carousel-item').removeClass("animate-slide23")
		$('.carousel-item').removeClass("animate-slide31")
		$('.carousel-item').removeClass("animate-slide32")
		if(lastStatus == 2){
			$('.carousel-item').addClass("animate-slide21")
		}
		else if(lastStatus == 3){
			$('.carousel-item').addClass("animate-slide31")
		}
		lastStatus = 1
		$('#slide-btn3').css("background-color", "#ffffff6b")
		$('#slide-btn1').css("background-color", "white")
		$('#slide-btn2').css("background-color", "#ffffff6b")
	})
})