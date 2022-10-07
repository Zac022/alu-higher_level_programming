#!/usr/bin/node
const arg= process.argv;
const con1 = Number(arg[2]);
const con2 = Number(arg[3]);

function add (a, b) {
  console.log(a + b);
}

if (con1 && con2) {
  add(con1, con2);
} else {
  console.log('NaN');
}
