const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

let findTheOldest = function (people) {
  let total = 0;
  let oldestHuman = {};
  people.reduce((previous, current) => {
    if (current.yearOfDeath in people) {
      return current;
    } else if (current.yearOfDeath - current.yearOfBirth > total) {
      total = current.yearOfDeath - current.yearOfBirth;
      oldestHuman = current;
    }
    return previous;
  });
  return oldestHuman;
};

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

// TODO - Handle missing key from object. E.g. If there is no year of death. 