/*
배열 자르기
문제 설명
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

입출력 예
numbers	num1	num2	result
[1, 2, 3, 4, 5]	1	3	[2, 3, 4]
[1, 3, 5]	1	2	[3, 5]
입출력 예 설명
입출력 예 #1

[1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.
입출력 예 #2

[1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.
*/

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [ 2, 3, 4]
console.log(solution([1, 3, 5], 1, 2));


// splice가 안되는 이유?
// function solution(numbers, num1, num2) {
//   return numbers.splice(num1, num2);
// }

// 해결 방법..
function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2-num1+1);
}

// 다른 풀이 push를 써보자!
// for문을 이용하여 answer 배열에 push -> answer.push()
// num1 숫자부터 1++ 하여 num2의 숫자까지 answer 배열에 집어넣는다.

function solution(numbers, num1, num2) {
  var answer = [];
  for(let i = num1; i <= num2; i++) {
    answer.push(numbers[i]);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));