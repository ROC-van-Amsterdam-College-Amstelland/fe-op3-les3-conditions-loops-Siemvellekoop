//javascript code
var i = "";
var text = "";
function myFunction() {
    for
     (i = 0; i <= 100; i++){ 
     if(i %3 == 0 ) {
         text += i + " VET" + "<br>";
    }

    else if(i %5 == 0 ) {
        text += i + " COOL" + "<br>";
    }

    else{text += i + "<br>";
    }
  
console.log(i);
document.getElementById("opdracht").innerHTML = text;
}
}