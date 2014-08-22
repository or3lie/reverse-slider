$( document ).ready(function() {
//Custom home Slideshow
$("#s_1").find('.left-block').css("top","0");
$("#s_1").find('.right-block').css("top","0");
var timer = setInterval(slideShow,6000);
});

/*========================================
= slideshow custom =
========================================*/

/*function animateSlide(slide) {
	var current_slide = $('.slide.slide-up').attr('id');
	$('.slide').css("z-index","-1");
	$('#'+current_slide).css("z-index","11");
	$("#"+current_slide+" .left-block").animate({
		top: "0"
	}, 500 );
	$("#"+current_slide+" .right-block").animate({
		top: "0"
	}, 500 );
	setTimeout(function(){slide.find('.left-block').animate({
		top: "-100%"
	}, 1000 )}, 1000);
	setTimeout(function(){slide.find('.right-block').animate({
		top: "100%"
	}, 1000 )}, 1000);

}

function slideShow() {
	var current_slide = $('.slide.slide-up').attr('id');
	if($('#'+current_slide).next('.slide').length) {
		console.log('ici');
		animateSlide($('.slide').not($("#"+current_slide)));
		$('#'+current_slide).next('.slide').addClass('slide-up');
		$('#'+current_slide).removeClass('slide-up');
	}
	else {
		console.log('la');
		animateSlide($("#s_1"));
		$("#s_1").addClass('slide-up');
		$('#'+current_slide).removeClass('slide-up');
	}
};*/

function slideShow() {
	var firstSlide = $(".slide").first();
	var slideup = $(".slide.slide-up");
	var slideupLeft = $(".slide.slide-up .left-block");
	var slideupRight = $(".slide.slide-up .right-block");
	var current_slide = $('.slide.slide-up').attr('id');
	/* si il y a un element suivant */
	if(slideup.next('.slide').length) {
		slideup.siblings('.slide').css("z-index","-1");
		slideup.next('.slide').css("z-index","10");
		animate(slideup.next('.slide').find('.left-block'),"0",800);
		animate(slideup.next('.slide').find('.right-block'),"0",800);
		animateTimeout(slideupLeft,"-100%",2000,1000);
		animateTimeout(slideupRight,"100%",2000,1000);
		slideup.next('.slide').addClass('slide-up');
		$('#'+current_slide).css("z-index","-1").removeClass('slide-up');
	}
	/* si on arrive au dernier element on repasse au premier */
	else {
		slideup.siblings('.slide').css("z-index","-1");
		firstSlide.css("z-index","10");
		animate(firstSlide.find('.left-block'),"0",800);
		animate(firstSlide.find('.right-block'),"0",800);
		animateTimeout(slideupLeft,"-100%",2000,1000);
		animateTimeout(slideupRight,"100%",2000,1000);
		firstSlide.css("z-index","10").addClass('slide-up');
		$('#'+current_slide).css("z-index","-1").removeClass('slide-up');
	}
};

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

/*----- End of slideshow custom ------*/