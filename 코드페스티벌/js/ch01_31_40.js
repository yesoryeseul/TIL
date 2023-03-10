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

let heightIn = prompt("공백으로 6명의 키를 입력하세요");
let sorted = "";

sorted = heightIn
  .split(" ")
  .sort(function (a, b) {
    return a - b; // 오름차순 정렬 a>b
  })
  .join(" ");

if (heightIn === sorted) {
  console.log("YES");
} else {
  console.log("NO");
}

// .sort(function(a, b)  {
//   if(a > b) return 1; // 오름차순
//   if(a === b) return 0;
//   if(a < b) return -1; // 내림차순
// });

// 오름차순 정렬 단순화 !*
// .sort(function (a, b) {
//   return a - b;
// })

// 니람차순 정렬 단순화 !*
// .sort(function (a, b) {
//   return b - a;
// })

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

let candidate = prompt("학생들이 뽑은 후보 입력").split(" ");
let result = {}; // candidate 담을 객체 선언
let winner = ""; // 반장

// for in : candidate 배열의 길이만큼 반복을 수행
for (let index in candidate) {
  let validation = candidate[index];
  // result 객체에 키값에 해당하는 값이 있다면 +1을 하고, 만약 키값이 없다면(undefined) 키값에 1을 추가
  result[validation] =
    result[validation] === undefined
      ? 1
      : (result[validation] = result[validation] + 1);
}

// 키값만 따로 빼는 Object.keys 메서드 사용
// reduce 메서드 활용하여 result객체에 학생들의 이름을 넣었을 때 max값을 도출하는 return 문, 그 max값이 가장 큰 학생을 도출하는 로직 수행
winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다`);

// ** 막힘 문제38 : 호준이의 아르바이트
// 1위부터 3위를 한 아이들에게 상으로 사탕을 줄 것이다.
// 1 ~ 3위 학생은 여러명일 수 있고 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하라

// 입력: 97 86 75 55 97 85 97 97 95
// 출력 : 6

// 1) sort - 내림차순
// 2) 상위 3개, but 중복 포함
// 3) 사탕받을 학생 수 변수 선언 및 생성

let score = prompt("학생 점수 공백으로 모두 입력");
let winTop3 = [];
let count = 0;
winTop3 = score.split(" ").sort(function (a, b) {
  return b - a;
});
// 여기서 막힙!
// 힌트 .map, while문, .pop(), includes(), .push() 사용!

// 문제39 : 오타 수정하기
// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램 작성

// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// 1. 정규표현식
let typo = prompt("문장 입력");
console.log(typo.replace(/q/gi, "e"));

// 2. replace
let typo2 = prompt("문장 입력");
console.log(typo2.replaceAll("q", "e"));

// ** 다시 풀기! 문제40 : 놀이동산에 가자
// 인원수 제한은 없으나 제한 무게를 넘으면 무조건 다음 기구를 타야합니다.

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다
