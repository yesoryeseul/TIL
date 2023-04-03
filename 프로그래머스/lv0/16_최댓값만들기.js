/*
최댓값 만들기 (1)
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

입출력 예
numbers	result
[1, 2, 3, 4, 5]	20
[0, 31, 24, 10, 1, 9]	744

입출력 예 설명

입출력 예 #1
두 수의 곱중 최댓값은 4 * 5 = 20 입니다.

입출력 예 #1
두 수의 곱중 최댓값은 31 * 24 = 744 입니다.

로직 설계
1. 내림차순 정렬
2. 앞에 두 인덱스를 곱하는 연산
*/

function solution(numbers) {
  let a = numbers.sort(function (a, b) {
    return b - a;
  });
  return a[0] * a[1];
}

console.log(solution([1, 2, 3, 4, 5]));

// 좀 더 간결하게 리팩토링 해보자!

// 1. 변수에 굳이 담지 않아도 된다!
function solution1(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0] * numbers[1];
}

// 2. 화살표 함수 사용
function solution2(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
