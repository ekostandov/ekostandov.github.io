// Перше завдання:
var a = +prompt("Число a:","");
var b = +prompt("Число b:","");
function checkNumbers () {
	if (a > b) {
  	alert ("Число a більше")
  } else if (a < b) {
  	alert ("Число b більше")
  } else alert ("Числа рівні")
}
checkNumbers ();

// Друге завдання:
var qualityItem1 = +prompt ("Кількість першого товару: ","");
var priceItem1 = +prompt ("Ціна першого товару: ","");
var qualityItem2 = +prompt ("Кількість другого товару: ","");
var priceItem2 = +prompt ("Ціна другого товару: ","");
function totalSum () {
	var a = qualityItem1 * priceItem1;
	var b = qualityItem2 * priceItem2;
  	var sumItems = a + b;
  	alert ("Сума усіх товарів: " + sumItems);
}
totalSum ();