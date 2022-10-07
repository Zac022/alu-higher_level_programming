

#!/usr/bin/node
let output;
const arg = process.argv;
const cnv = Number(arg[2]);
if (cnv) {
  for (let a = 0; a < cnv; a++) {
    output = '';
    for (let b = 0; b < cnv; b++) {
      output += 'X';
    }
    console.log(output);
  }
} else {
  console.log('Missing size');
}
