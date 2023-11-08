let displayExpression = document.getElementById('expression');
let displayResult = document.getElementById('result');
let currentExpression = '';

function updateDisplay() {
    displayExpression.innerText = currentExpression;
    displayResult.innerText = evaluateExpression();
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

function appendCharacter(character) {
    currentExpression += character;
    updateDisplay();
}

function evaluateExpression() {
    try {
        return eval(currentExpression) || '0';
    } catch (error) {
        return 'Error';
    }
}

function calculate() {
    currentExpression = evaluateExpression();
    updateDisplay();
}

updateDisplay();
