#!/usr/bin/node
const arg = process.argv;
const cnv = Number(arg[2]);
if (cnv) {
  console.log(`My number: ${arg[2]}`);
} else {
  console.log('Not a number');
}
