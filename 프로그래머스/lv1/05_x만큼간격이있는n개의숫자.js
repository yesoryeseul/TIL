/*
x만큼 간격이 있는 n개의 숫자
문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

입출력 예
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]
*/

function solution(x, n) {
  let answer = []; // 담을 배열
  for(let i = 1; i <= n; i++) {
    answer.push(x*i);
  }
  return answer;
}

// refactoring 1
// n개를 넣을 수 있는 배열을 선언하여 x값으로 채워놓고
// map 메서드 (인덱스+1)*x값
// ex) solution(2, 5)
// Array(n).fill(x) 여기까지의 결과는 [ 2, 2, 2, 2, 2 ]
// 1*2, 2*2, 3*2, 4*2, 5*2
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v);
}

// refactoring 2
// [...Array(n).keys()] => n개의 배열이 인덱스의 값으로 채워짐
// ex) solution(2, 5)의 경우 [ 0, 1, 2, 3, 4 ] 로 채운 상태
function solution(x, n) {
  return [...Array(n).keys()].map(v => (v + 1) * x);
}

console.log(solution(2, 5)) // [2, 4, 6, 8, 10]
console.log(solution(4, 3)) // [4, 8, 12]
console.log(solution(-4, 2)) // [-4, -8]