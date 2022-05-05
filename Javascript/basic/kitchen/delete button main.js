let txtarea = document.getElementById("kitchen-input");
let btn = document.getElementById("add-btn").addEventListener("click", txtvalue);
let mylist = document.getElementById("kitchen-items-list");
let emptyArray = [];
mylist.innerHTML = '';
mylist.addEventListener('click', mydel);
btn.addEventListener("click", txtvalue);
txtarea.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault;
        document.getElementById("add-btn").click();
        // txtvalue();
    }
})

function txtvalue() {
    let myval = txtarea.value;
    const myalert = "";
    if (myval == myalert) {
        alert("Enter something");
    } else {
        let listItem = document.createElement("li");
        listItem.style.cssText = "animation-name: slideIn;";
        listItem.innerText = myval;
        mylist.appendChild(listItem);
        let trash = document.createElement("i");
        trash.classList.add("fas", "fa-trash", "mine");
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


function mydel(event) {
    console.log(event)
    if (event.target.classList[2] === "mine") {
        let myname = event.target.parentElement;
        myname.remove();
        console.log(myname);
    }
}
