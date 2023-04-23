/*
문자열 곱하기

문제 설명
문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string	k	result
"string"	3	"stringstringstring"
"love"	10	"lovelovelovelovelovelovelovelovelovelove"
*/

function solution(my_string, k) {
  return my_string.repeat(k);
}

// 다른 사람의 풀이 for 사용하여 k번만큼 빈 문자열에 추가하기
function solution(my_string, k) {
  let answer = '';
  for(let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer
}

console.log(solution("string", 3)) // stringstringstring
console.log(solution("love", 10)) // lovelovelovelovelovelovelovelovelovelove