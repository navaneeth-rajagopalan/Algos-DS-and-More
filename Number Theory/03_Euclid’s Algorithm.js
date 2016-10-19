"use strict";

var a = 64,
    b= 100;

// Time Complexity: The time complexity of Euclid’s Algorithm is O(log(max(A, B))).
function GCD_Euclid(a, b){
    if(!b){
        return a;
    }
    return GCD_Euclid(b, a % b);
}

console.log(`G.C.D of ${a} and ${b}  = ${GCD_Euclid(a, b)}`);