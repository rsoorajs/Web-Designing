let kitchenpoweder = ["cucumber","tamarind","tomato","curryleaf"];
let curry = document.getElementById("curryid");
for(let powder of kitchenpoweder){
    let list = document.createElement("li");
    list.innerText = powder;
    curry.appendChild(list);
    console.log(list);
}
