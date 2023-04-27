/*
홀짝에 따라 다른 값 반환하기

문제 설명
양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

입출력 예
n	result
7	16
10	220
*/

/*
n % 2 === 1 ? 1 ~ n +++ : 1*** n
*/

function solution(n) {
  let sum = 0;
  let mul = 0;
  var answer = 0;
  for(let i = 1; i <= n; i++) {
    if(i % 2 === 1) answer = sum += i;
    else if(i % 2 === 0) answer = mul += i**2;
  }
  return answer;
}

console.log(solution(7))
console.log(solution(10))