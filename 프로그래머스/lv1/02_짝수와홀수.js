/*
짝수와 홀수
문제 설명
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

제한 조건
num은 int 범위의 정수입니다.
0은 짝수입니다.

입출력 예
num	return
3	"Odd"
4	"Even"
*/

/*
1. 짝수와 홀수 조건 num % 2 === 0 인 경우 'Even', else로 'Odd'
2. if...else
3. 삼항연산자
*/

function solution(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

// 2. if...else
// function solution(num) {
//   if(num % 2) return 'Odd';
//   else return 'Even';
// }

console.log(solution(3)) // Odd
console.log(solution(4)) // Even