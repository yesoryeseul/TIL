let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 최대 사용할 수 있는 회의의 최대 개수

let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number));

arr.sort((a, b) => {
  if(a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 1, cur = 0; // 첫 번째 회의부터 확인
for(let i = 1; i < n; i++) {
  if(arr[cur][1] <= arr[i][0]) { // 현재 회의가 끝난 이후에 회의가 시작되는 경우만 카운트
    cur = i;
    cnt += 1;
  }
}

console.log(cnt)