
$(document).ready(function(){
    var move=0;
    $(document).keydown(function(a){
        var x=a;
        if(x.keyCode==37){
            move=move-5;
            $("#mario").css("left",move)
        }
        else if(x.keyCode==39){
           move=move+5;
           $("#mario").css("left",move)
        }
    })
})
