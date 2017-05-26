" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function printOneToTen(){
    for(var i = 0; i < 10; i++){
        display.innerHTML += (i+1) + "<br>";
    }
}

function printOddLessThanTwenty(){
    for(var i = 0; i < 20; i++){
        if(i%2 != 0){
            display.innerHTML += i + "<br>";
        }
    }
}

function printSquares(){
    for(var i = 0; i < 10; i++){
        display.innerHTML += ((i+1)*(i+1)) + "<br>";
    }
}

function printRandNum(){
    for(var i = 0; i < 4; i++){
        display.innerHTML += Math.ceil((Math.random() * 100)) + "<br>";
    }
}

function printEvenLessThanN(n){
    for(var i = 0; i < n; i++){
        if(i%2==0){
            display.innerHTML += i + "<br>";
        }
    }
}

function printPowersOfTwo(n){
    for(var i = 1; i < n+1; i++){
        display.innerHTML += (Math.pow(2,i)) + "<br>";
    }
}

function printAreWeThereYet(){
    var answer = "";
    while(answer !== "Yes"){
        answer = prompt("Are We There Yet?");
    }
    display.innerHTML = "Good!";
}

function printTriangle(){
    var result = "";
    var count = 0;
    for(var i = 0; i < 5; i++){
        for(var j = i; j < i+1; j++){
            result += "*";
        }
        display.innerHTML += result + "<br>";
    }
}

function printTableSquare(){
    var result = "";
    for(var i = 1; i < 5; i++){
        for(var j = 1; j < 5; j++){
            result += "|" + (i*j);
        }
        result += "|<br>"
        display.innerHTML = result;
    }
}

function printNxNTable(n){
    var result = "";
    for(var i = 1; i < n+1; i++){
        for(var j = 1; j < n+1; j++){
            result += "|" + (i*j);
        }
        result += "|<br>"
        display.innerHTML = result;
    }
}