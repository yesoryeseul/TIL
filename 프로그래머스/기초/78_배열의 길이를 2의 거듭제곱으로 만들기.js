/*배열의 길이를 2의 거듭제곱으로 만들기
문제 설명
정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
arr	result
[1, 2, 3, 4, 5, 6]	[1, 2, 3, 4, 5, 6, 0, 0]
[58, 172, 746, 89]	[58, 172, 746, 89]
*/

// arr 배열의 length를 2의 거듭제곱으로 반환하되 최소 거듭 제곱으로 반환할 것
// 추가되는 길이는 0으로 채울 것

function solution(arr) {
  let a = 1;
  // 최소 거듭제곱 갯수를 배열 갯수로 만들기
  while (a < arr.length) {
    a *= 2;
  }
  // 추가 길이 0으로 채움
  while (arr.length < a) {
    arr.push(0);
  }
  return arr;
}

// 다른 사람의 풀이 Math.ceil, Math.log2 활용하기!
function solution(arr) {
  let totalLength = 2 ** Math.ceil(Math.log2(arr.length));
  return [...arr, ...new Array(totalLength - arr.length).fill(0)];
}
