let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]); // 점의 개수

let arr = [];

// 2차원 배열 만들기
for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(' ').map(Number); // 구조 분해 할당
  arr.push([x, y])
}

function compare (a, b) {
  if(a[1] != b[1]) return a[1]- b[1]; // y좌표 오름차순
  else return a[0]- b[0]; // x좌표 오름차순
}

arr.sort(compare);

let answer = '';
for(let value of arr) {
  answer += value[0] + ' ' + value[1] + '\n';
}
console.log(answer);