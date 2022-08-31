const palindromes = function (palindrome) {
  var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~/\s/g, '']/g;
  // Regex to remove punctuation and spaces

  const textArray = palindrome
    .toString()
    .toLowerCase()
    .replace(regex, "")
    .split("");
// converts to string, makes it lowercase, applies regex and splits...i.e. method to split into array of substrings.

  const textReverse = [...textArray].reverse();
// [...textArray] is important because without it, the .reverse() method will mutate the original array.
  return textReverse.join('') === textArray.join('');
  // return a boolean when comparing the two. .join() method turns the arrays into strings. 
};

//console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;

 