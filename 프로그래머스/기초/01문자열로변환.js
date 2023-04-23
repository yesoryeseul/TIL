/*
정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.

입출력 예
n	result
123	"123"
2573	"2573"
*/

// 내가 한 풀이
function solution(n) {
  return n.toString();
}

// 그 외 숫자를 문자열로 변환하는 다양한 방법

// 1. +""
function solution(n) {
  return n+"";
}

// 2. String()
function solution(n) {
  return String(n);
}


// 3. ${}
function solution(n) {
  return `${n}`;
}


console.log(solution(123), typeof solution(123))


// 화살표 함수 쓰고싶다면
const solution1 = (n) => n.toString();
console.log(solution1(123), typeof solution1(123))

// 이런 방법이..!
const solution2 = String
console.log(solution2(123), typeof solution2(123))

