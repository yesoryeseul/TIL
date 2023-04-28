/*
조건에 맞게 수열 변환하기 1

문제 설명
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

입출력 예
arr	result
[1, 2, 3, 100, 99, 98]	[2, 2, 6, 50, 99, 49]
*/

/* map으로 삼항연산자 */

function solution(arr) {
  return arr.map((v) => {
    if(v >= 50 && v % 2 === 0) {
      return v / 2;
    } else if(v < 50 && v % 2 === 1) {
      return v * 2;
    } else return v;
  });
}

// 다른 사람의 풀이, 중첩삼항연산자
function solution(arr) {
  return arr.map((n) => n >= 50 && !(n % 2) ? n / 2 : n < 50 && n % 2 ? n * 2 : n);
}

console.log(solution([1, 2, 3, 100, 99, 98]))
