//javascript code
var num1 ;
var num2 ;
var myAnwsner ;

    function add(){
    num1 = parseInt(document.getElementById("number1").value) ;
    num2 = parseInt(document.getElementById("number2").value) ;

    myAnwsner = num1 + num2

    alert(parseInt(myAnwsner))
}

function minus(){
    num1 = parseInt(document.getElementById("number1").value) ;
    num2 = parseInt(document.getElementById("number2").value) ;

    myAnwsner = num1 - num2

    alert(parseInt(myAnwsner))
}

function multiply(){
    num1 = parseInt(document.getElementById("number1").value) ;
    num2 = parseInt(document.getElementById("number2").value) ;

    myAnwsner = num1 * num2

    alert(parseInt(myAnwsner))
}

function divide(){
    num1 = parseInt(document.getElementById("number1").value) ;
    num2 = parseInt(document.getElementById("number2").value) ;

    myAnwsner = num1 / num2

    alert(parseInt(myAnwsner))
}