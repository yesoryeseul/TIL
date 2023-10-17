/*특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
문제 설명
문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

입출력 예
myString	pat	result
"AbCdEFG"	"dE"	"AbCdE"
"AAAAaaaa"	"a"	"AAAAaaaa"
*/

// lastIndexOf 메서드 활용
function solution(myString, pat) {
  let t = myString.lastIndexOf(pat);
  return myString.slice(0, t + pat.length);
}
