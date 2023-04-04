'use strict';

// 함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있다
// 매개변수의 스코프가 함수 몸체 내부로 한정되기 때문이다.


// 변수 x는 이름이 동일한 식별자이지만 스코프가 다른 별개의 변수
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo(); // local

console.log(x); // global


// 스코프 체인에 의한 함수 검샥

// 전역 함수
function foo() {
    console.log('global function foo');
}

function bar() {
    //중첩 함수
    function foo() {
        console.log('local function foo');
    }
    foo();
}

bar(); // local function foo



// 렉시컬 스코프
// 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정
var x = 1; // 전역변수

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x); // 전역변수 var x = 1; 을 참조
}

foo(); // ? -> 1
bar(); // ? -> 1