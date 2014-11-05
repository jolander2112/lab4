// Explicitly require lodash lib
var _ = require("lodash"),
  exercises = {};

// 8 points
// this function takes a variable number of string arguments
// use the arguments keyword as well as the _.each() method from
// lodash to return the first string containing the substring
// "waldo"
exercises.wheresWaldo = function() {
  // TODO: implement me
  var foundString;

  _.each(arguments, function(val, index) {
    if (val.indexOf("waldo") > -1) {
      foundString = val;
    }
  });

  return foundString;
};

// 8 points
// given an array of arrays (all holding numbers), return an
// array holding the largest number in each sub-array.
// use _.chain() and _.map() and _.max()
exercises.largestNums = function(arrayOfNumberArrays) {
  // TODO: implement me
  var largestArray = [],
    curVal;

  _.map(arrayOfNumberArrays, function(val) {
    _.chain(val).map(function(val) {
    }).value();

    curVal = _.chain(val).max().value();
    largestArray.push(curVal);
  });

  return largestArray;
};

// 8 points
// you are given an array of Date objects and two boundary dates
// use the lodash _.filter() method to return an array with all
// the objects from dates that fit within the given boundaries
exercises.filterDates = function(dates, lowerBound, upperBound) {
  // TODO: implement me
  var boundDates = [],
    myDates;

  myDates = _.filter(dates, function(date) {
    if (date > lowerBound && date < upperBound) {
      boundDates.push(date);
    }
  });

  return boundDates;
};

// 16 points (including the test)
// make up your own exercise like those above. implement it and
// write a test for it in tests/functional.spec.js.
// for 4 extra credit points, use _.reduce()
// exercises.TODO = function(array) {
// };
exercises.reducePrices = function(prices) {

  var mySum;

  mySum = _.reduce(prices, function(sum, num) {
    return sum + num;
  });

  return mySum.toFixed(2);
};

module.exports = exercises;
