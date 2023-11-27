function solution(n) {
    // return String(n).split('').map(Number).sort((a, b) => b - a);
    return String(n).split('').reverse().map(Number)
}

/*
n을 split 해 배열 만든다
그리고 내림차순 정렬해준다.
*/