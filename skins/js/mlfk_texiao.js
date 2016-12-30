/**
 * Created by Administrator on 2016/12/26.
 */
$(function () {
    $(".main-l-tt .decorate-box p").hover(function () {
        $(this).children(".webBox").css({"display": "block"});
    }, function () {
        $(this).children(".webBox").css({"display": "none"});
    });
    function delHtmlTag(str) {
        var str = str.replace(/<\/?[^>]*>/gim, "");//去掉所有的html标记
        var result = str.replace(/(^\s+)|(\s+$)/g, "");//去掉前后空格
        return result.replace(/\s/g, "");//去除文章中间空格
    };
    var scaleBigH = 22;
    $(".main-l-tt .contentBody").children("li").each(function (index, item) {
        var num = $(item).find(".webBox a").length;
        for (var i = 0; i < num; i++) {
            var liI = document.createElement("li");
            var aI = document.createElement("a");
            aI.href = $(item).find(".webBox a")[i].href;
            aI.title = delHtmlTag($(item).find(".webBox a")[i].innerHTML);
            aI.target = "_blank";
            liI.appendChild(aI);
            $(item).find(".decorate")[0].appendChild(liI);
        }
    });

    $(".webBox-out").each(function (index, item) {
        $(item).width($(this).children(".decorate").width() + $(this).children(".decorate").paddingLeft);
    });
    $(".main-l-tt-t .webBox-out").mousemove(function (event) {
        var event = event || window.event,
            mouseX = event.pageX - $(this).offset().left,
            eqi = mouseX / $(this).width(),
            ulMoveX = eqi * ($(this).children("ul").width() - $(this).width() - 8),
            len2 = $(this).parent().children("p").children(".webBox").children("a").length;
        $(this).css({
            "width": len2 * 11 + len2 - 2 + parseInt($(this).children(".decorate").css("padding-left")) + "px",
            "height": scaleBigH,
            "overflow": "hidden",
            "border": "1px solid #e3e3e3",
        }).children("ul").css({
            "border": "none",
            "height": scaleBigH,
            "width": len2 * (scaleBigH),
            "left": -ulMoveX
        }).end().children("ul").children("li").css({
            "height": scaleBigH - 5,
            "width": scaleBigH - 3
        });
        $(".main-l-tt .main-l-tt-t").css({"marginBottom": "25px"});
    }).mouseleave(function () {
        $(this).css({
            "width": "auto",
            "height": 11 + 4 + "px",
            "overflow": "visible",
            "border": "none",
        }).children("ul").css({
            "borderTop": "1px solid #e3e3e3",
            "borderBottom": "1px solid #e3e3e3",
            "height": 13 + "px",
            "width": "auto",
            "left": "0"
        }).end().children("ul").children("li").css({
            "height": 13,
            "width": 11
        });
        $(".main-l-tt .main-l-tt-t").css({"marginBottom": "30px"});
        $(".main-l-tt .decorate-box:last-child .decorate").css({"borderRight": "1px solid #e3e3e3"});
    });

    $(".main-l-tt-t .decorate-box:last-child .webBox-out").mousemove(function () {
        var  len2 = $(this).parent().children("p").children(".webBox").children("a").length;
        $(this).css({"width": len2 * 11 + len2  + parseInt($(this).children(".decorate").css("padding-left")) + "px"})
    })
    $(".main-l-tt-t .decorate-box:first-child .webBox-out").mousemove(function () {
        var  len2 = $(this).parent().children("p").children(".webBox").children("a").length;
        $(this).css({"width": len2 * 11 + len2 -1  + parseInt($(this).children(".decorate").css("padding-left")) + "px"})
    }).mouseleave(function () {
        $(this).children(".decorate").css({
            "borderLeft": "1px solid #e3e3e3"
        })
    })

    $(".main-l-tt-b .webBox-out").mousemove(function (event) {
        var event = event || window.event,
            mouseX = event.pageX - $(this).offset().left,
            eqi = mouseX / $(this).width(),
            ulMoveX = eqi * ($(this).children("ul").width() - $(this).width() - 8),
            len2 = $(this).parent().children("p").children(".webBox").children("a").length;
        $(this).css({
            "width": len2 * 11 + len2 - 2 + parseInt($(this).children(".decorate").css("padding-left")) + "px",
            "height": scaleBigH,
            "overflow": "hidden",
            "border": "1px solid #e3e3e3",
        }).children("ul").css({
            "border": "none",
            "height": scaleBigH,
            "width": len2 * (scaleBigH),
            "left": -ulMoveX
        }).end().children("ul").children("li").css({
            "height": scaleBigH - 5,
            "width": scaleBigH - 3
        });
        $(".main-l-tt .main-l-tt-b").css({"marginBottom": "25px"});
    }).mouseleave(function () {
        $(this).css({
            "width": "auto",
            "height": 11 + 4 + "px",
            "overflow": "visible",
            "border": "none",
        }).children("ul").css({
            "borderTop": "1px solid #e3e3e3",
            "borderBottom": "1px solid #e3e3e3",
            "height": 13 + "px",
            "width": "auto",
            "left": "0"
        }).end().children("ul").children("li").css({
            "height": 13,
            "width": 11
        });
        $(".main-l-tt .main-l-tt-b").css({"marginBottom": "30px"});
        $(".main-l-tt .decorate-box:last-child .decorate").css({"borderRight": "1px solid #e3e3e3"});
    });


    $(".main-l-tt-b .decorate-box:last-child .webBox-out").mousemove(function () {
        var  len2 = $(this).parent().children("p").children(".webBox").children("a").length;
        $(this).css({"width": len2 * 11 + len2  + parseInt($(this).children(".decorate").css("padding-left")) + "px"})
    })
    $(".main-l-tt-b .decorate-box:first-child .webBox-out").mousemove(function () {
        var  len2 = $(this).parent().children("p").children(".webBox").children("a").length;
        $(this).css({"width": len2 * 11 + len2 -1 + parseInt($(this).children(".decorate").css("padding-left")) + "px"})
    }).mouseleave(function () {
        $(this).children(".decorate").css({
            "borderLeft": "1px solid #e3e3e3"
        })
    })
})
