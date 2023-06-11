/*
문자열 뒤집기

문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"

입출력 예 설명

입출력 예 #1
my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

입출력 예 #2
my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
*/

// 내장 메서드 사용 split으로 배열화하여 뒤집은 후 join하여 문자열로 리턴
function solution(my_string) {
  // 1번 방법
  // return my_string.split("").reverse().join("");

  // 1번 변형
  return [...my_string].reverse().join("");

  // 2번 방법
  // let stn = '';
  // for(let i = my_string.length - 1; i >= 0; i--) {
  //   stn += my_string[i];
  // }
  // return stn;

  // Array.from 사용하기
  // return Array.from(my_string).reverse().join("");
}

console.log(solution("jaron")); // noraj
console.log(solution("bread")); // daerb
