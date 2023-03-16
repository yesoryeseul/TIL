/*
  # 이터레이션 프로토콜
  - ES6 도입, 순회 가능한 데이터 컬렉션(자료구조)을 만들기 위해 ECMAscript 사양에 정의하여 미리 약속한 규칙

  - ES6 이전 : for문, for...in문, forEach
  - ES6 : 이터레이션 프로토콜 준수하는 for ... of, 스프레드 문법, 배열 디스트럭처링
*/

/*
  # 이터레이션 프로토콜
  - 이터러블 프로토콜   : Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 이터레이터를 반환
  - 이터레이터 프로토콜 : 
*/

// 이터러블 : Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체
const iterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

console.log(iterable([])); // true
console.log(iterable('')); // true
console.log(iterable(new Map())); // true
console.log(iterable(new Set())); // true
console.log(iterable({})); // false

// 이터러블은 for ... of 문으로 순회할 수 있다
const array = [1, 2, 3];

console.log(Symbol.iterator in array); // true
// -> 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블

for(const item of array) {
  console.log(item);
}
// 1 2 3

// 이터러블 배열은 스프레드 문법의 대상으로 사용할 수 있다
console.log([...array]); // [ 1, 2, 3 ]

// 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
const [a, ...rest] = array;
console.log(a, rest); // 1, [2, 3];

// 일반 객체는 이터러블 프로토콜이 적용 불가하다. but, 2021에서 제안한 일반 객체에 스프레드 문법 사용을 허용
// 일반 객체 예시
const obj = {
  a: 1,
  b: 2
}

console.log({...obj}); // { a: 1, b: 2 } 2021에서 스프레드 문법 사용은 허용

// 이터레이터 : Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다. 이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 *next 메서드를 갖는다.

const array1 = [1, 2, 3];

const iterator = array1[Symbol.iterator]();

console.log('next' in iterator); // true
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// value: 현재 순회중인 이터러블의 값, done: 이터러블의 순회 완료 여부

/*
  # for...of 문
  - for (변수선언문 of 이터러블) { ... }
  - 내부적으로 이터레이터의 next 메서드를 호출하여 이터러블을 순회하며 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값을 for...of 문의 변수에 할당한다. 그리고 이터레이터 리절트 객체의 done 프로퍼티 값이 false이면 이터러블의 순회를 계속하고 true이면 이터러블의 순회를 중단한다.
*/

// 예제
for(const item of [1, 2, 3]) {
  console.log(item); // item 변수에 순차적으로 1, 2, 3이 할당된다
}

/*
  # 이터러블과 유사 객체
  - 유사 배열 객체 : 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 갖는 객체
  - 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있고, 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로 가지므로 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
*/

const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};

for(let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]); // 1 2 3 순서대로 출력
}

// -> 그러나 유사 배열 객체는 일반 객체이므로 Symbole.iterator 메서드가 없기 때문에 for...of문으로 순회할 수 없다

// -> ES6에 도입된 Array.from 으로 순회할 수는 있다!

const arr = Array.from(arrayLike);
console.log(arr); // [ 1, 2, 3 ]

// 이터러블을 생성하는 함수
// 피보나치 이터러블 예시

// 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수
// 수열의 최대값을 인수로 전달받는다.
const fibonacciFunc = function(max) {
  let [pre, cur] = [0, 1];

  // Symbol.iterator 메서드를 구현한 이터러블을 반환한다
  return {
    [Symbol.iterator]() {
      return {
        next() {
          [pre, cur] = [cur, pre+cur];
          return { value: cur, done: cur >= max };
        }
      };
    }
  };
};

for( const num of fibonacciFunc(10)) {
  console.log(num); // 1 2 3 5 8 순서대로 출력
}

// 이터러블이면서 이터레이터인 객체를 생성하는 함수
// 앞의 fibonacciFunc 함수는 이터러블을 반환함.
// 이터레이터를 생성하려면 이터러블의 Symbol.iterator 메서들 호출해야한다.

const iterable1 = fibonacciFunc(5);
const iterator1 = iterable1[Symbol.iterator]();

console.log(iterator1.next()); // { value: 1, done: false }
console.log(iterator1.next()); // { value: 2, done: false }
console.log(iterator1.next()); // { value: 3, done: false }
console.log(iterator1.next()); // { value: 5, done: false }
console.log(iterator1.next()); // { value: 8, done: true }

