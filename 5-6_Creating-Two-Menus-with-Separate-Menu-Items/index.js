$(document).ready(function(){
    $("li ul").hide();
   $("li.main-menu").on("mouseenter",function(){
    $("ul",this).show();
   }).on("mouseleave",function(){
    $("ul",this).hide();
   })
});