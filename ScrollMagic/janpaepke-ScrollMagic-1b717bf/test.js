var controller = new ScrollMagic.Controller();

/*var tween1 = TweenMax.to("#animate1", 0.5, {backgroundColor : "#333333", scale:2.5, rotation:360, x:130});

var tweenYoyo = TweenMax.fromTo("#animate1", 0.6,{backgroundColor :"#333333", scale:1},{scale:2.5, backgroundColor:"#dc143c", x:100, rotation:360, repeat:-1, yoyo:true});*/

var tweenStagger = TweenMax.staggerFromTo(".icon", 1, {scale:0.85}, {backgroundColor:"#dc143c", scale:1.2, rotation:360}, 1);

var scene = new ScrollMagic.Scene({triggerElement : "#trigger1", duration:200}).setTween(tweenStagger).addTo(controller).addIndicators({name:"1"}); // tweenStagger 예

//var scene = new ScrollMagic.Scene({triggerElement : "#trigger1", duration:150}).setTween(tweenYoyo).addTo(controller).addIndicators({name:"1"}); // yoyo 예

//var scene = new ScrollMagic.Scene({triggerElement:"#trigger1", offset:150, duration:150}).setTween(tween1).addTo(controller).addIndicators({name:"1"}); // tweenMax 예
