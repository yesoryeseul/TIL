/*
제곱수 판별하기
문제 설명
어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

입출력 예
n	result
144	1
976	2

입출력 예 설명

입출력 예 #1
144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.

입출력 예 #2
976은 제곱수가 아닙니다. 따라서 2를 return합니다.
*/

/*
m*m = n 이면 1 출력 아니면 2 출력
삼항 연산자
제곱수 Math.sqrt
*/

function solution(n) {
  return n % Math.sqrt(n) === 0 ? 1 : 2;
}

// refactoring
// 정수 판별 메서드 Number.isInteger()
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}



// console.log(Math.sqrt(144)) // 디버깅, 12
// console.log(Math.sqrt(976)) // 디버깅, 31.240998...
console.log(solution(144));
console.log(solution(976));