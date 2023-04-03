let displayValue = '';
let opValue = '';
let bankValue = '';

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
    numA = Number(operateA);        
    if (operator == '+') {
        return add(Number(operateB));        
    } else if (operator == '-') {
        subtract(Number(operateB));        
    } else if (operator == '*') {
        multiply(Number(operateB));        
    } else if (operator == '/') {
        divide(Number(operateB));     
    } else {
        return "Error; unknown operator"; 
    }
    return numA;
}

// Register numberclicks
let btnsNum = document.querySelectorAll('.numButton');

btnsNum.forEach(function (i) {
    i.addEventListener('click', function() {
        displayValue = '';
        displayValue += i.textContent;
        document.getElementById('displayMain').textContent = displayValue;        
    });
});

// Register operatorclicks 
let btnsOp = document.querySelectorAll('.opButton');

btnsOp.forEach(function (i) {
    i.addEventListener('click', function() {
        opValue = i.textContent;
        bankValue = displayValue
        document.getElementById('displayBank').textContent = bankValue;            
    });
});


// Operate on press =
let btnSum = document.querySelector('.opButtonSum');
btnSum.addEventListener('click', function() { 
    displayValue = operate(bankValue,opValue,displayValue);
    document.getElementById('displayMain').textContent = displayValue;    
    });



