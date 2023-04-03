/*
평균 구하기
문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

입출력 예
arr	return
[1,2,3,4]	2.5
[5,5]	5
*/

/*
로직
1. 배열을 순회하여 각 요소의 값을 더하고 배열의 length만큼 나눠줌
2. sum 변수, for문, reduce
*/

// 1. 일반 for문
// function solution(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum/arr.length;
// }

// 2. for of
// function solution(arr) {
//   let sum = 0;
//   for(const i of arr) {
//     sum += i;
//   }
//   return sum / arr.length;
// }


//3. reduce
function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

console.log(solution([1,2,3,4])) // 2.5
console.log(solution([5,5])) // 5