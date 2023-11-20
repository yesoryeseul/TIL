// arr.sort(compareFunction);
// compareFunction는 정렬 기준을 정해주는 함수다

// 정수에 대한 오름차순 정렬 1
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
arr.sort(compare);
console.log(arr); // [ 1, 2,  3,  5, 7, 8, 9, 15, 21 ]

// 정수에 대한 오름차순 정렬 2
// a가 b보다 작을 때, 반환 값이 음수가 되어 a가 앞에 위치한다.
let arr2 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare2(a, b) {
  return a - b;
}
arr2.sort(compare2);
console.log(arr2); // [ 1, 2,  3,  5, 7, 8, 9, 15, 21 ]

// 정수에 대한 오름차순 정렬 3
// 비교 함수를 한 줄에 정의하여 곧 바로 적용할 수 있다
let arr3 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr3.sort(function (a, b) {
  return a - b;
});
console.log(arr3);

// ---------------------------------------------------------

// 정수에 대한 내림차순 정렬
let arr4 = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare4(a, b) {
  return b - a;
}
arr4.sort(compare4);
console.log(arr4); // [21, 15, 9, 8, 7, 5,  3, 2, 1]

// ---------------------------------------------------------

// 문자열 대한 오름차순 정렬
// 별도로 비교 함수(compare function)을 사용하지 않으면, 유니코드 순으로 정렬된다.
let str = ["fineapple", "banana", "durian", "apple", "carrot"];
str.sort();
console.log(str); // [ 'apple', 'banana', 'carrot', 'durian', 'fineapple' ]

// 문자열 대한 내림차순 정렬
let strArr = ["fineapple", "banana", "durian", "apple", "carrot"];
function compareStr(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}
strArr.sort(compareStr);
console.log(strArr); // [ 'fineapple', 'durian', 'carrot', 'banana', 'apple' ]

// 문자열 대한 오름차순 정렬 예시 (대소문자 구분 X)
let strArr2 = ["fineapple", "Banana", "durian", "Apple", "carrot"];
function compareStr2(a, b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}
strArr2.sort(compareStr2);
console.log(strArr2); // [ 'Apple', 'Banana', 'carrot', 'durian', 'fineapple' ]

// 객체에 대하여 원하는 기준으로 오름차순 정렬
let objArr = [
  { name: "홍길동", score: 90 },
  { name: "김철수", score: 85 },
  { name: "박영희", score: 97 },
];
function compareObj(a, b) {
  return b.score - a.score;
}
objArr.sort(compareObj);
console.log(objArr);
/*[
  { name: '박영희', score: 97 },
  { name: '홍길동', score: 90 },
  { name: '김철수', score: 85 }
] */
