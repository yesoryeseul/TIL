function solution(cards1, cards2, goal) {
    let aIdx = 0;
    let bIdx = 0;
    for(let card of goal) {
        if (cards1[aIdx] === card) aIdx++;
        else if (cards2[bIdx] === card) bIdx++;
        else return 'No';
    }
    return 'Yes';
}

/*
1. goal을 순회한다
2. cards1, cards2에 goal의 요소가 있는지 확인하면 idx를 추가해줌
3. return Yes, else면 No

+) shift()를 사용해 값을 제거해주는 방법도 있음
*/ 