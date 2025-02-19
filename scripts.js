function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

const mainBtnContainer = document.querySelector(".mainBtnContainer");

mainBtnContainer.appendChild(CreateButton('0'));
mainBtnContainer.appendChild(CreateButton('.'));
mainBtnContainer.appendChild(CreateButton('='));

for (let i = 1; i < 10; i++) {
    mainBtnContainer.appendChild(CreateButton(i));
}

const sideBtnContainer = document.querySelector(".sideBtnContainer");
let operatorsList = ['/', '*', '-', '+']

for (let i = 0; i < 4; i++) {
    sideBtnContainer.appendChild(CreateButton(operatorsList[i]));
}

function CreateButton(id) {
    let button = document.createElement("button");
    button.id = id.toString();
    button.textContent = id.toString();
    return button;
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => processInput(e.target.id));
});

let firstOperand = '';
let operator = '';
let secondOperand = '';
let numberStr = '';
let result = null;


function processInput(id) {
    switch (id) {
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0': case '.':
            addOperator(id);
            break;
        case '+': case '-': case '/': case '*':
        case '=':
            addOperand(id);
            break;
        case 'clear':
            clearLogic();
        break;
    }
}

function clearLogic() {
    firstOperand = '';
    operator = '';
    secondOperand = '';
    numberStr = '';
    result = null;
    updateDisplay('');
}

function updateDisplay(str) {
    display.textContent = str.toString();
}

function addOperator(num) {
    if ( !(numberStr.includes('.') && num == '.') ) {
        numberStr += num;
        updateDisplay(numberStr);
    }
    if(operator == '/' && numberStr == '0') {
        updateDisplay("OwOstop");
        display.style.backgroundColor = "red";
    }
}

function addOperand(op) {
    if(operator == '=' && op == '=')
        return;

    if(numberStr != '' && firstOperand == '' || operator == '=') {
        if(operator != '=') {
            firstOperand = numberStr;
        }
        numberStr = '';
        operator = op;
    } else if(numberStr != '' && firstOperand != '' && operator != '') {
        secondOperand = numberStr;
        numberStr = '';
        result = evaluate(firstOperand, secondOperand, operator);
        updateDisplay(result);

        operator = op;
        firstOperand = result;
        secondOperand = '';
    } else if(numberStr == '' && firstOperand != '' && operator != '') {
        result = evaluate(firstOperand, firstOperand, operator);
        updateDisplay(result);
        operator = op;
        firstOperand = result;
    }
}


function evaluate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}