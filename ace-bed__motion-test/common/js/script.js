$(function(){
    $(window).resize(function(){
        console.log("윈도우 가로값 : " + $(window).width());
    });
    jQuery(".thumb").css("opacity", "0");
    //jQuery(".onDiv").animate({opacity:0}, 0);
    var cHeight = (jQuery(window).height()-100)/2;
    var uHeight = jQuery(".unit").height()/2;
    var maxPos = $("#cBody .inner > div").length;
    var isMoving = true;


    jQuery(window).resize(function(){
        jQuery("#cBody").css("height", jQuery(window).height()-100);
    });
    jQuery(window).resize();
    
    
   
    $(".inner > div").on("click", function(){
		if($(this).attr("class") == "pos2"){
			jQuery(".unit .img .onDiv").hide();
			jQuery(".inner > div .title").animate({opacity:0, top:-70}, 0, "easeOutQuint");
			jQuery("#cBody .inner > div").find(".subScript").fadeOut(100);
		    for(i = 0; i < maxPos; i++){
			   var curPosNum = parseInt($("#cBody .inner > div").eq(i).attr("class").split("s")[1]);
			   console.log(curPosNum);
			   curPosNum--;
			   if(curPosNum <= 0){
				   curPosNum = maxPos
			   }
			   console.log("curPosNum : "+curPosNum);
			   $("#cBody .inner > div").eq(i).removeClass();
			   $("#cBody .inner > div").eq(i).addClass("pos"+curPosNum);
		   }
		   jQuery(".inner > div.pos1 .title").delay(700).animate({opacity:1, top:-80}, 700, "easeOutQuint");
		   jQuery("#cBody .inner > div.pos1").find(".subScript").delay(800).fadeIn(600);
		}
		
    });
    
    $(".inner > div").on("click", function(){
		if($(this).attr("class") == "pos3"){
			jQuery(".unit .img .onDiv").hide();
			jQuery(".inner > div .title").animate({opacity:0, top:-70}, 0, "easeOutQuint");
			jQuery("#cBody .inner > div").find(".subScript").fadeOut(100);
		    for(i = 0; i < maxPos; i++){
			   var curPosNum = parseInt($("#cBody .inner > div").eq(i).attr("class").split("s")[1]);
			   console.log(curPosNum);
			   curPosNum++;
			   if(curPosNum > maxPos){
				   curPosNum = 1
			   }
			   console.log("curPosNum : "+curPosNum);
			   $("#cBody .inner > div").eq(i).removeClass();
			   $("#cBody .inner > div").eq(i).addClass("pos"+curPosNum);
		   }
		   jQuery(".inner > div.pos1 .title").delay(700).animate({opacity:1, top:-80}, 700, "easeOutQuint");
		   jQuery("#cBody .inner > div.pos1").find(".subScript").delay(800).fadeIn(600);
		}
		
    });
    
    
    
    

    /* 인트로 모션부터 끝까지 자동 진행*/
    if(jQuery("#cBody .unit").length == 1){
       // console.log("1개");
        jQuery("#cBody .inner > div").eq(0).delay(500).animate({
            opacity:1
        },200);
		setTimeout(function(){
            jQuery("#cBody .inner > div").delay(500).eq(0).addClass("pos1");

            jQuery(".thumb").eq(0).animate({opacity:1},1000, "easeOutQuint");

			jQuery(".inner > div.pos1 .title").delay(700).animate({opacity:1, top:-80}, 700, "easeOutQuint");
			jQuery("#cBody .inner > div.pos1").find(".subScript").delay(800).fadeIn(600);

            isMoving = false;     
        },1100);

    } else if(jQuery("#cBody .unit").length == 2){
		 //console.log("2개");
        jQuery("#cBody .inner > div").eq(0).delay(500).animate({
            opacity:1
        },200);
        jQuery("#cBody .inner > div").eq(1).delay(700).animate({
            opacity:1
        },200);
        setTimeout(function(){
            jQuery("#cBody .inner > div").delay(500).eq(0).addClass("pos1");
            jQuery("#cBody .inner > div").eq(1).addClass("pos2");
            jQuery("#cBody .inner > div").eq(2).addClass("pos3");

            jQuery(".thumb").eq(0).animate({opacity:1},1000, "easeOutQuint");
            jQuery(".thumb").eq(1).animate({opacity:1},1000, "easeOutQuint");
            jQuery(".thumb").eq(2).animate({opacity:1},1000, "easeOutQuint");

			jQuery(".inner > div.pos1 .title").delay(700).animate({opacity:1, top:-80}, 700, "easeOutQuint");
			jQuery("#cBody .inner > div.pos1").find(".subScript").delay(800).fadeIn(600);

            isMoving = false;
            
        },1400);
    } else if(jQuery("#cBody .unit").length == 3){
        console.log("3개");
        jQuery("#cBody .inner > div").eq(0).delay(500).animate({
            opacity:1
        },200);
		/**/
        jQuery("#cBody .inner > div").eq(1).delay(700).animate({
            opacity:1
        },200);
        jQuery("#cBody .inner > div").eq(2).delay(1100).animate({
            opacity:1
        },200);
        setTimeout(function(){
            jQuery("#cBody .inner > div").delay(500).eq(0).addClass("pos1");
            jQuery("#cBody .inner > div").eq(1).addClass("pos2");
            jQuery("#cBody .inner > div").eq(2).addClass("pos3");

            jQuery(".thumb").eq(0).animate({opacity:1},1000, "easeOutQuint");
            jQuery(".thumb").eq(1).animate({opacity:1},1000, "easeOutQuint");
            jQuery(".thumb").eq(2).animate({opacity:1},1000, "easeOutQuint");

			jQuery(".inner > div.pos1 .title").delay(700).animate({opacity:1, top:-80}, 700, "easeOutQuint");
			jQuery("#cBody .inner > div.pos1").find(".subScript").delay(800).fadeIn(600);

            isMoving = false;     
        },1700);
		
    }
	/*
	setTimeout(function(){
		$(".pos1 .unit .img").on("mouseenter", function(){
			$(".pos1 .unit .img").find(".onDiv").fadeIn()
		});
		$(".pos1 .unit .img").on("mouseleave", function(){
			$(".pos1 .unit .img").find(".onDiv").fadeOut()
		})
	}, 1800);
	*/
	
	jQuery(".unit").each(function(){
		jQuery(this).find(".img").hover(function(){
			if(isMoving == false){
				jQuery(this).find(".onDiv").stop(true,true).fadeIn();
			}
		}, function(){
			jQuery(this).find(".onDiv").stop(true,true).fadeOut();
		})
	});
})