const buttons = document.querySelectorAll(".btn:not(.equals):not(.op)");

const equals = document.querySelector(".btn.equals");

const operators = document.querySelectorAll(".btn.op");

const screen = document.querySelector(".screen-text");

const backspace = document.querySelector(".btn.backspace");

let value1 = "";
let value2 = "";
let operator = "";
let result = ""

const add = (num1, num2) => {
  return parseFloat((num1 + num2).toFixed(7));
};

const subtract = (num1, num2) => {
  return parseFloat((num1 - num2).toFixed(7));
};

const multiply = (num1, num2) => {
  return parseFloat((num1 * num2).toFixed(7));
};

const divide = (num1, num2) => {
  return parseFloat((num1 / num2).toFixed(7));
};

const operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  result = roundUp(result);
  screen.textContent = result;
  value1 = result;
  value2 = "";
  console.log(result);
};

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

const handleOperatorClick = (e) => {
  //Sets value1 to 0 if operator was clicked first
  if (value1 === "") {
    value1 = "0";
  }
  let op = e.target.getAttribute("data-key");
  operator = op;
  console.log("val1: " + value1);
  console.log(operator);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", typeOnScreen);
});

operators.forEach((op) => {
  op.addEventListener("click", handleOperatorClick);
});

equals.addEventListener("click", () => {
  operate(parseFloat(value1), operator, parseFloat(value2));
});
