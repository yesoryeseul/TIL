/*
n 번째 원소부터
문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력 예
num_list	n	result
[2, 1, 6]	3	[6]
[5, 2, 1, 7, 5]	2	[2, 1, 7, 5]
*/

/*
num_list의 n번째 값은 num_list배열의 index - 1
*/

function solution(num_list, n) {
  return num_list.slice(n-1);
}

console.log(solution([2, 1, 6], 3))
console.log(solution([5, 2, 1, 7, 5], 2))