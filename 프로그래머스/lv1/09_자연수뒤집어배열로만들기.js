/*
자연수 뒤집어 배열로 만들기

문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.


입출력 예
n	     return
12345	[5,4,3,2,1]
*/

// 1. 자연수를 문자로 변환하여 잘라 역순으로 돌려준 뒤 다시 숫자로 형변환하는 풀이
function solution(n) {
  return String(n).split("").reverse().map((v) => parseInt(v));
}

// 2. 새로운 배열에 push하는 방법
function solution(n) {
  let answer = [];
  let stn = n.toString();
  for(let i = stn.length-1; i >= 0; i--) {
    answer.push(Number(stn[i]));
  }
  return answer;
}

// 3. 자연수 형변환 없이 %, / 연산자 이용하여 반복 돌려 추가
function solution(n) {
  let answer = [];
  while(n > 0) {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
}

console.log(solution(12345)); // [5, 4, 3, 2, 1]