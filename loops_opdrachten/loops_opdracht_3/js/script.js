//javascript code
function myFunction() {
    var i = "";
    var text = "";
    for
     (i = 0; i <= 50; i++){ 
     if(i == 20) {
         text += i + " dit zijn mooie getallen!" + "<br>";
     }

    else if(i == 40) {
        text += i + " dit zijn mooie getallen!" + "<br>";
    }

    else{
        text += i + "<br>";
    }
  console.log(i);
  document.getElementById("opdracht").innerHTML = text;
}
}