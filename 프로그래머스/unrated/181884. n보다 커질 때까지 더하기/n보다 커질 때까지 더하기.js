function solution(numbers, n) {
    let answer = 0;
    for(let val of numbers) {
        if(answer <= n) answer += val;
    }
    return answer;
    
    // 다른 풀이
    return numbers.reduce((a, c) => (a <= n) ? a + c : a);
}

/*
1. for문 순회해서 answer에 numbers[i]를 누적연산한다.
2. 조건은 answer <= n 일 때까지만 누적연산을 한다.
*/