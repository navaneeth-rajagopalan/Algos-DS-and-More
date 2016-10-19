'use strict';
var num = 10,
    exp = 18,
    c = 1000000007;

// Time Complexity: O(log N) 
// Memory Complexity: O(log N) (Because a function call consumes memory and we make log N recursive function calls)
function exponentialCalcRecursive(num, exp, c){
    if(!exp){
        return 1;
    }
    if(exp % 2){
        return (num * exponentialCalcRecursive((num * num) % c, (exp - 1)/2, c)) % c;
    }
    else{
        return (exponentialCalcRecursive((num * num) % c, exp/2, c)) % c;
    }    
}
 
// Time Complexity: O(log N) 
// Memory Complexity: O(1)
function exponentialCalcIterative(num, exp, c){    
    let result = 1;
    while(exp){           
        if(exp % 2){            
            result = (result * num) % c;;        
        }
        num = (num * num) % c;
        exp = parseInt(exp / 2);
    }
    return result; 
}

console.log("Recursive Modular exponential result: " + exponentialCalcRecursive(num, exp, c));
console.log("Iterative Modular exponential result: " + exponentialCalcIterative(num, exp, c));