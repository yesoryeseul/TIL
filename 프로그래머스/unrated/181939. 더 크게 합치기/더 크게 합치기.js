function solution(a, b) {
    let x = a.toString() + b.toString();
    let y = b.toString() + a.toString();
    return Number(x) > Number(y) ? Number(x) : Number(y);
}