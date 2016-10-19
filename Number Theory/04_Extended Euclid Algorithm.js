"use strict";

var a = 64,
    b= 100;

var GCD, x, y;
// x = y1;
// y = x - (a/b)y1;
function extendedEuclid(a, b){
    if(!b){        
        GCD = a;
        x = 1;
        y = 0;
    }
    else{
        extendedEuclid(b, a%b);
        console.log(x + " " + y);
        var temp = x;
        x = y;
        y = temp - parseInt((a / b)) * y;
    }
}

extendedEuclid(a, b);

console.log(`G.C.D of ${a} and ${b} = ${GCD}`);
console.log(`Coefficients are ${x} and ${y}`);