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

let firstNumber;
let operation;
let secondNumber;
let isOperating = false;

// Parses a given equation to separate numbers, from operations to call the
// operate function
function parseEquation(equation) {
    equation = equation.replace(firstNumber, "");

    let currOperation = equation[0];

    equation = equation.replace(operation, "");
    equation = equation.replace(currOperation, "");

    secondNumber = equation;

    // Essentially reset our program
    if (currOperation == "/" && secondNumber == "0") {
        firstNumber = null;
        operation = null;
        secondNumber = null;
        isOperating = false;
        expressionText.textContent = "";
        return;
    }

    firstNumber = operate(firstNumber, currOperation, secondNumber);
    
    expressionText.textContent = firstNumber;
}

// Checks if a number is a float
function isFloat(value) {
    if (typeof value === "number" && !Number.isNaN(value) && !Number.isInteger(value)) {
        return true;
    }

    return false;
}

function add(num1, num2) {
    if (isFloat(parseFloat(num1)) || isFloat(parseFloat(num2))) {
        return parseFloat(num1) + parseFloat(num2);
    }
    
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    if (isFloat(parseFloat(num1)) || isFloat(parseFloat(num2))) {
        return parseFloat(num1) - parseFloat(num2);
    }
    
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
    if (isFloat(parseFloat(num1)) || isFloat(parseFloat(num2))) {
        return parseFloat(num1) * parseFloat(num2);
    }
    
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
    if (isFloat(parseFloat(num1)) || isFloat(parseFloat(num2))) {
        return parseFloat(num1) / parseFloat(num2);
    }
    
    return parseInt(num1) / parseInt(num2);
}

// Determines which operation should be performed based on information received
// from the parseEquation function (a lot of repetition below should fix later
// by doing function decomposition)
function operate(num1, operator, num2) {
    if (operator == "+") {
        let solution = add(num1, num2);

        if (isFloat(solution)) {
            return parseFloat(solution.toFixed(3));
        }

        return solution;
    }

    if (operator == "-") {
        let solution = subtract(num1, num2);

        if (isFloat(solution)) {
            return parseFloat(solution.toFixed(3));
        }

        return solution;
    }

    if (operator == "x") {
        let solution = multiply(num1, num2);

        if (isFloat(solution)) {
            return parseFloat(solution.toFixed(3));
        }

        return solution;
    }

    if (operator == "/") {
        let solution = divide(num1, num2);

        if (isFloat(solution)) {
            return parseFloat(solution.toFixed(3));
        }

        return solution;
    }
}

// Event Listeners

// Adds the clicked number to the expressionText
numbers.forEach(function(number) {
    number.addEventListener("click", function(event) {
        expressionText.textContent += event.target.textContent;
    })
})

// Performs addition on equation
addButton.addEventListener("click", function(event) {
    if (!isOperating) {
        isOperating = true;
        firstNumber = expressionText.textContent;
        operation = "+"
        expressionText.textContent += "+";
    } else {
        operation = "+"
        expressionText.textContent += "+";
        parseEquation(expressionText.textContent);
        expressionText.textContent += operation;
    }
})

// Performs subtraction of equation
subtractButton.addEventListener("click", function(event) {
    if (!isOperating) {
        isOperating = true;
        firstNumber = expressionText.textContent;
        operation = "-"
        expressionText.textContent += "-";
    } else {
        operation = "-";
        expressionText.textContent += "-";
        parseEquation(expressionText.textContent);
        expressionText.textContent += operation;
    }
})

// Performs multiplication on equation
multiplyButton.addEventListener("click", function(event) {
    if (!isOperating) {
        isOperating = true;
        firstNumber = expressionText.textContent;
        operation = "x"
        expressionText.textContent += "x";
    } else {
        operation = "x";
        expressionText.textContent += "x";
        parseEquation(expressionText.textContent);
        expressionText.textContent += operation;
    }
})

// performs division on equation
divideButton.addEventListener("click", function(event) {
    if (!isOperating) {
        isOperating = true;
        firstNumber = expressionText.textContent;
        operation = "/"
        expressionText.textContent += "/";
    } else {
        operation = "/";
        expressionText.textContent += "/";
        parseEquation(expressionText.textContent);
        expressionText.textContent += operation;
    }
})

// Find the total and reset the isOperating variable to false
equalsButton.addEventListener("click", function(event) {
    // Don't do anything if the user continually presses equals
    if (!isOperating) {
        return;
    }

    isOperating = false;
    parseEquation(expressionText.textContent);
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