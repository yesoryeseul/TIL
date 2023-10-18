/*등차수열의 특정한 항만 더하기
문제 설명
두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

입출력 예
a	d	included	result
3	4	[true, false, false, true, true]	37
7	1	[false, false, false, true, false, false, false]	10
*/

// 배열 생성, a += d씩 증가하여 included.length만큼 새로운 배열 생성
// newArr 과 included 반복문 돌아 같은 i에 true인 경우만 += 누적 연산

function solution(a, d, included) {
  var answer = 0;
  let newArr = Array.from({ length: included.length }, (_, i) => a + i * d);
  for (let i = 0; i < included.length; i++) {
    if (included[i]) answer += newArr[i];
  }
  return answer;
}

console.log(solution(3, 4, [true, false, false, true, true]));
console.log(solution(7, 1, [false, false, false, true, false, false, false]));

// 회고
// newArr을 굳이 만들어 두 번 연산한 것 같다.

// 다른 사람 풀이로 리팩터링
// for문을 한 번 돌고 includes 배열 값이 true인 경우만 answer에 a + i * d 누적 연산하기
function solution(a, d, included) {
  var answer = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + i * d;
    }
  }
  return answer;
}

// reduce 메서드 사용하기
function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}
