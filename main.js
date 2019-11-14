const numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("oprands");
const display = document.getElementById("display");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const clearAll = document.getElementById("clear-all");

let displayValue = 0;
let pendingValue;
let evaluationArray = [];

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", updateDisplayValue);
}
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", mathOperation);
}

function updateDisplayValue(e) {
  let tempValue = e.target.innerText;
  if (displayValue === 0) {
    displayValue = "";
  }
  displayValue += tempValue;
  display.innerText = displayValue;
  console.log(displayValue);
}

function mathOperation(e) {
  let operator = e.target.innerText;
  switch (operator) {
    case "+":
      pendingValue = displayValue;
      displayValue = 0;
      display.innerText = displayValue;
      evaluationArray.push(pendingValue);
      evaluationArray.push("+");
      break;

    case "-":
      pendingValue = displayValue;
      displayValue = 0;
      display.innerText = displayValue;
      evaluationArray.push(pendingValue);
      evaluationArray.push("-");
      break;

    case "/":
      pendingValue = displayValue;
      displayValue = 0;
      display.innerText = displayValue;
      evaluationArray.push(pendingValue);
      evaluationArray.push("/");
      break;

    case "x":
      pendingValue = displayValue;
      displayValue = 0;
      display.innerText = displayValue;
      evaluationArray.push(pendingValue);
      evaluationArray.push("*");
      break;
    case "%":
      pendingValue = displayValue;
      displayValue = 0;
      display.innerText = displayValue;
      evaluationArray.push(pendingValue);
      evaluationArray.push("/100");
      break;
    case "=":
      evaluationArray.push(displayValue);
      let evaluation = eval(evaluationArray.join(""));
      displayValue = evaluation + "";
      display.innerText = displayValue;
      evaluationArray = [];
      break;

    default:
      break;
  }
}

clearAll.onclick = () => {
  displayValue = 0;
  pendingValue = undefined;
  evaluationArray = [];
  display.innerText = displayValue;
};

decimal.onclick = () => {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  display.innerText = displayValue;
};
