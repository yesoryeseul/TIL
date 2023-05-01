/*
n개 간격의 원소들
문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력 예
num_list	n	result
[4, 2, 6, 1, 7, 6]	2	[4, 6, 7]
[4, 2, 6, 1, 7, 6]	4	[4, 7]
*/

/*
num_list 배열을 순회하여 첫번째 요소의 인덱스의 +n 간격의 요소만 뽑아내자
*/

function solution(num_list, n) {
  return num_list.filter((_, i) => !(i % n));
}

console.log(solution([4, 2, 6, 1, 7, 6], 2));
console.log(solution([4, 2, 6, 1, 7, 6], 4));
