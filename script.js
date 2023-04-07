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
    } else if (operator == '÷') {
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
        displayValue === 0 ? displayValue = '' : false;
        displayValue += i.textContent;
        document.getElementById('displayMain').textContent = displayValue;        
    });
});

// Register and limit dot-clicks (NOT COMPLETE, ONCE:TRUE IS PERMANENT?)
let btnDot = document.querySelector('#numButtonDot');

btnDot.addEventListener('click', function() {        
    displayValue += '.';
    document.getElementById('displayMain').textContent = displayValue;        
    },{once: true});



// Register operatorclicks 
let btnsOp = document.querySelectorAll('.opButton');

btnsOp.forEach(function (i) {
    i.addEventListener('click', function() {
        if (!bankValue) {
            bankValue = displayValue;
        } else { 
            bankValue = operate(bankValue,opValue,displayValue);    
        };
        document.getElementById('displayBank').textContent = bankValue;  
        opValue = i.textContent;
        displayValue = '';          
    });
});



// Operate on press =
let btnSum = document.querySelector('.opButtonSum');
btnSum.addEventListener('click', function() { 
    displayValue = operate(bankValue,opValue,displayValue);
    bankValue = 0;
    document.getElementById('displayMain').textContent = displayValue;    
    document.getElementById('displayBank').textContent = bankValue;            
    });


// All Clear click and function
let btnAC = document.querySelector('#acButton');
btnAC.addEventListener('click', function() { 
    bankValue = '';
    displayValue = 0;
    document.getElementById('displayMain').textContent = displayValue;    
    document.getElementById('displayBank').textContent = bankValue;            
});

