
const keys = document.querySelectorAll('.btn');
const screen = document.getElementById('screen');


let currentInput = '';
let previousInput = '';
let operator = null;


function updateScreen(value) {
    screen.value = value;
}


keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.value;

        if (keyValue === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = null;
            updateScreen('');
        } else if (keyValue === '=') {
            
            if (operator && currentInput && previousInput) {
                const result = calculate(previousInput, currentInput, operator);
                updateScreen(result);
                previousInput = result;
                currentInput = '';
                operator = null;
            }
        } else if (['+', '-', '*', '/'].includes(keyValue)) {
            
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = keyValue;
            }
        } else {
           
            currentInput += keyValue;
            updateScreen(currentInput);
        }
    });
});

function calculate(firstValue, secondValue, operator) {
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    switch (operator) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case '*':
            return firstValue * secondValue;
        case '/':
            return firstValue / secondValue;
        default:
            return secondValue;
    }
}
