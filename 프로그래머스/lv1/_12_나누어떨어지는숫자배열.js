/*
나누어 떨어지는 숫자 배열

문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

입출력 예
arr	divisor	return
[5, 9, 7, 10]	5	[5, 10]
[2, 36, 1, 3]	1	[1, 2, 3, 36]
[3,2,6]	10	[-1]

입출력 예 설명

입출력 예#1
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.
*/
/*
1. 반복, 각 요소 el % divisor === 0 인 것만 return할 건데 
2. sort로 오름차순 정렬
3. el % divisor === 0 이 경우가 아니면 -1을 출력해야함
*/


function solution(arr, divisor) {
  const answer = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b)
  if(answer.length === 0) return [-1];
  return answer;
}

// refactoring 다른 사람의 풀이, 삼항 연산자 사용해보기!
function solution(arr, divisor) {
  let answer = arr.filter(v => v%divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3,2,6], 10)); // [-1]