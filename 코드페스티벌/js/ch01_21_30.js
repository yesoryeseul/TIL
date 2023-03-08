// 내 풀이와 답안 비교하여 보완할 것!

// 문제21 : set을 만드는 방법으로 올바른 것을 모두 고르시오

// 1) var x = {1, 2, 3, 4, 5, 6, 7};
// 2) var x = {};
// 3) var x = new Set('Javascript'); *
// 4) var x = new Set(range(5));
// 5) var x = nes Set(); *

// 답 : 3, 5

// 문제22 : 배수인지 확인하기
// 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

// 1) i / 6 == 0
// 2) i % 6 == 0 **** 정답
// 3) i & 6 == 0
// 4) i | 6 == 0
// 5) i // 6 == 0

// 문제23 : OX문제

// console.log(10/3)의 출력 결과는 3이다
// 답: x, 3.3333333333333335
// 소숫점이 없는 정수를 출력하고자 할 때는 Math.floor() 함수를 쓰면 됩니다.

// 문제24 : 대문자로 바꿔주세요!
// 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요

// 입력 : mary
// 출력 : MARY

let unorderedName = prompt("이름을 입력하세요");

console.log(unorderedName.toUpperCase());

// 문제25 : 원의 넓이를 구하세요

// 원의 넓이는 반지름(radius)길이 * 반지름 길이 * 3.14로 구할 수 있습니다
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어주세요

let radius = prompt("반지름 길이를 입력하세요");

let circle = function () {
  return radius * radius * 3.14;
};
console.log(circle());

// 문제26 : 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune 입니다

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요

let planet = prompt("행성 이름 한글로 입력하세요");

switch (planet) {
  case "수성":
    planet = "Mercury";
    break;
  case "금성":
    planet = "Venus";
    break;
  case "지구":
    planet = "Earth";
    break;
  case "화성":
    planet = "Mars";
    break;
  case "목성":
    planet = "Jupiter";
    break;
  case "토성":
    planet = "Saturn";
    break;
  case "천왕성":
    planet = "Uranus";
    break;
  case "해왕성":
    planet = "Neptune";
    break;
}
console.log(planet);

// ** 문제27 : 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다,
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요

// 다시 풀기!

// 문제28 : 2-gram
// 문자열에서 2개의 연속된 요소를 출력하는 방법
// ex. Javascript를 2-gram으로 반복해 본다면
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성

let keyword = prompt("문자열을 입력하시오");

for (let i = 0; i < keyword.length - 1; i++) {
  console.log(keyword.substring(i, i + 2));
}

// 문제29 : 대문자만 지나가세요
// 알파벳 하나만을 입력하고 그 알파벳이 대문자면 YES 아니면 NO를 출력하는 프로그램

let upperAlphabet = prompt("알파벳 하나를 입력하세요");

if (upperAlphabet === upperAlphabet.toUpperCase()) {
  console.log("YES");
} else console.log("NO");

// 문제30 : 문자열 속 문자 찾기
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

// 입력값 sentence
// 입력값 findWord
// indexOf

let sentence = prompt("문자열을 입력하세요");
let findWord = prompt("찾을 문자를 입력하세요");

console.log(sentence.indexOf(findWord));
