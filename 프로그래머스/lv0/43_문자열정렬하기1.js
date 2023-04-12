/*
문자열 정렬하기 (1)

문제 설명
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

입출력 예
my_string	result
"hi12392"	[1, 2, 2, 3, 9]
"p2o4i8gj2"	[2, 2, 4, 8]
"abcde0"	[0]

입출력 예 설명

입출력 예 #1
"hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.

입출력 예 #2
"p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.
입출력 예 #3

"abcde0"에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.
*/
/*
문자열을 배열화하여
숫자만 찾은 뒤 (정규표현식, filter)
그걸 오름차순 정렬하고
숫자로 형변환한다. * (map 사용!)
*/

function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => parseInt(n));
}

// refactoring 1
// filter를 이용하여 숫자만 찾아보자
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .sort((a, b) => a - b)
    .map((v) => Number(v));
}

// refactoring 2
// 정규표현식 , 숫자가 아닌 것 /[^\d]/g 을 제외하기
function solution(my_string) {
  return my_string
    .replace(/[^\d]/g, "")
    .split("")
    .sort((a, b) => a - b)
    .map((v) => v * 1);
}

console.log(solution("hi12392")); // [ 1, 2, 2, 3, 9 ]
console.log(solution("p2o4i8gj2")); // [ 2, 2, 4, 8 ]
console.log(solution("abcde0")); // [ 0 ]
