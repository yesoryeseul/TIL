function solution(n, words) {
    let answer = [0, 0];
    
    for(let i = 0; i < words.length; i++) {
        let word = words[i]; // 각 단어
        let personNumber = i % n + 1; // 인덱스 별 사람 번호
        let turn = Math.ceil((i + 1) / n); // 턴 횟수
        
        if (i > 0) {
            let last = words[i - 1].split('').pop(); // 이전 단어 마지막 글자
            
            // 중복이거나 마지막 글자와 다음 단어 첫 글자 다른 경우 처리
            if(i > words.indexOf(word) || words[i][0] !== last) {
                answer = [personNumber, turn];
                break;
            }
        }
    }
    
    return answer;
}