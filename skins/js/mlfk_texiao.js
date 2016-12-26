/**
 * Created by Administrator on 2016/12/26.
 */
$(function () {
    $(".main-l-tt .decorate-box p").hover(function () {
        $(this).children(".webBox").css({"display":"block"});
    },function () {
        $(this).children(".webBox").css({"display":"none"});
    });
    var len1 = $(".main-l-tt .contentBody").children("li").length;
    var len2 = $(".main-l-tt .decorate-box .webBox").children("a").length;
    console.log(len1);
    console.log(len2);
    // for(var i = 0;)
    $(".main-l-tt .contentBody").children("li").each(function (index,item) {
        var num = $(item).find(".webBox a").length;
        for(var i = 0; i < num; i++){
            var liI = document.createElement("li");
            $(item).find(".decorate")[0].appendChild(liI);
            console.log($(item).find(".decorate"))
        }
    });
})
