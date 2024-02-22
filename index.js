// Index html elements
const expressionText = document.querySelector("#expressionText");
const clear = document.querySelector("#clear");
const numbers = document.querySelectorAll("#numButton");

const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");

const solarPanel = document.querySelector("#solarPanel");

let solution = 0;
let firstNumber;
let operation;
let secondNumber;
let isOperating = false;

function parseEquation(equation) {
    equation = equation.replace(firstNumber, "");
    equation = equation.replace(operation, "");

    secondNumber = equation;

    firstNumber = operate(firstNumber, operation, secondNumber);

    console.log(firstNumber);
    
    expressionText.textContent = firstNumber + operation;
}

function add(num1, num2) {
    console.log(parseInt(num1) + parseInt(num2));
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return num1, num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2);
    }

    if (operator == "-") {
        return subtract(num1, num2);
    }

    if (operator == "*") {
        return multiply(num1, num2);
    }

    if (operator == "/") {
        return divide(num1, num2);
    }
}

// Event Listeners

// Adds the clicked number to the expressionText
numbers.forEach(function(number) {
    number.addEventListener("click", function(event) {
        expressionText.textContent += event.target.textContent;
    })
})

addButton.addEventListener("click", function(event) {
    if (!isOperating) {
        isOperating = true;
        firstNumber = expressionText.textContent;
        operation = "+"
        expressionText.textContent += "+";
    } else {
        // There exists two operations in the expressionText
        parseEquation(expressionText.textContent);
    }
})

// subtractButton.addEventListener("click", function(event) {
//     expressionText.textContent += "-";
// })

// multiplyButton.addEventListener("click", function(event) {
//     expressionText.textContent += "x";
// })

// divideButton.addEventListener("click", function(event) {
//     expressionText.textContent += "/";
// })

equalsButton.addEventListener("click", function(event) {
    // We don't want to add this to the expression text we just kind of want
    // to have on the screen the solution number, and set the isOperating
    // variable back to true
})

// Clears the expressionText
clear.addEventListener("click", function(event) {
    expressionText.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    operation = "";
    isOperating = false;
})

// Easter Egg Event Listener for opacity
solarPanel.addEventListener("mouseover", function(event) {
    expressionText.classList.add("opacity");
})

solarPanel.addEventListener("mouseout", function(event) {
    expressionText.classList.remove("opacity");
})

// Operation process
// 1. User begins by entering numbers
// 2. Once the user clicks an operation set the first number to what was the
// Expression text
// 3. Set the operation variable to the operator from the eventListener

// Can create an isOperating variable, and call a function whenever the user
// has selected more than one operation. If the user presses the equal
// operation isOperating will be set to false, and whenever the user
// presses an operator it will be set to true.

// Create a function that whenever isOperating is True, which means that there
// currently exists an operating in expression text