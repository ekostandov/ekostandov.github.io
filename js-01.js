var userName=prompt("Ваше ім'я:","Василь");
var userLastName=prompt("Ваше призвище:","Іванов");
var userAge=prompt("Вік",0);
var lessonsQuality=prompt("Кількість зайнять:",16);
var hourQuality=lessonsQuality*2;
var minQuality=hourQuality*60;
var secQuality=minQuality*60;
alert("Я, "+userLastName+" "+userName+", студент SkillUP, що досягнув "+userAge+"-річного віку. Обіцяю відвідати усі "+lessonsQuality+" зайнять, і насолоджуватись кожною з "+hourQuality+" годин (або "+minQuality+" минут, або "+secQuality+" секунд).");