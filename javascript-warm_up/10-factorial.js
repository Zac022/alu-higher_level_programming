#!/usr/bin/node
const arg = process.argv;
const con1 = Number(arg[2]);

function factorial (n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

if (con1) {
  console.log(factorial(con1));
} else {
  console.log(1);
}
