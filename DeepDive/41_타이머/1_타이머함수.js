/*
setTimeout
두 번째 인수로 전달반은 시간으로 단 한 번 동작하는 타이머를 생성한다. 이후 타이머가 만료되면 첫 번째 인수로 전달받은 콜백 함수가 호출된다. 즉, setTimeout 함수의 콜백 함수는 두 번째 인수로 전달받은 시간 이후 단 한 번 실행되오록 호출 스케줄링된다.
*/

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log("🤗"), 1000);

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// 이때 콜백 함수에 'Yeseul'이 인수로 전달된다.
setTimeout((name) => console.log(`Hi! ${name}.`), 1000, "Yeseul");

// setInterval
let count = 1;

// 1초(1000ms) 후 타이머가 만료될 때마다 콜백 함수가 호출된다.
// setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다
const timeoutId = setInterval(() => {
  console.log(count); // 1 2 3 4 5
  if (count++ === 5) clearInterval(timeoutId);
}, 1000);
