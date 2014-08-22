$( document ).ready(function() {
	reverseSlider();
	/*slideNext($("#s_2"),$("#s_3"));
	slideNext($("#s_3"),$("#s_4"));*/

	$("#next").on('click', function() {
		clearInterval(timer);
		next();
	});

	$("#prev").on('click', function() {
		clearInterval(timer);
		prev();
	});
});

/*========================================
= slideshow custom =
========================================*/



function next() {
	var currentSlideId = $('.slide.slide-up').attr('id');
	var currentSlide = $("#"+currentSlideId);
	var nextSlideId = currentSlide.next('.slide').attr('id');
	if(nextSlideId) {
		var nextSlide = $("#"+nextSlideId);
	}
	else {
		var nextSlide = $("#s_1");
	}
	slideNext(currentSlide,nextSlide);
}

function prev() {
	var currentSlideId = $('.slide.slide-up').attr('id');
	var currentSlide = $("#"+currentSlideId);
	var prevSlideId = currentSlide.prev('.slide').attr('id');
	if(prevSlideId) {
		var prevSlide = $("#"+prevSlideId);
	}
	else {
		var prevSlide = $("#s_1");
	}
	slidePrev(currentSlide,prevSlide);
}



function slideNext(current,next) {
	current.find('.left-block').css("top","0");
	current.find('.right-block').css("top","0");
	current.siblings('.slide').css("z-index","-1");
	next.css("z-index","10").addClass('slide-up');
	animate(next.find('.left-block'),"0",1000);
	animate(next.find('.right-block'),"0",1000);
	animateTimeout(current.find(".left-block"),"-100%",200,1000);
	animateTimeout(current.find(".right-block"),"100%",200,1000);
	current.removeClass('slide-up');
}


function slidePrev(current,prev) {
	current.find('.left-block').css("top","0");
	current.find('.right-block').css("top","0");
	current.siblings('.slide').css("z-index","-1");
	prev.find('.left-block').css("top","0");
	prev.find('.right-block').css("top","0");
	prev.css("z-index","10").addClass('slide-up');
	animate(current.find(".left-block"),"-100%",1000);
	animate(current.find(".right-block"),"100%",1000);
	current.removeClass('slide-up');
}







var timer;
function reverseSlider() {
	//Custom home Slideshow
	$("#s_1").find('.left-block').css("top","0");
	$("#s_1").find('.right-block').css("top","0");
	timer = setInterval(slideShow,6000);
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

function slideShow() {
	var firstSlide = $("#s_1");
	var currentSlideId = $('.slide.slide-up').attr('id');
	var currentSlide = $("#"+currentSlideId);
	var nextSlideId = currentSlide.next('.slide');
	/* si il y a un element suivant */
	if(currentSlide.next('.slide').length) {
		console.log('test');
		slideNext(currentSlide,currentSlide.next('.slide'));
	}
	/* si on arrive au dernier element on repasse au premier */
	else {
		slideNext(currentSlide,firstSlide);
	}
};









/*function slide(nextSlide) {
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
}*/



/*----- End of slideshow custom ------*/