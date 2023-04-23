/*
정수 부분
문제 설명
실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

입출력 예
flo	result
1.42	1
69.32	69
*/


// Math.floor 내림
function solution(flo) {
  return Math.floor(flo);
}

// 다른 사람의 풀이
// Math.trunc 소수점 이하는 버림
function solution(flo) {
  return Math.trunc(flo);
}

// 정수 반환
function solution(flo) {
  return parseInt(flo);
}

// 재밌는 풀이
function solution(flo) {
  return parseInt(String(flo).split('.')[0]);
}

console.log(solution(1.42))
console.log(solution(69.32))