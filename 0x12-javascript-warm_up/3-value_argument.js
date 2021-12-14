#!/usr/bin/node
const argument = process.argv;
console.log(!argument[2] ? 'No argument' : argument[2]);
