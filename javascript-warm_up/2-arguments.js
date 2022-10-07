#!/usr/bin/node
const arg = process.argv;
if (arg.length === 3) {
  console.log('Argument detected');
} else if (arg.length > 3) {
  console.log('Arguments detected');
} else {
  console.log('No argument detected');
}
