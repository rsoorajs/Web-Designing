function butact(btvalue){
    document.getElementById("screen").value=document.getElementById("screen").value+btvalue
}
function clearbtn(){
    document.getElementById("screen").value=""
}
function res(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
