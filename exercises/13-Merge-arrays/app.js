var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];
let newArray = [];

const mergeArrays = (firstArray, secondArray) => {
    //your code here
    
    for (let i=0; i < firstArray.length; i++){
     newArray.push(firstArray[i]);
     //console.log(newArray);
    
    }
    for (let x=0; x < secondArray.length; x++){
     newArray.push(secondArray[x]);
        
    } 
    return newArray;
}

console.log(mergeArrays(chunk_one, chunk_two));