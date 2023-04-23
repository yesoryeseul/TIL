/*
공배수

문제 설명
정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

입출력 예
number	n	m	result
60	2	3	1
55	10	5	0
*/

/*
1. 배수 조건은 나머지 % 연산자를 써야겠지
2. 조건 이면서 > && 조건 이겠지?
3. 삼항 연산자나 if..else 써야겠지?
4. number가 0일때 1이 나오므로 0으로 리턴하는 로직이 필요!
*/
function solution(number, n, m) {
  if(number === 0) return 0;
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

// 코드를 더 간결하게 줄여보자!
// refactoring 다른 사람의 풀이
function solution(number, n, m) {
  return !(number % n) && !(number % m) ? 1 : 0;
}

function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0 : 0;
}

console.log(solution(60, 2, 3))
console.log(solution(55, 10, 5))
console.log(solution(0, 10, 5))