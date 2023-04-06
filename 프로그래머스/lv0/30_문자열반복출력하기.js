/*
문자 반복 출력하기
문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

입출력 예
my_string	n	result
"hello"	3	"hhheeellllllooo"

입출력 예 설명

입출력 예 #1
"hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.
*/

function solution(my_string, n) {
  const newStn = [];
  for(let i = 0; i < my_string.length; i++) {
    newStn.push(my_string[i].repeat(n))
  }
  return newStn.join("");
}

// // refactoring, map, repeat
// function solution(my_string, n) {
//   return [...my_string].map(v => v.repeat(n)).join('')
// }

console.log(solution("hello", 3)) // hhheeellllllooo