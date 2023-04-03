/*
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 1,000
1 ≤ numbers의 길이 ≤ 100
정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

입출력 예
numbers	result
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	5.5
[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	94.0

입출력 예 설명

입출력 예 #1
numbers의 원소들의 평균 값은 5.5입니다.

입출력 예 #2
numbers의 원소들의 평균 값은 94.0입니다.
*/

// 1. 정수 배열 numbers를 선언
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbers = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

// 기본 풀이 for문
// function solution(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }

// for...of
// function solution(numbers) {
//   let sum = 0;
//   for (number of numbers) {
//     sum += number;
//   }
//   return sum / numbers.length;
// }

// reduce 메서드 사용
// const solution = (numbers) => numbers.reduce((a, c) => a + c) / numbers.length;

function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  var an = answer.toFixed(1);
  return an;
}

// 스프레드로 배열 사용
// function solution(numbers) {
//   var answer = 0;
//   answer = [...numbers].reduce((acc, cur) => (acc += cur), 0) / numbers.length;
//   return answer;
// }

// 디버깅
console.log(solution(numbers));
