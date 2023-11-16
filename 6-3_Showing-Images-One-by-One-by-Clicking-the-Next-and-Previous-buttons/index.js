$(document).ready(function(){
    $("img.left-arrow").click(function(){
        if($("ul").css("marginLeft")=="0px"){
            alert("You are at the first image.");
        } else {
            $("#image-slider").children("ul").animate({
                "marginLeft":"+=1000px"
            },1000);
        };
    });
    $("img.right-arrow").click(function(){
        if($("ul").css("marginLeft")=="-4000px"){
            alert("You are at the last image");
        } else {
            $("#image-slider").children("ul").animate({
                "marginLeft":"-=1000px"
            },1000);
        };
    });
});
