let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[0].split(' ').map(Number);

const sorting = arr.sort((a, b) => a - b);

let answer = '';
for(let i = 0; i < arr.length; i++) {
  answer += sorting[i] + ' ';
}
console.log(answer)