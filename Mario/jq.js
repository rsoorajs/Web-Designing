
$(document).ready(function(){
    var move_left=0;
    var move_top=0;
    $(document).keydown(function(a){
        var x=a;
        if(x.keyCode==37){
            move_left=move_left-5;
            $("#mario").css("left",move_left)
        }
        else if(x.keyCode==39){
           move_left=move_left+5;
           $("#mario").css("left",move_left)
        }
        else if(x.keyCode==38){
            move_top=move_top-5;
            $("#mario").css("top",move_top)

        }
        else if(x.keyCode==40){
            move_top=move_top+5;
            $("#mario").css("top",move_top)

        }

    })
})
