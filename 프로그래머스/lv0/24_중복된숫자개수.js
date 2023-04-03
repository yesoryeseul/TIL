/*
중복된 숫자 개수
문제 설명
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

입출력 예
array	              n	result
[1, 1, 2, 3, 4, 5]	1	  2
[0, 2, 3, 4]	      1 	0

입출력 예 설명

입출력 예 #1
[1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.

입출력 예 #2
[0, 2, 3, 4] 에는 1이 0개 있습니다.
*/
/*
array 요소를 순회하여 array[i] === n 인 경우 answer++;
1. let answer = 0;
2. , index가 필요하겠음 forEach
array.forEach((el, index, originArr) => {
  if(array[i] === n) answer++;
3. return answer

*/

function solution(array, n) {
  let answer = 0;
  array.forEach((element) => {
    if(element === n) answer++;
  });
  return answer;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1)) // 2
console.log(solution([0, 2, 3, 4], 1)) // 0

// 다른 사람의 풀이 filter, length
// function solution(array, n) {
//   return array.filter(v => v === n).length;
// }
