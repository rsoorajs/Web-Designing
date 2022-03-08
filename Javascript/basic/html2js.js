let disney = document.querySelectorAll("li");
let princess = [];
disney.forEach(function(disneyprincess){
let allprincess = disneyprincess.innerText;
// console.log(allprincess)
princess.push(allprincess);
console.log(princess)
})

