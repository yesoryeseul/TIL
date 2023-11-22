let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let arr = input[0].split('').map(Number); // 배열화
arr.sort((a, b) => b - a);
console.log(Number(arr.join('')));