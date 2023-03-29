/*
배열 뒤집기
문제 설명
정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

입출력 예
num_list	result
[1, 2, 3, 4, 5]	[5, 4, 3, 2, 1]
[1, 1, 1, 1, 1, 2]	[2, 1, 1, 1, 1, 1]
[1, 0, 1, 1, 1, 3, 5]	[5, 3, 1, 1, 1, 0, 1]
입출력 예 설명
입출력 예 #1

num_list가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 return합니다.
입출력 예 #2

num_list가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 return합니다.
입출력 예 #3

num_list가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 return합니다.
*/

// 내 풀이
function solution(num_list) {
  return num_list.reverse();
}

console.log(solution([1, 2, 3, 4, 5]));

// 배열 뒤집는 알고리즘으로 풀이하기
// length 변수 선언
// 배열에 값을 넣어주기 (반복문 이용하여 길이까지)-> push
function solution(num_list) {
  var answer = [];
  let len = num_list.length;
  for (let i = 1; i <= len; i++) {
    answer.push(num_list[len - i]);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
