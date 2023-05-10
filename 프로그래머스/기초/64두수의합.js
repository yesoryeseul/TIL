/*
두 수의 합
문제 설명
0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

입출력 예
a	b	result
"582"	"734"	"1316"
"18446744073709551615"	"287346502836570928366"	"305793246910280479981"
"0"	"0"	"0"
*/

function solution(a, b) {
  // 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체 BigInt
  return (BigInt(a) + BigInt(b)).toString();
}

/*
(Number(a) + Number(b)).toString()을 하게 될 경우
console.log(solution("18446744073709551615", "287346502836570928366")); 이 로직의 결과가 맞게 나오지 않는다.
*/

console.log(solution("582", "734"));
console.log(solution("18446744073709551615", "287346502836570928366"));
console.log(solution("0", "0"));
