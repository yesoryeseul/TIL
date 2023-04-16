// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function switchKiwi(arr, from, to) {
  // 내 답
  // let change = array.map((item) => {
  //   if(item === from) {
  //     return to;
  //   } else return item;
  // });
  // return change;

  // map과 삼항연산자로 푼 풀이
  return arr.map((item) => item === from ? to : from);
}
const array = ["🍌", "🍓", "🍇", "🍓"];
const result = switchKiwi(array, "🍓", "🥝");
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
let count = 0;
function findKiwi(arr, item) {
  // 베스트
  return arr.filter((v) => v === item).length;

  // 다른 방법
  // return arr.reduce((count, value) => {
  //   if(value === item) {
  //     count++;
  //   }
  //   return count;
  // }, 0)
}
const array2 = ["🍌", "🥝", "🍇", "🥝"];
const result2 = findKiwi(array2, "🥝");
console.log(result2);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function arr12(arr1, arr2) {
  return arr1.filter((v) => arr2.includes(v));
}
const arr1 = ["🍌", "🥝", "🍇"];
const arr2 = ["🍌", "🍓", "🍇", "🍓"];
const result3 = arr12(arr1, arr2);
console.log(result3);


// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균

// 1. 5이상 큰 수를 filter로 걸러서
// 2. 각 요소 누적 연산 후 길이만큼 나누기
const nums = [3, 16, 5, 25, 4, 34, 21];

function arrAvg(arr) {
  return arr
  .filter((v) => v > 5)
  .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
}

const result4 = arrAvg(nums);
console.log(result4)