/*
점의 위치 구하기
문제 설명
사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.

x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

입출력 예
dot	result
[2, 4]	1
[-7, 9]	2

입출력 예 설명

입출력 예 #1
dot이 [2, 4]로 x 좌표와 y 좌표 모두 양수이므로 제 1 사분면에 속합니다. 따라서 1을 return 합니다.

입출력 예 #2
dot이 [-7, 9]로 x 좌표가 음수, y 좌표가 양수이므로 제 2 사분면에 속합니다. 따라서 2를 return 합니다.
*/

function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  } else if(dot[0] < 0 && dot[1] > 0) {
    return 2;
  } 
  if(dot[0] < 0 && dot[1] < 0) {
    return 3;
  } else return 4;
}

console.log(solution([2, 4])); // 1
console.log(solution([-7, 9])); // 2
console.log(solution([-3, -2])); // 3
console.log(solution([3, -2])); // 4


// 다른 사람 풀이 1
function solution1(dot) {
  const [num,num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

// 다른 사람 풀이 2
function solution2(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : (dot[1] > 0 ? 2 : 3);
}

console.log(solution2([2, 4])); // 1
console.log(solution2([-7, 9])); // 2
console.log(solution2([-3, -2])); // 3
console.log(solution2([3, -2])); // 4

// 중첩 삼항 연산자 사용