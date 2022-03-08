let grabber = document.getElementById("unchartered");
let places = ["kerala","jammu","assam","mekhalaya","madyapradesh"];
places.forEach(function(myplaces){
let list = document.createElement("li");
list.innerText = myplaces;
grabber.appendChild(list);

})
