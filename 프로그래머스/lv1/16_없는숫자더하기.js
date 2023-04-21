/*
없는 숫자 더하기

문제 설명
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

입출력 예
numbers	result
[1,2,3,4,6,7,8,0]	14
[5,8,4,0,6,7,9]	6

입출력 예 설명

입출력 예 #1
5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

입출력 예 #2
1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
*/

// 0 ~ 9  numbers를 비교하여 없는 값만 누적연산

function solution(numbers) {
  let answer = 0;
  for(let i = 0; i < 10; i++) {
    if(!numbers.includes(i)) answer += i;
  }
  return answer
}

// 다른 사람의 풀이
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

console.log(solution([1,2,3,4,6,7,8,0])) // 14
console.log(solution([5,8,4,0,6,7,9])) // 6