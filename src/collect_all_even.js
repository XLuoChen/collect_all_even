'use strict';

function collect_all_even(collection) {

  var evenArray = [];

  collection.forEach(function (element) {
    if (isEven(element)) {
      evenArray.push(element);
    }
  });

  return evenArray;
}

function isEven(element) {

  if (element % 2 === 0) {
    return true;
  }
}

module.exports = collect_all_even;
