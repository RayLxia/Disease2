/**
 * Created by Administrator on 2016/12/14.
 */
$(function () {
    $(".hd-banner-cot").on("mouseenter",function () {
        $(".jt-cot").stop().fadeIn(800);
    });
    $(".hd-banner-cot").on("mouseleave",function () {
        $(".jt-cot").stop().fadeOut(800);
    });
    function getBannerBoxMove() {
        return $(window).width();
    };
    var moveNum = 0;
    $(".jt-fr-po").click(function () {
        if(moveNum>1){
            moveNum=0;
        }else{
            moveNum++;
        }
        $(".hd-banner-cot-box").stop().animate({"left":-getBannerBoxMove()*moveNum});
    });
    $(".jt-fl-po").click(function () {
        if(moveNum<=0){
            moveNum=2;
        }else{
            moveNum--;
        }
        $(".hd-banner-cot-box").stop().animate({"left":-getBannerBoxMove()*moveNum});
    });
    $(".title1 li").hover(function () {
        var lineLeft = ["7px", "128px"]
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab-1 .line").stop().css({"left": lineLeft[$(this).index()]});
        $(".tab-1 .ul-box1 > ul.clearfix").stop().css({"left": -$(this).index() * ($(".ul-box1 ul li").width()+10)});
    });
    $(".lunbo-squera li").hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".lunbo-main").stop().animate({"left": -$(this).index() * 298}, 800)
    });

    $(".tab-2-ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab-2-ulBox > ul").stop().css({"left": (-$(this).index()+1) * 838});
    });
    $(".tab-2-ul li:last-child").unbind("click");
    $(".tab-2-ul li:first-child").unbind("click");
    // $(".tab-1 .line").width($(".tab-1 .title1 .fl").width());
    // var distance = ["-470","-306","-99"];
    var infoDis = 0;
    var bigDis = 0;
    var smallDis = 0;
    var index = 0;
    var speed1 = -470;
    var speed2 = -306;
    var speed3 = -97;

    function getIndex() {
        return $(".tab-3-ul li.current").index();
    }

    function moveAnimate(index) {
        $(".experts-info").stop().css({"left": index * speed1});
        $(".experts-big").stop().css({"left": index * speed2});
        $(".experts-small").stop().css({"left": index * speed3});
    }

    $(".tab-3-ul li").click(function () {
        index = $(this).index()-1;
        $(this).addClass("current").siblings().removeClass("current");
        moveAnimate(index);
        // $(".tab-3-ul li:first-child").addClass("current");
    });

    $(".tab-3-main .next").click(function () {
        index = getIndex() + 1;
        if (index >= 0 && index < 10) {
            $(".tab-3-main .next").bind("click");
            $(".tab-3-ul li:nth-child(" + (index + 1) + ")").addClass("current").siblings().removeClass("current");
            $(".experts-info").stop().css({"left": infoDis + speed1 * (index-1)});
            $(".experts-big").stop().css({"left": bigDis + speed2 * (index-1)});
            $(".experts-small").stop().css({"left": smallDis + speed3 * (index-1)});
        } else if (index == 9) {
            $(".tab-3-ul li:nth-child(10)").addClass("current").siblings().removeClass("current");
            $(".tab-3-main .next").unbind("click");
        }

    });
    $(".tab-3-main .pre").click(function () {
        index = getIndex() - 1;
        if(getIndex()==0 || index == 0 ){
            $(".tab-3-ul li:nth-child(2)").addClass("current").siblings().removeClass("current");
            $(".experts-info").stop().css({"left":0});
            $(".experts-big").stop().css({"left":0});
            $(".experts-small").stop().css({"left": 0});
        }else if (index > 0 && index < 9) {
            $(".tab-3-main .pre").bind("click");
            $(".tab-3-ul li:nth-child(" + (index+1) + ")").addClass("current").siblings().removeClass("current");
            $(".experts-info").stop().css({"left": infoDis + speed1*(index-1)});
            $(".experts-big").stop().css({"left": bigDis + speed2*(index-1)});
            $(".experts-small").stop().css({"left": smallDis + speed3*(index-1)});
        } else if (index == 0) {
            $(".tab-3-ul li:nth-child(1)").addClass("current").siblings().removeClass("current");
            $(".tab-3-main .pre").unbind("click");
        }
    });
    $(".tab-3-ul li:last-child").unbind("click");
    $(".tab-3-ul li:first-child").unbind("click");
    // $(".tab-3-ul li:first-child").unbind("click");
    $(".last-tab .f-ul li").hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".last-tab .s-ul").stop().animate({"top": $(this).index() * (-174)}, 800)
    })

    function getOs() {
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            return "MSIE";
        }else if (navigator.userAgent.indexOf("Firefox") > 0) {
            return "Firefox";
        }else if (navigator.userAgent.indexOf("Safari") > 0) {
            return "Safari";
        }else if (navigator.userAgent.indexOf("Camino") > 0) {
            return "Camino";
        }else if (navigator.userAgent.indexOf("Gecko/") > 0) {
            return "Gecko";
        }
    }
    if (getOs() == "Firefox") {
        $("#index-mainBody .main-l .main-l-mb .tab-3 .tab-3-ul li:last-child, #index-mainBody .main-l .main-l-m .tab-2 .tab-2-ul li:last-child").css({"padding-bottom":"14px"});
    }else {
        return false;
    }
});
