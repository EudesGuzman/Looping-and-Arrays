let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let wiki = theBools.map(function(x) {
   //console.log(x);
    
      if(x == 0){
        return "woko"
      } else if( x == 1){
       return "wiki";
      }
    

});

console.log(wiki);