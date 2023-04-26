/*
카운트 업
문제 설명
정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력 예
start	end	result
3	10	[3, 4, 5, 6, 7, 8, 9, 10]
*/

function solution(start, end) {
  var answer = [];
  for(let i = start; i <= end; i++) {
    answer.push(i)
  }
  return answer;
}

// Array.from으로 채워보자
function solution(start, end) {
  return Array.from({length: end-start+1}, () => start++)
}

// Array와 fill로 채워보자
function solution(start, end) {
  return Array(end - start + 1).fill(start).map((v, i) => v+i)
}

console.log(solution(3, 10))