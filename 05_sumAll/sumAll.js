const sumAll = function (number1, number2) {
  //Check for negative parameters.
  if (number1 < 0 || number2 < 0) {
    return "ERROR";
  }
  //Check if parameters are only numbers.
  if (!(typeof number1 === "number" && typeof number2 === "number")) {
    return "ERROR";
  }

  const numbersBetween = [];
  let sum = 0;
  //Adding both parameters to empty array as they need to also be summed.
  numbersBetween.push(number1, number2);
  //Min and Max ensure the smallest parameter is always used as the starting number for the for loop.
  for (
    let i = Math.min.apply(Math, numbersBetween) + 1;
    i <= Math.max.apply(Math, numbersBetween) - 1;
    i++
  ) {
    // Saves result of for loop to array.
    numbersBetween.push(i);
  }
  // Loops over each element in the array and creates a running total that is saved in teh variable 'sum'.
  for (let i = 0; i < numbersBetween.length; i++) sum += numbersBetween[i];
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
