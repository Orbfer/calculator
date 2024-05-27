let firstNum;
let secondNum;
let Operator;
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
function operate(a, b, c) {
  if (a == "+") return add(b, c);
  else if (a == "-") return subtract(b, c);
  else if (a == "*") return multiply(b, c);
  else if (a == "/") return divide(b, c);
}
