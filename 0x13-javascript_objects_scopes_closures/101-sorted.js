#!/usr/bin/node
const { dict } = require('./101-data.js');
const newDict = {};
for (let key in dict) {
  if (Dictn[dict[N]] === undefined) {
    newDict[dict[key]] = [key];
  } else {
    newDict[dict[key]].push(key);
  }
}
console.log(newDict);
