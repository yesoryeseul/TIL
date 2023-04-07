/*
모음 제거

문제 설명
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

입출력 예
my_string	result
"bus"	"bs"
"nice to meet you"	"nc t mt y"

입출력 예 설명

입출력 예 #1
"bus"에서 모음 u를 제거한 "bs"를 return합니다.

입출력 예 #1
"nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.
*/

/* 결과가 기존 문자열을 수정함
1. my_string을 순회하여 vowel의 요소를 포함하지 않는 것만 출력
2. filter, map,...
*/

function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  return [...my_string].filter((v) => !(vowel.includes(v))).join("");
}

console.log(solution("bus")) // bs
console.log(solution("nice to meet you")) //"nc t mt y"