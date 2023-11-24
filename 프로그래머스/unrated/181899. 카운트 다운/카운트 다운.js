function solution(start_num, end_num) {
    // let arr = [];
    // for(let i = start_num; i >= end_num; i--) {
    //     arr.push(i);
    // }
    // return arr;
    let n = start_num - end_num + 1;
    return Array.from( { length : n }, () => start_num--);
}