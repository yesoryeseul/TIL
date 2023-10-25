/*2의 영역
문제 설명
정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

단, arr에 2가 없는 경우 [-1]을 return 합니다.

입출력 예
arr	result
[1, 2, 1, 4, 5, 2, 9]	[2, 1, 4, 5, 2]
[1, 2, 1]	[2]
[1, 1, 1]	[-1]
[1, 2, 1, 2, 1, 10, 2, 1]	[2, 1, 2, 1, 10, 2]
*/

/* 설계
  1. arr 요소에 2가 없으면 [-1]을 얼리 리턴
  2. arr 요소에 첫번째 2가 나오는 index부터 마지막 2의 index값 찾아서 해당 값까지 리턴
 */

function solution(arr) {
  if (!arr.includes(2)) return [-1];
  return arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
