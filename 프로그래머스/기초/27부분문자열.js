/*
부분 문자열
문제 설명
어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.

문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.

입출력 예
str1	str2	result
"abc"	"aabcc"	1
"tbt"	"tbbttb"	0
*/

function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

// 다른 사람의 풀이 1. indexOf를 써보자
function solution(str1, str2) {
  return str2.indexOf(str1) === -1 ? 0 : 1;
}

// 다른 사람의 풀이 2. 정규표현식, match 메서드를 써보자
function solution(str1, str2) {
  str1 = new RegExp(str1, 'g')
  return str2.match(str1) ? 1 : 0;
}

console.log(solution("abc", "aabcc"))
console.log(solution("tbt", "tbbttb"))