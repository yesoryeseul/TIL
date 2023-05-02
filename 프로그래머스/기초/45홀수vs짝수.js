/*
홀수 vs 짝수
문제 설명
정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

입출력 예
num_list	result
[4, 2, 6, 1, 7, 6]	17
[-1, 2, 5, 6, 3]	8
*/

/*
인덱스 홀, 짝 구분하여 각 누적연산 비교하여 큰 것을 return
1. num_list[i]
*/

function solution(num_list) {
  let odd = 0;
  let even = 0;
  num_list.filter((v, i) => {
    !(i % 2) ? (odd += v) : (even += v);
  });
  return odd > even ? odd : even;
}

console.log(solution([4, 2, 6, 1, 7, 6]));
console.log(solution([-1, 2, 5, 6, 3]));
