// function getArraySum(num){
//     var sum =0;
//     for (var i=0; i< num.length; i++){
//         var element = num[i];
//         sum = sum + element;
    
//     }
//     return sum;
// }
// var num = [34, 56, 64, 65, 23, 64, 23];
// var result = getArraySum(num);
// console.log("Total of the numbers : ", result);

function getArraySum(num){
    var sum =0;
    for (var i =0; i<num.length; i++ ){
        var element = num[i];
        sum = sum+ element;

    }
    return sum;
}
var num = [34, 56, 64, 65, 23, 64, 23];
var result = getArraySum(num);
console.log("Total sum of the number is : ", result);
