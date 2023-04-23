/*
문자열을 정수로 변환하기
문제 설명
숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.

입출력 예
n_str	result
"10"	10
"8542"	8542
*/

// 1. Number
function solution(n_str) {
  return Number(n_str);
}

// 2. parseInt
function solution(n_str) {
  return parseInt(n_str);
}

// 3. split으로 잘라 배열 요소로 반환한 뒤 정수로 변환하기 -> 약간 굳이?
function solution(n_str) {
  return Number(n_str.split('').join(''));
}

// 4. + 기호 사용
function solution(n_str) {
  return +n_str;
}

console.log(solution("10"), typeof solution("10"));
console.log(solution("8542"), typeof solution("10"));