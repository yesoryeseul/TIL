let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let length = Number(input[0]);
// for문을 input[1] ~ 부터 돌려야함
// 그 안에서 또 for문 돌려서 1번부터 끝까지 누적 후 / 0번 인덱스한 값이 평균,
// if(모든 i값이 > 평균)인 경우만 누적 카운트
// (누적 카운트 / 0번 인덱스 * 100).toFixed(3)

for(let i = 1; i <= length; i++) {
  // 평균 구하기 
  let data = input[i].split(' ').map(Number);
  let n = data[0]; // 0번 인덱스(나눌 개수)
  let sum = 0;
  for(let j = 1; j <= n; j++) {
    sum += data[j];
  }
  let avg = sum / n;

  // 평균보다 큰 값 카운팅
  let count = 0;
  for(let k = 1; k <= n; k++) {
    if(data[k] > avg) count++;
  }
  console.log(`${(count / n * 100).toFixed(3)}%`);
}
