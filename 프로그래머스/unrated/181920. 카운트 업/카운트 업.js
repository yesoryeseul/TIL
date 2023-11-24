function solution(start_num, end_num) {
    // return Array(end_num - start_num + 1).fill().map((v, i) => start_num + i);
    let n = end_num - start_num + 1;
    return Array.from({length : n }, (_, i) => start_num + i);
}

// 3번부터 시작해서 10까지 +1씩 증가해 배열 생성
// Array.fill
// Array.from({length: })