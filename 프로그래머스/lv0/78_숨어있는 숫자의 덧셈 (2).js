/*숨어있는 숫자의 덧셈 (2)
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

입출력 예
my_string	result
"aAb1B2cC34oOp"	37
"1a2b3c4d123Z"	133
입출력 예 설명
*/
// my_string에서 숫자를 제외한 문자값 -> ' ' 공백으로 치환
// 공백제외한 값만 reduce 누적, 숫자로 치환해야함!

function solution(my_string) {
  let result = my_string.replace(/[^0-9]/g, " ").split(" ");
  return result.reduce((acc, cur) => acc + +cur, 0);
}
