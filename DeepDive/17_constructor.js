// 17장 생성자 함수에 의한 객체 생성

// 생성자(constructor) 함수란?
// : 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스(instance)

// 17-1) Object 생성자 함수
// 객체 생성 방식

// 1) 빈 객체의 생성 : new 연산자와 함께 Object 생성자 함수를 호출
const person = new Object();

// 2) 프로퍼티 추가
person.name = 'Kim';
person.sayHello = function() {
    console.log(`Hi! my name is ` + this.name);
};

console.log(person); // {name: 'Kim', sayHello: ƒ}
person.sayHello(); // Hi! my name is Kim


// 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인(built-in) 생성자 함수를 제공한다

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Kim');
console.log(typeof strObj); // object
console.log(strObj); // String {'Kim'};

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); // Number {123}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj); // Boolean {true}

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.log(func);  // ƒ anonymous(x) {return x * x}

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr); // [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp); // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date); // Sun Feb 26 2023 22:51:05 GMT+0900 (한국 표준시)

// 17-2.2) 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
//생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다
    this.radius = radius;
    this.getDiamater = function() {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체 생성

console.log(circle1.getDiamater()); // 10
console.log(circle2.getDiamater()); // 20

// *this?
// : this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referencing variable)다. 


// 생성자 함수는 new 연산자와 함께 호출하지 않으면 일반 함수로서 호출된다
const circle3 = Circle(15);

console.log(circle3); // undefined
console.log(radius); // 15

// 17-2.3) 생성자 함수의 인스턴스 생성 과정
// : 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)

// 생성자 함수
function Circle4(radius) {
    // 인스턴스 초기화
    this.radius = radius;
    this.getDiamater = function() {
        return 2 * this.radius;
    };
}

// 인스턴스 생성
const circle4 = new Circle4(5); // 반지름이 5인 Circle 객체를 생성


// 함수는 객체이므로 일반 객체와 동일하게 동작
// 일반 객체는 호출할 수 없지만 함수는 호출 가능

// 함수는 객체다
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다
foo.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다
foo.method = function() {
    console.log(this.prop);
}

foo.method(); // 10

// 함수 동작을 위한 내부 메서드 소유
// [[Call]], [[Construct]]

function foo2() {}

// 일반적인 함수로서 호출: [[Call]] -> callable, 모든 함수 객체가 가지고 있는 메서드
foo2();

// 생성자 함수로서 호출: [[Construct]] -> constructor, 모든 함수 객체가 가지고 있지 않다. non-constructor(대표: 화살표 함수)일 수도 있다
new foo2();

// new 연산자
// : new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다.
//  [[Constructor]]가 호출
//  new 연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor이어야 한다.

// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
    return x + y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
console.log(inst); // add {}

// 객체를 반환하는 일반 함수
function createUser(name, role) {
    return { name, role };
}

// 일반 함수를 new 연산자와 함께 호출
inst = new createUser('Kim', 'admin');

// 함수가 생성된 객체를 반환한다
console.log(inst); // {name: 'Kim', role: 'admin'}


// new.target
// new 연산자 없이 호출되는 것을 방지하기 위해 파스칼 케이스 컨밴션을 사용한다 하더라도 실수는 언제나 발생 가능
// new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있다.
// new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다. new 연산자 없이 일반 함수로서 호출된 함수 내부의 new target은 undefined다.


// 생성자 함수
function Circle5(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
    if(!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiamater = function() {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle5 = Circle5(5);
console.log(circle5.getDiamater()); // 10


const str = new String('123');
console.log(str, typeof str); // String {'123'} 'object'