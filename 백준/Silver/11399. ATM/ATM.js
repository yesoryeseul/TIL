let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 사람의 수
let people = input[1].split(' ').map(Number);
people.sort((a, b) => a - b);

let answer = 0;
let sum = 0;
for(let i = 0; i < n; i++) {
  sum += people[i]; // i번 사람이 기다린 누적 시간
  answer += sum;
}
console.log(answer)