/*
문자열안에 문자열

문제 설명
문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

입출력 예
str1	                    str2	result
"ab6CDE443fgh22iJKlmn1o"	"6CD"	  1
"ppprrrogrammers"	        "pppp"	2
"AbcAbcA"	                "AAA"	  2

입출력 예 설명

입출력 예 #1
"ab6CDE443fgh22iJKlmn1o" str1에 str2가 존재하므로 1을 return합니다.

입출력 예 #2
"ppprrrogrammers" str1에 str2가 없으므로 2를 return합니다.

입출력 예 #3
"AbcAbcA" str1에 str2가 없으므로 2를 return합니다.
*/

/*
str1 안에 str2가 있다면 1을 없다면 2
1. 삼항 연산자로 접근, or 조건문
2. str1에 str2 을 포함하면 1 반환 아니면 2반환(문자열이 유사 배열임을 이용하여 풀이)
*/

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")) // 1
console.log(solution("ppprrrogrammers", "pppp")) // 2
console.log(solution("AbcAbcA", "AAA")) // 2