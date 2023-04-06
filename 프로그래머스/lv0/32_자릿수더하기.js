/*
자릿수 더하기
문제 설명
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

입출력 예
n	result
1234	10
930211	16
입출력 예 설명

입출력 예 #1
1 + 2 + 3 + 4 = 10을 return합니다.

입출력 예 #2
9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.
*/

/*
반복문
n % 10 한 값을 answer += (n % 10) 누적 연산
Math.floor(n / 10) 하여 n의 값 자릿수 줄여주기
*/

function solution(n) {
  let answer = 0;
  while(n > 0) {
    answer += (n % 10);
    n = Math.floor(n/10);
  }
  return answer;
}

// refactoring 1
// n 을 String 변환하여 split으로 잘라준 뒤 reduce로 누적연산
// function solution(n) {
//   return n.toString().split("").reduce((acc, cur) => acc + Number(cur), 0)
// }

console.log(solution(1234)) // 10
console.log(solution(930211)) // 16