/*
배열의 길이에 따라 다른 연산하기
문제 설명
정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
arr	n	result
[49, 12, 100, 276, 33]	27	[76, 12, 127, 276, 60]
[444, 555, 666, 777]	100	[444, 655, 666, 877]
*/

/*
arr.length - 홀수일 때 index 짝수 인 요소에만 +n
*/

function solution(arr, n) {
  return arr.map((v, i, arr) => {
    if(arr.length % 2 === 1) {
      if(i%2 === 0) return v + n;
      else return v;
    } else if(arr.length % 2 === 0) {
      if(i % 2 === 1) return v + n;
      else return v;
    }
  });
}

// refactoring 다른 사람의 풀이, ^ 비트 연산자(XOR)
function solution(arr, n) {
  return arr.map((v, i) => arr.length % 2 ^ i % 2 ? v + n : v)
}

console.log(solution([49, 12, 100, 276, 33], 27))
console.log(solution([444, 555, 666, 777], 100))