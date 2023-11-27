function solution(a, b) {
    // if(a === b) return a;
    // if(a !== b) {
    //     let [x, y] = [a, b].sort((a, b) => a - b);
    //     let length = y - x + 1;
    //     return Array.from({ length }, () => x++).reduce((a, c) => a + c);
    // }
    let [x, y] = [Math.min(a, b), Math.max(a, b)];
    let answer = 0;
    for(let i = x; i <= y; i++) {
        answer += i;
    }
    return answer;
}

/*
a b 사이의 값을 채워 누적합 구하기
a, b를 오름차순 정렬하기..
*/