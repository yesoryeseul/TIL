// 문제31 : 자바스크립트 자료형의 복잡도
// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오

// 1) arr[i]
// 2) arr.push(5)
// 3) arr.slice()
// 4) arr.pop()
// 5) arr.includes(5)

// 정답 3 5
// 풀이
// 1) 나열하는 것 > 1단계
// 2) 마지막에 추가하는 것 > 1단계
// 4) 마지막 요소를 제거하는 것 > 1단계

// 3) 지정한 start부터 end까지 복사하여 새로운 객체를 만드는 함수이먀, 입력 데이터 크기와 배열의 길이에 따라 처리 시간이 달라져 O(n)

// 5) includes() : 배열이 특정 값을 포함하는지 확인하는 함수이다
// 배열 arr에 5가 포함되어있는지 검사할 때 arr[0]부터 검사하고 최악의 경우는 배열의 마지막 원소까지 검사해야하므로 O(n)

// O(1) : 빅 오 1, 1은 단계수(한 단계가 걸린다는 것)
// O(n) : 자료 구조 길이만큼 걸린다.

// 문제32 : 문자열 만들기
// 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해주세요
// 입력 : 안녕하세요. 저는 제주대학교 컴공과 혜림입니다.
// 출력 : 5

let stringLeng = prompt("문자열을 입력하세요").split(" ");
console.log(stringLeng.length);

// 문제33 : 거꾸로 출력하기
// 한 줄에 여러 개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

let reverseData = prompt("숫자를 입력하세요").split(" ").reverse();
let res = "";

for (let i = 0; i < reverseData.length; i++) {
  res += reverseData[i] + " ";
}
console.log(res);

// ** 풀이 안됨
// 문제34 : sort 구현하기
// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

let heightIn = prompt("공백으로 6명의 키를 입력하세요").split(" ");

// if (heightIn.sort()) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// ** 다시풀기
// 문제35 : Factory 함수 사용하기
// 2제곱, 3제곱, 4제곱을 구할 수 있는 Factory 함수를 만들려고 합니다.

// //pass 에 코드를 작성하여 two함수를 완성하세요

function one(n) {
  function two(k) {
    //pass
    return Math.pow(k, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

// 문제36: 구구단 출력하기
// 1~9 까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

let dan = prompt("구구단의 단 하나의 숫자를 입력하세요");
let gugudan = "";
for (let i = 1; i <= 9; i++) {
  gugudan += dan * i + " ";
}
console.log(gugudan);

// ** 모르겠음! 문제37 : 반장 선거
// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성

// 입력 : 동민 동민 동민 동민 예슬 예슬 유진 유진
// 출력 : 동민(이)가 총 4표로 반장이 되었습니다

// 1) 공백으로 입력할 변수 생성하고 공백 split(" ") 하여
// 2) 배열에 넣기
// 3) 변수에서 Math.max 구함
// 4) 가장 많이 받은 이름(중복제거)과 Math.max로 콘솔 출력

let candidate = console.log("학생들이 뽑은 후보 입력").split(" ");

let name = {};

for (let i = 0; i < candidate.length; i++) {
  name = candidate[i];
}

//
