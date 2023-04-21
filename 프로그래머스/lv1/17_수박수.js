/*
수박수박수박수박수박수?

문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

입출력 예
n	return
3	"수박수"
4	"수박수박"
*/

// 1. n이 홀수일 때 수
// 2. n이 짝수일 때 박
// 3. 누적 연산이 되어야할 것 같다

function solution(n) {
  let answer = '';
  for(let i = 1; i <= n; i++) {
    if(i % 2 === 1) answer += '수';
    else answer += '박';
  }
  return answer
}

// 다른 사람의 풀이 1. repeat, slice
const waterMelon = n => "수박".repeat(n).slice(0,n);

console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))

// 다른 사람의 풀이 2. repeat과 삼항연산자
function solution(n) {
  return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
}

console.log(solution(1)) // '수'
console.log(solution(2)) // '수박'
console.log(solution(3)) // '수박수'
console.log(solution(4)) // '수박수박'