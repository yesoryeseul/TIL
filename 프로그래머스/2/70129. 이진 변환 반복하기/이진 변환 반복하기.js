function solution(s) {
    let zero = 0;
    let cnt = 0;
    
    while(s !== '1') {
        let oneCount = 0;
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '0') zero++;
            if(s[i] === '1') oneCount++;
        }
        s = oneCount.toString(2);
        cnt++;
    }
    return [cnt, zero]
}
/*
let zero = 제거할 0의 개수를 담을 변수
let cnt = 1의 개수만 담는 변수
1이 되면 종료하는 조건
let 나머지 = 0 제거 후 길이 변수 결과의length -> 2진법으로 변환하기
1이 아니라면 cnt++;
ex) 6 -> 2진법 s = 6.toString(2);

위 과정을 반복할 때마다 cnt++
계속 반복하고 cnt를 리턴하고, 제거한 0의 갯수도 누적해서 리턴 [cnt, zero]


*/