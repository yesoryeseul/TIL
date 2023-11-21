let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let length = Number(input[0]); // 반복할 횟수

let arr = [];
// 1 ~ length 까지 반복
for (let i = 1; i <= length; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);
let answer = '';
for(let i = 0; i < arr.length; i++) {
  answer += arr[i] + '\n';
}
console.log(answer);
