let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let n = Number(input[0]); // 반복 횟수
let distance = input[1].split(' ').map(Number); // 거리 배열
let cost = input[2].split(' ').map(Number); // 주유소 당 비용

// [5, 2, 4, 1] => [5, 2, 2, 1] 로 바꾸는 것!
let first = cost[0];
for(let i = 0; i < n; i++) {
  first = Math.min(first, cost[i])
  cost[i] = first;
}

// 도로당 이용합
// [2, 3, 1] => 5 * 2 + 3 * 2 + 1 * 2
let sum = BigInt(0);
for(let i = 0; i < n - 1; i++) {
  sum += BigInt(distance[i]) * BigInt(cost[i]);
}
console.log(String(sum));