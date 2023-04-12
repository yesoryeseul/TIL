/*
두 정수 사이의 합

문제 설명

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.

입출력 예
a	b	return
3	5	12
3	3	3
5	3	12
*/

/*
a === b이면 a를 리턴
그게 아니라면 a ~ b 누적 연산
=> 이 로직 a~b까지 for문
*/

function solution(a, b) {
  let answer = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = a; i >= b; i--) {
      answer += i;
    }
  }
  return answer;
}
// 이 로직은 시간 복잡도가 좋지 않은 코드다

// refactoring Math.min과 Math.max를 써보자!
function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12
