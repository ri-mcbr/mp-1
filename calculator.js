let form = document.getElementById("calculator");
let output = document.getElementById("output");

function Add(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let out = num1 + num2;
    output.innerHTML = out;
    if(out < 0) {
        output.style.backgroundColor = "red";
    }
    else{
        output.style.backgroundColor = "";
    }
}

function Subtract(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let out = num1 - num2;
    output.innerHTML = out;
    if(out < 0) {
        output.style.backgroundColor = "red";
    }
    else{
        output.style.backgroundColor = "";
    }
}

function Multiply(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let out = num1 * num2;
    output.innerHTML = out;
    if(out < 0) {
        output.style.backgroundColor = "red";
    }
    else{
        output.style.backgroundColor = "";
    }
}

function Divide(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let out = num1 / num2;
    output.innerHTML = out;
    if(out < 0) {
        output.style.backgroundColor = "red";
    }
    else{
        output.style.backgroundColor = "";
    }
}

function Power(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let temp = 1;
    if(num2 < 0) {  /*negatives */
        num2 = -num2;
        for(let i = 0; i < num2; i++){
            temp = temp * num1;
        }
        temp = 1 / temp;
    }
    else {
        for(let i = 0; i < num2; i++){
            temp = temp * num1;
        }
    }
    let out = temp;
    output.innerHTML = out;
    if(out < 0) {
        output.style.backgroundColor = "red";
    }
    else{
        output.style.backgroundColor = "";
    }
}


function Clear(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    output.innerHTML = "";
}