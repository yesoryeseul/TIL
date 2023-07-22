/*
배열 회전시키기
문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

입출력 예
numbers	direction	result
[1, 2, 3]	"right"	[3, 1, 2]
[4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]
*/

/*
right일 경우 마지막 배열 값 pop하여 앞에 넣어주기
  -> pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환
left일 경우 첫번째 배열값 shift하여 뒤에 넣어주기
  -> shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
*/

function solution(numbers, direction) {
  if (direction === "right") {
    // numbers.unshift(numbers.pop());
    numbers = [numbers.pop(), ...numbers];
  } else {
    // numbers.push(numbers.shift());
    numbers = [...numbers.slice(1), numbers.shift()];
  }
  return numbers;
}

console.log(solution([1, 2, 3], "right")); // [3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left")); // [455, 6, 4, -1, 45, 6, 4]
