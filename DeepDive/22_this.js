

// this

// this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다
// this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.


// 단, this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

// this는 코드 어디에서든 참조 가능하며, 전역에서도 함수 내부에서도 참조할 수 있다.

// 예제
// this는 코드 어디에서는 참조 가능
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); // window

function square(number) {
    // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
    console.log(this); // window
    return number * number;
}
square(2);

const person = {
    name: 'Kim',
    getName() {
        // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
        console.log(this); // {name: 'Kim', getName: f}
        return this.name;
    }
};
console.log(person.getName()); // Kim

function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this); // Person {name: 'Lee'}
}

const me = new Person('Lee');

// * this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로,
// 일반적으로 객체의 메서드 내부 또는 생성자 함수 내부에서만 의미가 있다
// 즉, strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.(일반 함수 내부에서 this를 사용할 필요가 없기 때문)


// 22.2 함수 호출 방식과 this 바인딩

// this 바인딩(this에 바인딩될 값)은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.

// 어떤 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.

// 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위한 방법

// 1)
var value = 1;

const obj = {
    value: 100,
    foo() {
        // this 바인딩(obj)을 변수 that에 할당한다.
        const that = this;

        // 콜백 함수 내부에서 this 대신 that을 참조한다.
        setTimeout(function () {
            console.log(that.value); // 100
        }, 100);
    }
};

obj.foo();

// 2) this를 명시적으로 바인딩 Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메서드 제공

var value2 = 1;

const obj2 = {
    value2: 100,
    foo() {

        // 콜백 함수에 명시적으로 this를 바인딩한다
        setTimeout(function () {
            console.log(this.value2); // 100
        }.bind(this), 100);
    }
};

obj2.foo();


// 3) 화살표 함수


var value3 = 1;

const obj3 = {
    value3: 100,
    foo() {
        // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
        setTimeout(() => console.log(this.value3), 100); // 100
    }
};

obj3.foo();


// 22.2.2) 메서드 호출
// 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩 되는데
// 주의할 것은 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다는 것이다

const person2 = {
    name: 'Jang',
    getName() {
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
        return this.name;
    }
};

// 메서드 getName을 호출한 객체는 person2이다
console.log(person2.getName());

// 이 getName 메서드는 다른 객체의 프로퍼티에 할당하는 것으로
// 1) 다른 객체의 메서드가 될 수도 있고,
// 2) 일반 변수에 할당하여 일반 함수로 호출될 수도 있다.

const anotherPerson = {
    name: 'Park'
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person2.getName;

// getName 메서드를 호출한 객체는 anotherPerson이다
console.log(anotherPerson.getName()); // Park

// getName 메서드를 변수에 할당
const getName = person2.getName;

// getName 메서드를 일반 함수로 호출
console.log(getName()); // ''
// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다


// 22.2.3 생성자 함수 호출
// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다. 즉, 일반적인 함수의 호출이다.
const circle3 = Circle(15);

// 일반 함수로 호출된 Circle에는 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined

// 일반 함수로 호출된 Circle 내부의 this 전역 객체를 가리킨다.
console.log(radius); // 15

// 22.2.4 Function.prototype.apply/call/bind 메서드에 의한 간접 호출
function getThisBinding() {
    return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding()); // window

// getThisBinding 함수를 호출하면서 인수로 전달할 객체를 getThisBinding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // {a: 1}
console.log(getThisBinding.call(thisArg)); // {a: 1}

// apply와 call 메서드의 본질적인 기능은 함수를 호출하는 것이다

// 위 예제는 getThisBinding 함수에 인수를 전달하지 않으므로 apply와 call 메서드를 통해 getThisBinding 함수를 호출하면서 인수를 전달해보자

function getThisBinding1() {
    console.log(arguments);
    return this;
}

// this로 사용할 객체
const thisArg1 = { a: 1 };

// getThisBinding 함수를 호출하면서 인수를 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding1.apply(thisArg1, [1, 2, 3]));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// {a: 1}

// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding1.call(thisArg1, 1, 2, 3));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// {a: 1}

// apply와 call 메서드의 대표적인 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우다. arguments 객체는 배열이 아니기 떄문에 Array.prototype.slice 같은 배열의 메서드를 사용할 수 없으나 apply와 call 메서드를 이용하면 가능하다.

function convertArgsToArray() {
    console.log(arguments); // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

    // arguments 객체를 배열로 반환
    // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.
    const arr = Array.prototype.slice.call(arguments);
    // const arr = Array.prototype.slice.apply(arguments);
    
    console.log(arr); // [1, 2, 3]
    
    return arr; 
}

convertArgsToArray(1, 2, 3);

//------356p
