function solution(n) {
    // 일반 풀이
    // let answer = 0;
    // for(let i = 0; i <= n; i++) {
    //     if(i % 2 === 0) answer += i;
    // }
    // return answer
    
    return Array.from({ length: n }, (_, i) => i + 1).filter(v => v % 2 === 0).reduce((acc, cur) => acc + cur, 0);
    
}