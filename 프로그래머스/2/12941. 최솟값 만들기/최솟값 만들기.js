function solution(A,B){
    let answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    for(let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}

/*
배열 길이가 같은 다른 배열을 하나씩 뽑아 곱하고 누적하여
최소값을 구하는것!
최종적으로 누적된 값이 최소

A배열의 최소값과 B배열의 최대값 순으로 곱하는 것!
A배열은 오름차순, B배열은 내림차순으로 정렬해서
answer += A[i] * B[i]
*/

