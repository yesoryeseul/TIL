/*
카운트 다운

문제 설명
정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력 예
start	end	result
10	3	[10, 9, 8, 7, 6, 5, 4, 3]
*/

// answer에 start부터 푸쉬, 3까지

function solution(start, end) {
  var answer = [];
  for(let i = start; i >= end; i--) {
    answer.push(i);
  }
  return answer;
}

// 다른 사람의 풀이, Array, fill
function solution(start, end) {
  return Array(start - end + 1).fill(start).map((v, i) => v - i)
}

console.log(solution(10, 3)) // [10, 9, 8, 7, 6, 5, 4, 3]