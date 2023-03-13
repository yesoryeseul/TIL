/*
문제 41: 소수판별

숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요
소수면 YES로, 소수가 아니면 NO로 출력해주세요
(소수 : 1과 자기자신만으로 나누어 떨어지는 1보다 큰 양수)
*/

/*
  1. 숫자 변수 선언하고 prompt 메서드 할당, 창 띄워 숫자 입력
  2. 함수 만들어 해보기 function 
  2. 조건문 if() 먼저 1보다 큰 양수 num > 1 조건으로 크게 시작
  3. 그 안에서 num은 1과 num으로 나누었을 때 ( % ) === 0 이 되어야함 &&

  2, 3, 5, 7, 11
*/

let num = prompt("숫자를 입력하세요");

function primeNumberisTrue() {
  for (let n = 2; n < num; n++) {
    const result = num % n;
    if (result === 0) {
      console.log("NO");
      return;
    }
  }

  if (num === 1) {
    console.log("NO");
    return;
  }
  console.log("YES");
}

primeNumberisTrue();

/*
# 문제42 : 2020년 ***

2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

/*
# 문제43 : 10진수를 2진수로

우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

**사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**
*/

let decimal = Number(prompt("10진수를 입력하세요"));

function decimalToBin() {
  return decimal.toString(2);
}

console.log(decimalToBin());
