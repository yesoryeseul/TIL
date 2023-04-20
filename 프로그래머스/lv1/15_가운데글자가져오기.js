/*
가운데 글자 가져오기
문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

입출력 예
s	return
"abcde"	"c"
"qwer"	"we"
*/
/*
1. 홀수일때 Math.floor(s.length / 2) 값을 인덱스로 가져오기
2. 짝수일 때 index+1
*/

function solution(s) {
  let index = Math.floor(s.length / 2);
  if(s.length % 2 === 1) {
    return s[index]
  } else {
    return s[index-1] + s[index]
  }
}

// refactoring 다른 사람의 풀이 1, substr 문자열 자르기
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

console.log(solution("abcde")) // c
console.log(solution("qwer")) // we