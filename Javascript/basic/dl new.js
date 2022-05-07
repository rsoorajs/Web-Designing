let txtarea = document.getElementById("kitchen-input");
let btn = document.getElementById("add-btn");
let mylist = document.getElementById("kitchen-items-list");
let emptyArray = [];
mylist.addEventListener('click', mydel);
mylist.addEventListener('click', myedits);
mylist.innerHTML = '';
btn.addEventListener("click", txtvalue);

txtarea.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault;
        document.getElementById("add-btn").click();
        txtvalue();
    }
})

function txtvalue(){
    let myval = txtarea.value;
    const myalert = "";
    if (myval == myalert) {
        alert("Enter something");
    } else {
        let listItem = document.createElement("li");
        listItem.style.cssText = "animation-name: slideIn;";
        let myspan = document.createElement('span');
        listItem.appendChild(myspan);
        myspan.innerText = myval;
        mylist.appendChild(listItem);
        let trash = document.createElement("i");
        trash.classList.add("fas", "fa-trash", "mine");
        let myedit = document.createElement("i");
        myedit.classList.add("fas", "fa-edit", "myedit");
        listItem.appendChild(myedit);
        console.log(trash);
        listItem.appendChild(trash);
        emptyArray.push(myval);
        console.log(emptyArray);
        txtarea.value = "";
        txtarea.focus();
        // console.log(myval);
        // alert("wORKED");
    }
}
function mydel(event){
    if(event.target.classList[2] === "mine"){
        let mypar = event.target.parentElement;
        mypar.classList.add("slideOut");
        mypar.addEventListener("transitionend", function(){
            mypar.remove();
        })

    }

}

function myedits(event){
    if (event.target.classList[2] === "myedit"){
        let newpar = event.target.parentElement;
        let newspan = newpar.querySelector("span");
        newspan.innerText = prompt("Enter a new name");
        console.log(newpar);
    }
    


}

localStorage.setItem('name','Sooraj');
localStorage.setItem('age','31');

let who = localStorage.getItem('name');
console.log(who);
