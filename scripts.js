let firstNum;
let secondNum;
let operator;
const display = document.querySelector("#screen");
const value = document.querySelector("#value-screen");
const numArr = document.querySelectorAll(".number");
const oprArr = document.querySelectorAll(".operator");
const numClear = document.querySelector(".clear");
const numDelete = document.querySelector(".delete");
const numDecimal = document.querySelector(".decimal");
const numOperate = document.querySelector(".operate");
numArr.forEach((button) => {
  button.addEventListener("click", () => {
    if (value.textContent == "") {
      display.textContent += button.innerHTML;
    }
  });
});
oprArr.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      display.textContent.includes("x") ||
      display.textContent.includes("+") ||
      display.textContent.includes("-") ||
      display.textContent.includes("÷") ||
      display.textContent.includes("%")
    ) {
      operate();
    }
    if (value.textContent == "") {
      display.textContent += " " + button.innerHTML + " ";
    } else {
      display.textContent = value.textContent;
      value.textContent = "";
      display.textContent += " " + button.innerHTML + " ";
    }
  });
});
numDelete.addEventListener("click", () => {
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length - 1
  );
  value.textContent = "";
});
numClear.addEventListener("click", () => {
  display.textContent = "";
  value.textContent = "";
});
numDecimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
    value.textContent = "";
  }
  let valueArr = display.textContent.split(" ");
  if ((valueArr.length = 3)) {
    secondNum = valueArr.at(2);
    if (!secondNum.includes(".")) {
      display.textContent += ".";
      value.textContent = "";
    }
  }
});
numOperate.addEventListener("click", () => {
  operate();
});
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
  if (b == 0) {
    alert("Cant divide by 0!");
  }
  return a / b;
}
function modulus(a, b) {
  return a % b;
}
function operate() {
  let valueArr = display.textContent.split(" ");
  firstNum = parseInt(valueArr.at(0));
  secondNum = parseInt(valueArr.at(2));
  operator = valueArr.at(1);
  if (operator == "+") value.textContent = add(firstNum, secondNum);
  if (operator == "-") value.textContent = subtract(firstNum, secondNum);
  if (operator == "x") value.textContent = multiply(firstNum, secondNum);
  if (operator == "÷") value.textContent = divide(firstNum, secondNum);
  if (operator == "%") value.textContent = modulus(firstNum, secondNum);
}
