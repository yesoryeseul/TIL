// 내 풀이
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [x, y] = input[0].split(' ');

const A = Number(x.split('').reverse().join(''));
const B = Number(y.split('').reverse().join(''));

console.log(Math.max(A, B));

// 다른 풀이
// let a = input[0].split(' ')[0];
// let b = input[0].split(' ')[1];
// let newA = a[2] + a[1] + a[0];
// let newB = b[2] + b[1] + b[0];
// console.log(Math.max(Number(newA), Number(newB)));