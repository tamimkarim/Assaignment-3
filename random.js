function animalCal(distance){
var animal =0;
if (distance <= 10){
    animal = distance *50; 

}
else if(distance <=20){
    var firstPart = 10*50;
    var remaining = distance - 10; 
    var secoundPart = remaining * 100;
    animal = firstPart + secoundPart;
}
else{
    var firstPart = 10*50;
    var secoundPart = 10*100;
    var  remaining = distance -20;
    var thirdPart = remaining *300;
    animal = firstPart + secoundPart + thirdPart;
}
return animal;
}
var count = animalCal(32);
console.log(count);