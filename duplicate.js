// var name = [1, 1 , 1, 1, 2, 4, 5, 5, 3, 8, 4,8, 4 ];
// var uniqueName =[];
// for( var i = 0; i<name.length; i++){
//     var element = name[i];
//     var index = uniqueName.indexOf(element);
//     if( index == -1){
//         uniqueName.push(element);
//     }
// }
// console.log(uniqueName);
var name = [1, 1 , 1, 1, 2, 4, 5, 5, 3, 8, 4,8, 4 ];
var uniqueName =[];
for( var i =0;  i<name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }

}
console.log(uniqueName);