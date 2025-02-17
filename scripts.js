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

let firstOperand;
let operator;
let secondOperand;

function operate(a, b, op) {
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
    }
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