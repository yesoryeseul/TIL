/*삼총사
문제 설명
한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

입출력 예
number	result
[-2, 3, 0, 2, -5]	2
[-3, -2, -1, 0, 1, 2, 3]	5
[-1, 1, -1, 1]	0
입출력 예 설명
*/

/* 설계
// number 배열의 5개중 3개를 뽑아 누적 연산한 값이 0인 경우의 개수를 리턴
// 경우의 수 구하는 로직, 경우의 수 별로 새로운 2차원 배열 생성
// 2차원 배열의 요소 누적 값이 0인 것만 filtering 후 length 리턴
*/

function solution(number) {
  // 조합 구하는 로직
  function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1);
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]);
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
      // 배열 spread syntax 로 모두다 push
    });
    return results; // 결과 담긴 results return
  }
  const newArr = getCombinations(number, 3);
  const arr = newArr.map((v) => v.reduce((acc, cur) => acc + cur), 0);

  return arr.filter((v) => v === 0).length;
}

// 다른 사람의 풀이1, 일반적인 방식
function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const sum = number[i] + number[j] + number[k];
        if (sum === 0) answer++;
      }
    }
  }
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
