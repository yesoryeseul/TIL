/*
편지

문제 설명
머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

공백도 하나의 문자로 취급합니다.
1 ≤ message의 길이 ≤ 50
편지지의 여백은 생각하지 않습니다.
message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다.

입출력 예
message	result
"happy birthday!"	30
"I love you~"	22

입출력 예 설명

입출력 예 #1
message의 글자 수가 15개로 최소 가로 30cm의 편지지가 필요합니다.

입출력 예 #2
message의 글자 수가 11개로 최소 가로 22cm의 편지지가 필요합니다.
*/

/*
message -> split으로 배열 만들기, 길이의 2배를 리턴
*/

function solution(message) {
  return message.split("").length*2;
}

// // refactoring 1
// // 문자열도 유사 배열이므로 split을 할 필요 없이 message.length 값을 구할 수 있다.
// function solution(message) {
//   return message.length*2;
// }

// refactoring 2
// 배열의 길이를 구하는 것이 포인트이므로 문자열을 스프레드 문법을 사용해 배열로 만들고 length를 사용하여 리턴값을 구한다.
// function solution(message) {
//   return [...message].length*2;
// }

// refactoring 3
// 화살표 함수로 한 줄로 표현할 수 있다.
// const solution = (v) => v.length*2;

console.log(solution("happy birthday!")) // 30
console.log(solution("I love you~")) // 22