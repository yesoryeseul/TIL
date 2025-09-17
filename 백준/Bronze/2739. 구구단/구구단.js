let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const dan = input[0];
const Numdan = Number(dan);

for(let i = 1; i <= 9; i++) {
  console.log(`${Numdan} * ${i} =`, Numdan * i);
}