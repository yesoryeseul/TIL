function solution(n, slicer, num_list) {
    // if(n === 1) {
    //     return num_list.slice(0, slicer[1] + 1);
    // } else if(n === 2) {
    //     return num_list.slice(slicer[0]);
    // } else if(n === 3) {
    //     return num_list.slice(slicer[0], slicer[1] + 1);
    // } else {
    //     return num_list.slice(slicer[0], slicer[1] + 1).filter((_, i) => i % slicer[2] === 0);
    // }
    
    const [a, b, c] = [...slicer]; // 구조 분해 할당
    
    switch(n) {
        case 1:
            return num_list.slice(0, b + 1);
            break;
        case 2:
            return num_list.slice(a);
            break;
        case 3:
            return num_list.slice(a, b + 1);
            break;
        case 4:
            return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
            break;
    }
}

// if문이나 switch case