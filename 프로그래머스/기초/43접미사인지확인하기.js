/*
접미사인지 확인하기
문제 설명
어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string	is_suffix	result
"banana"	"ana"	1
"banana"	"nan"	0
"banana"	"wxyz"	0
"banana"	"abanana"	0
*/

// 내 풀이 String.endsWith() 메서드
function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}

// 다른 사람의 풀이
function solution(my_string, is_suffix) {
  return my_string.slice(my_string.length - is_suffix.length) === is_suffix
    ? 1
    : 0;
}

console.log(solution("banana", "ana"));
console.log(solution("banana", "nan"));
console.log(solution("banana", "wxyz"));
console.log(solution("banana", "abanana"));
