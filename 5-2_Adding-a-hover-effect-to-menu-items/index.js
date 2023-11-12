$(document).ready(function() {
    // Bind one or two handlers to the matched elements, 
    // to be executed when the mouse pointer enters and leaves the elements.
    // Таким образом, у метода .hover два аргумента.
    // Первый используется когда указатель мыши попадает в зону воздействия.
    // Второй используется когда указатель мыши покидает зону воздействия.
    // Данный метод считается устаревшим.     
    // $("a").hover(
    //     function(){
    //         $(this).addClass("hover");
    //     },
    //     function(){
    //         $(this).removeClass("hover");
    //     }
    // );
    //Ниже будет представлен актуальный решения
    $("a").on("mouseenter", function(){
        $(this).addClass("hover");
        }).on("mouseleave", function(){
            $(this).removeClass("hover");
        });
});