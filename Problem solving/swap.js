function brickCalculator(floor){
 var brick = 0;
 if(floor <= 10){
    brick =floor *15*1000;
 }
 else if(floor <=20){
    var tillTen = 10* 15000;
    var remaining = floor -10;
    var tillTwenty = remaining * 12000;
    brick = tillTen + tillTwenty;
 }
 else{
    var tillTen = 10 * 15000;
    var tillTwenty = 10* 12000;
    var remaining = floor - 20;
    var afterTwenty = remaining * 10000;
    brick = tillTen + tillTwenty + afterTwenty;
 }
return brick;
}
var result = brickCalculator(10);
console.log(result);
