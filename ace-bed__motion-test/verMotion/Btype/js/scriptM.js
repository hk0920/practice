$(document).ready(function(){
	var num;

	//로드
	$(window).on("load", function(){
		TweenMax.to($(""), 0.8, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
	});
	
	//리사이즈
	$(window).resize(function(){
		
	});
	

    // motion
	// button click scrollTop
	$("#mobileWrap .goto-top").click(function(){
		TweenMax.to($(".scrollArea"), 0.5, {scrollTop:0, ease:Power3.easeOut});
	});

	// swiper pag click scrollTop event
	$("#mobileWrap .swiper-pagination").click(function(){
		TweenMax.to($(".scrollArea"), 0, {scrollTop:0, ease:Power3.easeOut});
        TweenMax.to($("#mobileWrap .contents #header"), 0.8, {top:0, ease:Power3.easeOut});
	});


	// swiper
	var swiper = new Swiper('.swiper-container.typeB', {
      spaceBetween : 0,
      slidesPerView: 1,
	  autoHeight : true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: function () {
            TweenMax.to($(".scrollArea"), 0, {scrollTop:0, ease:Power3.easeOut});
            TweenMax.to($("#mobileWrap .contents #header"), 0.8, {top:0, ease:Power3.easeOut});
        },
      }
    });
});