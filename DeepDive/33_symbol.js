
/*
  # 심벌이란?
  - 변경 불가한 원시 타입의 값
  - 다른 값과 중복되지 않는 유일무이한 값
  - 주로 이름의 충돌 위험이 없는 유일한 프로퍼티 키를 만들기 위헤 사용
*/

/*
  # 심벌 값의 생성
*/
const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol
console.log(mySymbol); // symbol()

// new Symbol(); // TypeError: Symbol is not a constructor

/*
  # symbol 함수에는 선택적으로 문자열을 인수로 전달할 수 있다.
    > but, 어떠한 영향을 주지도 않아, 심벌 값에 대한 설명이 같더라도 생성된 심벌 값은 유일무이한 값이다.
*/

const mySymbol1 = Symbol('mySymbol2');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2); // false

// 심벌 값도 객체처럼 접근하면 암묵적으로 래퍼 객체를 생성
const mySymbol3 = Symbol('mySymbol');

console.log(mySymbol3.description); // mySymbol
console.log(mySymbol3.toString()); // Symbol(mySymbol)

// 심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다
const mySymbol4 = Symbol();

// console.log(mySymbol4 + ''); // TypeError: Cannot convert a Symbol value to a string
// console.log(+mySymbol4); TypeError: Cannot convert a Symbol value to a number

/* 단, 불리언 타입으로는 암묵적 타입으로 변환된다. (if문에서 존재 확인 가능) */
const mySymbol5 = Symbol();

console.log(!!mySymbol5); // true

// if 문 확인 예시
if(mySymbol5) console.log('mySymbol is not empty.'); // mySymbol is not empty.

/*
  # Symbol.for / Symbol.keyFor 메서드
  - Symbol.for 메서드는 인수로 전달받은 문자열을 키로 사용하여 키와 심벌 값의 쌍들이 저장되어 있는 전역 심벌 레지스트리에서 해당 키와 일치하는 심벌 값을 검색한다

  - Symbol.keyFor 메서드를 사용하면 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다
*/

const s1 = Symbol.for('mySymbol');
const s2 = Symbol.for('mySymbol');

console.log(s1 === s2); // true

// > 애플리케이션 전역에서 중복되지 않는 유일무이한 상수인 심벌 값을 단 하나만 생성하여 전역 심벌 레지스트리를 통해 공유 가능하다

const s3 = Symbol.for('newSymbol');
console.log(Symbol.keyFor(s3)); // newSymbol

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
const s4 = Symbol('foo');
console.log(Symbol.keyFor(s4)); // undefined


/*
  # 심벌과 프로퍼티 키
  - 객체의 프로퍼티 키는 빈 문자열을 포함하는 모든 문자열 또는 심벌 값으로 만들 수 있으며, 동적으로 생성할 수도 있다.

  - 심벌 값을 프로퍼티 키로 사용하려면 사용할 심벌 값에 대괄호를 사용해야 한다.
  - 프로퍼티에 접근할 때도 마찬가지로 대괄호를 사용해야 한다.
*/

const obj = {
  [Symbol.for('yeseul')]: 10
};

console.log(obj[Symbol.for('yeseul')]);

/*
  # 심벌과 프로퍼티 은닉
  - 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 for ... in 문이나 
    Objecct.keys, Object.getOwnPropertyNames 메서드로 찾을 수 없으므로,
    외부에 노출할 필요가 업슨 프로퍼티를 은닉할 수 있다
*/

const obj1 = {
  [Symbol.for('yeseul')]: 10
};

for (const key in obj1) {
  console.log(key); // 아무것도 출력되지 않음!
};

console.log(Object.keys(obj1)); // []
console.log(Object.getOwnPropertyNames(obj1)); // []

// -> ES6에서 도입된 Object.getOwnPropertySymbols 메서드를 사용하면 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티를 찾을 수 있다. (배열로 반환)

console.log(Object.getOwnPropertySymbols(obj1)); // [Symbol(yeseul)]

const symbol1 = Object.getOwnPropertySymbols(obj1)[0];
console.log(obj1[symbol1]); // 10

/*
  # 심벌과 표준 빌트인 객체 확장
  - 표준 빌트인 객체를 확장하는 것은 권장하지 않는다
  - * 심벌 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않아 안전
*/

// 심벌 값으로 프로퍼티 키를 동적 생성 예시
Array.prototype[Symbol.for('sum')] = function() {
  return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2][Symbol.for('sum')]()); // 3