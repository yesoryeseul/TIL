/*
배열 만들기 1
문제 설명
정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

입출력 예
n	k	result
10	3	[3, 6, 9]
15	5	[5, 10, 15]
*/

function solution(n, k) {
  var answer = [];
  for(let i = 1; i <= n; i++) {
    if(i % k === 0) answer.push(i);
  }
  return answer;
}

// 배열로 채워서 filter한다면?
function solution(n, k) {
  return Array(n).fill(1).map((v, i) => v + i).filter(v => v % k === 0);
}

console.log(solution(10, 3))
console.log(solution(15, 5))