function solution(x, n) {
    // let arr = [];
    // for(let i = 1; i <= n; i++) {
    //     arr.push(i * x);
    // }
    // return arr;
    
    // 다른 풀이
    return Array(n).fill().map((_,i) => x * (i + 1));
}

