/*
원소들의 곱과 합
문제 설명
정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

입출력 예
num_list	result
[3, 4, 5, 2, 1]	1
[5, 7, 8, 3]	0
*/

// 1. 모든 원소들의 곱
// 2. 모든 원소들의 합
// 3. 모든 원소들의 곱 < 모든 원소들의 합 ** 모든 원소들의 합 ? 1 : 0

function solution(num_list) {
  let multi = num_list.reduce((a, c) => a * c, 1);
  let sum = num_list.reduce((a, c) => a + c, 0);

  return multi < sum**2 ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]))
console.log(solution([5, 7, 8, 3]))