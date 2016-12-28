/**
 * Created by Administrator on 2016/12/22.
 */
$(function () {
    var tab1Len = $(".tab-1").length;
    for (var i = 1; i <= tab1Len; i++) {
        $(".tab-1:nth-child(" + i + ") .line").width($(".tab-1:nth-child(" + i + ") .title1 div.fl").width());
    }
})