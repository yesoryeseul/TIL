/*
대문자로 바꾸기

문제 설명
알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

입출력 예
myString	result
"aBcDeFg"	"ABCDEFG"
"AAA"	"AAA"
*/

/*
1. 문자열 순회하여 lower인 경우 upper로 바꿔주어 리턴
*/

// 1. 배열로 변환 후 map 돌려 전부 대문자로 변환한 뒤 join하여 문자열로 만들어준다
function solution(myString) {
  return [...myString].map(v => v.toUpperCase()).join('');
}

// refactoring 1 toUpperCase는 String 메서드이므로 저 과정을 할 필요가 없다 ;
function solution(myString) {
  return myString.toUpperCase();
}


console.log(solution("aBcDeFg")) // "ABCDEFG"
console.log(solution("AAA")) // "AAA"