var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let empty = [];

for ( var index in mix){
    let prueba = typeof mix[index];
    empty.push(prueba);
    

}



console.log(empty);