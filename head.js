 
const head = function(actual, expected) {
  if (actual[0] === expected)
    console.log(`Assertion Passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};
head([5,6,7], 5);
head(["Hello", "Lighthouse", "Labs"], "Hello");
