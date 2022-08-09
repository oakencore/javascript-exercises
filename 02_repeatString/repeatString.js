const repeatString = function (string, number) {
  if (number > 0) {
    return string.repeat(number);
  } else if (number <= -1) {
    return "ERROR";
  }else if (number == 0 ){
    return "";
  }
};

// Do not edit below this line
module.exports = repeatString;
