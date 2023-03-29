// 몫 구하기
// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

// 입출력 예 설명
// 입출력 예 #1

// num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.
// 입출력 예 #2

// num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.

// 내 풀이
// function solution(num1, num2) {
//   if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
//     var answer = Math.floor(num1 / num2);
//     return answer;
//   }
// }

// 다른 사람 풀이 1(* parseInt 사용)
// function solution(num1, num2) {
//   return parseInt(num1 / num2);
// }

// 다른 사람 풀이 2(* 코드 깔끔 참고!, 화살표 연산자)
const solution = (num1, num2) => Math.floor(num1 / num2);

// 디버깅
console.log(solution(10, 5));
console.log(solution(7, 2));
