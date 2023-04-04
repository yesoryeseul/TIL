'use strict';

// 반복문 사용하여 10 ~ 0 까지 출력
// function countdown(n) {
//     for(var i = n; i >= 0; i--) console.log(i);
// }
// countdown(10);

// 반복문 아닌 재귀 함수 사용하여 반복 출력

// 재귀 함수 : 반복되는 처리를 위해 사용
function countdown(n) {
    if(n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}
countdown(10);

// 팩토리얼
// 1부터 자신까지의 모든 양의 정수 곱이다
// n! = 1 * 2 * ... * (n -1) * n

function factorial(n) {
    if(n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
}

console.log(factorial(2));

// 식별자 호출(foo가 아님!! factorial이 식별자)
var factorial = function foo(n) {
    if(n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 위 재귀 함수 반복문을 while 문을 사용하여 출력하기
function factorial(n) {
    if(n <= 1) return 1;

    var res = n;
    while(--n) res *= n;
    return res;
}

console.log(factorial(5));


// 중첩 함수
function outer() {
    var x = 1;

    // 중첩 함수
    function inner() {
        var y = 2;
        // 외부 함수의 변수를 참조할 수 있다
        console.log(x + y); // 3
    }
    inner();
}
outer(); // 메서드 호출로 출력


// 콜백 함수
// 외부에서 전달받은 f를 n만큼 반복 호출한다
function repeat(n, f) {
    for(var i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function (i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll);

var logOdds = function (i) {
    if (i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds);

// 콜백 함수를 통해 비동기 처리
// document.getElementById('myButton').addEventListener('click', function() {
//     console.log('button clicked!');
// });

// 1초 후에 메세지를 출력
// setTimeout(function () {
//     console.log('1초 경과');
// }, 1000);









