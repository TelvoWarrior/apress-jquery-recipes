$(document).ready(function(){
    $("img#pic1")
    .animate({"width":300})
    .fadeOut()
    .fadeIn()
    .animate({"width":500})
    .slideToggle(3000)//Данный метод выполняет работу одного из
    // методов slideUp и slideDown, в зависимости от того "спрятан" элемент или нет.
    //Если он "спрятан", то slideToggle сработает как "показать элемент", если элемент
    //виден, то slideToggle его "спрячет".
    
    //Изначальный вариант в листинге, с уведомлением о размере очереди
    // var n = $("img#pic1").queue("fx").length;
    // alert("The queue length is "+n);
    
    //Пример с удалением последней анимации из очереди
    // var queue = $("img#pic1").queue();
    // var poppedFunc = queue.pop();

    var queue = $("img#pic1").queue();
    var poppedFunc = queue.pop();
    queue.unshift(poppedFunc);
});
//Насколько я понял, length - это количество методов анимаций в очереди.
