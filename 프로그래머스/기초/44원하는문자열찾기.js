/*
원하는 문자열 찾기
문제 설명
알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

단, 알파벳 대문자와 소문자는 구분하지 않습니다.

입출력 예
myString	pat	return
"AbCdEfG"	"aBc"	1
"aaAA"	"aaaaa"	0
*/

function solution(myString, pat) {
  pat = new RegExp(pat, "gi"); // gi => 대소문자 구분 x
  return pat.test(myString) ? 1 : 0;
}

// 다른 사람의 풀이
function solution(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}
// => 모든 문자를 소문자로 치환하여 pat 문자열을 includes로 비교

console.log(solution("AbCdEfG", "aBc"));
console.log(solution("aaAA", "aaaaa"));
