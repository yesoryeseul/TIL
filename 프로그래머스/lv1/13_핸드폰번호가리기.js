/*
핸드폰 번호 가리기

문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

입출력 예
phone_number	return
"01033334444"	"*******4444"
"027778888"	"*****8888"
*/

// 앞에서부터 뒤에 4자리 전까지 선택하여 *로 replace하면 되겠군

function solution(phone_number) {
  let first = phone_number.slice(0, phone_number.length-4);
  const last = phone_number.slice(phone_number.length-4);
  first = first.replaceAll(first, '*'.repeat(first.length))
  return first + last
}

// refactoring 다른 사람의 풀이 1
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// refactoring 다른 사람의 풀이 2 정규표현식
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}
// 숫자 하나 뒤에 4개의 숫자가 있는 경우, 해당 숫자를 찾아라
// "01033334444" 의 경우 3과 4를 찾아서 

// refactoring 다른 사람의 풀이 3
// const solution = n => 
function solution(phone_number) {
  return [...phone_number].fill("*", 0 , phone_number.length - 4).join("")
}

console.log(solution("01033334444")) // *******4444
console.log(solution("027778888")) // *****8888