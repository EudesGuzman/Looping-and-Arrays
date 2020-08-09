let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here


for( let index in par){
    let min = par[index];
    // console.log(min);
    counts[min]!==undefined ? counts[min]++ : counts[min]=1;
     
    
}

console.log(counts)



