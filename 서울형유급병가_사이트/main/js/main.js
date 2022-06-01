$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop() + $(window).height();
        if($(".scroll-motion").length > 0){
            $(".scroll-motion").each(function(){
                if(scrollTop > $(this).offset().top){
                    $(this).addClass("scroll-motion-active");
                }
            });
        }

        if($(".fixed-btn").length > 0){
            if($(window).scrollTop() < $(".header").outerHeight()){
                $(".fixed-btn").css("opacity", 0);
            }else{
                $(".fixed-btn").css("opacity", 1);
            }

            if(scrollTop > $(".footer").offset().top){
                $(".fixed-btn").css("position","absolute");
            }else{
                $(".fixed-btn").css("position","fixed");
            }
        }
    }).scroll();
    
    $('.section-join .count0').counterUp({
        delay: 10,
        time: 1000
    });

    $('.section-join .count1').counterUp({
        delay: 10,
        time: 1000
    });
});

var mainVisSwiper = new Swiper(".section-mainvis", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".section-mainvis .swiper-pagination",
        type: "fraction",
        formatFractionCurrent:function(number){
            return ("0" + number).slice(-2);
        },
        formatFractionTotal:function(number){
            return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: ".section-mainvis .swiper-button-next",
        prevEl: ".section-mainvis .swiper-button-prev",
    },
});

var myBoardSwiper = new Swiper(".list__myboard", {
    slidesPerView: 1,
    centeredSlides: true,
    observer:true,
    observeparents:true,
    updateOnWindowResize:true,
    noSwiping:true,
    noSwipingClass: "swiper-no-swiping",
    pagination: {
        el: ".list__myboard .swiper-pagination",
    },
    on:{    
        init:function(){
            if($(window).width() > 768){
                $(".list__myboard .swiper-wrapper").css("transform", "translate3d(0, 0px, 0px)");
                $(".list__myboard .swiper-slide").addClass("swiper-no-swiping"); 
            }else{
                $(".list__myboard .swiper-slide").removeClass("swiper-no-swiping"); 
            }
        },
        resize:function(){
            if($(window).width() > 768){
                $(".list__myboard .swiper-wrapper").css("transform", "translate3d(0, 0px, 0px)");
                $(".list__myboard .swiper-slide").addClass("swiper-no-swiping"); 
            }else{
                $(".list__myboard .swiper-slide").removeClass("swiper-no-swiping"); 
                myBoardSwiper.update();
            }
        }
    }
});

var serviceSwiper = new Swiper(".section-service", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".section-service .swiper-pagination",
        type: "fraction",
        formatFractionCurrent:function(number){
            return ("0" + number).slice(-2);
        },
        formatFractionTotal:function(number){
            return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: ".section-service .swiper-button-next",
        prevEl: ".section-service .swiper-button-prev",
    },
    scrollbar: {
        el: ".section-service .swiper-scrollbar",
    },
});


var reviewSwiper = new Swiper(".review-swiper", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".review-swiper .swiper-button-next",
        prevEl: ".review-swiper .swiper-button-prev",
    },
});