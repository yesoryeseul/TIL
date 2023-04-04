'use strict';

// 자바스크립트 언어는 프로토타입 기반의 객체지향 프로그래밍 언어이다.

// 자바스크립트를 이루고 있는 거의 "모든 것"이 객체


// 19-1) 객체지향 프로그래밍
// 객체지향 프로그래밍은 실세계의 실체를 인식하는 사고를 프로그래밍에 접목하려는 시도에서 시작하며,
// 실체는 특징이나 성질을 나타내는 속성(attribute)을 가지고 있다

// 다양한 속성 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 추상화(abstraction)라고 한다.

// 객체지향 프로그래밍은 객체의 상태(state)를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작(behavior)을 하나의 논리적 단위로 묶어 생각한다.

// 상태 데이터 : 프로퍼티(property), 동작 : 메서드 (method)

// 19-2) 상속과 프로토타입
// 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.

// 중복 제거 예제

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
}

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea());
console.log(circle2.getArea());

// 19-2) 프로토타입 객체
// 프로토타입 객체는 객체 간 상속(inheritance)을 구현하기 위해 사용된다
// 프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티(메서드 포함)를 제공한다. 프로토타입을 상속받은 하위(자식) 객체는  상위 객체의 프로퍼티를 자신의 프로퍼티처럼 사용할 수 있다

// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가짐

// 모든 객체는 하나의 프로토타입을 가지며, 모든 프로토타입은 생성자 함수와 연결되어 있다.


// 19-3.1) __proto__ 접근자 프로퍼티
// [[Prototype]] 내부 슬롯에는 직접 접근 불가하나, __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 자신의 [[Prototype]] 내부 슬롯이 가리키는 프로토타입에 간접적으로 접근할 수 있다.

// 콘솔 확인
// const person = { name: 'Hong' };
// person
// {name: 'Hong'}
// name: "Hong"
// [[Prototype]]: Object


// 접근자 프로퍼티는 자체적으로는 값([[Value]] 프로퍼티 어트리뷰트)을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(accessor function), 즉 [[Get]], [[Set]] 프로퍼티 어트리뷰로 구성된 프로퍼티다.

// Object.prototype의 접근자 프로퍼티인 __proto__ 는 getter/setter 함수라고 부르는 접근자 함수 ([[Get]], [[Set]] 프로퍼티 어트리뷰트에 할당된 함수)를 통해 내부 슬롯의 값, 즉 프로토타입을 취득하거나 할당

// 객체 obj 선언
const obj = {}; 
// 객체 parent에 x: 1, 키: 값 할당
const parent = { x: 1 };

console.log(parent.x); // 1

// getter 함수인 get__proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set__proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent; // const obj = { x: 1 }; 이 상태가 됨

console.log(obj.x); // 1


// 모든 객체는 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다
const person1 = { name: 'Kim' };

// person1 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person1.hasOwnProperty('__proto__')); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입인 Object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {enumerable: false, configurable: true, get: ƒ, set: ƒ}

// 모든 객체는 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다
console.log({}.__proto__ === Object.prototype); // true


// 프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다.
const parent1 = {};
const child1 = {};

// child1의 프로토타입을 parent로 설정
child1.__proto__ = parent1;

// 역으로하면 오류
// parent1.__proto__ = child1; // TypeError: Cyclic __proto__ value


// __proto__ 접근자 프로퍼티는 최신 문법이라 호환성을 고려하여 코드내에 직접 사용하는 것은 권장하지 않는다.

// 따라서 __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 싶은 경우에는 Object.getPrototypeOf 메서드를 사용히고, 프로토타입을 교체하고 싶은 경우에는 Object.setPrototypeOf 메서드를 사용 권장

const obj1 = {};
const parent2 = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj1); // obj1.__proto__

// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj1, parent2); // obj1.__proto__ = parent2;

console.log(obj1.x); // 1


// 생성자로 호출할 수 없는 함수, 즉 non-constructor 인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.

// 화살표 함수는 non-constructor
const Person = name => {
    this.name = name;
}
// prototype 프로퍼티를 소유하지 않는다
console.log(Person.hasOwnProperty('prototype')); // false
// 프로토타입도 생성하지 않는다.
console.log(Person.prototype); // undefined

// ES6 메서드 축약 표현으로 정의한 메서드 또한 non-constructor
const obj2 = {
    foo() {}
};
// prototype 프로퍼티를 소유하지 않는다
console.log(obj2.hasOwnProperty('prototype')); // false
// 프로토타입도 생성하지 않는다.
console.log(obj2.prototype); // undefined

// 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍pair으로 존재한다.

// 19-5) 프로토타입의 생성 시점
// 결국 모든 객체는 생성자 함수와 연결되어 있다.
// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.

console.log(Person1.prototype);

function Person1(name) {
    this.name = name;
}

// {constructor: ƒ}
// constructor: ƒ Person1(name)
// [[Prototype]]: Object

// 19-6) 객체 생성 방식과 프로토타입의 결정

// 객체 리터럴 -> 내부에 프로퍼티를 추가
const obj3 = { x: 1 };
console.log(obj3.constructor === Object); // true
console.log(obj3.hasOwnProperty('x')); // true

// Object 생성자 함수 -> 일단 빈 객체를 생성하고 그 이후 프로퍼티를 추가하는 방식
const obj4 = new Object();
obj4.x = 1;
console.log(obj4.constructor === Object); // true
console.log(obj4.hasOwnProperty('x')); // true

// 생성자 함수 -> constructor 뿐
function People(name) {
    this.name = name;
}

// 프로토타입 메서드
People.prototype.sayHello = function() {
    console.log(`Hi! My name is ${this.name}`);
}

const me = new People('Na');
const you = new People('Lee');

me.sayHello(); // Hi! My name is Na
you.sayHello(); // Hi! My name is Lee

// People 생성자 함수를 통해 생성된 모든 객체는 프로토타입에 추가된 sayHello 메서드를 상속받아 자신의 메서드처럼 사용할 수 있다.


// 19-7) 프로토타입 체인
// 자바스크립트는 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 같다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이를 프로토타입 체인이라고 한다. 프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.


// 19-8) 오버라이딩과 프로퍼티 섀도잉
// 인스턴스 메서드는 프로토타입 메서드를 오버라이딩(재정의) 할 수 있고, 이때 프로토타입 메서드는 가져지는데 이를 프로퍼티 섀도잉(property shadowing) 이라 한다.

// 하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능

// 19-9) 프로토타입의 교체
// 프로토타입은 임의의 다른 객체로 변경할 수 있다. 이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다.
// 이러한 특징을 활용하여 객체 간의 상속 관례를 동적으로 변경할 수 있다.
// 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.

// Person2 생성자 함수가 생성할 객체의 프로토타입을 객체 리터럴로 교체한 것
const Person2 = (function () {
    function Person2(name) {
        this.name = name;
    }

    // 1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person2.prototype = {
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };
    return Person2;
}());

const me2 = new Person2('Lee');

// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me2.constructor === Object); // true
// console.log(me2.constructor === Person2); // false

// 그렇다면 프로토타입으로 교체한 객체 리터럴에 constructor 프로퍼티를 추가한다면, 프로토타입의 constructor 프로퍼티를 되살릴 수 있다.

const Person3 = (function () {
    function Person3(name) {
        this.name = name;
    };

    Person3.prototype = {
        // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
        constructor: Person3,
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };
    return Person3;
}());

const me3 = new Person3('Kim');

console.log(me3.constructor === Person3); // true
// console.log(me3.constructor === Object); // false


// 그렇다면, 프로토타입으로 교체한 객체 리터럴에 constructor 프로퍼티를 추가하고 생성자 함수의 prototype 프로퍼티를 재설정하여 파괴된 생성자 함수와 프로토타입 간의 연결을 되살려보자

function Person4(name) {
    this.name = name;
}

const me4 = new Person4('Mark');

// 프로토타입으로 교체할 객체
const parent4 = {
    // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor: Person4,
    sayHello() {
        console.log(`Hi! My name is ${this.name}`);
    }
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person4.prototype = parent4;

// me4 객체의 프로토타입을 parent4 객체로 교체한다.
Object.setPrototypeOf(me4, parent4);
// 위 코드는 아래의 코드와 동일하게 동작한다.
// me4.__proto__ = parent4;

me4.sayHello();

// constructor 프로퍼티가 생성자 함수를 가리킨다.
console.log(me4.constructor === Person4); // true
console.log(me4.constructor === Object); // false

// 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킨다.
console.log(Person4.prototype === Object.getPrototypeOf(me4)); // true

// 꽤나 번거로운 과정! > 따라서 프로토타입은 직접 교체하는 것보다 상속 관계를 인위적으로 설정하는 직접 상속이 더 편리하고 안전.


// 19-10) instanceof 

// 19-11) 직접 상속
// 19-11.1) Object.create에 의한 직접 상속
// 첫 번째 매개변수에 전달한 객체의 프로토타입 체인에 속하는 객체를 생성한다.
// 즉, 객체를 생성하면서 직접적으로 상속을 구현하는 것이다.

// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
let obj5 = Object.create(null);
console.log(Object.getPrototypeOf(obj5) === null); // true
// Object.prototype을 상속받지 못한다.
// console.log(obj5.toString()); // TypeError: obj5.toString is not a function

// obj5 -> Object.prototype -> null
// obj5 = {}; , new 연산자 없이 객체 생성
obj5 = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj5) === Object.prototype); // true

// obj5 -> Object.prototype -> null
// obj5 = { x: 1 };와 동일하다
obj5 = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true }
});
// 위 코드는 아래와 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj5.x); // 1
console.log(Object.getPrototypeOf(obj5) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj5 -> myProto -> Object.prototype -> null
obj5 = Object.create(myProto); 
console.log(obj5.x); // 10
console.log(Object.getPrototypeOf(obj5) === myProto); // true

// 생성자 함수
function Person5(name) {
    this.name = name;
}
// obj5 -> Person5.prototype -> Object.prototype -> null
obj5 = Object.create(Person5.prototype);
obj5.name = 'Lee';
console.log(obj5.name); // Lee
console.log(Object.getPrototypeOf(obj5) === Person5.prototype); // true

// Object.create의 장점
// - new 연산자가 없이도 객체를 생성할 수 있다.
// - 프로토타입을 지정하면서 객체를 생성할 수 있다.
// - 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.

// 19-11.2) 객체 리터럴 내부에서 __proto__ 에 의한 직접 상속
const myProto1 = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj6 = {
    y: 20,
    // 객체를 직접 상속받는다.
    // obj6 -> myProto1 -> Object.prototype -> null
    __proto__: myProto1
};

/* 위 코드는 아래와 동일하다.
const obj6 = Object.create(myProto1, {
    y: { value: 1, writable: true, enumerable: true, configurable: true }
});
*/

console.log(obj6.x, obj6.y); // 10 20
console.log(Object.getPrototypeOf(obj6) === myProto1); // true


// 19-12) 정적 프로퍼티/메서드
// : 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드

// 19-13) 프로퍼티 존재 확인

// 19-13.1) in 연산자
/**
 * key: 프로퍼티 키를 나타내는 문자열
 * object: 객체로 평가되는 표현식
 */

// key in object

const person6 = {
    name: 'Lee',
    address: 'Seoul'
};

console.log('name' in person6); // true
console.log('address' in person6); // true
console.log('age' in person6); // false

console.log('toString' in person6); // true
// -> toString은 Object.prototype의 메서드다.

// * in 연산자 대신 ES6에서 도입된 Reflect.has 메서드를 사용할 수도 있다.
const person7 = { name: 'Mark' };

console.log(Reflect.has(person6, 'name')); // true
console.log(Reflect.has(person6, 'toString')); // true

// 19-13.2) Object.prototype.hasOwnProperty 메서드를 사용해도 객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.

console.log(person7.hasOwnProperty('name')); // true
console.log(person7.hasOwnProperty('age')); // false
console.log(person7.hasOwnProperty('toString')); // false

// 19-14) 프로퍼티 열거
// 19-14.1) for...in 문
// 객체의 모든 프로퍼티를 순회하며 열거
// for(변수선언문 in 객체) {...}

for(const key in person6) {
    console.log(key + ': ' + person6[key]);
};

// name: Lee
// address: Seoul

// 더 자세히 말하자마면, for...in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.

const person8 = {
    name: 'Mark',
    address: 'SM',
    __proto__: { age: 25 }
};

for (const key in person8) {
    console.log(key+ ': ' + person8[key]);
}

// name: Mark
// address: SM
// age: 25

// * 프로퍼티가 심벌인 프로퍼티는 열거하지 않음!

// for...in 문은 객체 자신의 고유 프로퍼티뿐 아니라 상속받은 프로퍼티도 열거한다. 
// 따라서 Object.prototype.hasOwnProperty(*권장) 메서드를 사용하여 객체 자신의 프로퍼티인지 확인하는 추가 처리가 필요하다.

console.log(Object.keys(person8)); // ['name', 'address']

// ES8에서 Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환
console.log(Object.values(person8)); // ['name', 'address']

// ES9에서 Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.
console.log(Object.entries(person8));
// ['name', 'Mark'], ['address', 'SM']

Object.entries(person8).forEach(([key, value]) => console.log(key, value));

/*
name Mark
address SM
*/