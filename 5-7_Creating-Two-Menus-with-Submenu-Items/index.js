$(document).ready(function(){
    $("#dropdown-menu li").on("mouseenter",function(){
        $(this).addClass("hover");
            $("ul:first",this).css("visibility", "visible");
    }).on("mouseleave",function(){
        $(this).removeClass("hover");
            $("ul:first",this).css("visibility", "hidden");
    });
    $("#dropdown-menu li ul li:has(ul)").find("a:first").append("  >");
});