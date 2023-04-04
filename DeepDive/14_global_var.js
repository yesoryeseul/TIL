'use strict';

// 전역 변수
var x = 'global';

function foo() {
    console.log(x); // 출력 값 예상? undefined
    var x = 'local';
}

foo(); // 출력 값 예상? undefined
console.log(x); // 출력 값 예상? global


// 전역 변수의 문제점 
// 1. 암묵적 결합의 허용
// 변수의 유효 범위가 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.

// 2. 긴 생명 주기
// 전역 변수는 생명 주기가 길다. 따라서 메모리 리소스도 오랜 기간 소비한다.
// var 키워드는 변수의 중복 선언을 허용하므로 생명주기가 긴 전역 변수는 변수 이름이 중복될 가능성이 있다. 변수 이름이 중복되면 의도치 않은 재할당이 이뤄진다

var x = 1;
// ...
// 변수의 중복 선언. 기존 변수에 값을 재할당한다.
var x = 100;
console.log(x);


// 전역 변수의 사용을 억제하는 방법
// 변수의 스코프는 좁을수록 좋다

// 1. 즉시 실행 함수
// 즉시 실행 함수는 단 한번만 호출된다.
// 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다

(function () {
    var foo = 10; // 즉시 실행 함수의 지역 변수
    // ... 
}());

console.log(foo);

// -> 전역 변수를 생성하지 않으므로 라이브러리 등에 자주 사용된다.

// 2. 네임스페이스 객체
// 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법
var MYAPP = {};

MYAPP.name = 'Lee';

console.log(MYAPP.name); // Lee

// 또 다른 네임스페이스 객체를 프로퍼티로 추가해서 계층적 구성 가능
var MYAPP = {};

MYAPP.person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log(MYAPP.person.name); // Lee

// 3. 모듈 패턴
// 클로저 기반, 전역 변수 억제 + 캡슐화(정보 은닉)
var Counter = (function() {
    // private 변수
    var num = 0;

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());


// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

