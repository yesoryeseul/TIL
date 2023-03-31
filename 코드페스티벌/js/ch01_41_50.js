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

/*
# 문제44 : 각 자리수의 합

**사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

**예를들어**
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

입출력

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24
*/

// for문, 문자열을 배열로 생각하여 풀이
let numberIn = prompt("숫자를 차례대로 입력하세요.");
let tot = 0;
for(let i = 0; i < numberIn.length; i++) {
  tot += numberIn[i] % 10;
}

// 1. prompt로 숫자를 차례대로 입력할 변수 생성 - userInt
// 2. userInt는 현재 string type임이 확인
// 3. userInt를 유사배열, number 타입으로 바꿔주는 function 생성
// 3. sum 변수 생성
// 4. for문 으로 돌려 sum에 저장하고 출력하는 함수 생성

let userInt = prompt("숫자를 차례대로 입력하세요.");
// console.log(typeof userInt); // string, 디버깅 과정

function splitIntoArray(userNum) {
  return String(userNum).split("").map(Number);
}
const arr1 = splitIntoArray(userInt);
// console.log(arr1); // 디버깅 과정

let sum = 0;

function arrSum() {
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
}

console.log(arrSum());

/*
# 문제45 : getTime()함수 사용하기

Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 **현재 연도(2023)를 출력해보세요.**

*/

let today = new Date();

let milliseconds = today.getTime();
let date = new Date(milliseconds);

console.log(date.getFullYear());

/*
# 문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
*/

// 1. 배열에 1부터 20까지 답기
let arr = [];
for(let i = 0; i < 20; i++) {
  arr[i] = i+1;
}
// console.log(arr); // 디버깅 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// 2. arr for로 돌려 매개변수 n밭아서 n % 10 조건에서 sum += n;
