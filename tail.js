const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};
const arrayValue = [];
let j = 0;
const tail = function (arrayNumber) {

  for (let i = 1; i < arrayNumber.length; i++) {
    arrayValue[i] = arrayNumber[i];
    j++;
  }
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(arrayValue);