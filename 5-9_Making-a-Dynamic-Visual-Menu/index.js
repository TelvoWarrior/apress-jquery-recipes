$(document).ready(function(){
    $(".books").hide();
    $(".movies").hide();
    $(".music").hide();

    $("a").hover(
        function(event){
            $(this).addClass("rightselectfig");
            $(this).parent().addClass("leftselectfig");
        },
        function(){
            $(this).removeClass("rightselectfig");
            $(this).parent().removeClass("leftselectfig");
        }
    );
    $("#booksbutton").click(function(event){
        event.preventDefault();
        $(".books").slideDown("slow");
        $(".movies").slideUp("show");
        $(".music").slideUp("show");
    });
    $("#moviesbutton").click(function(event){
        event.preventDefault();
        $(".books").slideUp("show");
        $(".movies").slideDown("slow");
        $(".music").slideUp("show");
    });
    $("#musicbutton").click(function(event){
        event.preventDefault();
        $(".books").slideUp("show");
        $(".movies").slideUp("show");
        $(".music").slideDown("slow");
    });
});
