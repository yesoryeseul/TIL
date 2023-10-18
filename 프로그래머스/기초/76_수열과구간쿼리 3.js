/*수열과 구간 쿼리 3
문제 설명
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.

각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.

위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

입출력 예
arr	queries	result
[0, 1, 2, 3, 4]	[[0, 3],[1, 2],[1, 4]]	[3, 4, 1, 0, 2]
*/

// 실패코드, 어떤 반례가 있는지 모르겠다.
function solution(arr, queries) {
  queries.map((query) => {
    let i = query[0];
    let j = query[1];
    for (let k = i; k <= j; k++) {
      let tmp = arr[i];
      arr[i] = arr[k];
      arr[k] = tmp;
    }
  });
  return arr;
}

// 다시 푼 코드, map 안에 반복문 지움
function solution(arr, queries) {
  queries.map((query) => {
    let i = query[0];
    let j = query[1];
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  });
  return arr;
}

// 다른 사람의 풀이, 구조 분해 할당
function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}
