function solution(k, tangerine) {
    var answer = 0;
    let obj = {};
    tangerine.forEach(i => {
        obj[i] = ++obj[i] || 1; // 배열 값 개수 카운팅
    }) // ex) obj = {'1': 1, '2': 2, ...}
    
    // 객체 값 내림차순
    const sorting = Object.values(obj).sort((a, b) => b - a)
    
    // 합
    let sum = 0;
    
    // 정렬된 값에서 차례대로 개수를 더해서 k와 같거나 커지면 카운트한 값을 출력
    for(let number of sorting) {
        ++answer;
        sum += number;
        if(k <= sum) {
            break;
        }
    }
    
    return answer;
}
