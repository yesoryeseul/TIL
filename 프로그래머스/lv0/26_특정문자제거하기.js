/*
특정 문자 제거하기
문제 설명
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

입출력 예
my_string	letter	result
"abcdef"	"f"	"abcde"
"BCBdbe"	"B"	"Cdbe"

입출력 예 설명

입출력 예 #1
"abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.

입출력 예 #2
"BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.
*/

// 1. replaceAll
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

// 2. 다른 풀이, split, join
// function solution(my_string, letter) {
//   return my_string.split(letter).join('');
//   // return my_string.split(letter); // [ 'abcde', '' ] [ '', 'C', 'dbe' ]
// }

// 3. 다른 풀이. 정규표현식
// function solution(my_string, letter) {
//   let reg = new RegExp(letter, 'g');
//   return my_string.replace(reg, '');
// }

console.log(solution("abcdef", "f")) // abcde
console.log(solution("BCBdbe", "B")) // Cdbe