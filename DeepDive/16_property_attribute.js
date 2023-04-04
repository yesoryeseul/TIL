'use strict';

// 데이터 프로퍼티
const person = {
    name: 'Lee'
};

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

// age: {value: 20, writable: true, enumerable: true, configurable: true}
// name: {value: 'Lee', writable: true, enumerable: true, configurable: true}
// [[Prototype]]: Object

// 접근자 프로퍼티

// 접근자 함수는 getter/setter 함수라고도 부른다
const person2 = {
    // 데이터 프로퍼티
    firstName: 'Ungmo',
    lastName: 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
        // 배열 디스트럭처링 할당
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person2.firstName + ' ' + person2.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다
person2.fullName = 'Heegun Lee';
console.log(person2);  // {firstName: 'Heegun', lastName: 'Lee'}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼치 fullName에 접근하면 getter 함수가 호출된다.
console.log(person2.fullName); // Heegun Lee

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
console.log(descriptor);
// {value: 'Heegun', writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person2, 'fullName');
console.log(descriptor);
// {enumerable: true, configurable: true, get: ƒ, set: ƒ}



// 프로퍼티 정의
// Object.defineProperty -> 프로퍼티 어트리뷰트를 정의할 수 있다
const person3 = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person3, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person3, 'lastName', {
    value: 'Lee'
});

let descriptor3 = Object.getOwnPropertyDescriptor(person3, 'firstName');
console.log('firstName', descriptor3);
// firstName {value: 'Ungmo', writable: true, enumerable: true, configurable: true}

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다
descriptor3 = Object.getOwnPropertyDescriptor(person3, 'lastName');
console.log('lastName', descriptor3);
// lastName {value: 'Lee', writable: false, enumerable: false, configurable: false}

// [[Enumerable]] 의 값이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person3)); // ['firstName']

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// lastName의 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
person3.name = 'Kim'; // 이때 값을 변경하면 에러는 발생하지 않고 무시된다.

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person3, 'lastName', { enumerable: true });
// Uncaught TypeError: Cannot redefine property: lastName