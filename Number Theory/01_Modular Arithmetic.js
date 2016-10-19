"use strict";

var a = 985,
    b = 427,
    modBy = 42;

// (a+b)%c = (a%c + b%c )%c
function modInAddition(num1, num2){
    var result;
    console.log("Addition...");
    result = (num1 + num2) % modBy;
    console.log(`Before property ${result}`);
    result = (num1 % modBy + num2 % modBy) % modBy;
    console.log(`After property ${result}`);
}

// (a - b)%c = ((a%c) - (b%c) +c) %c. 
function modInSubtraction(num1, num2){
    var result;
    console.log("Subtraction...");
    result = (num1 - num2) % modBy;
    console.log(`Before property ${result}`);
    result = (num1 % modBy - num2 % modBy + modBy) % modBy;
    console.log(`After property ${result}`);
}

// (a * b)%c = ((a%c) * (b%c))%c
function modInMultiplication(num1, num2){
    var result;
    console.log("Multiplication...");
    result = (num1 * num2) % modBy;
    console.log(`Before property ${result}`);
    result = (num1 % modBy * num2 % modBy) % modBy;
    console.log(`After property ${result}`);
}

// (a / b)%c = ((a%c) *(1/b %c))%c 
function modInDivision(num1, num2){
    var result;
    console.log("Division...");
    result = (num1 + num2) % modBy;
    console.log(`Before property ${result}`);
    result = (num1 % modBy + num2 % modBy) % modBy;
    console.log(`After property ${result}`);
}

modInAddition(a, b);
modInSubtraction(a, b);
modInMultiplication(a, b);
modInDivision(a, b);