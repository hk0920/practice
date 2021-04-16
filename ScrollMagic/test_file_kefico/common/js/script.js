$(window).load(function() {
    var controller = new ScrollMagic.Controller();
    var mainTween = TweenMax.to($(".main_vis .section.t1"), 0.3, {height:0});

    var durationSize = $(window).height();

    console.log(durationSize)
    var mainScene = new ScrollMagic.Scene({
        triggerElement : ".main_vis .trigger1", 
        triggerHook : 1,
        duration: durationSize
    })
    .setTween(mainTween)
    .addTo(controller)
    .addIndicators({
        name:"tween1",
        colorTrigger:'white',
        indent: 20,
        colorStart :"lime",
    });

    mainScene.on("progress", function(e){
        if(e.progress == 1){
            TweenMax.to($(".main_vis .section.t2"),0.6, {opacity:0})
            TweenMax.to($(".main_vis .section.t3"),0.6, {opacity:1})
            $("#header").addClass("black_type");
        }else{
            TweenMax.to($(".main_vis .section.t2"),0.6, {opacity:1})
            TweenMax.to($(".main_vis .section.t3"),0.6, {opacity:0})
            $("#header").removeClass("black_type");
        }
    });

    var mainTween2 =  TweenMax.to($(".main_vis .motion_div .motion_obj1"),0.3, {top:"auto", bottom:88, left:-120, width:"1220px", ease:Power3.easeOut, onComplete:function(){
        TweenMax.to($(".main_vis .motion_div .motion_obj2"),0.6,{right:250, ease:Power2.easeOut})
    }})

    var mainScene2 = new ScrollMagic.Scene({
        triggerElement : ".main_vis .trigger2", 
        triggerHook : 1,
        duration : durationSize
    })
    .setTween(mainTween2)
    .addTo(controller)
    .addIndicators({
        name:"tween2",
        colorTrigger:'yellow',
        indent: 20,
        colorStart :"blue",
    })

    mainScene2.on("progress", function(e){
        if(e.progress <= 0.5){
            TweenMax.to($(".main_vis .motion_div .motion_obj2"),0.6,{right:-560, ease:Power2.easeOut})
            if(e.progress == 0){
                TweenMax.to($(".main_vis .motion_div .motion_obj1"),0.3, {width:"auto", top:-104, bottom:"auto", left:51, ease:Power3.easeOut});
            }
        }

    });

    motionObj2();

//    var mainTween3 = TweenMax.to($(".main_vis .motion_div .motion"),0.3, {})

});

function motionObj2(){
    var motionNum = 0;
    var motionSize = $(".motion_obj2_bg p").size() - 1;
    setInterval(function(){
        TweenMax.to($(".motion_obj2_bg p").eq(motionNum),2, {left:"100%", ease:Power3.easeOut});
        motionNum++;
        if(motionNum > motionSize){
            motionNum = 0;
        }
        console.log(motionNum)
        TweenMax.to($(".motion_obj2_bg p").eq(motionNum),0, {left:"-100%", ease:Power3.easeOut});
        TweenMax.to($(".motion_obj2_bg p").eq(motionNum),2, {left:"0%", ease:Power3.easeOut});
    },2000);
    
}