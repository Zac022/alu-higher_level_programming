#!/usr/bin/node
const arg = process.argv;
const con1 = Number(arg[2]);
const con2 = Number(arg[3]);
let bigSoFar = con1;
let secondlargest = con2;
if (arg.length <= 3) {
  console.log(0);
} else {
  for (let i = 3; i < arg.length; i++) {
    if (Number(arg[i]) > bigSoFar) {
      secondlargest = bigSoFar;
      bigSoFar = Number(arg[i]);
    }
    if (Number(arg[i]) > secondlargest && Number(arg[i]) < bigSoFar) {
      secondlargest = Number(arg[i]);
    }
  }
  console.log(secondlargest);
}
