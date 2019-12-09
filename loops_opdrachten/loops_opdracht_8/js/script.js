//javascript code
function myFunction() {
    var i = "";
    var text = "";
    
    for(i = 0; i <= 50; i++) 
        if(i == 25){
            alert("Het getal 25 is net geen bullseye!")
        }
    else{
        text += i + "<br>" ;
        document.getElementById("opdracht").innerHTML = text;
    }
}