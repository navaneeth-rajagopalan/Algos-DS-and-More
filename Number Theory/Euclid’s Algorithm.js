"use strict";

var a = 64,
    b= 100;

// Time Complexity: The time complexity of Euclid’s Algorithm is O(log(max(A, B))).
function getGCD(num1, num2){
    if(!num2){
        return num1;
    }
    return getGCD(num2, num1 % num2);
}

console.log(getGCD(a, b));