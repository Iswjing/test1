/**
 * Created by Iris on 2017/2/23.
 */
$(function(){
    var nav=$(".nuv"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=138){
            nav.addClass("fixednav");
            $(".navTmp").fadeIn();
        }else{
            nav.removeClass("fixednav");
            $(".navTmp").fadeOut();
        }
    });

    //默认排行榜显示第二个
    $("#pic1").addClass('current')
        .next().show()
        .parent().siblings().children('a').removeClass('current')
        .next().hide();

    //排行榜点击事件
   $(".level1>a").click(function(){
       console.info($(this))
       $(this).addClass('current')
           .next().show()
           .parent().siblings().children('a').removeClass('current')
           .next().hide();
       return false;
   });
});