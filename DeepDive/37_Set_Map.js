// 37장 Set과 Map

/*
  # Set
  - 중복되지 않는 유일한 값들의 집합
  - 요소 순서에 의미가 없다
  - 인덱스로 요소에 접근할 수 없다
*/

// Set 객체 생성
const set = new Set();
console.log(set); // Set(0) {},  Set 함수에 인자를 전달하지 않으면 빈 Set 객체가 생성

// Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성
// 이때 중복된 값은 Set 객체에 요소로 저장되지 않는다
const set1 = new Set([1, 2, 2, 3, 4, 5, 5]);
console.log(set1); // Set(5) { 1, 2, 3, 4, 5 }

const set2 = new Set("Hello");
console.log(set2); // Set(4) { 'H', 'e', 'l', 'o' }

// * 중복을 허용하지 않는 Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다
// filter((element) => { /* … */ })
// filter((element, index) => { /* … */ })
// filter((element, index, array) => { /* … */ })
const uniq = (array) => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2, 1, 3, 4]

// Set을 사용한 배열의 중복 요소 제거
const uniq1 = (array) => [...new Set(array)];
console.log(uniq1([2, 1, 2, 3, 4, 3, 4])); // [2, 1, 3, 4]

// Set 객체의 요소 개수를 확인할 때에는 Set.prototype.size 프로퍼티를 사용
const { size } = new Set([1, 2, 3, 3]);
console.log(size); // 3

// size 프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티
// -> size 프로퍼티에 숫자를 할당하여 set 객체의 요소의 개수를 변경할 수 없다

// 요소 추가 -> Set.prototype.add
const set3 = new Set();
console.log(set3); // Set(0) {}

set3.add(1);
console.log(set3); // Set(1) { 1 }

// 연속적으로 추가가 가능
set3.add(2).add(3);
console.log(set3); // Set(3) { 1, 2, 3 }

// NaN === NaN 은 다른 값으로 보아 콘솔 출력시 false가 나오나 Set 객체는 NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
// 0 === -0은 true이므로 또한 중복 추가를 허용치 않는다

// Set 객체는 객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장할 수 있다
const set4 = new Set();

set4
  .add(1)
  .add("a")
  .add(true)
  .add(undefined)
  .add(null)
  .add({})
  .add([])
  .add(() => {});

console.log(set4); // Set(8) { 1, 'a', true, undefined, null, {}, [], () => {} }

// 요소 존재 여부 확인 Set.prototype.has
const set5 = new Set([1, 2, 3]);

console.log(set5.has(2)); // true
console.log(set5.has(4)); // false

// 요소 삭제 Set.prototype.delete
set5.delete(1);
console.log(set5); // Set(2) { 2, 3 }

// delete는 삭제 성공여부를 나타내는 불리언 값을 반환하므오 add 메서드와 달리 연속 사용 불가

// 요소 일괄 삭제 Set.prototype.clear
set5.clear();
console.log(set5); // Set(0) {}

/*
  # 요소 순회
  - Set.prototype.forEach
    > 콜백 함수와 그 내부에서 this로 사용할 객체(옵션)를 인수로 전달한다
    > 콜백 함수는 3개의 인수를 전달받는데
      1. 첫 번째 인수: 현재 순회 중인 요소값
      2. 두 번째 인수: 현재 순회 중인 요소값
      3. 세 번째 인수: 현재 순회 중인 Set 객체 자체
*/

const set6 = new Set([1, 2, 3]);
set6.forEach((v, v2, set6) => console.log(v, v2, set6));
// 1 1 Set(3) {1, 2, 3}
// 2 2 Set(3) {1, 2, 3}
// 3 3 Set(3) {1, 2, 3}

// * Set 객체는 이터러블이므로
//   for...of 문으로 순회 가능,
//   스프레드 문법과 디스트럭처링의 대상이 될 수도 있다
console.log(Symbol.iterator in set6); // true

for (const value of set6) {
  console.log(value); // 1 2 3
}

console.log([...set6]); // [ 1, 2, 3 ]

const [a, ...rest] = set6;
console.log(a, rest); // 1 [2, 3]

// Set의 집합 연산(Set 객체는 수학적 집합을 구현하기 위한 자료구조)
// -> 교집합, 합집합, 차집합 등을 구현할 수 있다

// 교집합 intersection
Set.prototype.intersection = function (set) {
  const result = new Set();

  for (const value of set) {
    if (this.has(value)) result.add(value);
  }
  return result;
};

const setA = new Set([1, 3, 5, 7]);
const setB = new Set([1, 3, 5]);

console.log(setA.intersection(setB)); // Set(3) { 1, 3, 5 }
console.log(setB.intersection(setA)); // Set(3) { 1, 3, 5 }

// -> 다음과 같은 방법으로도 가능
Set.prototype.intersection = function (set) {
  return new Set([...this].filter((el) => set.has(el)));
};

const setC = new Set([1, 2, 3, 4]);
const setD = new Set([2, 4]);

console.log(setC.intersection(setD)); // Set(2) { 2, 4 }
console.log(setD.intersection(setC)); // Set(2) { 2, 4 }

// 합집합 union
Set.prototype.union = function (set) {
  const result = new Set(this);

  for (const value of set) {
    result.add(value);
  }
  return result;
};

const setE = new Set([1, 2, 3, 4]);
const setF = new Set([2, 4]);

console.log(setE.union(setF)); // Set(4) [1, 2, 3, 4]
console.log(setF.union(setE)); // Set(4) [2, 4, 1, 3]

// 차집합 difference
Set.prototype.difference = function (set) {
  return new Set([...this].filter((el) => !set.has(el)));
};

const setG = new Set([1, 2, 3, 4]);
const setH = new Set([2, 4]);

console.log(setG.intersection(setH)); // Set(2) { 1, 3 }
console.log(setH.intersection(setG)); // Set(0) {}
// or
Set.prototype.difference = function (set) {
  const result = new Set(this);

  for (const value of set) {
    result.delete(value);
  }
  return result;
};

const setI = new Set([1, 2, 3, 4]);
const setJ = new Set([2, 4]);

console.log(setI.union(setJ)); // Set(2) {1, 3}
console.log(setJ.union(setI)); // Set(0) {}

// 부분 집합과 상위 집합
// 집합 A가 집합 B에 포함되는 경우 집합 A는 집합 B의 부분 집합이며,
// 집합 B는 집합 A의 상위 집합이다

// this가 subset의 상위 집합인지 확인한다
Set.prototype.isSuperset = function (subset) {
  for (const value of subset) {
    // superset의 모든 요소가 subset의 모든 요소를 포함하는지 확인
    if (!this.has(value)) return false; // 포함하지 않으면 false 반환
  }
  return true;
};

const setK = new Set([2, 4, 6, 7]);
const setL = new Set([2, 6]);

// setK가 setL의 상위 집합인지 확인한다
console.log(setK.isSuperset(setL)); // true
// setL가 setK의 상위 집합인지 확인한다
console.log(setL.isSuperset(setK)); // false

// --------------------------------------
