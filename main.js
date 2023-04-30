const displayPanel = document.querySelector(".result");
let currentValue = "0";
let previousValue = null;
let operator = null;

function updateDisplay() {
    displayPanel.textContent = currentValue;
    }

function handleNumberClick(number) {
    if (currentValue === "0") {
        currentValue = number;
    } else {
        currentValue += number;
    }
    updateDisplay();
}

function handleOperatorClick(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    previousValue = parseFloat(currentValue);
    currentValue = "0";
    updateDisplay();
}

function handleACClick() {
    currentValue = "0";
    previousValue = null;
    operator = null;
    updateDisplay();
}

function handleSignClick() {
    currentValue = parseFloat(currentValue) * -1;
    updateDisplay();
}

function handlePercentageClick() {
    currentValue = parseFloat(currentValue) / 100;
    updateDisplay();
}

function calculate() {
    const current = parseFloat(currentValue);
    switch (operator) {
        case "+":
            currentValue = previousValue + current;
            break;
        case "-":
            currentValue = previousValue - current;
            break;
        case "*":
            currentValue = previousValue * current;
            break;
        case "/":
            currentValue = previousValue / current;
            break;
    }
    operator = null;
    previousValue = null;
    updateDisplay();
}

document.querySelector("#zero").addEventListener("click", () => handleNumberClick("0"));
document.querySelector("#one").addEventListener("click", () => handleNumberClick("1"));
document.querySelector("#two").addEventListener("click", () => handleNumberClick("2"));
document.querySelector("#three").addEventListener("click", () => handleNumberClick("3"));
document.querySelector("#four").addEventListener("click", () => handleNumberClick("4"));
document.querySelector("#five").addEventListener("click", () => handleNumberClick("5"));
document.querySelector("#six").addEventListener("click", () => handleNumberClick("6"));
document.querySelector("#seven").addEventListener("click", () => handleNumberClick("7"));
document.querySelector("#eight").addEventListener("click", () => handleNumberClick("8"));
document.querySelector("#nine").addEventListener("click", () => handleNumberClick("9"));
document.querySelector("#point").addEventListener("click", () => {
    if (!currentValue.includes(".")) {
        currentValue += ".";
        updateDisplay();
    }
}
);
document.querySelector("#ac").addEventListener("click", handleACClick);
document.querySelector("#sign").addEventListener("click", handleSignClick);
document.querySelector("#percentage").addEventListener("click", handlePercentageClick);
document.querySelector("#addition").addEventListener("click", () => handleOperatorClick("+"));
document.querySelector("#subtraction").addEventListener("click", () => handleOperatorClick("-"));
document.querySelector("#multiplication").addEventListener("click", () => handleOperatorClick("*"));
document.querySelector("#division").addEventListener("click", () => handleOperatorClick("/"));
document.querySelector("#equal").addEventListener("click", calculate);