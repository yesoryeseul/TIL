/*
암호 해독

문제 설명
군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

입출력 예
cipher	                  code	 result
"dfjardstddetckdaccccdegk"	4	  "attack"
"pfqallllabwaoclk"	        2	  "fallback"

입출력 예 설명

입출력 예 #1
"dfjardstddetckdaccccdegk" 의 4번째, 8번째, 12번째, 16번째, 20번째, 24번째 글자를 합친 "attack"을 return합니다.

입출력 예 #2
"pfqallllabwaoclk" 의 2번째, 4번째, 6번째, 8번째, 10번째, 12번째, 14번째, 16번째 글자를 합친 "fallback"을 return합니다.
*/

/*
i % code === 0 인 문자만 추출하여 새 문자열 변수에 담기
1. 배열 > filer > join
2. 반복문, 새 문자열
*/

function solution(cipher, code) {
  return cipher.split("").filter((_, i) => i % code === code-1).join('');
}

// refactoring
// filter 조건 수정
function solution(cipher, code) {
  return cipher.split("").filter((_, i) => (i + 1) % code === 0).join('');
}

// for문
// i % code === 0 조건을 만족할 때 이전 인덱스의 값을 추출하는 로직
function solution(cipher, code) {
  let answer = '';
  for(let i = 1; i <= cipher.length; i++) {
    if(i % code === 0) answer += cipher[i - 1];
  }
  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); // attack
console.log(solution("pfqallllabwaoclk", 2)); // fallback