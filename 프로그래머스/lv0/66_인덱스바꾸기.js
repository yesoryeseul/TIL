/**
인덱스 바꾸기

문제 설명
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

입출력 예
my_string	num1	num2	result
"hello"	1	2	"hlelo"
"I love you"	3	6	"I l veoyou"

설계
my_string 배열화 split 사용
인덱스 번호로 접근
 */

// 구조 분해 할당
function solution(my_string, num1, num2) {
  let result = my_string.split("");
  [result[num1], result[num2]] = [result[num2], result[num1]];
  return result.join("");
}
console.log(solution("hello", 1, 2));
console.log(solution("I love you", 3, 6));
