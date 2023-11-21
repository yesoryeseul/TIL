let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const FIRSTLINE = input[0].split(' ').map(Number)
const [x, y] = FIRSTLINE;
const arr = input[1].split(' ').map(Number); // 정렬할 배열
arr.sort((a, b) => a - b); // [ 1, 2, 3, 4, 5 ]
// n번째 수 구하기
console.log(arr[y - 1]);