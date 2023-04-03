/*
피자 나눠 먹기 (1)
문제 설명
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

입출력 예
n	result
7	1
1	1
15	3

입출력 예 설명

입출력 예 #1
7명이 최소 한 조각씩 먹기 위해서 최소 1판이 필요합니다.

입출력 예 #2
1명은 최소 한 조각을 먹기 위해 1판이 필요합니다.

입출력 예 #3
15명이 최소 한 조각씩 먹기 위해서 최소 3판이 필요합니다.

로직 설계
- 몫이 7개당 1판 -> (n / 7) 의 조건에서 소수점 결과를 무조건 올림해주어야함 -> Math.ceil
*/

function solution(n) {
  return Math.ceil(n / 7);
}

console.log(solution(7));
console.log(solution(1));
console.log(solution(15));

// 화살표 함수 써보기
const solution1 = (n) => Math.ceil(n / 7);

console.log(solution1(7));
console.log(solution1(1));
console.log(solution1(15));

// 삼항 연산자 써보기
function solution2(n) {
  return n / 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}

console.log(solution2(7));
console.log(solution2(1));
console.log(solution2(15));
