//javascript code
var i = "";
var text = "";
function myFunction(){
    for(i = 0; i <= 20; i++)
        if (i %2){
            text += i + "<br>" ;
            document.getElementById("opdracht").innerHTML = text;
        }

        else if (i %3){ 
            console.log(i);
        }
        
    
}

    