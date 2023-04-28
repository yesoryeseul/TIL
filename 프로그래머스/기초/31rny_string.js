/*
rny_string

문제 설명
'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

rny_string	result
"masterpiece"	"rnasterpiece"
"programmers"	"prograrnrners"
"jerry"	"jerry"
"burn"	"burn"
*/
/*
1. 배열화
원소중 m 이 있냐? 'rm'으로 replace : 그냥 원소 리턴

3.정규 표현식 replace, replaceAll
*/

function solution(rny_string) {
  return [...rny_string].map((v) => v === 'm' ? 'rn' : v).join('');
}

function solution(rny_string) {
  return rny_string.replace(/m/g, 'rn');
}

console.log(solution("masterpiece"))
console.log(solution("programmers"))
console.log(solution("jerry"))
console.log(solution("burn"))