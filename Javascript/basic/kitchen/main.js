let txtarea = document.getElementById("kitchen-input");
let btn = document.getElementById("add-btn").addEventListener("click", txtvalue);
let mylist = document.getElementById("kitchen-items-list");
let emptyArray = [];
mylist.innerHTML = '';
txtarea.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault;
        document.getElementById("add-btn").click();
        // txtvalue();
    }
})

function txtvalue() {
    let myval = txtarea.value;
    const myalert = "";
    if (myval==myalert){
        alert("Enter something");
    }
    else{
    let listItem = document.createElement("li");
    listItem.style.cssText = "animation-name: slideIn;";
    listItem.innerHTML = myval;
    mylist.appendChild(listItem);
    emptyArray.push(myval);
    console.log(emptyArray);
    txtarea.value = "";
    txtarea.focus();
    // console.log(myval);
    // alert("wORKED");
    }
}
btn.addEventListener("click", txtvalue);
