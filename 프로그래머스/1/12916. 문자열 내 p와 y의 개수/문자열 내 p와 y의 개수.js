function solution(s){
    // let a = s.split('').filter(v => v === 'p' || v === 'P').length;
    // let b = s.split('').filter(v => v === 'y' || v === 'Y').length;
    // return a === b ? true : false;
    
    // 다른 풀이
    return s.match(/p/gi)?.length == s.match(/y/gi)?.length
}

/*
s에 p or y만 있는 배열을 반환
s에 P or Y만 있는 배열을 반환

두 배열의 length가 같으면 true, 아니라면 false
*/