/*
세로 읽기
문제 설명
문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string	m	c	result
"ihrhbakrfpndopljhygc"	4	2	"happy"
"programmers"	1	1	"programmers"
*/

/*
1. 문자열을 m만큼 나눠서 자르자(division)
2. newArr의 각 요소의 (index+1)의 값만 추출
*/

function solution(my_string, m, c) {
  let newArr = [];
  for (let i = 0; i < my_string.length; i += m) {
    newArr.push([...my_string].slice(i, i + m));
  }
  return newArr.map((v, i, arr) => arr[i][c - 1]).join("");
}

// 다른 사람의 풀이, 문자열에서 처리
function solution(my_string, m, c) {
  let answer = "";
  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string[i + c - 1];
  }
  return answer;
}

// 다른 사람의 풀이 2, reduce
function solution(my_string, m, c) {
  return Array.from(my_string).reduce((word, v, i) => {
    return (i % m) + 1 === c ? word + v : word;
  }, "");
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
