/*연속된 수의 합
문제 설명
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

입출력 예
num	total	result
3	12	[3, 4, 5]
5	15	[1, 2, 3, 4, 5]
4	14	[2, 3, 4, 5]
5	5	[-1, 0, 1, 2, 3]
입출력 예 설명
*/
// x라는 시작 값이 있고 x가 +1씩 증가하되 length가 num인 배열 생성 let arr = [n, n+1, n+2]
// arr.reduce((acc, cur) => acc + cur, 0) 값이 total인 것

/*
1. 초기값 구하는 로직
중간값 total / num
Math.floor(num / 2)
Math.ceil(total / num - Math.floor(num / 2))

2. 초기값을 +1씩 증가하는 배열 생성, length는 num
*/

function solution(num, total) {
  let firstNumber = Math.ceil(total / num - Math.floor(num / 2));
  return Array.from({ length: num }, (_, i) => i + firstNumber);
}
