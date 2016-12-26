$(function () {
    var i=0;
    $(".main-rgt .dea-word-cot").find("h3").each(function(){
        if(i==0)
        {
            $(".main-lf").append("<a class='com hot'></a>");
            $(".main-lf .com").eq(i).text($(this).text());
            $(".main-lf .com").eq(i).attr("href","#zy"+i);
            $(".main-lf .com").eq(i).append("<i></i>");
            i++;
        }else{
            $(".main-lf").append("<a class='com'></a>");
            $(".main-lf .com").eq(i).text($(this).text());
            $(".main-lf .com").eq(i).attr("href","#zy"+i);
            $(".main-lf .com").eq(i).append("<i></i>");
            i++;
        }
    })
    $(".main-lf .com").click(function(){
        $(this).addClass("hot").siblings().removeClass("hot");
    });
});