var arr = [45,67,87,23,5,32,60];

//Your code here
let newArray = [];
/*
// Porque si no pongo arr.leng-1 muestra un undefined
for (i = arr.length; i >=0; i--) {
    console.log(arr[i]);  
}
*/

for (let i = arr.length-1; i >=0; i--) {
    
   newArray.push(arr[i]);
    

}


console.log(newArray);


