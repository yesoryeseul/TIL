function solution(s) {
    const length = s.length;
    const a = Math.floor(length / 2);
    return length % 2 === 0 ? s.slice(a - 1, a + 1) : s.slice(a, a + 1)
}

// 홀수면 1개 ,짝수면2개 리턴
// abcde, qwer , qwerty
// Math.floor(s / 2)