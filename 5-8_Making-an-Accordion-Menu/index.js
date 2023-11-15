//Код приведенный в листинге
// $(document).ready(function(){
//     $("p.menus").mouseout(function(){
//         $("div.menu-items").slideUp("slow");
//         $("p").css({backgroundImage:""});
//     });
//     $("p.menus").mouseover(function(){
//         $(this).css({'background-image':"URL()",
//                         'background-repeat':"no-repeat",
//                         'background-position':"right"}).next("div.menu-items").
//                         slideDown(500).siblings("div.menu-items").slideUp("slow");
//         $(this).siblings().css({backgroundImage:""});
//     })
// });

//Моя версия кода

$(document).ready(function(){
    //Код ниже сворачивает меню, если убрать указатель мыши с области p.menus
    $("p.menus").on("mouseout", function(){
        //Проверил не устарел ли метод .slideUp
        //Метод не устарел, у него много различных вариантов использования аргументов
        //Не нашел ни одного значения аргумента "slow"
        $("div.menu-items").slideUp("slow");
    });
    $("p.menus").on("mouseover", function(){
        //.siblings("div.menu-items").slideUp("slow"); --- этот код отвечает за то, что бы когда мы
        //переводили курсор мыши на другое меню, предыдущее меню скрывалось
        $(this).next("div.menu-items").slideDown(500).siblings("div.menu-items").slideUp("slow");
    });
});
