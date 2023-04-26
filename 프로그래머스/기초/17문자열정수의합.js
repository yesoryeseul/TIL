/*
문자열 정수의 합
문제 설명
한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

입출력 예
num_str	result
"123456789"	45
"1000000"	1
*/
/*
1. split 으로 나누어 배열로 만든다 or [...num_str]
2. 숫자로 형 변환 map
3. 각 자리수 누적연산 reduce
*/

function solution(num_str) {
  return num_str.split('').map(v => Number(v)).reduce((a, c) => a + c);
}

//refactoring 1, 다른사람의 풀이
// 1. [...] 스프레드 연산자 쓸 수 있잖아
// 2. map 과정 없이 reduce에서 숫자로 형 변환 할 수 있어
function solution(num_str) {
  return [...num_str].reduce((a, c) => a + Number(c), 0);
}

console.log(solution("123456789"))
console.log(solution("1000000"))