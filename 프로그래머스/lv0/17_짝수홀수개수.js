/*
짝수 홀수 개수
문제 설명
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

입출력 예
num_list	result
[1, 2, 3, 4, 5]	[2, 3]
[1, 3, 5, 7]	[0, 4]

입출력 예 설명

입출력 예 #1
[1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.

입출력 예 #2
[1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.

- 설계
0. countEven, countOdd 변수
1. 짝수 홀수 구별하는 조건 세우기 if문
2. 각 조건문에서 for문을 돌려 조건이 맞을 때 count++;
3. 각 카운트에 순서대로 countEven, couneOdd 값을 담는 배열을 생성하여 리턴
*/

// function solution(num_list) {
//   let answer = [];
//   let countEven = 0;
//   let countOdd = 0;
//   const even = num_list.filter(number => number % 2 === 0);
//   const odd = num_list.filter(number => number % 2 === 1);
//   // console.log(even); // 디버깅 [2, 4]
//   // console.log(odd); // 디버깅 [1, 3, 5]
  
//   for(let i=0; i < even.length; i++) {
//     countEven++;
//   }
//   for(let i=0; i < odd.length; i++) {
//     countOdd++;
//   }
//   answer[0] = countEven;
//   answer[1] = countOdd;
//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
// 성능이 좋지 못한 코드다..


// 더 간결한 코드를 짜보자.
// 짝수, 홀수 조건에 바로 length 메서드를 붙여 길이 값을 반환한 뒤 배열값에 담아 리턴
function solution1(num_list) {
  return [
    num_list.filter(number => number % 2 === 0).length,
    num_list.filter(number => number % 2 === 1).length,
  ]
}
console.log(solution1([1, 2, 3, 4, 5]));


// 다른 사람의 풀이
function solution2(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
console.log(solution2([1, 2, 3, 4, 5]));