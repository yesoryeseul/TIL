/*
조건에 맞게 수열 변환하기 3
문제 설명
정수 배열 arr와 자연수 k가 주어집니다.

만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.

이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

입출력 예
arr	k	result
[1, 2, 3, 100, 99, 98]	3	[3, 6, 9, 300, 297, 294]
[1, 2, 3, 100, 99, 98]	2	[3, 4, 5, 102, 101, 100]
*/

/*
각 조건에 따라 새로운 배열 반환 -> map, for
*/

function solution(arr, k) {
  return arr.map((v) => {
    if(k % 2 === 1)  return v * k;
    else return v + k;
  })
}

// for...of로 풀었을 때 시간복잡도가 더 크다
function solution(arr, k) {
  let answer = []
  for(let el of arr) {
    if(k % 2 === 1)answer.push(el*k);
    else answer.push(el+k)
  }
  return answer;
}

// map에서 더 간결하게 짜는 법
function solution(arr, k) {
  return arr.map(v => k % 2 === 1 ? v * k : v + k)
}

console.log(solution([1, 2, 3, 100, 99, 98], 3)) // [3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)) // [3, 4, 5, 102, 101, 100]