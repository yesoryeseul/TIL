/*
정수 내림차순으로 배치하기

문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

입출력 예
n	return
118372	873211
*/

// 내가 한 풀이(문자 풀이)
function solution(n) {
  let answer = String(n).split("").sort((a, b) => b - a).join("");
  return Number(answer);
}

// refactoring(다른 사람 풀이)
// 숫자로 풀어보자
function solution(n) {
  let answer = [];
  do {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  } while(n > 0)
  return answer.sort((a, b) => b - a).join("")*1;
}

console.log(solution(118372)) // 873211