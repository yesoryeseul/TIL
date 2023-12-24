function solution(s) {
    
    // 1번 풀이
    // ' ' 공백 기준으로 split ['try', 'hello', 'world']
    // 전체 map
    // 각 요소마다 map 돌려 인덱스 검사 (홀수일 때 대문자, 아닐때 소문자) -> join으로 합쳐주기
    // 최종 ' ' 공백으로 join
    // return s
    // .split(" ")
    // .map((v) =>
    //   [...v]
    //     .map((item, i) => (!(i % 2) ? item.toUpperCase() : item.toLowerCase()))
    //     .join("")
    // )
    // .join(" ");
    
    // 2번 풀이
    let result = ''; // 결과
    let wordIndex = 0; // 단어별 인덱스 체크

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += s[i];
            wordIndex = 0; // 공백을 만나면 단어 인덱스 리셋
        } else {
            result += wordIndex % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
            wordIndex++; // 단어의 다음 글자로 이동
        }
    }

    return result;
}


