/*
마지막 두 원소
문제 설명
정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

입출력 예
num_list	result
[2, 1, 6]	[2, 1, 6, 5]
[5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]
*/

function solution(num_list) {
  if (num_list.at(-1) > num_list.at(-2))
    num_list.push(num_list.at(-1) - num_list.at(-2));
  else num_list.push(num_list.at(-1) * 2);
  return num_list;
}

// 다른 사람의 풀이, 구조분해 할당
function solution(num_list) {
  const [a, b] = [...num_list].reverse(); // 배열의 마지막 두 요소를 가져와서 a와 b에 할당. reverse() 메소드는 배열을 역순으로 뒤집으므로, 마지막 요소가 첫 번째로 오게 됩니다.
  return [...num_list, a > b ? a - b : a * 2];
}

console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));
