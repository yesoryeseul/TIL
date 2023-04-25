/*
문자 리스트를 문자열로 변환하기

문제 설명
문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

입출력 예
arr	result
["a","b","c"]	"abc"
*/

function solution(arr) {
  return arr.join('');
}

// for 써서 풀어보기~
function solution(arr) {
  let answer = '';
  for(let el of arr) {
    answer += el;
  }
  return answer;
}

console.log(solution(["a","b","c"]))