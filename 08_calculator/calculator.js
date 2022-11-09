const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(items) {
	sumArray = items.reduce((total, item) => total + item, 0);
  return(sumArray);
};

const multiply = function(items) {
	multiplyArray = items.reduce((total, item) => total * item, 1); // starts at one so that multiplication works
  return(multiplyArray);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {

  if (num === 0 || num === 1) {
    num = 1;
  } else {

    for (let i = num; i > 1; i--) {
      num = num * (i - 1);
    }
  }
  return num;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
