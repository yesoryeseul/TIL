/*
문자열 바꿔서 찾기

문제 설명
문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

입출력 예
myString	pat	result
"ABBAA"	"AABB"	1
"ABAB"	"ABAB"	0
*/
/*
myString A, B 바꾼 값이 includes(pat) ? 1 : 0
*/

function solution(myString, pat) {
  return [...myString]
    .map((v) => {
      if (v === "A") return (v = "B");
      else if (v === "B") return (v = "A");
    })
    .join("")
    .includes(pat)
    ? 1
    : 0;
}

console.log(solution("ABBAA", "AABB"));
console.log(solution("ABAB", "ABAB"));
