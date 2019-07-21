alert("Welcome to Sebastian/Robert's Webpage!");
var name = prompt("What is your name?");
alert("Nice name" + name + " And yes, i say that to everyone I meet :)");


function validate() {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    if(n1.value != "" && n2.value !=""){
        if(n1.value == n2.value){
            alert("Sebastan and Robert picked matching numbers!");
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
    
    }