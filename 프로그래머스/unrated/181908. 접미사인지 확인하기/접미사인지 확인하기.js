function solution(my_string, is_suffix) {
    // return my_string.endsWith(is_suffix) ? 1 : 0;
    let n = my_string.length - is_suffix.length;
    return my_string.slice(n) === is_suffix ? 1 : 0;
}

/*
my_string.length에서 is_suffix.length만큼 뺀 값부터 끝까지 my_string를 slice했을 때의 값과 is_suffix 가 같으면 1 리턴 아니면 0리턴
*/