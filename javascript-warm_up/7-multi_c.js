#!/usr/bin/node
const arg = process.argv;
const cnv = Number(arg[2]);
if (cnv) {
  for (let i = 0; i < cnv; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
