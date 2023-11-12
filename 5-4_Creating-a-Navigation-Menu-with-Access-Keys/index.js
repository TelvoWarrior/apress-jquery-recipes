$(document).ready(function(){
    //После загрузки страницы все подсказки скрываются
    $(".web").hide();
    $(".prog").hide();
    $(".rdbms").hide();

    // This API is deprecated.
    // Instead of .keypress( handler ) or use .on( "keypress", handler )
    // В листинге использовался метод .keypress(handler)
    // Попробую переделать на .on( "keypress", handler )

    $("body").on("keypress",function(event){
        if(String.fromCharCode(event.keyCode)=="w" || String.fromCharCode(event.keyCode)=="W"){
            $("#webd").trigger("mouseenter");//тут был метод .hover(), заменил на .trigger("mouseenter")
            $("#pgmng").trigger("mouseleave");
            $("#datab").trigger("mouseleave");
        }
    })
    $("body").on("keypress",function(event){
        if(String.fromCharCode(event.keyCode)=="p" || String.fromCharCode(event.keyCode)=="P"){
            $("#pgmng").trigger("mouseenter");
            $("#webd").trigger("mouseleave");
            $("#datab").trigger("mouseleave");
        }
    })
    $("body").on("keypress",function(event){
        if(String.fromCharCode(event.keyCode)=="r" || String.fromCharCode(event.keyCode)=="R"){
            $("#datab").trigger("mouseenter");
            $("#webd").trigger("mouseleave");
            $("#pgmng").trigger("mouseleave");
        }
    })
    //Для каждого элемента меню добавил .trigger("mouseleave"), что бы когда нажимается один access key,
    //то с других элементов меню, эффект hover пропадает. 

    //Данный блок изменяет стиль элемента меню если на него навести курсор мыши.
    //Так же появляется подсказка с описанием меню.
    $("#webd").on("mouseenter",function(){
        $(".web").show();
        $(".prog").hide();
        $(".rdbms").hide();
        $("#webd").addClass("hover");
        let webdHover = true;
        if (webdHover==true){
            $("#pgmng").trigger("mouseleave");
            $("#datab").trigger("mouseleave");
        }
    }).on("mouseleave",function(){
        $("#webd").removeClass("hover");
        $(".web").hide();/*Данной строчки в листинге не было. Я добавил ее самостоятельно.
        Если убрать указатель мыши с элемента, то не только измениться его стиль, но и
        исчезнет подсказка.
        Тоже самое добавил для каждого элемента меню.*/
    });

    //Данный блок изменяет стиль элемента меню если на него навести курсор мыши.
    //Так же появляется подсказка с описанием меню.
    $("#pgmng").on("mouseenter",function(){
        $(".web").hide();
        $(".prog").show();
        $(".rdbms").hide();
        $("#pgmng").addClass("hover");
        let pgmngHover = true;
        if (pgmngHover==true){
            $("#webd").trigger("mouseleave");
            $("#datab").trigger("mouseleave");
        }
    }).on("mouseleave",function(){
        $("#pgmng").removeClass("hover");
        $(".prog").hide();
    });

    //Данный блок изменяет стиль элемента меню если на него навести курсор мыши.
    //Так же появляется подсказка с описанием меню.
    $("#datab").on("mouseenter",function(){
        $(".web").hide();
        $(".prog").hide();
        $(".rdbms").show();
        $("#datab").addClass("hover");
        let databHover = true;
        if (databHover==true){
            $("#pgmng").trigger("mouseleave");
            $("#webd").trigger("mouseleave");
        }
    }).on("mouseleave",function(){
        $("#datab").removeClass("hover");
        $(".rdbms").hide();
    });
});