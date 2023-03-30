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

// let height = prompt("반 친구들의 키를 공백으로 구분해 입력하세요");

// 디버깅 과정! join 잘 먹었는지
// let heightSort = height
//   .split(" ")
//   .sort((a, b) => a - b)
//   .join(" ");
// console.log(height);
// console.log(heightSort);

// function isSort() {
//   let heightSort = height
//     .split(" ")
//     .sort((a, b) => a - b)
//     .join(" ");
//   if (heightSort === height) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// }

// console.log(isSort());

/*

# 문제35 : Factory 함수 사용하기
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
<pass>에 코드를 작성하여 two함수를 완성하세요.

one(n) 에 n은 제곱값
a(10)이 들어가는 과정이 이해가 안감
-> 1) function one이 function two를 리턴하기 때문에 one은 결국 two함수
Math.pow()
일급객체 개념, 클로저

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

// 디버깅
console.log(one(2)); // [Function: two]
console.log(a); // [Function: two]
console.log(b); // [Function: two]
console.log(c); // [Function: two]
console.log(a()); // NaN, two()에 매개변수가 전달되지 않아 (undefined?) -> NaN

// 결국 a = two(v) 가 되어 a(v)

console.log(a(10)); // 10*10의 결과가 나와야함
console.log(b(10)); // 10*10*10의 결과가 나와야함
console.log(c(10)); // 10*10*10*10의 결과가 나와야함

// 3개가 다른함수


// 문제37 : 반장 선거
// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성

// 입력 : 사쿠라 사쿠라 사쿠라 사쿠라 채원 채원 윤진 윤진
// 출력 : 사쿠라(이)가 총 4표로 반장이 되었습니다

/* 결과
return { 사쿠라: 4 }
2. function leader
1. 입력 prompt 사쿠라 사쿠라 사쿠라 사쿠라 채원 채원 윤진 윤진 하여 split(" ")
2. 수를 count 하여 가장 많은 사람과 표 수를 return
*/
function leader() {
  let leaderList = prompt("반장 후보를 투표하세요(입력방식)").split(" ");
  // console.log(leaderList); // 입력 객체가 leaderList라는 배열 값에 담깁
    
  let count = [];
  leaderList.forEach((x) => { 
    count[x] = (count[x] || 0)+1; 
  });

  // console.log(count); // 입력 객체가 leaderList라는 배열 값에 담깁
  
  let banjang = Math.max(...count);
  console.log(banjang);
  // let leader = count;
  // return { leader };
}
leader();