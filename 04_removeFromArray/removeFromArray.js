const removeFromArray = function (arr, ...args) {
  const itemsToFilter = arr;
  const itemsToRemove = args;
  // Check to see what arr and args are
  console.log(itemsToFilter);
  console.log(itemsToRemove);

  const filteredItems = itemsToFilter.filter(
    (item) => itemsToRemove.indexOf(item) === -1
  );
  console.log(filteredItems);
  return filteredItems;
};

//console.log(removeFromArray([1, 2, 3, 4, 4,5,3,2,1,2,3,5,4,3,4,4,4], 4,2,1,3,5));

// Do not edit below this line
module.exports = removeFromArray;

// One way that solves this could be this function. However, it does not allow for multiple items.
// const removeFromArray = function (arr, item) {
//   var i = 0;
//   while (i < arr.length) {
//     if (arr[i] === item) {
//       arr.splice(i, 1);
//     } else {
//       ++i;
//       console.log(i);
//     }
//   }
//   return arr;
// };
