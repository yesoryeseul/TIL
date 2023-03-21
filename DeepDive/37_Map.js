/*
  # Map
  - 키와 값의 쌍으로 이루어진 컬렉션!
  - 키로 사용할 수 있는 값 : 객체를 포함한 모든 값
  - 이터러블 : O (객체는 X)
  - 요소 개수 확인 : map.size
*/
// Map 객체의 생성
const map = new Map();
console.log(map); // Map(0) {}

// * Map 생성자 함수는 *이터러블을 인수로 전달받아* Map 객체를 생성한다. 이떄 인수로 전달되는 이터러블은 *키와 값의 쌍으로 이루어진 요소로 구성되어야* 한다.

const map1 = new Map([['key1', 'value1'],['key2', 'value2']]);
console.log(map1); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// const map2 = new Map([1, 2]); // TypeError: Iterator value 1 is not an entry object

// 중복된 키를 갖는 요소는 존재할 수 없으므로 덮어써진다
const map3 = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map3); // Map(1) { 'key1 => 'value2' }

// Map 객체의 요소 개수를 확인할 때에는 Map.prototype.size 프로퍼티를 사용
const { size } = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size); // 2

console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));
// { get: [Function: get size], set: undefined, enumerable: false, configurable: true }

// size 프로퍼티에 숫자를 할당하여 Map 객체의 요소 개수를 변경할 수 없다.
map3.size = 10;
console.log(map3.size); // 무시된다

// Map 객체의 요소를 추가할 때에는 Map.prototype.set 프로퍼티를 사용
// cf. Set 객체는 Set.prototype.add 프로퍼티 사용
const map4 = new Map();
console.log(map4); // Map(0) {}

map4.set('key4', 'value4');
console.log(map4); // Map(1) { 'key4' => 'value4' }

// set 메서드는 연속 호출 가능, 중복값은 덮어써진다
const map5 = new Map();
map5
  .set('key5-1', 'value5-1')
  .set('key5-2', 'value5-2')
  .set('key5-2', 'value5-2');

console.log(map5); // Map(2) { 'key5-1' => 'value5-1', 'key5-2' => 'value5-2' }

/*
  # Map 객체는 키 타입에 제한이 없다. 객체를 포함한 모든 값을 키로 사용할 수 있다
  - cf. 객체는 문자열 또는 심벌 값만 키로 사용할 수 있음
*/

const map6 = new Map();
const kim = { name: 'Kim' }; // 객체
const lee = { name: 'Lee' }; // 객체

// 객체의 키 사용하여 map6에 요소 추가
map6.set(kim, 'developer').set(lee, "publisher");

console.log(map6); 
//   Map(2) {
//    { name: 'Kim' } => 'developer',
//    { name: 'Lee' } => 'publisher'
//  }

// 요소 취득
// Map 객체에서 특정 요소를 취득하려면 Map.prototype.get 메서드를 사용한다
// get 메서드의 인수로 키를 전달하면 Map 객체에서 인수로 전달한 키를 갖는 값을 반환
// 키를 갖는 요소가 존재하지 않으면 undefined 반환

const map7 = new Map()
const hong = { name: 'Hong' }; // 객체
const na = { name: 'Na' }; // 객체

map7.set(hong, 'developer').set(na, "designer");

console.log(map7.get(hong)) // developer
console.log(map7.get(na)) // designer
console.log(map7.get('key')) // undefined

// 요소 존재 여부 확인 : has 메서드, 불리언 값 반환
console.log(map7.has(hong)) // true
console.log(map7.has('key')) // false

// 요소 삭제 : delete 메서드, 불리언 값 반환
map7.delete(hong); // key로 삭제
console.log(map7); // Map(1) { { name: 'Na' } => 'designer' }

// delete는 불리언 값을 반환하므로 set 메서드처럼 연속으로 호출할 수 없다!

// 요소 일괄 삭제 : clear 메서드
map7.clear();
console.log(map7); // Map(0) {}

/*
  # 요소 순회
  - Map.prototype.forEach
  - for...of
*/

// forEach 메서드는 콜백 함수와, 그 내부에서 this로 사용될 객체(옵션)를 인수로 전달한다.
// - 첫번째 인수: 현재 순회 중인 요소값
// - 두번째 인수: 헌재 순회 중인 요소키
// - 세번째 인수: 현재 순회 중인 Map 객체 자체

map6.forEach((v, k , map6) => console.log(v, k, map6));
// developer { name: 'Kim' } Map(2) {
//   { name: 'Kim' } => 'developer',
//   { name: 'Lee' } => 'publisher'
// }
// publisher { name: 'Lee' } Map(2) {
//   { name: 'Kim' } => 'developer',
//   { name: 'Lee' } => 'publisher'
// }

// Map 객체는 이터러블이므로 for...of문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상이 될 수도 있다.
console.log(Symbol.iterator in map6); // true, Map객체는 Map.prototype의 Symbol.iterator 메서드를 상속받는 인터러블이다

for(const entry of map6) {
  console.log(entry);
}
// [ { name: 'Kim' }, 'developer' ]
// [ { name: 'Lee' }, 'publisher' ]

console.log([...map6]) // [ [ { name: 'Kim' }, 'developer' ], [ { name: 'Lee' }, 'publisher' ] ]

const [a, b] = map6;
console.log(a, b); // [ { name: 'Kim' }, 'developer' ] [ { name: 'Lee' }, 'publisher' ]

const [c, d, e] = map5;
console.log(c, d, e); // [ 'key5-1', 'value5-1' ] [ 'key5-2', 'value5-2' ] undefined

// * Map 객체는 이터러블이면서 동시에 이터레이터인 객체를 반환하는 메서드를 제공한다

// Map.prototype.keys 메서드
// - Map 객체에서 요소키를 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다
const character1 = { name: 'benny' };
const character2 = { name: 'zzik' };

const map8 = new Map([[ character1, 'rabbit'],[ character2, 'hamster']]);
for(const key of map8.keys()) {
  console.log(key); // { name: 'benny' } { name: 'zzik' }
}

// Map.prototype.values 메서드
// - Map 객체에서 요소값을 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다
for(const value of map8.values()) {
  console.log(value); // rabbit hamster
}

// Map.prototype.entries 메서드
// - Map 객체에서 요소값을 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다
for(const entry of map8.entries()) {
  console.log(entry); // [ { name: 'benny' }, 'rabbit' ] [ { name: 'zzik' }, 'hamster' ]
}
