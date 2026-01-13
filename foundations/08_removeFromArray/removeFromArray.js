const removeFromArray = function(myArray, ...args) {
  let result = [];  
  for (let i = 0; i < myArray.length; i++) {
    if (!args.includes(myArray[i])) {
      result.push(myArray[i]);
    }
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
