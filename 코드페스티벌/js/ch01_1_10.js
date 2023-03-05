// 문제1: 배열의 삭제

// 다음 배열에서 400, 500을 삭제하는 코드를 입력

var nums = [100, 200, 300, 400, 500];

// 나의 풀이
nums.splice(3);
console.log(nums);

// 답안
// nums.pop();
// nums.pop();
// console.log(nums);


// 문제2: 배열의 내장함수

// // pass 부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

// 데이터
var arr = [ 200, 100, 300 ];
arr.splice(2, 0, 10000); // pass
console.log(arr);

// 출력
// [200, 100, 10000, 300]


// 문제3: 변수의 타입

// 다음 출력 값으로 올바른 것은?

var arr3 = [100, 200, 300];
console.log(typeof arr3);

// 답: object, 객체 타입


// 문제4: 변수의 타입2

// 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결을 알맞게 예상해보시오

var a = 1; 
console.log(typeof(a)); // number

a = 2.22; 
console.log(typeof(a)); // number

a = 'p';
console.log(typeof(a)); // string

a = [1, 2, 3];
console.log(typeof(a)); // object


// 문제5: for문 계산
// 다음 코드의 출력 값으로 알맞은 것은?

var a = 10;
var b = 2;

for(var i = 1; i < 5; i+=2) {
    a += 1;
}

// i = 1, a = 10+  1 = 11
// i = 3, a = 11 + 3 = 14
// i = 5, break;

console.log(a+b); // 답: 14

// 문제6: False

// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들입니다
// 앗, False로 취급하지 않는 것이 하나 있네요!
// True를 찾아주세요

// 1) NaN
// 2) 1
// 3) ""
// 4) 0
// 5) undefined

// 답 2) 1, true


// 문제7: 변수명
// 다음중 변수명으로 사용할 수 없는 것 2개를 고르시오

// 1) age
// 2) Age
// 3) let 
// 4) _age
// 5) 1age


// 답: 3) let, 예약어는 변수명으로 사용 금지 / 5) 1age, 변수명은 숫자로 시작할 수 없음!(문자, 밑줄(_) 혹은 달러($)기호로 시작해야함)


// 문제8: 객체의 키 이름 중복
// 자바스크립트 객체를 다음과 같이 만들었다.
// 출력값을 입력하시오(출력값은 공백을 넣지 않습니다.)

var d = {
    'height': 180,
    'weight': 78,
    'weight': 84,
    'temperature': 36,
    'eyesight': 1
};

console.log(d['weight']); // 84, 변수 내부의 프로퍼티 값은 변경이 가능하다


// 문제9: concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오

var year = '2023';
var month = '03';
var day = '05';
var hour = '19';
var minute = '32';
var second = '45';

var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);

console.log(result);

// 출력
// 2023/03/05 19:32:45

// 참고 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/concat


// 문제10: 별찍기

// 입력값 -> 5
// 출력

//     *
//    ***
//   *****
//  *******
// *********

const starNum = prompt('숫자를 입력하세요'); // 5 입력

let star = '';
let gap = '';

for(let i = 1; i <= starNum; i++) {
    for(let j = starNum; j > starNum; j--) {
        gap *= j-1;
        for(let k = 1; k <= i; k+=2) {
            star += '*';
        }
    }
}