/*수 조작하기 2
문제 설명
정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

"w" : 수에 1을 더한다.
"s" : 수에 1을 뺀다.
"d" : 수에 10을 더한다.
"a" : 수에 10을 뺀다.
그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

입출력 예
numLog	result
[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]	"wsdawsdassw"
*/

/*
설계
// numLog 배열을 순회
// i 값과 i+1 의 차이를 연산
// +1 이면 answer.push("w")
// -1 이면 answer.push("s")
// +10 이면 answer.push("d")
// -10 이면 answer.push("a")
*/

// 내가 푼 방식
function solution(numLog) {
  var answer = [];
  for (let i = 0; i < numLog.length; i++) {
    if (numLog[i + 1] - numLog[i] == 1) answer.push("w");
    else if (numLog[i + 1] - numLog[i] == -1) answer.push("s");
    else if (numLog[i + 1] - numLog[i] == 10) answer.push("d");
    else if (numLog[i + 1] - numLog[i] == -10) answer.push("a");
  }
  return answer.join("");
}

// 회고 : 효율적인 코드는 아닌 것 같다.

// 다른 사람 풀이로 리팩토링 해보기!
// case를 if문이 아닌 객체의 key-value로 담아준다.
// numLog[0]은 제외하여 map 돌리기 위해 slice(1)
// 현재 요소와 이전요소를 뺀 값을 key값으로 할당해줌

function solution(numLog) {
  let obj = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };
  return numLog
    .slice(1)
    .map((v, i) => obj[v - numLog[i]])
    .join("");
}
console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
