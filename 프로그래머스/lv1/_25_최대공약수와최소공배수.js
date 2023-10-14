/*

최대공약수와 최소공배수
문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

입출력 예
n	m	return
3	12	[3, 12]
2	5	[1, 10]

*/
// 1. 최대공약수, 최소공배수를 구하는 로직
function solution(n, m) {
  let gcd = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }

  let lcm = 1;
  while (true) {
    if (lcm % n === 0 && lcm % m === 0) {
      break;
    }
    lcm++;
  }
  return [gcd, lcm];
}

// 2. 유클리드 호제법
/*
기본 원리 n을 m으로 나눈 나머지를 r이라고 했을 때,
GCD(n, m) = GCD(m, r) 이라는 것
r이 0이라면, 그 때의 m이 최대 공약수이다
n = 24, m = 16을 가정하면, 
let getGCD = (n, m) => (m > 0 ? getGCD(m, n % m) : n);
m이 0보다 작아질 때까지 재귀함수로 접근하고 m이 0이 될 때 최종 n의 값이 최대 공약수가 된다.

*/

function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
console.log(solution(4, 2));
