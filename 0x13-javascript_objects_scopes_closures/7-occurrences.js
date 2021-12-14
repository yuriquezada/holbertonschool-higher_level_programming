#!/usr/bin/node

exports.nbOccurences = (list, searchElement) => {
  const number = list.filter(element => element === searchElement).length;
  return number;
}
