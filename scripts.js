let firstNum;
let secondNum;
let operator;
const display = document.querySelector("#screen");
const numArr = document.querySelectorAll(".number");
const oprArr = document.querySelectorAll(".operator");
const numClear = document.querySelector(".clear");
const numDelete = document.querySelector(".delete");
const numDecimal = document.querySelector(".decimal");
const numOperate = document.querySelector(".operate");
numArr.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.innerHTML;
  });
});
oprArr.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += " " + button.innerHTML + " ";
  });
});
numDelete.addEventListener("click", () => {
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length - 1
  );
});
numClear.addEventListener("click", () => {
  display.textContent = "";
});
numDecimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) display.textContent += ".";
});
numOperate.addEventListener("click", () => {
  let valueArr = display.textContent.split(" ");
  firstNum = parseInt(valueArr.at(0));
  secondNum = parseInt(valueArr.at(2));
  operator = valueArr.at(1);
  if (operator == "+") display.textContent = add(firstNum, secondNum);
  if (operator == "-") display.textContent = subtract(firstNum, secondNum);
  if (operator == "x") display.textContent = multiply(firstNum, secondNum);
  if (operator == "÷") display.textContent = divide(firstNum, secondNum);
  if (operator == "%") display.textContent = modulus(firstNum, secondNum);
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
  return a / b;
}
function modulus(a, b) {
  return a % b;
}
