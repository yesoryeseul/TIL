/*
n의 배수
문제 설명
정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

입출력 예
num	n	result
98	2	1
34	3	0
*/

/*
1. num % n === 0 ? 1 : 0
2. if...else 또는 삼항 연산자 쓰면 된다.

* 만약 num의 조건 범위가 0을 포함한다면? num 0일때 고려하자! 얘는 0이 나와야한다
*/

function solution(num, n) {
  return num % n === 0 ? 1 : 0;
}

// 조금 더 간결하게 보자면?
function solution(num, n) {
  return num % n ? 1 : 0;
}

// if...else로 써보자
function solution(num, n) {
  if (num % n === 0) return 1;
  else return 0;
}

function solution(num, n) {
  if (!(num % n)) return 1;
  else return 0;
}

console.log(solution(98, 2)) // 1
console.log(solution(34, 3)) // 0