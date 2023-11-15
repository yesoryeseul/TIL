/*JadenCase 문자열 만들기
문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

입출력 예
s	return
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	"For The Last Week"
*/

// S를 공백으로 split
// 각 요소를 모두 lowercase 하되 첫 번째 요소만 Uppercase

// charAt()과 slice()를 이용하여 첫글자만 대문자로 변환하는 방법
function solution(s) {
  return s
    .split(" ")
    .map((v, i) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
    .join(" ");
}
