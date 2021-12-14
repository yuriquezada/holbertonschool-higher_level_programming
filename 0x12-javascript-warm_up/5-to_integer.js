#!/usr/bin/node
const arg = process.argv;
console.log(!arg[2] ? 'No argument' : isNaN(parseInt(arg[2])) ? 'Not a number' : parseInt(arg[2]));
