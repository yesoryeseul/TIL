/*문자열 뒤집기
문제 설명
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string	s	e	result
"Progra21Sremm3"	6	12	"ProgrammerS123"
"Stanley1yelnatS"	4	10	"Stanley1yelnatS"
*/

function solution(my_string, s, e) {
  let parts = my_string.slice(s, e + 1).split(""); // ['2', '1', 'S', 'r', 'e', 'm', 'm']
  let reverses = parts.reverse().join(""); // 뒤집은 문자열
  return my_string.replace(my_string.slice(s, e + 1), reverses);
}
