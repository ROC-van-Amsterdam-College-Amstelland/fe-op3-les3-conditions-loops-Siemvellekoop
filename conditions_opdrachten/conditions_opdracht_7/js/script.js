function getAge()
{
var myAge=document.getElementById("myAge").value; 

if(myAge < 10) 
        {
             loadChildTheme() ;
        }
    else if (myAge < 12)
        {
             manTheme() ;
        }
    else
    {
        loadTheme() ;
    }
}


function loadChildTheme()
{
    
    document.getElementsByTagName("body")[0].style.backgroundColor = "yellowgreen" ;
    document.getElementsByTagName("header")[0].style.backgroundColor = "#00AEEF" ;
    document.getElementsByClassName("active")[0].style.backgroundColor = "green" ;
    document.getElementById("main-nav").style.backgroundColor = "#00008B";
    document.getElementById("main-content").style.borderColor = "#00AEEF";
}

function loadTheme()
{
    
    document.getElementsByTagName("body")[0].style.backgroundColor = "darkgrey" ;
    document.getElementsByClassName("active")[0].style.backgroundColor = "#666666" ;
    document.getElementById("main-nav").style.backgroundColor = "black";
    document.getElementById("main-content").style.borderColor = "black";
    document.getElementsByTagName("header")[0].style.backgroundColor = "#CCCCCC" ;
}

function manTheme()
{
    
    document.getElementsByTagName("body")[0].style.backgroundColor = "red" ;
    document.getElementsByClassName("active")[0].style.backgroundColor = "black" ;
    document.getElementById("main-nav").style.backgroundColor = "purple";
    document.getElementById("main-content").style.borderColor = "yellow";
    document.getElementsByTagName("header")[0].style.backgroundColor = "blue" ;
}