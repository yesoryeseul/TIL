/*
  # 스프레드 문법
  - ES6 에서 도입된 스프레드 문법(spread syntax, 전개 문법)
    ... 은 하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서(전개, 분산하여, spread) 개별적인 값들의 목록으로 만든다

  - 스프레드 문법은 사용할 수 있는 대상은 Array, String, Map, DOM 컬렉션(NodeList, HTMLCollection), arguments와 같이 for...of 문으로 순회할 수 있는 이터러블에 한정된다
*/

// [1, 2, 3] 을 개별 요소로 분리
console.log(...[1, 2, 3]); // 1 2 3

/*
  ->  여기서 1 2 3 은 값이  아닌 값의 목록.
      즉, 스프레드 문법의 결과는 값이 아니다
      이는 스프레드 문법 ... 이 피연산자를 연산하여 값을 생성하는 연산자가 아님을 의미한다.
      따라서 스프레드 문법의 결과는 변수에 할당할 수 없디
*/
// const list = ...[1,2,3]; // SyntaxError: Unexpected token '...'

// 문자열은 이터러블이다
console.log(...'Hello'); // H e l l o

// Map과 Set은 이터러블이다
console.log(... new Map([['a', 1], ['b', 2]])); // [ 'a', 1 ] [ 'b', 2 ]
console.log(... new Set([1, 2, 3])); // 1 2 3 

// ** 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다
// console.log(... { a: 1, b: 2 }); // TypeError: Found non-callable @@iterator

/*
  - 이처럼 스프레드 문법의 결과들은 값으로 사용할 수 없고,
    1. 함수 호출문의 인수 목록
    2. 배열 리터럴의 요소 목록
    3. 객체 리터럴의 프로퍼티 목록
    의 값의 목록을 사용하여 문맥에서만 사용할 수 있다
*/

// 1. 함수 호출문의 인수 목록에서 사용하는 경우
// Math.max 메서드의 사용

const arr = [1, 2, 3];

const max = Math.max(arr); 
console.log(max) // NaN

// -> Math.max 메서드는 매개변수를 확정할 수 없는 가변 인자 함수, 다음과 같이 개수가 정해져 있지 않은 여러 개의 숫자를 인수로 전달받아 인수 중에 최대값을 반환

console.log(Math.max(1, 2)); // 2
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max([1, 2, 3])); // NaN
// -> 이 문제를 해결하기 위헤!
/*
  배열을 펼쳐서 요소들을 개별적인 값들의 목록으로 만든 후, Math.max 메서드의 인수로 전달해야 한다.
  즉, [1, 2, 3]을 1, 2, 3으로 펼쳐서 Math.max 메서드의 인수로 전달해야 한다
*/

const arr1 = [1, 2, 3];

const max2 = Math.max(...arr1);
console.log(max2); // 3

// 2. 배열 리터럴 내부에서 사용하는 경우

// 문자를 합치고 싶을 때
// ES5 의 경우 concat
var arr2 = [1, 2].concat([3, 4]);
console.log(arr2); // [ 1, 2, 3, 4 ]

// ES6 이후 스프레드 문법
const arr3 = [... [1, 2], ... [3, 4]];
console.log(arr3); // [ 1, 2, 3, 4 ]

// -> 메서드의 사용없이 배열을 결합할 수 있으며 가독성도 좋다는 장점

// 배열의 요소를 삽입하고 싶을 때 ES5 방식은 Function.prototype.apply 와 concat 메서드를 사용해야하는 번거로움이 있다면

// ES6는
const arr4 = [1, 4];
const arr5 = [2, 3];

arr4.splice(1, 0, ...arr5);
console.log(arr4); // [ 1, 2, 3, 4 ]

// 배열 복사( 얕은 복사 )
// ES5
var origin = [1, 2];
var copy = origin.slice();

console.log(copy); // [1, 2]
console.log(origin === copy); // false

// ES6
const origin6 = [1, 2];
const copy6 = [...origin6];

console.log(copy6); // [1, 2]
console.log(origin6 === copy6); // false

// - 이터러블을 배열로 반환
// ES5의 경우 Function.prototype.apply 또는 Function.prototype.call 메서드를 사용하여 slice 메서드를 호출해야 한다.

// ES5
function sumFunc() {
  var argu = Array.prototype.slice.call(arguments);

  return argu.reduce(function(pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sumFunc(1, 2, 3)); // 6

// -> 이 방법은 이터러블뿐만 아니라 이터러블이 아닌 유사 배열 객체도 배열로 변환할 수 있다.
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};

const arrL = Array.prototype.slice.call(arrayLike);
console.log(arrL); // [1, 2, 3]
console.log(Array.isArray(arrL)); // true

// -> ES6 스프레드 문법으로 더 간결하게 표현할 수 있다
function sumFunc6() {
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sumFunc6(3, 4, 5)); // 12


// -> Rest 파라미터로 더 간결하게 표현 가능하다(Rest 파라미터는 인수들의 목록을 배열로 전달받는다)
const sumRest = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sumRest(2, 3, 4)); // 9


// * 단 이터러블이 아닌 유사 배열 객체는 스프레드 문법의 대상이 될 수 없다
// -> Array.from 메서드를 사용하여 유사배열 객체를 배열로 변경할 수 있다

const arrayLike2 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};

// const arrL2 = [...arrayLike2]; // TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))

console.log(Array.from(arrayLike2)); // [1, 2, 3]

// 3. 객체 리터럴 내부에서 사용하는 경우
// -> 스프레드 문법의 대상은 이터러블이어야 하지만 2021 TC39 stage 4 의 스프레드 프로퍼티 제안은 일반 객체를 대상으로도 스프레드 문법의 사용을 허용

const obj = { x: 1, y: 2 };
const cpy = { ... obj };
console.log(cpy); // { x: 1, y: 2 }
console.log(obj === cpy); // false

// 객체 병합
const merged = { x: 1, y: 2, ... { a: 3, b: 4 }};
console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }

// 스프레드 프로프터 제안 이전에는 ES6에서 도입된 Object.assign 메서드를 사용하여 병합하거나 특정 프로퍼티를 변경 또는 추가하는 방식 사용
const merged2 = Object.assign({}, { a: 10, b: 20 }, { b: 25, c: 30 }, { d: 0 });
console.log(merged2); // { a: 10, b: 25, c: 30, d: 0 };
// -> 프로퍼티가 증복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다

// -> 스프레드 문법으로 표현해보면
const merged3 = {... { a: 10, b: 20 }, ... { b: 25, c: 30 }, c: 100, d: 0};
console.log(merged3); // { a: 10, b: 25, c: 100, d: 0 }




