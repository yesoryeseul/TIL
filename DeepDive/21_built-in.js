// 'use strict';

// 빌트인 객체
// 전역 객체의 프로퍼티로서 제공된다. 따라서 별도의 선언 없이 전역 변수처럼 언제나 참조 가능하다

// 자바스크립트는 Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Funtion, Promise, Reflect, Proxy, JSON, Error 등 40여 개의 표준 빌트인 객체를 제공한다

// 생소한 표준 빌트인
// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp); // object

// 생성자 함수인 표준 빌트인 객체가생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체다.

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Kim');

// String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype
console.log(Object.getPrototypeOf(strObj) === String.prototype); // true


// 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체는 다양한 기능의 빌트인 프로토타입 메서드를 제공
// Number.prototype의 다양한 기능인 프로토타입 메서드를 알아보자

const numObj = new Number(1.5);

// toFixed : Number.prototype의 프로토타입 메서드다
// Number.prototype.roFixed는 소수점 자리를 반올림하여 문자열로 반환한다
console.log(numObj.toFixed()); // 2
console.log(typeof (numObj.toFixed())); // string

// isInteger : Number의 정적 메서드
// Number.isInteger는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean으로 반환
console.log(Number.isInteger(0.5)); // false
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(numObj)); // false


// 21-3) 원시값과 래퍼 객체
// 원시값은 객체가 아니므로 프로퍼티나 메서드를 가질 수 없는데도 원시값인 문자열이 마치 객체처럼 동작한다.

const str = 'yeseul';

console.log(str.length); // 6
console.log(str.toUpperCase()); // YESEUL

// 이처럼 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를
// -> 래퍼 객체(wrapper object)라고 한다.

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후 , 다시 원시값으로 되돌린다.
console.log(typeof str); // string


// 래퍼 객체의 처리가 종료되면 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값으로 원래의 상태, 즉 식별자가 원시값을 갖도록 되돌리고 래퍼 객체는 가비지 컬렉션의 대상이 된다.
const str1 = 'Hi';

// 래퍼 객체에 name 프로퍼티가 동적 추가된다.
str1.name = 'kim';
// 그러나 이 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 됨

console.log(str1.name); // undefined

console.log(typeof str1, str1); // string Hi


// 표준 빌트인 객체인 String, Number, Boolean, Symbol의 프로토 타입 메서드 또는 프로퍼티를 참조할 수 있다. 따라서 String, Number, Boolean 생성자 함수를 new연산자와 함께 호출하여 문자열, 숫자, 불리언 인스턴스를 생성할 필요가 없으며 권장하지도 않는다.

// null과 undefined는 래퍼 객체를 생성하지 않는다. Error!

// 21-4) 전역 객체, global object
// : 코드가 실행되기 이전 단계에서 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체, 어떤 객체에도 소가지 않은 최상위 객체다.

// 브라우저 환경에서는 window(또는 self, this, frames)가 전역 객체를 가리키지만 Node.js 환경에서는 global이 전역 객체를 가리킨다.

globalThis === this; // true
globalThis === window; // true
globalThis === self; // true
globalThis === frames; // true

// 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
// 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다.

// 문자열 F를 16진수로 해석하여 10진수로 변환하여 반환
window.parseInt('F', 16);

// window.parseInt는 parseInt로 호출할 수 있다.
parseInt('F', 16);


// 선언하지 않은 변수에 값을 암묵적 전역, bar는 전역변수가 아니라 전역 객체의 프로퍼티다
bar = 2;
console.log(window.bar); // 2

// let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다

let foo = 2; 
console.log(window.foo); // undefined


// *빌트인 전역 함수
// eval
// 문자열을 인수로 전달받음
// - 전달받은 문자열 코드가 표현식이라면 eval 함수는 문자열 코드를 런타임에 평가하여 값을 생성
// - 전달받은 인수가 표현식이 아닌 문이라면 eval 함수는 문자열 코드를 런타임에 실행

// 표현식인 문
eval('1 + 2;'); // 3, number

// 표현식이 아닌 문
eval('var x = 5;'); // undefined

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval('({ a: 1 })');
console.log(o); //  a: 1 }

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval('(function() { return 1; })');
console.log(f()); // 1



const x1 = 10;

function foo1() {
    'use strict';

    // strict mode에서는 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
    eval('var x1 = 2; console.log(x1);');
    console.log(x1); // 10
}

foo1();
console.log(x1); // 10

// let, const 키워드를 사용한 변수 선언문이라면 암묵적으로 strict mode가 적용

// isFinite
// : 전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true를 반환하고, 무한수이면 false를 반환한다 (NaN으로 평가되는 값도 false)

isFinite(0); // true
isFinite(2e62); // true
isFinite('10'); // true: '10' -> 10
isFinite(null); // true: null -> 0

isFinite(Infinity); // false
isFinite(-Infinity); // false

isFinite(NaN); // false
isFinite('Hello'); // false
isFinite('2023/01/23'); // false

// isNaN
// : 전달받은 인수가 NaN인지 검사하여 그 결과를 불리언 타입으로 반환한다. 전달받은 인수의 타입이 숫자가 아닌 경우 숫자로 타입을 변환한 후 검사를 수행한다.

// 숫자
isNaN(NaN); // true, 놀랍게도 NaN의 type은 number이다..
isNaN(10); // true

// 문자열
isNaN('abc'); // true: 'abc' -> NaN
isNaN('10'); // false: '10' -> 10
isNaN('10.12'); // false: '10.12' -> 10.12
isNaN(''); // false: '' -> 0
isNaN('  '); // false: '  ' -> 0

// 불리언
isNaN(true); // false: true -> 1
isNaN(null); // false: null -> 0

// undefined
isNaN(undefined); // true: undefined -> NaN

// 객체
isNaN({}); // true: {} -> NaN

// date
isNaN(new Date()); // false: new Date() -> Number
isNaN(new Date().toString()); // true: String -> NaN

// parseFloat
// : 전달받은 문자열 인수를 부동 소수점 숫자, 즉 실수로 해석(parsing)하여 반환한다.

// 문자열을 실수로 해석
parseFloat('3.14'); // 3.14

// 공백으로 구분된 문자열은 첫 번째 문자열만 반환
parseFloat('40 years'); // 40

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다
parseFloat('he was 40'); // NaN

// 앞뒤 공백은 무시
parseFloat(' 50 '); // 50



// 암묵적 전역(implicit global)

console.log(x2); // undefined, 호이스팅

// console.log(y); // ReferenceError: y is not defined

var x2 = 10;

function foo2() {
    // 선언하지 않은 식별자에 값을 할당
    y = 20; // window.y = 20;
}

foo2();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(x2+y); // 30

delete x2; // 삭제 x
delete y; // 삭제  o

console.log(x2); // 10
// console.log(y); // ReferenceError: y is not defined

// foo2 함수의 스코프와 전역 스코프 어디에서도 y 변수의 선언을 찾을 수 없으므로 참조 에러가 발생한다. 하지만 JS 엔진은 y = 20을 window.y = 20으로 해석하여 전역 객체에 프로프터를 동적 생성한다. 전역 변수처럼 동작하는데 이러한 현상을 암묵적 전역(implicit global) 이라 한다

// 하지만 y  = 20 은 전역 변수가 아니라 단지 전역 객체의 프로퍼티이므로 호이스팅이 발생하지 않고 레퍼런스 에러가 발생한다.

// 전역 변수는 delete가 불가하나 전역 객체의 프로퍼티는 delete로 삭제할 수 있다