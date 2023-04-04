/*
아이스 아메리카노

문제 설명
머쓱이는 추운 날에도 아이스 아메리카노만 마십니다.
아이스 아메리카노는 한잔에 5,500원입니다.
머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

입출력 예
money	result
5,500	[1, 0]
15,000	[2, 4000]

입출력 예 설명

입출력 예 #1
5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.

입출력 예 #2
15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다.
*/
/*
1. 배열의 첫번 째 요소 값 : Math.floor(money / 5500)
2. 배열의 두번 째 요소 값 : 거스름돈
3. 거스름돈 계산식
  - 거스름돈 변수 let change = 0;
  change = money - 5500*first
*/

// 내가 풀이한 방식
// function solution(money) {
//   return [
//     Math.floor(money / 5500),
//     money - 5500*Math.floor(money / 5500)
//   ];
// }

// 다른 풀이 1. 나머지
function solution(money) {
  return [
    Math.floor(money / 5500),
    money % 5500
  ];
}
// 다른 풀이 2.새로운 배열에 담아 배열 리턴
function solution(money) {
  let answer = [];

  answer.push(parseInt(money/5500));
  answer.push(money%5500);

  return answer;
}

console.log(solution(5500)) // [1, 0]
console.log(solution(15000)) // [2, 4000]