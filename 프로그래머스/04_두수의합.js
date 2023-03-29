/*
두 수의 합
문제 설명
정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.

제한사항
-50,000 ≤ num1 ≤ 50,000
-50,000 ≤ num2 ≤ 50,000

입출력 예 설명
입출력 예 #1

num1이 2이고 num2가 3이므로 2 + 3 = 5를 return합니다.
입출력 예 #2

num1이 100이고 num2가 2이므로 100 + 2 = 102를 return합니다.
*/

// 기본 풀이
// function solution(num1, num2) {
//   var answer = num1 + num2;
//   return answer;
// }

// 화살표 함수 이용
const solution = (num1, num2) => num1 + num2;
console.log(solution(2, 3));
console.log(solution(100, 2));
