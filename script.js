let num1 = 5;
let num2 = 7;
let operator = "/";

const buttons = document.querySelectorAll(".btn:not(.equals):not(.op)");

const equals = document.querySelector(".btn.equals");

const operators = document.querySelector(".btn.op");

const screen = document.querySelector(".screen-text");

let screenText = "";

const addChar = (e) => {
  console.log(e.target.textContent);
  if (screenText.length < 9) {
    screenText += e.target.textContent;
    screen.textContent = screenText;
  }
  console.log(screenText);
  console.log(screen.textContent.length);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", addChar);
});

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return parseFloat((num1 / num2).toFixed(7));
};

const operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
};
