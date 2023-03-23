let displayValue = ''
var numA = 0;
var numB = 0;
var operator = 0;

// calculate functions //
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

// operate function // 
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

// Register clicks
let btns = document.querySelectorAll('button');

btns.forEach(function (i) {
    i.addEventListener('click', function() {
        displayValue += i.textContent;
        document.getElementById('displayMain').textContent = displayValue;
    });
});



