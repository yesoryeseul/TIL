// 정규표현식
// /(시작)regexp(패턴)/(종료)i(플래그)

const target = "Is this all there is?";

// 패턴 : is
// 플래그 : i => 대소문자를 구별하지 않고 검색한다.
const regExp = /is/i;

// test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
console.log(regExp.test(target)); // true

// RegExp 생성자 함수를 사용하여 RegExp 객체를 생성할 수도 있다
// new RegExp(pattern[, flag]);
const regExp2 = new RegExp(/is/i);

console.log(regExp2.test(target)); // true

// match 메서드 => 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭결과를 배열로 반환
const regExp3 = /is/;
console.log(target.match(regExp3));
// [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// 플래그
// 1. i(ignore case): 대소문자를 비교하지 않고 패턴을 검색한다.
// 2. g(global): 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다,
// 3. m(multi line): 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.
// +) 플래그는 옵션이므로 선택 사용할 수 있으며, 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수도 있다.
// 어떠한 플래그도 사용하지 않은 경우는 대소문자를 구별해서 패턴을 검색한다. 그리고 문자열에 패턴 검색 매칭 대상이 1개 이상 존재해도 첫 번째 매친한 대상만 검색하고 종료한다.

console.log("---- 플래그 적용 ----");
console.log(target.match(/is/)); // 대소문자 구별하고 한 번만 검색
console.log(target.match(/is/i)); // 대소문자 구별않고 한 번만 검색
console.log(target.match(/is/g)); // 대소문자 구별하고 전역 검색
console.log(target.match(/is/gi)); // 대소문자 구별않고 전역 검색

// 자주 사용하는 정규표현식
const url = "https://example.com";
console.log(/^https?:\/\//.test(url)); // true
// ^ : http로 시작하며
// ? : 앞선 패턴(s)이 최대 한번 (0번 포함)이상 반복되는지를 의미

const fileName = "index.html";
// 'html'로 끝나는지 검색한다
console.log(/html$/.test(fileName)); // true

// 숫자로만 이루어진 문자열인지 검사
const realNumber = "12345";
console.log(/^\d+$/.test(realNumber)); // true

// 하나 이상의 공백으로 시작하는지
const hi = " Hi";
console.log(/^\s/.test(hi)); // true

// 아이디로 사용 가능한지 검사
const id = "abc123";

// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사한다.
console.log(/^[A-Za-z0-9]{4,10}$/.test(id)); // true
