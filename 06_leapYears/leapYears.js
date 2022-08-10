const leapYears = function (year) {
  // Split into three parts. 1) If the year is divisible by 4 = leap year AND 2) if also divisible by 100, then not a leap year OR 3) unless they're divisible by 400, making it a leap year.
  if ((year % 4 == 0 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
