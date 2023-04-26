/*
길이에 따른 연산

문제 설명
정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

입출력 예
num_list	result
[3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]	51
[2, 3, 4, 5]	120
*/

/*
if length>= 11, reduce 합
else 
*/

function solution(num_list) {
  let sum = 0;
  let multi = 1;
  let answer = 0;
  if(num_list.length >= 11) {
    for(let i = 0; i < num_list.length; i++) {
      sum += num_list[i];
      answer = sum;
    }
  } else if(num_list.length <= 10) {
    for(let i = 0; i < num_list.length; i++) {
      multi *= num_list[i];
      answer = multi;
    }
  }
  return answer
}

// 배열의 고차함수를 이용할 순 없을까?
function solution(num_list) {
  let answer = 0;
  if(num_list.length >= 11) {
    answer = num_list.reduce((a, c) => a + c, 0)
  }
  else {
    answer = num_list.reduce((a, c) => a * c, 1)
  }
  return answer
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]))
console.log(solution([2, 3, 4, 5]))