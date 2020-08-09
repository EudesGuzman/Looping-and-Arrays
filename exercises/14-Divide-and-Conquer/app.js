let list_of_numbers = [4,	80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];
let odd = [];
let even = [];
let combine = [];

// your code here
function mergeTwoList(integers){
    for (let i =0; i < integers.length; i++){
        if (integers[i] % 2 == 0){ 
            odd.push(integers[i]);
            //console.log(integers[i] + " numero par");
        } else{
            even.push(integers[i]);
        }
    }
   
    //combine.push(odd);
    //combine.push(even);
    combine = odd.concat(even);
    
    //console.log(combine + " hola");
    return combine;
}
console.log(mergeTwoList(list_of_numbers))