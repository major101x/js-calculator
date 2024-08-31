let num1 = 5;
let num2 = 7;
let operator = "";

const buttons = document.querySelectorAll(".btn:not(.equals):not(.op)");

const equals = document.querySelector(".btn.equals");

const operators = document.querySelectorAll(".btn.op");

const screen = document.querySelector(".screen-text");

const backspace = document.querySelector(".btn.backspace");

let value1 = "";
let value2 = "";

const typeOnScreen = (e) => {
  //Prevents overflowing of calc screen
  if (screen.textContent.length < 9) {
    //Stores value1 or value2 depending on if operator was clicked
    if (operator === "") {
      value1 += e.target.textContent;
      screen.textContent = value1;
    } else {
      value2 += e.target.textContent;
      screen.textContent = value2;
    }
  }
  console.log("val1: " + value1);
  console.log("val2: " + value2);
  console.log(e.target.textContent);
};

const addOperator = (e) => {
  let op = e.target.getAttribute("data-key");
  operator = op;
  console.log(operator);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", typeOnScreen);
});

operators.forEach((op) => {
  op.addEventListener("click", addOperator);
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
