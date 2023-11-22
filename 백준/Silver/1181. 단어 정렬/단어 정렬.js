let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]); // 단어의 개수

let arr = [];
for(let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

// 중복 제거
arr = [...new Set(arr)];

arr.sort((a, b) => {
  // 길이순 정렬
  if(a.length !== b.length) return a.length - b.length;
  // 길이가 같다면 오름차순
  else {
    if(a < b) return -1;
    else if(a > b) return 1;
    else return 0;
  } 
});

// 2번 솔루션
// arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

arr.forEach(val => console.log(val));

