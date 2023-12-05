function solution(a, b) {
    // let answer = 0;
    // for(let i = 0; i < a.length; i++) {
    //     answer += a[i] * b[i];
    // }
    // return answer;
    // 다른 풀이
    return a.reduce((acc, cur, i) => acc += a[i] * b[i], 0)
}