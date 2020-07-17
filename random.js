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
