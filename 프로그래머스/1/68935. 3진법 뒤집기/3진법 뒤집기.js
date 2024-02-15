function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}


/*
1. 3진법으로 치환하는 메소드 toString(3)
2. 그걸 리턴한 값을 reverse 해야함
3, 다시 10진법으로 바꾸는 메서드
*/