function solution(x) {
    // const division = String(x).split('').reduce((a, c) => +a + +c);
    // return x % division === 0 ? true : false;
    
    // 다른 풀이
    let num = x;
    let sum = 0;
    do {
        sum += x % 10;
        x = Math.floor(x / 10);
    } while (x > 0);

    return !(num % sum);
}

/*
x / x[0] + x[1] === 0
*/