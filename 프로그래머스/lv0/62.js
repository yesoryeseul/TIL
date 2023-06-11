/*
팩토리얼

문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

i! ≤ n

입출력 예
n	result
3628800	10
7	3
*/

function solution(n) {
  let i = 1;
  let factorial = 1;
  while (factorial <= n) {
    i += 1;
    factorial *= i;
  }

  return i - 1;
}

console.log(solution(3628800));
console.log(solution(7));
console.log(solution(120)); // 5

/*
5! 예)

i f   f <= 120
1 1   1 <= 120
2 2   2 <= 120
3 6   6 <= 120
4 24  24 <= 120
5 120 120 <= 120 여기서 결과가 만족하므로 while이 한번 더 돌아 i에 +1 이 되므로 i! ≤ n 조건을 맞추기 위해 return 에서 i - 1를 해주는 것

*/
