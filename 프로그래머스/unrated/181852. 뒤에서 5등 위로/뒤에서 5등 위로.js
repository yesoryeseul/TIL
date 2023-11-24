function solution(num_list) {
    num_list = num_list.sort((a, b) => a - b);
    return num_list.slice(5);
    
    // 다른 풀이
    // return num_list.sort((a, b) => a - b).filter((_, i) => i > 4);
}

/*
가장 작은 5개의 수를 제외한 수들을 오름차순
num_list를 오름차순 만든다
slice한다. 5
*/