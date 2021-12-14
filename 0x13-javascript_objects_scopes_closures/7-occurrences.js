#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  const number = list.filter(element => element === searchElement).length;
  return number;
}
