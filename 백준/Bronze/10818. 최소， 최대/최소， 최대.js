let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(Number);
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min + ' ' + max);