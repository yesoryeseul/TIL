function solution(num_list) {
    let gop = 1;
    let hap = 0;
    for(let i = 0; i < num_list.length; i++) {
        gop *= num_list[i];
        hap += num_list[i];
    }
    return gop < Math.pow(hap, 2) ? 1 : 0;
}

// 모든 원소 곱 담을 변수
// 모든 원소 합 담을 변수
// 곱 < Math.pow(합, 2) 일 경우 1 아니면 0 리턴

// 이전 풀이
// function solution(num_list) {
//   let multi = num_list.reduce((a, c) => a * c, 1);
//   let sum = num_list.reduce((a, c) => a + c, 0);

//   return multi < sum**2 ? 1 : 0
// }