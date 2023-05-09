/*
0 떼기
문제 설명
정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

입출력 예
n_str	result
"0010"	"10"
"854020"	"854020"
*/

/*
1. 문자열 순회하여 '0'이 아닐 때까지 찾고
2. 0이 아닌 값 이후까지 자르기 slice
*/

function solution(n_str) {
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== "0") {
      return n_str.slice(i);
    }
  }
}
console.log(solution("0010"));
console.log(solution("854020"));

// refactoring, 다른 사람의 풀이
// number로 형변환하여 숫자로 만들면 앞의 0이 제거된다.
// 다시 string으로 형변환하여 리턴한다.
const solution1 = (str) => String(Number(str));
const solution2 = (s) => +s + "";

console.log(solution1("0010"));
console.log(solution1("854020"));
