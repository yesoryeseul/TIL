/*
배열 비교하기
문제 설명
이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

입출력 예
arr1	arr2	result
[49, 13]	[70, 11, 2]	-1
[100, 17, 84, 1]	[55, 12, 65, 36]	1
[1, 2, 3, 4, 5]	[3, 3, 3, 3, 3]	0
*/

function solution(arr1, arr2) {
  let sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
  let maxLength = Math.max(arr1.length, arr2.length);
  if (maxLength > arr1.length) return -1;
  if (maxLength > arr2.length) return 1;
  if (sum1 > sum2) return 1;
  if (sum1 < sum2) return -1;
  return 0;
}

// refactoring, 다른 사람의 풀이
function solution(arr1, arr2) {
  let sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
  if (sum1 === sum2) return 0;
  else if (sum1 > sum2) return 1;
  else return -1;
}

console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
