// 개발자의 의도와는 상관없이 발생한 암묵적 전역은 오류를 발생시키는 원인이 될 가능성이 크므로 이를 지원하기 위해 ES5부터 strict mode가 추가되었다.

'use strict'; // strict mode의 적용, 전역 선두 또는 함수 몸체의 선두에 추가

// function foo() {
//     x = 10; // ReferenceError
// }
// foo();
// console.log(x);

// 전역보단 스크립트 단위로 적용하는 것이 좋다!
{/* <script>
    'use strict';
</script> */}

// 함수 단위로 strict mode를 적용하는 것도 피하자