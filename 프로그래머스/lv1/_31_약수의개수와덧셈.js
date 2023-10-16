/*
약수의 개수와 덧셈
문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

입출력 예
left	right	result
13	17	43
24	27	52
*/

/*
left부터 right까지 반복문문 돈다
해당 값마다 약수를 찾고 length가 짝수이면 +=, 홀수면 -= , reduce

약수 찾기?
*/

function solution(left, right) {
  // 약수 구하는 로직
  const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) divisors.push(i);
    }
    return [...divisors, num];
  };
  let result = 0;
  for (let i = left; i <= right; i++) {
    const divisors = getDivisors(i);
    if (divisors.length % 2 === 0) {
      result += i;
    } else result -= i;
  }
  return result;
}

// 신박한 풀이
// 제곱근이 정수면 약수의 개수가 홀수다 조건
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
