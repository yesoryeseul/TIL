/*
숨어있는 숫자의 덧셈 (1)

문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

입출력 예
my_string	      result
"aAb1B2cC34oOp"	10
"1a2b3c4d123"	  16
입출력 예 설명
입출력 예 #1

"aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.
입출력 예 #2

"1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.

유의사항
연속된 숫자도 각각 한 자리 숫자로 취급합니다.
*/

/*
1. my_string 문자열을 순회하여 숫자인 것만 추출해서 숫자로 바꿔주고 누적연산 하기
숫자임을 확인하는 로직..?
-> 정규표현식으로 숫자를 찾아주기 match
*/

function solution(my_string) {
  var answer = 0;
  return answer;
}

console.log(solution("aAb1B2cC34oOp")) // 10
console.log(solution("1a2b3c4d123")) // 16