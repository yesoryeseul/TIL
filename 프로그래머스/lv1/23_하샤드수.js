/*
하샤드 수
문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

입출력 예
x	return
10	true
12	true
11	false
13	false
*/

/*
x / x.split('') 후 각 요소 더하고 숫자로 형변환 === 0 ? true : false

*/

function solution(x) {
  let division = String(x)
    .split("")
    .reduce((a, c) => Number(a) + Number(c));

  return x % division === 0 ? true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
