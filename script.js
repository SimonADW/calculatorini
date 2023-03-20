
var numA = 0;
var numB = 0;
var operator = 0;

const add = function(numB) {
    numA += numB;     
    return numA;
}

const subtract = function(numB) {
    numA -= numB;     
    return numA;
}

const multiply = function(numB) {
    numA *= numB;     
    return numA;
}

const divide = function(numB) {
    numA /= numB;     
    return numA;
}

// const operate = function(numA, operator, numB) {
    
//     if (operator == '+') {
//         return add(numB);        
//     } else if (operator == '-') {
//         subtract(numA,numB);        
//     } else if (operator == '*') {
//         multiply(numA,numB);        
//     } else if (operator == '/') {
//         divide(numA,numB);        
//     } else {
//         return "Error; unknown operator"; 
//     }
//     return numA;
// }