/*
옷가게 할인 받기
문제 설명
머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

입출력 예
price	result
150,000	142,500
580,000	464,000


입출력 예 설명

입출력 예 #1
150,000원에서 5%를 할인한 142,500원을 return 합니다.

입출력 예 #2
580,000원에서 20%를 할인한 464,000원을 return 합니다.
*/

function solution(price) {
  // 1. if...else 풀이
  if(price >= 500000) return Math.floor(price *= 0.8);
  else if(price >= 300000) return Math.floor(price *= 0.9);
  else if(price >= 100000) return Math.floor(price *= 0.95);
  else return price;
}


console.log(solution(99999)) // 99999
console.log(solution(150001)) // 142,500
console.log(solution(300000)) // 270000
console.log(solution(500000)) // 464,000
console.log(solution(580000)) // 464,000


// 다른 방법으로 풀어보기 (진행중 ~ )
// 이중삼항연산자 풀이 A ? (B ? C : D) : E 
// Math.floor(n/10) * 10; 10원 단위에서 절삭
  // const answer =  price >= 300000 ? (price >= 500000 ? price *= 0.8 : price *= 0.9) : price *= 0.95;
  // return Math.floor(answer * 10);