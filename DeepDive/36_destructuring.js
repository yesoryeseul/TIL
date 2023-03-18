/*

  # 디스트럭처링 할당
  - 구조화된 배열과 같은 이터러블 또는 객체를 destructuring(비구조화, 구조 파괴)하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다.
  - 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용하다.

*/

// 배열 디스트럭처링 할당
// ES5, 구조화된 배열을 디스트럭처링하여 1개 이상의 변수에 할당하는 방법
var arr = [1, 2, 3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3

// ES6
// 배열 디스트럭처링 할당의 대상(할당문의 우변)은 이터러블이어야 한다.
// 할당 기준은 배열의 인덱스
const arr1 = [4, 5, 6];
const [four, five, six] = arr1;
console.log(four, five, six); // 4 5 6

// 배열 디스트럭처링 할당을 위해서는 할당 연산자 왼쪽에 값을 할당받을 변수를 선언해야 한다. 이때 변수를 배열 리터럴 형태로 선언
const [x, y] = [10, 20];

// 이떄 우변에 이터러블을 할당하지 않으면 에러 발생!!
// const [a, b]; // SyntaxError: Missing initializer in destructuring declaration

// const [q, w] = {}; // TypeError: {} is not iterable

// * 배열 디스트럭처링 할당의 기준
//   -> 배열의 인덱스. 즉, 순서대로 할당된다.
//   -> 이때 변수의 개수와 이터러블의 요소 개수가 반드시 일치할 필요는 없다

const [a, b] = [1, 2];
console.log(a, b); // 1 2

const [c, d] = [3];
console.log(c, d); // 3 undefined

const [e, f] = [4, 5, 6];
console.log(e, f); // 4 5

const [g, , h] = [7, 8, 9];
console.log(g, h); // 7 9

// 변수에 기본값을 저장할 수 있다
const [i, j, k = 15] = [5, 10];
console.log(i, j, k); // 5 10 15

// 기본값보다 할당된 값이 우선이다
const [l, m = 12, n = 14] = [1, 2];
console.log(l, m, n); // 1 2 14

// 배열과 같은 이터러블에서 필요한 요소만 추출하여 변수에 할당하고 싶을 때 유용
// URL을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성해 반환한다
function parseURL(url = "") {
  // :// 앞자리 문자열(protocol)과 '/' 이전의 '/'로 시작하지 않는 문자열(host)과
  // '/' 이후의 문자열(path)을 검색한다.
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);

  if (!parsedURL) return {};

  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path };
}
const parsedURL = parseURL(
  "https://developer.mozilla.org/ko/docs/Web/JavaScript"
);
console.log(parsedURL);

// 배열 디스트럭처링 할당을 위한 변수에 Rest 파라미터와 유사하게 Rest 요소(Rest element) ... 을 사용할 수 있다.
// Rest 요소는 Rest 파라미터와 마찬가지로 반드시 마지막에 위치해야 한다.

const [x1, ...y1] = [1, 3, 5];
console.log(x1, y1); // 1 [3, 5]

/*
  # 객체 디스트럭처링 할당
*/

// ES5 에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야한다.

var user = { firstName: "Yeseul", lastName: "Kim" };

var firstName = user.firstName;
var lastName = user.lastName;

console.log(firstName, lastName); // Yeseul Kim

// ES6의 객체 디스트럭처링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다.
// 이때 디스트럭처링 할당의 대상(할당문의 우변)은 객체이어야 하며, 할당 기준은 프로퍼티 키다. 즉, 순서는 의미가 없고 선언된 변수 이름과 프로퍼티 키가 일치하면 할당된다.

const user6 = { firstName6: "Yeseul", lastName6: "Kim" };
// const { lastName6, firstName6 } = user6; // 100번 코드와 동치
const { lastName6: lastName6, firstName6: firstName6 } = user6;
console.log(firstName6, lastName6); // Yeseul Kim

// 배열 디스트럭처링 할당과 마찬가지로 객체 디스트럭처링 할당을 위해서는 할당 연산자 왼쪽에 프로퍼티 값을 할당받을 변수를 선언해야 한다. 이떄 변수를 객체 리터럴 형태로 선언

const { lName, fName } = { fName: "ye-seul", lName: "kim" };
console.log(fName, lName); // ye-seul kim

// 이때 우변에 객체 또는 객체로 평가될 수 있는 표현식(문자열, 숫자, 배열 등)을 할당하지 않으면 에러가 발생!
// const { name, age }; // SyntaxError: Missing initializer in destructuring declaration

// const { name, age } = null; // TypeError: Cannot destructure property 'name' of 'null' as it is null.

// 따라서 객체의 프로퍼티 키와 다른 변수 이름으로 프로퍼티 값을 할당받으려면 다음과 같이 변수를 선언한다.

const userInfo = { nickname: "sseul", userName: "kimyeseul" };

const { userName: un, nickname: nn } = userInfo;

console.log(un, nn); // kimyeseul sseul

// 객체 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다
const { number = "001", title } = { title: "js" };
console.log(number, title); // 001 js

const { book: bn = "002 React", price: pn } = { price: 15000 };
console.log(bn, pn); // 002 React 15000

// 객체에서 프로퍼티 키로 필요한 프로퍼티 값만 추출하여 변수에 할당하고 싶을 때 유용
const hello = "say hello";
const { length } = hello;
console.log(length); // 9

const todo = { id: 2, content: "CSS", completed: false };
const { id } = todo;
console.log(id); // 2

// 객체를 인수로 전달받는 함수의 매개변수에도 사용할 수 있다
function printTodo(todo) {
  console.log(
    `할일 ${todo.content}은 ${todo.completed ? "완료" : "비완료"} 상태입니다.`
  );
}
printTodo({ id: 1, content: "HTML", completed: true }); // 할일 HTML은 완료 상태입니다.

// 매개변수에 객체 디스트럭처링 할당을 넣으면 좀 더 간결하고 가독성이 좋다
function printTodo1({ content, completed }) {
  console.log(
    `할일 ${todo.content}은 ${todo.completed ? "완료" : "비완료"} 상태입니다.`
  );
}
printTodo1(todo); // 할일 CSS은 비완료 상태입니다.

// 배열의 요소가 객체인 경우 배열 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.

const todos = [
  { num: 1, content: "HTML", completed: true },
  { num: 2, content: "CSS", completed: true },
  { num: 3, content: "JS", completed: false },
];

// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출
const [, { num }] = todos;
console.log(num); // 2

// 중첩 객체 예제
const loginUser = {
  name: "kim",
  address: {
    zipCode: "0113",
    city: "Seoul",
  },
};

// address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출한다
const {
  address: { city },
} = loginUser;

console.log(city); // Seoul

// Rest 프로퍼티 ... 사용 가능, 반드시 마지막에 위치
const { x2, ...rest } = { x2: 10, y2: 20, z2: 30 };
console.log(x2, rest); // 10, { y2: 20, z2: 30 }
