$( document ).ready(function() {
	reverseSlider();
});

/*========================================
= slideshow custom =
========================================*/

function reverseSlider() {
	//Custom home Slideshow
	$("#s_1").find('.left-block').css("top","0");
	$("#s_1").find('.right-block').css("top","0");
	var timer = setInterval(slideShow,6000);
}

function animate(element,value,delay) {
	element.animate({
		top: value
	}, delay);
}

function animateTimeout(element,value,delay,timeout) {
	setTimeout(function(){element.animate({
		top: value
	}, delay)}, timeout);
}

function slide(nextSlide) {
	var slideup = $(".slide.slide-up");
	var slideupLeft = $(".slide.slide-up .left-block");
	var slideupRight = $(".slide.slide-up .right-block");
	var current_slide = $('.slide.slide-up').attr('id');
	slideup.siblings('.slide').css("z-index","-1");
	nextSlide.css("z-index","10");
	animate(nextSlide.find('.left-block'),"0",800);
	animate(nextSlide.find('.right-block'),"0",800);
	animateTimeout(slideupLeft,"-100%",2000,1000);
	animateTimeout(slideupRight,"100%",2000,1000);
	nextSlide.css("z-index","10").addClass('slide-up');
	$('#'+current_slide).css("z-index","-1").removeClass('slide-up');
}

function slideShow() {
	var firstSlide = $(".slide").first();
	var slideup = $(".slide.slide-up");
	/* si il y a un element suivant */
	if(slideup.next('.slide').length) {
		slide(slideup.next('.slide'));
	}
	/* si on arrive au dernier element on repasse au premier */
	else {
		slide(firstSlide);
	}
};

/*----- End of slideshow custom ------*/