function add(a, b) {
    return a + b;
}
function substract(a, b) {
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
    btn.addEventListener('click', (e) => getInput(e.target.id));
});

let firstOperand = null;
let operator;
let secondOperand = null;
let numberStr = '';

function getInput(id) {
    switch (id) {
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0': case '.':
            addOperator(id);
            break;
        case '+': case '-': case '/': case '*':
            addOperand(id);
            break;
        case '=':
            break;
        break;
    }
}

function addOperator(id) {
    if (numberStr.includes('.') && id == '.') return;
    numberStr += id;
    display.textContent = numberStr;
}

function addOperand(id) {
    operator = id;
    if(firstOperand == null) {
        display.textContent = operator;
        firstOperand = parseFloat(numberStr);
    }   else {
        if(numberStr != '')
            secondOperand = parseFloat(numberStr);

        firstOperand = evaluate(firstOperand, secondOperand, operator);
        secondOperand = firstOperand;
        display.textContent = firstOperand;
    }
    numberStr = '';
}


function evaluate(a, b, op) {
    switch (op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return substract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}