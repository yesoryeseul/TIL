/*
k의 개수

문제 설명
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

입출력 예
i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0
*/

// i부터 j 까지 나열하기
// 1. Array로 j = i + 1 개를 i 값으로 생성 하고 map돌려서 v+인덱스 씩하여 배열에 담기
// join하여 문자열로 쭉 나열 후
// k값으로 split하여 k가 빠진 배열의 길이 + 1

function solution(i, j, k) {
  return (
    Array(j - i + 1)
      .fill(i)
      .map((v, idx) => v + idx)
      .join("")
      .split(k).length - 1
  );
}

// 일반 for문으로 진행할 경우
function solution(i, j, k) {
  let s = "";
  for (let t = i; t <= j; t++) {
    s += t;
  }
  return s.split(k).length - 1;
}

console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0
