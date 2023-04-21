/*
문자열 다루기 기본

문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

입출력 예
s	return
"a234"	false
"1234"	true
*/

// 1. 문자열 길이가 4 or 6의 조건 s.length === 4 || s.length === 6
// isNaN? 숫자가 아니냐? / !isNaN > true 조건으로 만들어줘야함
// * 3e10 같은 경우 e10을 지수로 인식하기 때문에 문자열 하나하나 isNaN이 아닌지 검사하여야 한다.

function solution(s) {
  return (s.length === 4 || s.length === 6) && s.split("").every(c => !isNaN(c)) ? true : false;
}

console.log(solution("a234")) // false
console.log(solution("1234")) // true
console.log(solution("3e10")) // false로 나와야 하는데 true가 나옴, 지수로 인식하여 숫자가 됨