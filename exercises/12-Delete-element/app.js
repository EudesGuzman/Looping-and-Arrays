var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];
  
function deletePerson(personName)
{

    for(let i = 0; i < people.length; i++){
        if (people[i] == personName){
            people.splice(i,1);
          return people;
        }  
        // Si quito else, si coge a Daniella.
        // Porque sale que no existe Daniella??
         else {
            return "no existe " + personName + " en el array"
        }
    }
	//your code here
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));