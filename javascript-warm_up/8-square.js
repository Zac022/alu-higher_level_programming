

#!/usr/bin/node
let output;
const arg = process.argv;
const cnv = Number(arg[2]);
if (cnv) {
  for (let i = 0; i < cnv; i++) {
    output = '';
    for (let j = 0; j < cnv; j++) {
      output += 'X';
    }
    console.log(output);
  }
} else {
  console.log('Missing size');
}
