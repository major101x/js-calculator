const buttons = document.querySelectorAll(
  ".btn:not(.equals):not(.op):not(.clear):not(.backspace)"
);

const equals = document.querySelector(".btn.equals");

const operators = document.querySelectorAll(".btn.op");

const screen = document.querySelector(".screen-text");

const backspace = document.querySelector(".btn.backspace");

const clearBtn = document.querySelector(".btn.clear");

let value1 = "";
let value2 = "";
let operator = "";
let result = "";

const roundUp = (result) => {
  roundLength = result.toString().length;
  const newResult =
    roundLength > 9
      ? parseFloat(result).toExponential(roundLength / 10)
      : result;
  console.log(roundLength);
  console.log("res: " + newResult);
  return newResult;
};

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
  result = isNaN(result) || !isFinite(result) ? "Hey ;)" : roundUp(result);
  screen.textContent = result;
  value1 = result;
  value2 = "";
  operator = "";
  console.log(result);
  console.log(operator);
};

const typeOnScreen = (e) => {
  //Only if operator is clicked
  if (operator === "") {
    if (value1.length < 9) {
      value1 += e.target.textContent;
      screen.textContent = value1;
    }
  } else {
    if (value2.length < 9) {
      value2 += e.target.textContent;
      screen.textContent = value2;
    }
  }
  console.log("val1: " + value1);
  console.log("val2: " + value2);
  console.log(operator);
};

const handleOperatorClick = (e) => {
  //Sets value1 to 0 if operator was clicked first
  if (value1 === "") {
    value1 = "0";
  }
  //Evaluates result if operator is clicked twice before equals
  if (value1 && value2) {
    result = operate(parseFloat(value1), operator, parseFloat(value2));
  }
  let op = e.target.getAttribute("data-key");
  operator = op;
  console.log("val1: " + value1);
  console.log(operator);
};

const handleClear = () => {
  screen.textContent = "0";
  value1 = "";
  value2 = "";
  operator = "";
  result = "";
};

const handleBackspace = () => {
  if (operator === "") {
    if (value1.length > 1) {
      value1 = value1.substring(0, value1.length - 1);
      screen.textContent = value1;
      console.log(`value1 ${value1}`);
    } else {
      value1 = "";
      screen.textContent = "0";
    }
  } else {
    if (value2.length > 1) {
      value2 = value2.substring(0, value2.length - 1);
      screen.textContent = value2;
      console.log(`value2 ${value2}`);
    } else {
      value2 = "";
      screen.textContent = "0";
    }
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", typeOnScreen);
});

operators.forEach((op) => {
  op.addEventListener("click", handleOperatorClick);
});

equals.addEventListener("click", () => {
  if (value1 && value2) {
    operate(parseFloat(value1), operator, parseFloat(value2));
  }
});

clearBtn.addEventListener("click", handleClear);

backspace.addEventListener("click", handleBackspace);
