function largestNumber (numbers){
    var larger = numbers[0];

    for(var i =0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element;

        }

    }
    return larger;

}
var numbers = [23, 2, 10, 25, 68];
var result = largestNumber(numbers);
console.log(result);
