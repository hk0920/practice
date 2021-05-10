$(function() {
    var swiper = new Swiper('.c_div.t2 .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 80,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper2 = new Swiper('.c_div.t3 .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 60,
        scrollbar: {
            el: '.swiper-scrollbar',
            //hide: true,
        },
    });

    // 메인 비주얼
    var mainVisNum = 0;
    $(".main_vis .roll").eq(0).css("z-index",1);
    setTimeout(function(){
        $(".main_vis .roll").eq(0).addClass("active");
    },500);
    
    TweenMax.to($(".main_vis .roll").eq(0).find(".bg"),1.5,{scale:1, ease:Power3.easeOut});

    $(".main_vis .arrow a").each(function(i){
        $(this).click(function(){
            if(i == 0){ // prev
                $(".main_vis .roll").removeClass("active");
                TweenMax.to($(".main_vis .roll").find(".bg"),3,{scale:1.5, ease:Power3.easeOut});
                mainVisNum--;
                if(mainVisNum < 0){
                    mainVisNum = $(".main_vis .roll").size()-1;
                }
                $(".main_vis .roll").eq(mainVisNum).addClass("active");         
                TweenMax.to($(".main_vis .roll").eq(mainVisNum).find(".bg"),1.5,{scale:1, ease:Power3.easeOut});
            }else{  // next
                $(".main_vis .roll").removeClass("active");
                TweenMax.to($(".main_vis .roll").find(".bg"),3,{scale:1.5, ease:Power3.easeOut});
                mainVisNum++;
                if(mainVisNum > $(".main_vis .roll").size()-1){
                    mainVisNum = 0;
                }
                $(".main_vis .roll").eq(mainVisNum).addClass("active");   
                TweenMax.to($(".main_vis .roll").eq(mainVisNum).find(".bg"),1.5,{scale:1, ease:Power3.easeOut});
            }
        });
    });

    // con1
    var cDiv1Num = 0;
    $(".c_div.t1 .hover_btn").click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(this).addClass("on");
        }
        $(".c_div.t1 .img_div .img").eq(cDiv1Num).addClass("before");
        $(".c_div.t1 .txt_div .txt").eq(cDiv1Num).addClass("before");
        cDiv1Num++;
        if(cDiv1Num > $(".c_div.t1 .img_div .img").size() - 1){
            cDiv1Num = 0;
        }
        TweenMax.to($(".c_div.t1 .img_div .img").eq(cDiv1Num), 0.6, {top:0});
        $(".c_div.t1 .txt_div .txt").eq(cDiv1Num).addClass("active");
        setTimeout(function(){            
            TweenMax.to($(".c_div.t1 .img_div .img.before"), 0, {top:"100%"});
            $(".c_div.t1 .img_div .img.before").removeClass("before");
            $(".c_div.t1 .txt_div .txt.before").removeClass("active");
            $(".c_div.t1 .txt_div .txt.before").removeClass("before");
        },600);
    });

    $(".c_div.t1 .arrow a").each(function(i){
        $(this).click(function(){
            $(".c_div.t1 .hover_btn").click();
        });

    });

    // scollMotion
    var _arrY = [];
    $(".scrollMotion").each(function(q){
        _arrY.push(parseInt($(".scrollMotion").eq(q).offset().top) + 300);
    });

    $(window).scroll(function(){
        if($(".scrollMotion").length != 0) {
            $(".scrollMotion").each(function(q){
                if($(window).scrollTop() + $(window).height() > _arrY[q]) $(".scrollMotion").eq(q).addClass("active");
                else $(".scrollMotion").eq(q).removeClass("active");
            });
        };
    });


    // scrollMagic
    TweenMax.to($(".c_div.t1 .img_div .img"),0.3,{opacity:0, width:750});

    var durationSize = $(".c_div.t1 .arrow .prev").offset().top - $(window).height()/2.3;
    var controller = new ScrollMagic.Controller();
    var tween1 = TweenMax.to(".main_vis .roll:first-child .bg" , 0.3, {width:720});

    var tween2 = TweenMax.to(".c_div.t1 .img_div .img", 0.3, {width:1440});

    var scene = new ScrollMagic.Scene({
        triggerElement : ".main_vis .arrow .prev", 
        duration:durationSize
    })
    .setClassToggle(".main_vis", "scroll")
    .setPin(".main_vis .roll:first-child .bg")
    .setTween(tween1)
    .addTo(controller)
    .addIndicators({name:"1"});

    scene.on("progress", function (event) {
        if(event.progress >= 0.97) {
            TweenMax.to($(".main_vis .roll:first-child .bg"), 0.3,{opacity:0});
            TweenMax.to($(".c_div.t1 .img_div .img"),0.3,{opacity:1});
        }else{
            TweenMax.to($(".main_vis .roll:first-child .bg"), 0.3,{opacity:1});
            TweenMax.to($(".c_div.t1 .img_div .img"),0.3,{opacity:0});
        }
    });

    var durationSize2 = $(".c_div.t2").offset().top - $(window).height() + 100;
    var scene2 = new ScrollMagic.Scene({
        triggerElement : ".c_div.t1 .arrow .prev",
        duration:durationSize2
    })
    .setPin(".c_div.t1 .img_div .img")
    .setTween(tween2)
    .addTo(controller)
    .addIndicators({name:"2"});

    scene2.on("progress", function(event){
            console.log(event.progress)
        if(event.progress >= 0.8){
            TweenMax.to($(".c_div.t1 .img_div .img"),0.3,{height:660});
            if(event.progress >= 0.9){       
                TweenMax.to($(".c_div.t1 .img_div .img"),0.3,{opacity:0});
                TweenMax.to($(".c_div.t2 .swiper-slide .img_div"), 0.3,{width:1440, opacity:1});
            }
        }else{
            TweenMax.to($(".c_div.t1 .img_div .img"),0.3,{opacity:1});
            TweenMax.to($(".c_div.t1 .img_div .img"),0.3,{height:""});
            TweenMax.to($(".c_div.t2 .swiper-slide .img_div"), 0.3,{opacity:0});
        }
    });

    
});