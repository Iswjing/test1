/**
 * Created by Iris on 2017/2/23.
 */
$(function(){

    /**
     * 右边排行榜数据 写入
     */

    //初始化json数据
   /* var rank_data = [
         {"gamename":"A游戏","imagename":"4.png","gamenumber":"1","game":"疯狂的小鸟"},
         {"gamename":"B游戏","imagename":"7.jpg","gamenumber":"2","game":"进击的巨人"},
         {"gamename":"C游戏","imagename":"8.jpg","gamenumber":"3","game":"疯狂的小鸟"},
         {"gamename":"D游戏","imagename":"6.png","gamenumber":"4","game":"疯狂的小鸟"},
         {"gamename":"E游戏","imagename":"2.png","gamenumber":"5","game":"疯狂的小鸟"},
         {"gamename":"F游戏","imagename":"1.png","gamenumber":"6","game":"疯狂的小鸟"},
         {"gamename":"G游戏","imagename":"6.png","gamenumber":"7","game":"疯狂的小鸟"}
    ]
    for(var i=0;i<rank_data.length;i++){
        $(".list-group").append("<li class='level1 list-group-item'>")
        $(".list-group").append("<a href='#' class='txt1' id='pic2'><h4><span class='badge'>1</span>&nbsp&nbspbbb<span class='glyphicon glyphicon-arrow-up ' style='float: right'></span></h4></a>")
        $(".list-group").append("<ul class='level2'>")
        $(".list-group").append("<div class='media'>")
        $(".list-group").append("<div class='media-left media-middle'>")
        $(".list-group").append("<a href='#'><img class='media-object' src='images/4.png' alt='愤怒的小鸟'></a>")
        $(".list-group").append("</div>")
        $(".list-group").append("<div class='media-body'>")
        $(".list-group").append("<h4 class='media-heading'>愤怒的小鸟</h4>")
        $(".list-group").append("</br>")
        $(".list-group").append("<button type='button' class='glyphicon glyphicon-arrow-down btn btn-primary'>下载</button>")
        $(".list-group").append("</div>")
        $(".list-group").append("</div>")
        $(".list-group").append("</ul>")
        $(".list-group").append("</li>")

        //.append("<div class=\"border\"></div>");
    }
*/

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
    $("#pic2").addClass('current')
        .next().show()
        .parent().siblings().children('a').removeClass('current')
        .next().hide();

    //排行榜点击事件
   $(".level1>a").click(function(){
       console.info($(this));
       $(this).addClass('current')
           .next().show()
           .parent().siblings().children('a').removeClass('current')
           .next().hide();
       return false;
   });

});