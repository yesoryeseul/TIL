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

