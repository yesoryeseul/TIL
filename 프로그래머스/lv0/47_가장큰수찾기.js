/*
가장 큰 수 찾기

문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

입출력 예
array	result
[1, 8, 3]	[8, 1]
[9, 10, 11, 8]	[11, 2]

입출력 예 설명

입출력 예 #1
1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.

입출력 예 #2
9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.
*/

/*
1. 배열에서 Max값 찾기 Math.max(...array)
2. Max값 인덱스 찾기 array.find
3. 새로운 배열로 뽑기
*/

function solution(array) {
  return [ Math.max(...array), array.indexOf(Math.max(...array)) ];
}

console.log(solution([1, 8, 3])); // [ 8, 1 ]
console.log(solution([9, 10, 11, 8])); // [11, 2]