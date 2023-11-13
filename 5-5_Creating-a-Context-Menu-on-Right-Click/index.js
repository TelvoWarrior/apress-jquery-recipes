$(document).ready(function(){
    //После загрузки страницы контекстное меню скрывается
    $("#contextmenu").hide();
    
    //При нажатии правой кнопкой мыши контекстное меню появляется
    //Указывается позиция на которой появится меню
    $(".info").mousedown(function(event){
        if(event.button==2){
            $("#contextmenu").show();
            $("#contextmenu").css({"position":"absolute","left":event.screenX,"top":event.screenY-70});
        }
    });
    
    //Изменение фона меню при наведении на него указателя мыши
    //Возвращаение к стандартному виду, если указатель убрать
    $("a").on("mouseenter",function(){
        $(this).addClass("hover");
    }).on("mouseleave",function(){
        $(this).removeClass("hover");
    });
    
    //Данный код должен убирать контекстное меню при нажатии клавиши ESC, но этого не происходит
    $("body").on("keydown",function(){
        $("#contextmenu").hide();
    });
});