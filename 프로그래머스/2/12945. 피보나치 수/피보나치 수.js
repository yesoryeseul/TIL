function solution(n) {
  // 동적 계획법 활용
  const answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    const first = answer[i - 1];
    const second = answer[i - 2];
    let sum = first + second;
    answer.push(sum % 1234567);
  }
  return answer[n];
}