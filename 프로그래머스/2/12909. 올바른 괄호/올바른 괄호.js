function solution(s){
    const stack = [];
    for(const val of s) {
        if(val === '(') stack.push(val);
        else {
            const top = stack.pop();
            if(val === ')' && top !== '(') return false;
        }
    }
    return stack.length === 0;
}


/*
() 가 대응되어야 한다. 먼저 '(' 를 stack에 쌓아준다. ')'가 나오면 pop에 담아주고 ')'가 맞으면 pop 아니면 false를 리턴
)()( 
*/