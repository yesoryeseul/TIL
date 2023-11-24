function solution(num_list, n) {
   // return num_list.filter((v, i) => i % n === 0);
    let arr = [];
    for(let i = 0; i < num_list.length; i += n) {
        arr.push(num_list[i]);
    }
    return arr;
}

// num_list 배열을 새로운 배열로 바꾸는 것, map이나 filter
// 또는 for문 push