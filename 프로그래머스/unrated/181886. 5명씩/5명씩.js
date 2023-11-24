function solution(names) {
    // let arr = [];
    // for(let i = 0; i < names.length; i += 5) {
    //     arr.push(names[i]);
    // }
    // return arr;
    return names.filter((v, i) => !(i % 5));
}