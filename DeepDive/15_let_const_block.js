'use strict';


// var 키워드로 선언한 변수의 문제점

// 1. 변수 중복 선언 허용 : 에러가 발생하지 않음
// 의도치 않게 변수 값이 변경되는 부작용!
var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x); // 100
console.log(y); // 1

// 2. 함수 레벨 스코프
// 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 되는 문제

// 예제1
var x = 1;

if (true) {
    var x = 10;
}

console.log(x); // 10

// 예제2
var i = 10;

for(var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4 
}

console.log('-----');
console.log(i); // 5, 의도치 않게 i 변수 값이 변경


// 3. 변수 호이스팅
// var 키워드로 선언한 변수는 변수 선언문 이전에 참조할 수 있고, 이전에 참조하면 언제나 undefined를 반환한다

// 이 시점에서는 변수 호이스팅에 의해 이미 foo 변수가 선언(1. 선언 단계)
// 변수 foo는 undefined로 초기화(2. 초기화 단계)

console.log(foo); // undefined

// 변수에 값을 할당(3. 할당 단계)
foo = 123;

console.log(foo); // 123

// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행
var foo;

// -> 변수 선언문 이전에 변수를 참조하는 것은 변수 호이스팅에 의해 에러를 발생시키지는 않지만 프로그램의 흐름상 맞지 않을뿐더러 가독성을 떨어뜨리고 오류를 발생시킬 여지를 남긴다.

// --------------------------------------------------------------

// let 키워드
// var 키워드의 단점을 보완하기 위해 ES6에서 새로운 변수 선언 키워드인 let과 const 를 도입


// 1. 변수 선언 중복 금지
// let 키워드로 이름이 같은 변수 중복 선언하면 문법 에러(Syntax Error)발생
var foo = 123;

var foo = 456;

let bar = 123;
bar = 456; // 재할당은 가능!
// let bar = 456; Uncaught SyntaxError: Identifier 'bar' has already been declared


// 2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모드 코드 블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다
let foo1 = 1;

{
    let foo1 = 2; // 지역 변수
    let bar1 = 3; // 지역 변수
}

console.log(foo1); // 1
// console.log(bar1); // Uncaught ReferenceError: bar1 is not defined

// 블록 레벨 스코프의 중첩
let ia = 10;

function foo2() {
    let ia = 100;

    for(let ia = 1; ia < 3; ia++) {
        console.log(ia); // 1 2
    }

    console.log(ia); // 100
}

foo2(); 
// 1
// 2
// 100
console.log(ia); // 10

// 3. 변수 호이스팅
// var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

// console.log(foo3); // Uncaught ReferenceError: foo3 is not defined
// let foo3;

// let 키워드는 변수를 선언하기 전에 호출할 수 없다. Error!

// let은 var와 다르게 전역 객체 window로 접근할 수 없다.
let x1 = 1;

console.log(window.x1); // undefined
console.log(x1); // 1


// --------------------------------------------------------------


// const 키워드

// 상수(constant)를 선언하기 위해 사용한다.

// 1. 선언과 초기화
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
const fooC = 1;

// const fooC1; // Missing initializer in const declaration
// let과 마찬가지로 블록 레벨 스코프를 가지며, 변수 호이스팅이 발생하지 않는 것처럼 동작
{
    // console.log(fooC1); // Cannot access 'fooC1' before initialization
    const fooC1 = 1;
    console.log(fooC1);
}
// console.log(fooC1); // fooC1 is not defined

// 2. 재할당 금지
const fooC2 = 1;
// fooC2 = 2; // Assignment to constant variable

// 3. 상수,  재할당이 금지된 변수
// 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극 사용해야 한다.

// 예시
// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice); // 119

// const로 활용하여 의미 명확하게 사용하기
// -> const 의 변수명은 일반적으로 대문자로 선언해 상수임을 명확이 나타낸다
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice1 = 100;

// 세후 가격
let afterTaxPrice1 = preTaxPrice1 + (preTaxPrice1 * TAX_RATE);

console.log(afterTaxPrice1); // 110

// 4. const 키워드와 객체
// const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
const person = {
    name: 'Lee'
};

person.name = 'Kim';

console.log(person); // {name: 'Kim;}

// -> const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지 않는다
// 이때 객체가 변경되더라도 변수에 할당된 참조 값은 변경되지 않는다



// var vs. let vs. const

// - 변수 선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우에 한정해 사용하는 것이 좋다
// - const 키워드를 사용하면 의도치 않은 재할당을 방지하기 때문에 좀 더 안전하다

// * ES6를 사용한다면 var 키워드는 사용하지 않는다
// * 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
// * 변경이 발생하지 않고 읽기 전용으로 사용하는(재할당 필요 없는 상수)원시 값과 객체에는 const 키워드를 사용한다. const 키워드는 재할당을 금지하므로 var, let 키워드보다 안전하다.