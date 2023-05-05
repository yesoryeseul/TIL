/*
l로 만들기

문제 설명
알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

입출력 예
myString	result
"abcdevwxyz"	"lllllvwxyz"
"jjnnllkkmm"	"llnnllllmm"
*/

/*
아스키코드 a 97, l: 108번 인 것으로 활용
myString 배열화하여 map으로 순회,
l보다 작은 소문자인 경우 l로 return, 나머지는 그냥 요소로 리턴
join으로 합쳐 문자열로 리턴
*/

function solution(myString) {
  return [...myString]
    .map((v) => {
      if (v.charCodeAt() > 96 && v.charCodeAt() < 109) return "l";
      else return v;
    })
    .join("");
}
// charCodeAt > 통과 시간이 오래 걸리는 단점

// refactoring 1, 다른 사람의 풀이
function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}

// refactoring 2, 다른 사람의 풀이 정규식 사용
function solution(myString) {
  return myString.replace(/[a-k]/g, "l");
}

console.log(solution("abcdevwxyz")); // lllllvwxyz
console.log(solution("jjnnllkkmm")); // llnnllllmm
