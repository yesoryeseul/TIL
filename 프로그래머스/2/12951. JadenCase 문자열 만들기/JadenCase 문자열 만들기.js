function solution(s) {
    s = s.split(' ');
    return s.map(v => v.split('').map((val, i) => i === 0 ? val.toUpperCase() : val.toLowerCase()).join('')).join(' ');
}


/*
모든 단어의 첫 문자가 대문자
그 외는 모두 소문자
2차원 배열
i === 0 인 것만 UpperCase
*/