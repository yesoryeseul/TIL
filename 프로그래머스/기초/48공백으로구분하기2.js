/*
공백으로 구분하기 2

문제 설명
단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string	result
" i    love  you"	["i", "love", "you"]
"    programmers  "	["programmers"]
*/

function solution(my_string) {
  return my_string.trim().replace(/ +/g, " ").split(" ");
}

// refactoring
function solution(my_string) {
  return my_string.split(" ").filter((v) => v);
}
// 공백으로 분리하여 배열에 담은 뒤 falsy한 값인('') 공백 문자열을 제외한 값만 추출

console.log(solution(" i    love  you"));
console.log(solution("    programmers  "));
