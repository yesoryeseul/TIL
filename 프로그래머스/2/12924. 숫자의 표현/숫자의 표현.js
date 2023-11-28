function solution(n) {
    let answer = 0;
    for(let i = 0; i <= n; i++) {
        if(n % i === 0 && i % 2 === 1) answer++;
    }
    return answer;
}

/*
15의 약수 개수
1 3 5 15

12
1 2 3 4 6 12

12 % i === 0 && i % 2 === 1
3+4+5
12
*/