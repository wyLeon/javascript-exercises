// Method 1 :const reverseString = function(word) {
//  let myArray = word.split("");
//  myArray.reverse();
//  return myArray.join("");
// };

// Do not edit below this line
const reverseString = function(text) {
  let string = ''; 
  for (let i = text.length - 1; i >= 0; i--) {
    string += text[i]
    }
    return string
}

module.exports = reverseString;
