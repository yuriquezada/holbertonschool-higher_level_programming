#!/usr/bin/node
const x = Math.floor(Number(process.argv[2]));
message1 = 'Missing number of occurrences';
message2 = 'C is fun'
isNaN(x) ? console.log(message1) : for (let i = 0; i < x; i++) console.log(message2);
