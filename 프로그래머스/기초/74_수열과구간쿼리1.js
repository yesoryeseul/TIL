/*
수열과 구간 쿼리 1
문제 설명
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.

위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

입출력 예
arr	queries	result
[0, 1, 2, 3, 4]	[[0, 1],[1, 2],[2, 3]]	[1, 3, 4, 4, 4]
*/

// 실패 코드
// function solution(arr, queries) {
//   return queries.map((query, i) => {
//     query.map((v, idx) => {
//       if (v >= query[0] && v <= query[1]) arr[v] += 1;
//     });
//     return arr;
//   });
// }

// 다른 사람의 풀이 참고
function solution(arr, queries) {
  for (let query of queries) {
    for (let i = query[0]; i <= query[1]; i++) arr[i] += 1;
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
