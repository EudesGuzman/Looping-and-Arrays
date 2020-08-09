function lyricsGenerator(firstArray){
let numeros = firstArray.length;
   let string = "";
 for (let i=0; i < numeros; i++){
  

         if (firstArray[i] === 0){
             string += "Boom ";
           
            
        } else if (firstArray[i] === 1){
       // return "Drop the base".
        string += "Drop the base ";

        if (firstArray[i-1] === 1 && firstArray[i-2] === 1){
              string += '!!!Break the base!!! '
            }
        } 
        
    } 
    return string;
}



// test Data
 console.log(lyricsGenerator([0,0,1,1,0,0,0])) 
 console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
 console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))  