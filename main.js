//Получите и покрасьте в красный цвет следующие элементы:

//Все элементы с классом test.
$('.test').css("color", "red");

//Все <h2> с классом test. 
$('h2.test').css("color", "green")

//Все абзацы которые следуют сразу за абзацами. 
$('p + p').css("color", "blue")

//Все <li>, которые следуют сразу за <li> с классом www.
$('li.www + li').css("color", "yellow")

//Все <i> внутри <h2>.
$('h2 i').css("color", "grey")

//Все <i> непосредственно внутри <h2>. 
$('h2 > i').css("color", "purple")
/* Можно так же использовать такой способ
$('h2').children('i').css("color", "purple") */


//Все <h2> НЕ с классом test.
$('h2').not('h2.test').css("color", "red")

//Все заголовки НЕ с классом test. 
$(':header').not('.test').css("color", "red")

//Все заголовки, которые следуют сразу за заголовками. 
$(':header ~ :header').css("color", "red")

//Все заголовки с классом test, которые следуют сразу за заголовками с классом test.
$('.test:header ~ .test:header').css("color", "red")