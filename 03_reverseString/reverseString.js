const reverseString = function (string) {
  // Create an array using each character of the string.
  let stringArray = string.split('')
  let arr = []
  // Reverse for loop over array.
  for (let i = stringArray.length -1; i >= 0; i--) {
    arr.push(stringArray[i])
  }
  removeCommas = arr.join("")
  return removeCommas.toString()
}

// Do not edit below this line
module.exports = reverseString;