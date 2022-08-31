const fibonacci = function (int) {
// Dealing with negative numbers
  if (int <= -1) {
    return "OOPS";
// if sequence number is <= 2 then return 1 (there are two 1s in fibonacci)
  } else if (int <= 2) {
    return 1;
  } else {
    return fibonacci(int - 1) + fibonacci(int - 2);
  }
};
// Do not edit below this line
module.exports = fibonacci;