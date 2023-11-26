function solution(s) {
    s = s.split(' ').map(Number);
    let [a, b] = [Math.min(...s), Math.max(...s)];
    return `${a} ${b}`;
}

/*
s를 ' '으로 split하고, map(Number)
let [a, b] = [Math.min(...s), Math.max(...s)]
*/