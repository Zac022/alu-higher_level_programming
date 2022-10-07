#!/usr/bin/node
const arg = process.argv;
const convs = Number(args[2]);
if (convs) {
  console.log(`the number: ${arg[2]}`);
} else {
  console.log('Not a number');
}
