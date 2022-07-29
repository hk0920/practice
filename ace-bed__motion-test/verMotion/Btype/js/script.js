var _width = 0;
var _width1 = 0;
var _width2 = 0;
var nextClick = false;
var mainTabClick = false;

$(window).load(function() {
    _width = $(".scroller.t1 #mCSB_1_container").width();
    $(".scroller.t1").mCustomScrollbar({
		axis:"x",
        scrollbarPosition: "outside",
		scrollInertia: 1400,
		moveDragger:true,
		documentTouchScroll: true,
		mouseWheel : {
			scrollAmount : 700
        },
        callbacks:{
            whileScrolling:function(e){
                //console.log(parseInt($("#mCSB_1_container").css("left").split("p")[0]))
                if(window.innerWidth <= 1680){
                    $(".scroller.t1 .motion").each(function(q){
                        if($(window).width() - $(".scroller.t1 .motion").eq(q).offset().left >= 0) {
                            $(".scroller.t1 .motion").eq(q).css("transform", "translateX("+(-$(".scroller.t1 .motion").eq(q).attr("data-speed") / 13) * ($(window).width() - $(".scroller.t1 .motion").eq(q).offset().left)+"px)");
                        }
                    });
                }else{
                    $(".scroller.t1 .motion").each(function(q){
                        if($(window).width() - $(".scroller.t1 .motion").eq(q).offset().left >= 0) {
                            $(".scroller.t1 .motion").eq(q).css("transform", "translateX("+(-$(".scroller.t1 .motion").eq(q).attr("data-speed") / 8) * ($(window).width() - $(".scroller.t1 .motion").eq(q).offset().left)+"px)");
                        }
                    }); 
                }

                $(".scroller.t1 .scrollMotion").each(function(i){
                    if($(window).width() - $(".scroller.t1 .scrollMotion").eq(i).offset().left >= 0){
                        $(".scroller.t1 .scrollMotion").eq(i).addClass("active");
                    }
                })                

                if($(".scroller.t1 .mCSB_container").offset().left <= -1920){
					if(nextClick == false){
                        console.log("탄다다다ㅏ다다다ㅏㅏ하하하하하하하하ㅏ")
                        $("header .menu_div").addClass("left_type");
						TweenMax.to($("header .menu_div .left_list"),0.4, {left:0, opacity:1, ease:Power3.easeOut})
						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu"),0.4,{left:30, zIndex:2, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu .icon span"),0.4,{width:44, background:"#333333", ease:Power3.easeOut});
						$("header .menu_div .menu .txt").addClass("black_type");
						TweenMax.to($("h1"),0.4, {top:-99, opacity:0});
					}
                }else{
					if(nextClick == false){
						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu"),0.4,{left:80, zIndex:"", ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu .icon span"),0.4,{width:40, background:"#ffffff", ease:Power3.easeOut});
						$("header .menu_div .menu .txt").removeClass("black_type");

						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut})
                        TweenMax.to($("h1"),0.4, {top:0, opacity:1});
                        
                        if($(".scroller.t1 .mCSB_container").offset().left >= -100){ // 처음 화면
                            $(".main_tab_btn").css("display", "block");
                            TweenMax.to($(".main_tab_btn"),0.6,{opacity:1});
                            TweenMax.to($(".scroll_btn"), 0.6,{opacity:1})
                        }else{
                            TweenMax.to($(".main_tab_btn"),0.6,{opacity:0, onComplete:function(){
                                $(".main_tab_btn").css("display", "none");
                            }});
                            TweenMax.to($(".scroll_btn"), 0.6,{opacity:0})
                            
                        }
					}
                    $("header .menu_div").removeClass("left_type");
                    TweenMax.to($("header .menu_div .left_list"),0.4, {left:-100, opacity:0, ease:Power3.easeOut})
                }

                if($(".scroller.t1 .mCSB_container").offset().left <= -2890){					
					if(nextClick == false){
						$("header .right_div").addClass("black_type");
					}
                }else{					
					if(nextClick == false){
						$("header .right_div").removeClass("black_type");
					}
                }
                
                if($(".scroller.t1 .mCSB_container").offset().left <= -($(".scroller.t1 .page").width() - $(window).width() - 50)){
                    $(".scroller.t1 .next_btn").removeClass("black")
                    TweenMax.to($(".scroller.t1 .next_btn"),0.8,{right:40, opacity:1, ease:Power3.easeOut});
                }else{
                    TweenMax.to($(".scroller.t1 .next_btn"),0.8,{right:-120, opacity:0, ease:Power3.easeOut});
                }                  
            }
        },
    }); 

    _width1 = $(".scroller.t2 #mCSB_1_container").width();
    $(".scroller.t2").mCustomScrollbar({
		axis:"x",
        scrollbarPosition: "outside",
		scrollInertia: 1400,
		moveDragger:true,
		documentTouchScroll: true,
		mouseWheel : {
			scrollAmount : 700
        },
        callbacks:{
            whileScrolling:function(e){
                $(".scroller.t2 .motion").each(function(q){
                    if($(window).width() - $(".scroller.t2 .motion").eq(q).offset().left >= 0) {
						$(".scroller.t2 .motion").eq(q).css("transform", "translateX("+(-$(".scroller.t2 .motion").eq(q).attr("data-speed") / 8) * ($(window).width() - $(".scroller.t2 .motion").eq(q).offset().left)+"px)");
					}
                }); 

                if($(".scroller.t2 .mCSB_container").offset().left <= -1920){
					if(nextClick == false){
                        $("header .menu_div").addClass("left_type");
						TweenMax.to($("header .menu_div .left_list"),0.4, {left:0, opacity:1, ease:Power3.easeOut})
						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu"),0.4,{left:30, zIndex:2, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu .icon span"),0.4,{width:44, background:"#333333", ease:Power3.easeOut});
						$("header .menu_div .menu .txt").addClass("black_type");
						TweenMax.to($("h1"),0.4, {top:-99, opacity:0});
					}
                }else{
					if(nextClick == false){
						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu"),0.4,{left:80, zIndex:"", ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu .icon span"),0.4,{width:40, background:"#ffffff", ease:Power3.easeOut});
						$("header .menu_div .menu .txt").removeClass("black_type");

						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut})
                        TweenMax.to($("h1"),0.4, {top:0, opacity:1});
                        
                        if($(".scroller.t2 .mCSB_container").offset().left >= -100){ // 처음 화면
                            $(".main_tab_btn").css("display", "block");
                            TweenMax.to($(".main_tab_btn"),0.6,{opacity:1});
                            TweenMax.to($(".scroll_btn"), 0.6,{opacity:1})
                        }else{
                            TweenMax.to($(".main_tab_btn"),0.6,{opacity:0, onComplete:function(){
                                $(".main_tab_btn").css("display", "none");
                            }});
                            TweenMax.to($(".scroll_btn"), 0.6,{opacity:0})
                            
                        }
					}
                    $("header .menu_div").removeClass("left_type");
                    TweenMax.to($("header .menu_div .left_list"),0.4, {left:-100, opacity:0, ease:Power3.easeOut})
                }

                if($(".scroller.t2 .mCSB_container").offset().left <= -3800){
					if(nextClick == false){
						$("header .right_div").addClass("black_type");					
					}
                }else{
					if(nextClick == false){
						$("header .right_div").removeClass("black_type");
					}
                }

				 if($(".scroller.t2 .mCSB_container").offset().left <= -($(".scroller.t2 .page").width() - $(window).width() - 100)){
					$(".chatbot_btn").addClass("end");
                }else{
					$(".chatbot_btn").removeClass("end");
                } 
                
            }
        },
    });
    

    _width2 = $(".scroller.t3 #mCSB_1_container").width();
    $(".scroller.t3").mCustomScrollbar({
		axis:"x",
        scrollbarPosition: "outside",
		scrollInertia: 1400,
		moveDragger:true,
		documentTouchScroll: true,
		mouseWheel : {
			scrollAmount : 700
        },
        callbacks:{
            whileScrolling:function(e){
                $(".scroller.t3 .motion").each(function(q){
                    if($(window).width() - $(".scroller.t3 .motion").eq(q).offset().left >= 0) {
						$(".scroller.t3 .motion").eq(q).css("transform", "translateX("+(-$(".scroller.t3 .motion").eq(q).attr("data-speed") / 8) * ($(window).width() - $(".scroller.t3 .motion").eq(q).offset().left)+"px)");
					}
                }); 
                console.log("탄다다다다다다ㅏ다3333333333333333")

                if($(".scroller.t3 .mCSB_container").offset().left <= -1920){
					if(nextClick == false){
                        $("header .menu_div").addClass("left_type");
						TweenMax.to($("header .menu_div .left_list"),0.4, {left:0, opacity:1, ease:Power3.easeOut})
						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu"),0.4,{left:30, zIndex:2, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu .icon span"),0.4,{width:44, background:"#333333", ease:Power3.easeOut});
						$("header .menu_div .menu .txt").addClass("black_type");
						TweenMax.to($("h1"),0.4, {top:-99, opacity:0});
					}
                }else{
					if(nextClick == false){
						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu"),0.4,{left:80, zIndex:"", ease:Power3.easeOut});
						TweenMax.to($("header .menu_div .menu .icon span"),0.4,{width:40, background:"#ffffff", ease:Power3.easeOut});
						$("header .menu_div .menu .txt").removeClass("black_type");

						TweenMax.to($("header .menu_div"),0.3,{left: 0, ease:Power3.easeOut})
                        TweenMax.to($("h1"),0.4, {top:0, opacity:1});
                        
                        if($(".scroller.t3 .mCSB_container").offset().left >= -100){ // 처음 화면
                            $(".main_tab_btn").css("display", "block");
                            TweenMax.to($(".main_tab_btn"),0.6,{opacity:1});
                            TweenMax.to($(".scroll_btn"), 0.6,{opacity:1})
                        }else{
                            TweenMax.to($(".main_tab_btn"),0.6,{opacity:0, onComplete:function(){
                                $(".main_tab_btn").css("display", "none");
                            }});
                            TweenMax.to($(".scroll_btn"), 0.6,{opacity:0})
                            
                        }
					}
                    $("header .menu_div").removeClass("left_type");
                    TweenMax.to($("header .menu_div .left_list"),0.4, {left:-100, opacity:0, ease:Power3.easeOut})
                }

                if($(".scroller.t3 .mCSB_container").offset().left <= -5730){					
					if(nextClick == false){
						$("header .right_div").addClass("black_type");
					}
                }else{					
					if(nextClick == false){
						$("header .right_div").removeClass("black_type");
					}
                }
                
                if($(".scroller.t3 .mCSB_container").offset().left <= -5300){
                    TweenMax.to($(".scroller.t3 .section.t3 .bg2"),2,{delay:1.8, width:"100%" , opacity:1, ease:Power3.easeOut});
                    $(".scroller.t3 .section.t3 .list li").each(function(q){
                        TweenMax.to($(this),0.8,{delay:0.2*q, top:0, opacity:1})
                    })
                }else{
                    TweenMax.to($(".scroller.t3 .section.t3 .bg2"),2,{width:0, opacity:0,  ease:Power3.easeOut});
                }
                
                if($(".scroller.t3 .mCSB_container").offset().left <= -($(".scroller.t3 .page").width() - $(window).width() - 50)){
                    $(".scroller.t3 .next_btn").addClass("black")
                    TweenMax.to($(".scroller.t3 .next_btn"),0.8,{right:40, opacity:1, ease:Power3.easeOut});
                }else{
                    TweenMax.to($(".scroller.t3 .next_btn"),0.8,{right:-120, opacity:0, ease:Power3.easeOut});
                }    
            }
        },
    });

    $(".product_pop .scroll_div").mCustomScrollbar({
        scrollbarPosition: "outside",
        autoExpandScrollbar: "ture",
    });
    $(".scroller").eq(0).css("z-index",1);
    
    TweenMax.to($(".scroller.t1 .mainV .section_div.main .bg_div"),0,{scale:1.3, ease:Power3.easeOut});
    TweenMax.to($(".scroller.t3 .mainV"),0,{scale:1.3, ease:Power3.easeOut});
    TweenMax.to($(".scroller.t2 .mainV"),0,{scale:1.3, ease:Power3.easeOut});

    $(".main_tab_btn a").each(function(q){
        $(this).click(function(){
            if(mainTabClick == true){
                nextClick = true;
                
                if(!$(this).hasClass("on")){
                    $(".main_tab_btn a").find(".txt1, .txt3").hide();
                    TweenMax.to($(".main_tab_btn a").find(".txt2"),0,{height:25, marginTop:0, ease:Power3.easeOut});
                    TweenMax.to($(".main_tab_btn a").find(".txt2 img"),0,{opacity:0.6, ease:Power3.easeOut});
                    $(".scroller").css("z-index",0);

                    $(".scroller").eq(q).css("z-index",1);
                    $(".main_tab_btn a").removeClass("on");
                    $(this).addClass("on");
                    $(".main_tab_btn a").eq(q).find(".txt1, .txt3").fadeIn(1300);
                    TweenMax.to($(".main_tab_btn a").eq(q).find(".txt2"),1.5,{height:66, marginTop:42, ease:Power3.easeOut});
                    TweenMax.to($(".main_tab_btn a").eq(q).find(".txt2 img"),1.1,{opacity:1, ease:Power3.easeOut});
                    TweenMax.to($(".main_tab_btn a").eq(q), 1.1, {top:0, ease:Power3.easeOut});
                    TweenMax.to($(".main_tab_btn a").eq(q-1), 0, {top:481})
                    TweenMax.to($(".main_tab_btn a").eq(q-1), 1.1, {top:460, ease:Power3.easeOut})
                    TweenMax.to($(".main_tab_btn a").eq(q-2), 0, {top:0})
                    TweenMax.to($(".main_tab_btn a").eq(q-2), 0, {top:481})
                    TweenMax.to($(".main_tab_btn a").eq(q-2), 1.1, {top:415, ease:Power3.easeOut})   
                    
                    $("header .menu_div .menu").css("left",80);
                    $("header .menu_div .left_list").css("left",-100);
                    $("header .menu_div").removeClass("left_type");
                    $("header .menu_div .left_list > div a").removeClass("on");
                    $("header .menu_div .left_list > div a").eq(q).addClass("on");
                    $("header .menu_div .menu .txt").removeClass("black_type");
                    $(".main_tab_btn").css({"display":"block", "opacity":1})
                    $("header .right_div").removeClass("black_type");
                    $("header h1").css({top:0, opacity:1});
                    TweenMax.to($("header .menu_div .menu .icon span"),0.4,{width:40, background:"#ffffff", ease:Power3.easeOut});
                }   

                $(".scroller.t1").mCustomScrollbar("scrollTo",0);
                $(".scroller.t2").mCustomScrollbar("scrollTo",0);
                $(".scroller.t3").mCustomScrollbar("scrollTo",0);
                TweenMax.to($(".scroller.t1 .mainV .section_div.main .bg_div"),0,{scale:1.3, ease:Power3.easeOut});
                TweenMax.to($(".scroller.t3 .mainV"),0,{scale:1.3, ease:Power3.easeOut});
                TweenMax.to($(".scroller.t2 .mainV"),0,{scale:1.3, ease:Power3.easeOut});

                            
                TweenMax.to($(".scroller.t1 .mainV .section_div.main .bg_div"),1.3,{delay:0.2, scale:1, ease:Power3.easeOut});
                TweenMax.to($(".scroller.t3 .mainV"),1.3,{delay:0.2, scale:1, ease:Power3.easeOut});
                TweenMax.to($(".scroller.t2 .mainV"),1.3,{delay:0.2, scale:1, ease:Power3.easeOut, onComplete:function(){
                    nextClick = false;
                }});
            
            }
		    
        });
    });

    
    //next 
    $(".scroller.t1 .next_btn").click(function(){
        $(".main_tab_btn a").eq(1).click();
		
    });

    $(".scroller.t3 .next_btn").click(function(){
        $(".main_tab_btn a").eq(2).click();

    });

	// left_gnb
	$("header .menu_div .left_list > div a").each(function(q){
		$(this).click(function(){
			if(q == 0){
				$(".main_tab_btn a").eq(0).click();		
			}else if(q == 1){
				$(".main_tab_btn a").eq(1).click();		
			}else{
				$(".main_tab_btn a").eq(2).click();		
            }            
		})
	})
	
    
    TweenMax.to($(".hash_tag .tag_con p").eq(0).find("img"),0,{left:0, opacity:1, ease:Power3.easeOut});
    
    $(".scroller.t1 .hash_tag .tag_bt").click(function(){
        if($(this).hasClass("on")){
            $(".hash_tag .tag_con p").eq(1).hide();
            TweenMax.to($(".hash_tag .tag_con p").eq(1).find("img"),0,{left:150, opacity:0, ease:Power3.easeOut});

            $(".hash_tag .tag_con p").eq(0).show();
            $(".hash_tag .tag_con p").eq(0).find("img").each(function(q){
                TweenMax.to($(this),1.2,{delay:0.2*q, left:0, opacity:1, ease:Power3.easeOut});
            })            
            $(".scroller.t1 .hash_tag .tag_bt").removeClass("on");
        }else{
            $(this).addClass("on");
            $(".hash_tag .tag_con p").eq(0).hide();
            TweenMax.to($(".hash_tag .tag_con p").eq(0).find("img"),0,{left:150, opacity:0, ease:Power3.easeOut});

            $(".hash_tag .tag_con p").eq(1).show();
            $(".hash_tag .tag_con p").eq(1).find("img").each(function(q){
                TweenMax.to($(this),1.2,{delay:0.2*q, left:0, opacity:1, ease:Power3.easeOut});
            })
        }
    })

    
    TweenMax.to($(".scroller.t3 .hover_e .hover_btn a").eq(0).find("span"),0.3,{scale:0.8, yoyo:true, repeat:-1});
    TweenMax.to($(".scroller.t3 .hover_tab_div .txt_div p").eq(0),0,{top:0, opacity:1, zIndex:1});
    TweenMax.to($(".scroller.t3 .hover_tab_div .txt_div p").eq(0),0.6,{top:0, opacity:1, zIndex:1});

    $(".scroller.t3 .hover_e .hover_btn a").each(function(q){
        $(this).click(function(){
            if(!$(this).hasClass("on")){
                $(".scroller.t3 .hover_e .hover_btn a").removeClass("on")
                $(this).addClass("on");
                TweenMax.to($(".scroller.t3 .hover_tab_div .txt_div p"),0,{top:50, opacity:0, zIndex:0});
                TweenMax.to($(".scroller.t3 .hover_tab_div .txt_div p").eq(q),0.6,{top:0, opacity:1, zIndex:1});

                TweenMax.to($(".scroller.t3 .hover_e .hover_btn a").find("span"),0.3,{scale:1, yoyo:false, repeat:0});
                TweenMax.to($(this).find("span"),0.3,{scale:0.8, yoyo:true, repeat:-1});
                $()
            }
        })
    }); 

	$(".scroller.t3 .tab_div .tab_bt").click(function(){ //여기
        if(!$(this).hasClass("on")){
            TweenMax.to($(".scroller.t3 .section.t2 .cell:last-child .tab_div .img_div p.t1 img").eq(0),0.8,{left:"100%", ease:Power3.easeOut});     
            TweenMax.to($(".scroller.t3 .section.t2 .cell:last-child .tab_div .img_div p.t2 img").eq(0),0.8,{left:"-100%", ease:Power3.easeOut});   
            TweenMax.to($(".scroller.t3 .section.t2 .cell:last-child .tab_div .img_div p.t1 img").eq(1),0.8,{left:0, ease:Power3.easeOut});     
            TweenMax.to($(".scroller.t3 .section.t2 .cell:last-child .tab_div .img_div p.t2 img").eq(1),0.8,{left:0, ease:Power3.easeOut});         
            setTimeout(function(){
                $(".scroller.t3 .tab_div .tab_bt").addClass("on");
            },500)
        }else{                        
            TweenMax.to($(".scroller.t3 .section.t2 .cell:last-child .tab_div .img_div p.t1 img").eq(1),0.8,{left:"-100%", ease:Power3.easeOut});     
            TweenMax.to($(".scroller.t3 .section.t2 .cell:last-child .tab_div .img_div p.t2 img").eq(1),0.8,{left:"100%", ease:Power3.easeOut});   
            TweenMax.to($(".scroller.t3 .section.t2 .cell:last-child .tab_div .img_div p.t1 img").eq(0),0.8,{left:0, ease:Power3.easeOut});     
            TweenMax.to($(".scroller.t3 .section.t2 .cell:last-child .tab_div .img_div p.t2 img").eq(0),0.8,{left:0, ease:Power3.easeOut});
            setTimeout(function(){
                $(".scroller.t3 .tab_div .tab_bt").removeClass("on");
            },500)
        }        
    });

    $(".scroller.t3 .section.t4 a.event_btn").each(function(i){
        $(this).click(function(){
            if(!$(this).hasClass("on")){
                TweenMax.to($(".scroller.t3 .section.t4 .event_btn"),0.2,{opacity:0.4, ease:Power3.easeOut})
                $(".scroller.t3 .section.t4 .event_btn").removeClass("on");
                TweenMax.to($(this),0.2,{opacity:1, ease:Power3.easeOut})
                $(this).addClass("on");
                $(".scroller.t3 .section.t4 .event_img").addClass("on");
                $(".scroller.t3 .section.t4 .event_btn").find("div").stop(true, true).slideUp(400);
                $(this).find("div").stop(true, true).slideDown(400);
                TweenMax.to($(".scroller.t3 .section.t4 .event_img img"),0, {opacity:0, ease:Power3.easeOut});
                TweenMax.to($(".scroller.t3 .section.t4 .event_img img").eq(i),0.4, {opacity:1, ease:Power3.easeOut});
            }else{
                TweenMax.to($(".scroller.t3 .section.t4 .event_btn"),0.2,{opacity:1, ease:Power3.easeOut})
                $(".scroller.t3 .section.t4 .event_btn").removeClass("on");
                $(".scroller.t3 .section.t4 .event_img").removeClass("on");
                $(".scroller.t3 .section.t4 .event_btn").find("div").stop(true, true).slideUp(400);
                TweenMax.to($(".scroller.t3 .section.t4 .event_img img"),0.4, {opacity:0, ease:Power3.easeOut});

            }
        }) 
    });

    $(".scroller.t2 .section.t2 .cell:last-child .txt2").click(function(){
        if(!$(this).hasClass("on")){
            $(this).addClass("on");
            TweenMax.to($(".scroller.t2 .section.t2 .cell:last-child .txt2 p").eq(0),0.3,{opacity:0, ease:Power3.easeOut});
            TweenMax.to($(".scroller.t2 .section.t2 .cell:last-child .txt2 p").eq(1),0.3,{opacity:1, ease:Power3.easeOut});
            TweenMax.to($(".scroller.t2 .section.t2 .cell:last-child .bg p").eq(0),0.6,{left:"-100%", ease:Power3.easeOut});
            TweenMax.to($(".scroller.t2 .section.t2 .cell:last-child .bg p").eq(1),0.6,{left:0, ease:Power3.easeOut});
        }else{
            TweenMax.to($(".scroller.t2 .section.t2 .cell:last-child .txt2 p").eq(0),0.3,{opacity:1, ease:Power3.easeOut});
            TweenMax.to($(".scroller.t2 .section.t2 .cell:last-child .txt2 p").eq(1),0.3,{opacity:0, ease:Power3.easeOut});
            TweenMax.to($(".scroller.t2 .section.t2 .cell:last-child .bg p").eq(0),0.6,{left:0, ease:Power3.easeOut});
            TweenMax.to($(".scroller.t2 .section.t2 .cell:last-child .bg p").eq(1),0.6,{left:"100%", ease:Power3.easeOut, onComplete:function(){                    
                $(".scroller.t2 .section.t2 .cell:last-child .txt2").removeClass("on");
            }});
        }
    });

    // 팝업
    $("header .menu_div .menu").click(function(){
        if(!$(this).hasClass("open")){
            $("header .menu_div .menu").addClass("open");
            $("header").css("z-index", 11);
            $("header h1").hide();
            $(".main_tab_btn").css("z-index", 9);
            TweenMax.to($(".menu_pop"), 0.6, {left:"50%", opacity:1, ease:Power3.easeOut});
            if($("header .menu_div").hasClass("left_type")){        
                TweenMax.to($("header .menu_div .left_list"), 0.6, {left:-100, opacity:0, ease:Power3.easeOut});
            }

            if($("header .right_div").hasClass("black_type")){
                $("header .right_div").addClass("white_type");
            }

            if($("header .right_div").hasClass("open")){ // 제품 팝업 열려있을 경우                
                $(".product_btn, header .right_div").removeClass("open")
                TweenMax.to($(".product_pop"),0.6,{left:"100%", opacity:0, ease:Power3.easeOut});
            }
            $(".dimd").fadeIn(600);
        }else{
            $("header").css("z-index", 10);
            $("header h1").show();
            $(".main_tab_btn").css("z-index", 10);
            $("header .menu_div .menu").removeClass("open");
            TweenMax.to($(".menu_pop"), 0.6, {left:"-50%", opacity:0, ease:Power3.easeOut});
            if($("header .menu_div").hasClass("left_type")){        
                TweenMax.to($("header .menu_div .left_list"), 0.6, {left:0, opacity:1, ease:Power3.easeOut});
                TweenMax.to($("header .menu_div .menu .icon span"),0.3,{background:"#333333", ease:Power3.easeOut});
                $("header .menu_div .menu .txt").addClass("black_type");
            }
            if($("header .right_div").hasClass("black_type")){
                $("header .right_div").removeClass("white_type");
            }
            $(".dimd").fadeOut(600);
        }
        
    });

    $(".product_btn").click(function(){
        if(!$(this).hasClass("open")){
            TweenMax.to($(".product_pop"),0.6,{left:$(window).width()/2 - $("#wrap").width()/2, opacity:1, ease:Power3.easeOut, onComplete:function(){
                $(".product_btn").addClass("open")
            }});
            $("header").css("z-index", 11);
            $("header h1").hide();
            if($("header .right_div").hasClass("black_type")){
                $("header .right_div").removeClass("white_type");
                $("header .right_div").addClass("black_type open");
            }else{
                $("header .right_div").addClass("open");
            }

            if($("header .menu_div").hasClass("left_type")){
                TweenMax.to($("header .menu_div .menu .icon span"),0.3,{background:"#ffffff", ease:Power3.easeOut});
                $("header .menu_div .menu .txt").removeClass("black_type");
                TweenMax.to($("header .menu_div .left_list"), 0.6, {left:-100, opacity:0, ease:Power3.easeOut});
            }
            
            if($("header .menu_div .menu").hasClass("open")){ //메뉴 열려있을 경우
                $("header .menu_div .menu").removeClass("open");
                TweenMax.to($(".menu_pop"),0.6,{left:"-50%", opacity:0, ease:Power3.easeOut});
            }
            
            $(".dimd").fadeIn(600);
        }else{            
            TweenMax.to($(".product_pop"),0.6,{left:"100%", opacity:0, ease:Power3.easeOut, onComplete:function(){
                $(".product_btn").removeClass("open")
            }});
            $("header").css("z-index", 10);
            $("header h1").show();
            if($("header .right_div").hasClass("black_type")){
                $("header .right_div").removeClass("open");
            }else{
                $("header .right_div").removeClass("black_type open");
            }

            if($("header .menu_div").hasClass("left_type")){
                TweenMax.to($("header .menu_div .menu .icon span"),0.3,{background:"#333333", ease:Power3.easeOut});
                $("header .menu_div .menu .txt").addClass("black_type");
                TweenMax.to($("header .menu_div .left_list"), 0.6, {left:0, opacity:1, ease:Power3.easeOut});
            }
            $(".dimd").fadeOut(600);            
        }
        
    })

    $(".story_bt").click(function(){
        $(".dimd").fadeIn(600);
        TweenMax.to($(".story_pop"), 0.6, {left:"50%", opacity:1, ease:Power3.easeOut});
    });

    $(".story_pop .close_bt").click(function(){
        $(".dimd").fadeOut(600);
        TweenMax.to($(".story_pop"), 0.6, {left:"-50%", opacity:0, ease:Power3.easeOut});
    });

    $(".scroller.t2 .more_review").click(function(){
        TweenMax.to($(".review_pop"), 0.6, {left:"50%", opacity:1, ease:Power3.easeOut})
    });

    $(".review_pop").click(function(){
        TweenMax.to($(".review_pop"), 0.6, {left:"-50%", opacity:0, ease:Power3.easeOut})
    })

    $(".find_bed_bt").click(function(){
        $(".dimd").fadeIn(600);
        TweenMax.to($(".find_bed_pop"), 0.6, {left:"50%", opacity:1, ease:Power3.easeOut})
    })

    $(".find_bed_pop .close_bt").click(function(){
        $(".dimd").fadeOut(600);
        TweenMax.to($(".find_bed_pop"), 0.6, {left:"-50%", opacity:0, ease:Power3.easeOut})
    })

    var findNum = 0;
    $(".find_bed_pop .con_div").click(function(){
        findNum++;
        if(findNum > 3){
            findNum = 0;
        }

        $(".find_bed_pop .con_div p").hide();
        $(".find_bed_pop .con_div p").eq(findNum).show();
    })

    var width = $("#wrap").width();
   
    $(window).resize(function(){
        TweenMax.to($(".mainV .section_div.main .scroll_btn"), 0.6, {delay:0.3, left:width - 127, opacity:1, ease:Power3.easeOut, onComplete:function(){
            $(".mainV .section_div.main .scroll_btn").addClass("on");
        }});
    }).resize()
    
});

 document.addEventListener("DOMContentLoaded", function(){
	var v = document.getElementById("myVideo");
	var raf;

	function render() {
		raf = requestAnimationFrame(render);
		if(v.ended) {
			cancelAnimationFrame(raf);
            //링크이동 OR 메인 등장
            $("header").removeClass("intro");
            TweenMax.to($(".video_wrap"),1.5,{left:"-100%", ease:Power3.easeOut});
            $(".scroller").css("opacity",1);
            
            setTimeout(function(){
                $(".main_tab_btn a").each(function(q){
                    $(this).css({opacity:0, top:161*q + 150});
                    TweenMax.to($(this).find(".txt2"),0,{height:66, ease:Power3.easeOut});
                    TweenMax.to($(this).find(".txt2 img"),0,{opacity:1, ease:Power3.easeOut});
                    
                    TweenMax.to($(this),0.9,{delay:0.2 * q, opacity:1, top:161*q, ease:Power3.easeOut});
                });
                $(".main_tab_btn a").eq(0).find(".txt1, .txt3").delay(2000).fadeIn(1500);
                TweenMax.to($(".main_tab_btn a").eq(0).find(".txt2"),1.5,{delay:2, marginTop:42, ease:Power3.easeOut, onComplete:function(){
                    mainTabClick = true;
                }});
                TweenMax.to($(".main_tab_btn a").eq(1), 1.1 ,{delay:2, top:415, ease:Power3.easeOut});
                TweenMax.to($(".main_tab_btn a").eq(2), 1.1 ,{delay:2, top:460, ease:Power3.easeOut});
                TweenMax.to($(".main_tab_btn a:not(:eq(0))").find(".txt2"),1.1,{delay:2, height:25, ease:Power3.easeOut});
                TweenMax.to($(".main_tab_btn a:not(:eq(0))").find(".txt2 img"),1.1,{delay:2, opacity:0.6, ease:Power3.easeOut});
                    
                TweenMax.to($(".scroller.t1 .mainV .section_div.main .bg_div"),1.3,{delay:0.2, scale:1, ease:Power3.easeOut});
            },400);
		}
	}
	render();


	var btnSkip = document.querySelector(".btn_skip");
	btnSkip.addEventListener("click", function(){
		//링크이동 OR 메인 등장
        $("header").removeClass("intro");
        TweenMax.to($(".video_wrap"),1.5,{left:"-100%", ease:Power3.easeOut});
        $(".scroller").css("opacity",1);
        
        setTimeout(function(){
            $(".main_tab_btn a").each(function(q){
                $(this).css({opacity:0, top:161*q + 150});
                TweenMax.to($(this).find(".txt2"),0,{height:66, ease:Power3.easeOut});
                TweenMax.to($(this).find(".txt2 img"),0,{opacity:1, ease:Power3.easeOut});
                
                TweenMax.to($(this),0.9,{delay:0.2 * q, opacity:1, top:161*q, ease:Power3.easeOut});
            });
            $(".main_tab_btn a").eq(0).find(".txt1, .txt3").delay(2000).fadeIn(1500);
            TweenMax.to($(".main_tab_btn a").eq(0).find(".txt2"),1.5,{delay:2, marginTop:42, ease:Power3.easeOut, onComplete:function(){
                mainTabClick = true;
            }});
            TweenMax.to($(".main_tab_btn a").eq(1), 1.1 ,{delay:2, top:415, ease:Power3.easeOut});
            TweenMax.to($(".main_tab_btn a").eq(2), 1.1 ,{delay:2, top:460, ease:Power3.easeOut});
            TweenMax.to($(".main_tab_btn a:not(:eq(0))").find(".txt2"),1.1,{delay:2, height:25, ease:Power3.easeOut});
            TweenMax.to($(".main_tab_btn a:not(:eq(0))").find(".txt2 img"),1.1,{delay:2, opacity:0.6, ease:Power3.easeOut});
                
            TweenMax.to($(".scroller.t1 .mainV .section_div.main .bg_div"),1.3,{delay:0.2, scale:1, ease:Power3.easeOut});
        },400);
		

    });
    
    TweenMax.to($("header.intro h1"), 0.6, {delay:1, top:0, ease:Power3.easeOut});
    TweenMax.to($(".btn_skip"), 0.6, {delay:1.4, bottom:70, ease:Power3.easeOut});
})