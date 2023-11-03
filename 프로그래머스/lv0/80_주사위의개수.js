/*주사위의 개수
문제 설명
머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

입출력 예
box	n	result
[1, 1, 1]	1	1
[10, 8, 6]	3	12
*/

// 설계
// 각 가로, 세로, 높이를 주사위의 모서리로 나눈 몫끼리 곱하여 리턴
// box 배열 순회하여 n으로 / 나눈 값을 Math.floor 후 전부 곱함

function solution(box, n) {
  return box.map((v) => Math.floor(v / n)).reduce((acc, cur) => acc * cur);
}

// 다른 사람의 풀이 1 -> map을 생략하자!
function solution(box, n) {
  return box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);
}

// 다른 사람의 풀이 2 -> 구조 분해 할당
function solution(box, n) {
  const [width, length, height] = box;
  return (
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
  );
}

console.log(solution([10, 8, 6], 3));
