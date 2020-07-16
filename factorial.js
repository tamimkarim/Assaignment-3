// function factorial(n){
//     if(n ==0){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }

// }
// var result = factorial(10);
// console.log(result);
function factorial(n){
    if (n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
var result = factorial(20);
console.log(result);