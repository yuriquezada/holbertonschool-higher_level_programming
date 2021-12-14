#!/usr/bin/node
const count = process.argv;
console.log(!count[2] ? 'No argument' : count[2]);
