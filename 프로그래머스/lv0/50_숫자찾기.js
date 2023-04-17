/*
숫자 찾기

문제 설명
정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

입출력 예
num	k	result
29183	1	3
232443	4	4
123456	7	-1

입출력 예 설명

입출력 예 #1
29183에서 1은 3번째에 있습니다.

입출력 예 #2
232443에서 4는 4번째에 처음 등장합니다.

입출력 예 #3
123456에 7은 없으므로 -1을 return 합니다.
*/
// 문자열 배열로 반환하여 k를 indexOf하여 +1 하여 인덱스 값을 찾아줌 없으면 -1 출력
// k가 있냐? (순회해서 확인) ? idnextOf + 1 : -1

function solution(num, k) {
  const answer = [...num.toString()].indexOf(k.toString());
  return answer === -1 ? -1 : answer + 1;
}

console.log(solution(29183, 1)) // 3
console.log(solution(232443, 4)) // 4
console.log(solution(123456, 7)) // -1