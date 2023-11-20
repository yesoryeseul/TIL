let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let subject = Number(input[0]); // 시험 본 과목이 개수

let score = input[1].split(' ').map(Number); // 시험 점수 배열 및 숫자


// 1. score 값 중 최댓값을 고른다 = M
// 2. 모든 점수를 value/M*100 으로 고쳐 새로운 배열 반환
// 3. 새로운 배열의 점수에서 평균을 구한다.

// 1
let M = Math.max(...score);

// 2
let newScore = score.map((value) => value / M * 100);

// 3
let sum = 0;
for(let i = 0; i < newScore.length; i++) {
  sum += newScore[i];
}
let avg = sum / newScore.length;
console.log(avg);

