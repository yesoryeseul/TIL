/*

# 문제34 : sort 구현하기

민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

입출력

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES

1. 키를 연속으로 입력할 수 있는 변수 선언
2. prompt로 입력하여 할당 -> 공백으로 입력
3. split(" ")하여 공백으로 잘라 키를 구분
4. sort로 오름차순 정렬 알고리즘
5. 오름차순이면 true 아니면 false (if?)

*/

let height = prompt("반 친구들의 키를 공백으로 구분해 입력하세요");

// 디버깅 과정! join 잘 먹었는지
// let heightSort = height
//   .split(" ")
//   .sort((a, b) => a - b)
//   .join(" ");
// console.log(height);
// console.log(heightSort);

function isSort() {
  let heightSort = height
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");
  if (heightSort === height) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(isSort());

/*

# 문제35 : Factory 함수 사용하기
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
<pass>에 코드를 작성하여 two함수를 완성하세요.

one(n) 에 n에 값이 들어갈 때 그만큼 제곱을 할 수 있는 함수
n = 2 => n*n, n => 3 n*n*n, n = 4 => n*n*n*n

Math.pow()

*/

function one(n) {
  function two(v) {
    //pass
    return Math.pow(v, n);
  }
  return two; // ***
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(one(2)); // [Function: two]
console.log(a); // [Function: two]
console.log(b); // [Function: two]
console.log(c); // [Function: two]
console.log(a()); // NaN
console.log(a(10)); // 10*10의 결과가 나와야함
console.log(b(10)); // 10*10*10의 결과가 나와야함
console.log(c(10)); // 10*10*10*10의 결과가 나와야함

// 3개가 다른함수
