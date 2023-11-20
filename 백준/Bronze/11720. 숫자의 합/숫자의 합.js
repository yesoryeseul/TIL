let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 갯수

let arr = input[1].split('').map(Number);

let sum = arr.reduce((acc, cur) => acc + cur);
console.log(sum);
