/*
약수의 합
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

입출력 예
n	return
12	28
5	6

입출력 예 설명

입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
*/
/*
1. n의 약수를 담을 변수 answer를 += 누적 연산
2. 약수를 구하는 알고리즘
3. 반복을 돌려 누적 연산 결과를 리턴
*/

// 1. 일반 for문
// function solution(n) {
//   let answer = 0;
//   for(let i = 1; i <= n; i++) {
//     if(n % i === 0) answer += i;
//   }
//   return answer;
// }


console.log(solution(12)) // 28
console.log(solution(5)) // 6