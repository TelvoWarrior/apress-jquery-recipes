$(document).ready(function(){
    $("button#anim").click(function(){
        $("img#pic1").animate({left:"300px",width:"300px"},"slow",function(){
            $("img#pic1").animate({left:"0px",width:"200px"},"slow").attr("src","./assets/laptop.jpg");
        });
    });
});
