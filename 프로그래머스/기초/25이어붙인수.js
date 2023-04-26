/*
이어 붙인 수
문제 설명
정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

입출력 예
num_list	result
[3, 4, 5, 2, 1]	393
[5, 7, 8, 3]	581
*/
/*
배열 요소 하나씩 돌려
1. even = 짝수인 것만 뽑아 join > 숫자로 형변환
2. odd = 홀수인 것만 뽑아 join > 숫자로 형변환
3. return even + odd
*/

function solution(num_list) {
  let even = num_list.filter(v => v % 2 === 0).join('')
  let odd = num_list.filter(v => v % 2 === 1).join('')
  return +even + +odd
}

console.log(solution([3, 4, 5, 2, 1]))
console.log(solution([5, 7, 8, 3]))