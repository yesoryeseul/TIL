/*
최소직사각형
문제 설명
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

명함 번호	가로 길이	세로 길이
1	60	50
2	30	70
3	60	30
4	80	40
가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

입출력 예
sizes	result
[[60, 50], [30, 70], [60, 30], [80, 40]]	4000
[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133
*/

/* 설계
이차원 배열의 요소를 내림차순 정렬로 만들기
0번째 인덱스에서 가장 큰 값을 반환
1번째 인덱스에서 가장 큰 값을 반환
0번째 수와 1번째 수를 곱한 값이 최종 출력 결과로 리턴
 */

// 내가 푼 풀이
function solution(sizes) {
  const newArr = sizes
    .map((v) => v)
    .map((val) => (val[0] > val[1] ? [val[0], val[1]] : [val[1], val[0]]));
  const firstArr = newArr.map((val) => val[0]);
  const secondArr = newArr.map((val) => val[1]);

  const length = Math.max(...firstArr);
  const height = Math.max(...secondArr);
  return length * height;
}

// 누가 봐도 이상하지만 통과는 된 코드. 너무 비효율적이다!

// 다른 사람 코드로 리팩터링
function solution(sizes) {
  // const newArr = sizes.map(v => v).map(val => val[0] > val[1] ? [val[0], val[1]] : [val[1], val[0]]);
  // 위 로직을

  // 일반 sorting으로도 해결 할 수 있고, 구조분해 할당을 통해 해결 할 수도 있다.
  // sizes.map(e => e.sort((a, b) => a - b));
  const newArr = sizes.map(([x, y]) => (x < y ? [y, x] : [x, y])); // 이 방식으로 써보자!

  // const firstArr = newArr.map((val) => val[0]);
  // const secondArr = newArr.map((val) => val[1]);
  // const length = Math.max(...firstArr);
  // const height = Math.max(...secondArr);

  // 위 4줄을 2줄로 줄여 리팩터링함
  const length = Math.max(...newArr.map((pair) => pair[0]));
  const height = Math.max(...newArr.map((pair) => pair[1]));

  return length * height;
}

// 정리된 코드, 가독성이 훨씬 좋아졌다. 통과 시간에서는 크게 차이를 느끼지 못했다.
function solution(sizes) {
  const newArr = sizes.map(([x, y]) => (x < y ? [y, x] : [x, y])); // 이 방식으로 써보자!
  const length = Math.max(...newArr.map((pair) => pair[0]));
  const height = Math.max(...newArr.map((pair) => pair[1]));

  return length * height;
}
