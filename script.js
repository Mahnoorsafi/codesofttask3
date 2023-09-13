let currentInput = "";
let currentOperator = "";
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendDecimalPoint() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function appendOperator(operator) {
    if (operator === '%') {
        calculatePercentage();
        return;
    }

    if (currentOperator) {
        calculate();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    updateDisplay(result);
    currentInput = result.toString();
    currentOperator = "";
    previousInput = "";
}

function calculatePercentage() {
    const num = parseFloat(currentInput);
    const percentage = num / 100;
    updateDisplay(percentage);
    currentInput = percentage.toString();
}

function clearDisplay() {
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    updateDisplay("0");
}

function updateDisplay(value) {
    document.getElementById("display").textContent = value;
}