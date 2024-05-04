function solution(n) {
    const countOne = (num) => num.toString(2).split('').filter(one => one === '1').length;
    let count = countOne(n);
    let count2;
    while(count !== count2) {
        ++n;
        count2 = countOne(n);
    }
    return n;
}
