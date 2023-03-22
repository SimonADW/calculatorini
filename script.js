
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

const operate = function(operateA, operator, operateB) {
    numA = operateA;    
    if (operator == '+') {
        return add(operateB);        
    } else if (operator == '-') {
        subtract(operateB);        
    } else if (operator == '*') {
        multiply(operateB);        
    } else if (operator == '/') {
        divide(operateB);        
    } else {
        return "Error; unknown operator"; 
    }
    return numA;
}