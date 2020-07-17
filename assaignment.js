//Asssaignment-1 feetToMile

 function feetToMile(feet){
     var mile = feet /5280;
     //Since we know that 1 mile is 5280 feets.

     return mile;
}
var result = feetToMile(900);
console.log("The result is : ", result);


//Asssaignment-2 woodCalculator

function woodCalculator(chair, table, bed){
   var  woodForChair = chair * 1;
   //Because we need 1 Cubic Feet amount of wood to make a chair.

   var woodForTable = table * 3;
    //Because we need 3 Cubic Feet amount of wood to make a table.

   var woodForBed = bed * 5;
    //Because we need 5 Cubic Feet amount of wood to make a bed.

   var totalWood = woodForChair + woodForTable + woodForBed;
   
   return totalWood;

}
var result = woodCalculator(12, 5, 12);
console.log("The amount of wood we need to make these items is", result, "Cubic Feet." );


//Asssaignment-3  brickCalculator

function brickCalculator(firstTenthFloor, elevenToTwenty, aboveTwenty){
    
    var totalForTenth = firstTenthFloor * 15000;
    //Since the instructor said we will need 15000 bricks on first tenth floor.

    var totalForTwenty = elevenToTwenty * 12000;
    //Since the instructor said we will need 12000 bricks on eleven to twenty floor.

    var totalForAbove = aboveTwenty * 10000;
    //Since the instructor said we will need 10000 bricks above twenty floors.

    var totalBrick = totalForTenth + totalForTwenty + totalForAbove;
    return totalBrick;
}
var result = brickCalculator (10, 10, 2);
console.log("Total ammount of bricks we need to make this building is ",result);



//Asssaignment-4  tinyFriend

function tinyFriend(friends){
    var totalFriends = friends[0];
    for(var i=0; i<friends.length; i++){
        var currentName = friends[i];
        if(currentName.length <totalFriends.length){
            totalFriends = currentName;
        }
    }
    return totalFriends;

}
var totalFriends = tinyFriend(['Tamim', 'Karim', 'Orin', 'Jass', 'Shahat', 'Mim']);
console.log(totalFriends);

