const add = function (int1, int2) {
  var answer = int1 + int2;
  return answer;
};

const subtract = function (int1, int2) {
  var answer = int1 - int2;
  return answer;
};

const sum = function (arr) {
  summed = arr.reduce((a, b) => a + b, 0);
  return summed;
};

const multiply = function (arr) {
  multiplied = arr.reduce((a, b) => a * b, 1);
  return multiplied;
};
// raises one number to the power of another number
const power = function (int1, int2) {
  return Math.pow(int1, int2);
};

const factorial = function (num) {
  let rval = 1;
  for (let i = 2; i <= num; i++) rval = rval * i;
  return rval;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
