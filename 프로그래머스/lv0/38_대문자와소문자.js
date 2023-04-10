/*
대문자와 소문자

문제 설명
문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

입출력 예
my_string	result
"cccCCC"	"CCCccc"
"abCdEfghIJ"	"ABcDeFGHij"
입출력 예 설명
입출력 예 #1

소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.
입출력 예 #2

소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.
*/

/*
대소문자 판별
for문으로 하나씩 검사
문자열 if(my_string의 각 요소 === toLowerCase)이면 toUpperCase로 바꿔서, else(요소가 uppercase)면 toLowerCase바꿔서 새로운 문자열 변수에 더해준다
*/

function solution(my_string) {
  let answer = '';
  for(let el of my_string) {
    if(el === el.toLowerCase()) {
      answer += el.toUpperCase();
    } else answer += el.toLowerCase();
  }
  return answer;
}

// refactoring
// 삼항연산자, map, join을 하여 한 줄로 구현해보자!

function solution(my_string) {
  return my_string.split('').map((v) => v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()).join('')
}

// refactoring
// charCodeAt() : 유니코드 값을 리턴하는 메서드 를 이용해보자
// 대문자 65 ~ 90 / 소문자 97 ~ 122 를 이용
// Array.from 사용해보기
function solution(my_string) {
  return Array.from(my_string).map((v, i) => my_string.charCodeAt(i) < 97 ? v.toLowerCase() : v.toUpperCase()).join('')
}

console.log(solution("cccCCC"));
