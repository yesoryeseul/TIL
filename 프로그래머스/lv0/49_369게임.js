/*
369게임

문제 설명
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

입출력 예

order	result
3	1
29423	2

입출력 예 설명

입출력 예 #1
3은 3이 1개 있으므로 1을 출력합니다.

입출력 예 #2
29423은 3이 1개, 9가 1개 있으므로 2를 출력합니다.
*/

// order를 하나씩 순회하여 %3 === 0 인것을 filter하여 length?

function solution(order) {
  return String(order).split('')
  .map(item => Number(item))
  .filter((item) => [3, 6, 9].includes(item))
  .length;
}

// 스프레드 연산자를 써보자!
function solution(order) {
  return [...order.toString()]
  .map(item => Number(item))
  .filter((item) => [3, 6, 9].includes(item))
  .length;
}
// 숫자를 스프레드 연산으로 펼칠 수 없다 문자열로 바꾸어주는 행위까지 해야한다 > 내가 [...order]에서 오류 난 이유

// 다른 사람의 풀이 1. 정규 표현식, matchAll
function solution(order) {
  return [...order.toString().matchAll(/[3|6|9]/g)].length;
}
// matchAll() 메서드는 문자열에서 정규식과 일치하는 모든 부분을 찾아 이를 이터레이터(iterator) 객체로 반환하는 JavaScript의 내장 함수

// 다른 사람의 풀이 2. Set
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order).split('').filter(num => mySet.has(Number(num))).length;
}

console.log(solution(3));
console.log(solution(29423));
console.log(solution(10000));
