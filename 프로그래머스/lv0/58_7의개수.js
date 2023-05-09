/*
7의 개수
문제 설명
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

입출력 예
array	result
[7, 77, 17]	4
[10, 29]	0
*/

/*
1. 배열값을 String화 하여 split 한다.
2. 배열을 순회하여 v === 7인것만 뽑아 length를 구한다.
*/

function solution(array) {
  return array
    .toString()
    .split("")
    .filter((v) => v === "7").length;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
