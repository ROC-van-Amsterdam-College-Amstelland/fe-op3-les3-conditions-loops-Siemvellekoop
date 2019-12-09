
function myFunction() 
{
var i = "";
var text = "";
var max = document.getElementById("number").value;
    for(i = 0; i <= max; i++){
        text += i + "<br>" ;
    }
    document.getElementById("opdracht").innerHTML = text;
}