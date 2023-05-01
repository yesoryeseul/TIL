/*
접두사인지 확인하기
문제 설명
어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string is_prefix	result
"banana"	"ban"	1
"banana"	"nan"	0
"banana"	"abcd"	0
"banana"	"bananan"	0
*/

function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

// 다른 사람의 풀이 1
function solution(my_string, is_prefix) {
  return my_string.split(is_prefix)[0] === "" ? 1 : 0;
}
// my_string을 is_prefix로 split하여 자르면 접두사로 있는 경우 ''인 빈 문자열을 반환하므로 1, 아닐 경우 0

// 다른 사람의 풀이 2, indexOf
function solution(my_string, is_prefix) {
  return my_string.indexOf(is_prefix) === 0 ? 1 : 0;
}

console.log(solution("banana", "ban"));
console.log(solution("banana", "nan"));
console.log(solution("banana", "abcd"));
console.log(solution("banana", "bananan"));
