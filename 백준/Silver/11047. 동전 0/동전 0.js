let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
// n - 화폐 개수(반복 개수)
// k = 합
let arr = [];
for(let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let count = 0; // 동전 개수 넣을 변수
for(let i = n - 1; i >= 0; i--) {
  count += parseInt(k / arr[i]);
  k %= arr[i];
}
console.log(count)