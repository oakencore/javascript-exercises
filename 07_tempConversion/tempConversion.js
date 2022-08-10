const ftoc = function (temp) {
  c = (5/9) * (temp - 32)
  return Number(c.toFixed(1))
  // toFixed returns a string representation of numObj. Number() is needed to convert it to an int. 
};



const ctof = function (temp) {
  f = temp * 9 / 5 + 32
  return Number(f.toFixed(1))
};
console.log(ftoc(-100));
console.log(ctof(-10));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
