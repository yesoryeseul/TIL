/*
특정한 문자를 대문자로 바꾸기
문제 설명
영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string	alp	result
"programmers"	"p"	"Programmers"
"lowercase"	"x"	"lowercase"
*/

function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

console.log(solution("programmers", "p"));
console.log(solution("lowercase", "x"));
