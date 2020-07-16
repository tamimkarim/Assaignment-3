var speech ="I am tamim karim,       I live in USA. ";
var count = 0;



for( var i=0; i<speech.length; i++){
    var char = speech[i];
    if( char == " " && speech[i-1] != " "){
        count++;

    }

}
console.log(count);