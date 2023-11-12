$(document).ready(function(){
    //После загрузки страницы все подсказки скрываются
    $(".web").hide();
    $(".prog").hide();
    $(".rdbms").hide();

    //Данный блок изменяет стиль элемента меню если на него навести курсор мыши.
    //Так же появляется подсказка с описанием меню.
    $("#webd").on("mouseenter",function(){
        $(".web").show();
        $(".prog").hide();
        $(".rdbms").hide();
        $("#webd").addClass("hover");
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
    }).on("mouseleave",function(){
        $("#datab").removeClass("hover");
        $(".rdbms").hide();
    });
});