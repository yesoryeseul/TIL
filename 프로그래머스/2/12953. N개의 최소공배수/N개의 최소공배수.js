function solution(arr) {
    // 최대 공약수 로직, 0이 나올 때 마지막 값 = 최대공약수
    const getGCD = (a, b) => {
        if (a % b === 0) return b
        return getGCD(b, a % b)
    }
    
    // 최소 공배수 로직, 두 수 곱 / 최대공약수 = 최소공배수
    const getLCM = (a, b) => a * b / getGCD(a, b)
   
    // 배열의 모든 요소에 대한 최소공배수
    return arr.reduce((a, c) => getLCM(a, c), 1)
}