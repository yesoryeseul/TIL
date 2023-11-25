function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('');
    
    // 다른 풀이
    let answer = '';
    for(let a of index_list) {
        answer += my_string.slice(a, a + 1);
    }
    return answer;
}

/*
배열 -> 새로운 배열 .map()
my_string[index_list]를 반환하여 문자열로 변환
*/