/*
머쓱이보다 키 큰 사람
문제 설명
머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다.
머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때,
머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

입출력 예
array             	height	result
[149, 180, 192, 170]	167	    3
[180, 120, 140]     	190	    0

입출력 예 설명

입출력 예 #1
149, 180, 192, 170 중 머쓱이보다 키가 큰 사람은 180, 192, 170으로 세 명입니다.

입출력 예 #2
180, 120, 140 중 190보다 큰 수는 없으므로 0명입니다.
*/

// 배열 array를 탐색해서 height 보다 큰 배열만 filter해서 length 구하면 됨

function solution(array, height) {
  return array.filter(item => item > height).length;
}

console.log(solution([149, 180, 192, 170], 167)) // 3
console.log(solution([180, 120, 140], 190)) // 0

// for와 if 조건으로 count를 체크하는 방법

function solution1(array, height) {
  let count = 0;
  for(let index in array) {
    let moreThanHeight = array[index];
    if(moreThanHeight > height) {
      count++;
    }
  }
  return count;
}

console.log(solution1([149, 180, 192, 170], 167)) // 3
console.log(solution1([180, 120, 140], 190)) // 0