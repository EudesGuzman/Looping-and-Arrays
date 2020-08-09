contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
for(key in contact){
    // Code goes here
   let x = [];
   x.push(key + " : " + contact[key]);

} 
console.log(contact);