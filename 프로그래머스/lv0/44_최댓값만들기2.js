/*
최댓값 만들기 (2)

문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

입출력 예
numbers	result
[1, 2, -3, 4, -5]	15
[0, -31, 24, 10, 1, 9]	240
[10, 20, 30, 5, 5, 20, 5]	600

입출력 예 설명

입출력 예 #1
두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.

입출력 예 #2
두 수의 곱중 최댓값은 10 * 24 = 240 입니다.

입출력 예 #3
두 수의 곱중 최댓값은 20 * 30 = 600 입니다.
*/

/*
배열의 두개 곱이 최댓값인 로직 찾기.. 
*/
function solution(numbers) {
  let max = numbers[0] * numbers[1];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] * numbers[j];
      if (max < sum) max = sum;
    }
  }
  return max;
}

console.log(solution([1, 2, -3, 4, -5])); // 15
console.log(solution([0, -31, 24, 10, 1, 9])); // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); // 600

// 다른 사람의 풀이
function solution(numbers) {
  const N = numbers.length;

  numbers.sort((a, b) => a - b); // 오름차순 정렬
  return Math.max(numbers[N - 1] * numbers[N - 2], numbers[0] * numbers[1]);
}
