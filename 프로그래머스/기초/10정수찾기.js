/*정수 찾기

문제 설명
정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

입출력 예
num_list	n	result
[1, 2, 3, 4, 5]	3	1
[15, 98, 23, 2, 15]	20	0
*/

/*
배열에서 특정 값이 있는지 확인하는 메서드 => find, findIndex, includes
그 값이 있으면 1, 없으면 0
*/

function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}

function solution(num_list, n) {
  return num_list.find(v => v === n) ? 1 : 0;
}

function solution(num_list, n) {
  let answer = num_list.findIndex(v => v === n);
  return answer === -1 ? 0 : 1
}

// filter로도 사용 가능하다
function solution(num_list, n) {
  let answer = num_list.filter(v => v === n);
  return answer.length === 0 ? 0 : 1;
}

console.log(solution([1, 2, 3, 4, 5], 3)); // 1
console.log(solution([15, 98, 23, 2, 15], 20)); // 0