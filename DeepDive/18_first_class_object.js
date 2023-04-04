'use strict';

// 18장 함수와 일급 객체(First class object)

// 일급 객체란? 
// 1) 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다
// 2) 변수나 자료구조(깩체, 배열 등)에 저장할 수 있다
// 3) 함수의 매개변수에 전달할 수 있다.
// 4) 함수의 반환값으로 사용할 수 있다.

// 1. 함수를 무명의 리터럴로 생성
// 2. 함수 num()을 변수 increase에 저장
// 3. 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다
const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

// 2. 함수는 객체에 저장할 수 있다
const auxs = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다
// 4. 함수의 반환값으로 사용할 수 있다
function makeCounter(aux) {
    let num = 0;
    
    return function () {
        num = aux(num);
        return num;
    }
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다
const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개변수에게 함수를 전달할 수 있다
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2


// * 함수가 일급 객체라는 것은 ❇️함수를 객체와 동일하게 사용❇️할 수 있다는 의미
// 객체는 값이므로 함수는 값과 동일하게 취급할 수 있다.
// 따라서, 함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면 어디서든지 리터럴로 정의할 수 있으며 런타임에 함수 객체로 평가된다.

// * 일급 객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이
// 1) 함수의 매개변수에 전달할 수 있으며
// 2) 함수의 반환값으로 사용할 수도 있다는 것

// 일반 객체와 함수 객체의 차이점
// 1) 함수 객체는 호출할 수 있다(일반 객체는 호출 불가)
// 2) 함수 고유의 프로퍼티를 소유


function sum() {
    // arguments 객체를 배열로 반환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));

// ES6 Rest parameter
function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));


// __proto__ 접근자 프로퍼티
const obj = { a:1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('__proto__')); // false


// prototype 프로퍼티
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}).hasOwnProperty('prototype'); // true
console.log((function () {}).hasOwnProperty('prototype')); // true값 확인

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); // false
console.log(({}).hasOwnProperty('prototype')); // false 확인