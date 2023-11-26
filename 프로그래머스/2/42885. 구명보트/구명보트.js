function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    let [a, b] = [0, people.length - 1]
    while(a <= b) {
        if(people[a] + people[b] <= limit) a++;
        b--;
        answer++;
    }
    return answer;
}

/*
let answer = 0; 구명 보트 개수
people을 오름차순 정렬한다.
합에 누적연산을 하되 limit보다 작거나 같을 때만 answer++를 한다.
*/