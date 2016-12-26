$(function () {
var speed1 = -118;
var speed2 = -325;
var index = 0;
var nowDis = 0
var len = $(".main-r-m .main-r-img .zhuanjia-box ul").children().length;
function getShow() {
    return $(".main-r-m ul li.show").index();
}
$(".main-r-m ul li:nth-child(1)").addClass("show");
$(".main-lf-jt").click(function () {
    index = getShow() - 1;
    if(getShow()== 0 || index == 0 ){
        $(".main-r-m ul li:nth-child(1)").addClass("show").siblings().removeClass("show");
        $(".main-r-m .zhuanjia-content").stop().css({"left": 0});
        $(".main-r-m .zhuanjia-box ul").stop().animate({"left": -4},800);
    }else if (index > 0 && index < len-1) {
        $(".main-lf-jt").bind("click");
        $(".main-r-m ul li:nth-child(" + (index+1) + ")").addClass("show").siblings().removeClass("show");
        $(".main-r-m .zhuanjia-content").stop().css({"left": nowDis + speed2*(index)});
        $(".main-r-m .zhuanjia-box ul").stop().animate({"left": nowDis + speed1*(index)-4},800);
    } else if (index == 0) {
        $(".main-lf-jt").unbind("click");
    }
})
$(".main-rgt-jt").click(function () {
    index = getShow() + 1;
    if (index >= 0 && index < len) {
        $(".next").bind("click");
        $(".main-r-m ul li:nth-child(" + (index + 1) + ")").addClass("show").siblings().removeClass("show");
        $(".main-r-m .zhuanjia-content").stop().css({"left": nowDis + speed2*(index)});
        $(".main-r-m .zhuanjia-box ul").stop().animate({"left": nowDis + speed1*(index)-4},800);
    } else if (index == (len-1)) {
        $(".main-rgt-jt").unbind("click");
    }
})
})
