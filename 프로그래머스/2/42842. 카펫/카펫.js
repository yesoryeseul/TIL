function solution(brown, yellow) {
    let answer = [];
    let carpet = brown + yellow; // 카펫 개수
    for(let i = 3; i <= carpet; i++) {
        let w = carpet / i; // 넓이
        let h = i; // 높이
        
        if(w < h) continue; // w가 h보다 커야한다.
        
        if((w - 2) * (h - 2) === yellow) {
            // 위 로직에 해당할 때 멈추고 리턴
            answer[0] = w;
            answer[1] = h;
        }
        
    }
    return answer;
}

// 카펫 개수 = yellow + brown