/*
이상한 문자 만들기
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

입출력 예
s	return
"try hello world"	"TrY HeLlO WoRlD"
*/

/*
공백으로 먼저 split 하여 단어로 나눠주고, 각 요소를 문자로 잘라 배열로 반환하고 순회하여 !i%2의 경우 toUpperCase, 아니면 toLowerCase
join하여 단어별로 합쳐준 뒤 s을 " " 공백으로 조인
*/

function solution(s) {
  return s
    .split(" ")
    .map((v) =>
      [...v]
        .map((item, i) => (!(i % 2) ? item.toUpperCase() : item.toLowerCase()))
        .join("")
    )
    .join(" ");
}

console.log(solution("try hello world"));
console.log(solution("they are nothing"));

// 다시 풀어보기!
