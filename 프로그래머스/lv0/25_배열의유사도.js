/*
배열의 유사도

문제 설명
두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

입출력 예
s1	              s2	                      result
["a", "b", "c"]	["com", "b", "d", "p", "c"]	  2
["n", "omg"]	  ["m", "dot"]	                0

입출력 예 설명

입출력 예 #1
"b"와 "c"가 같으므로 2를 return합니다.

입출력 예 #2
같은 원소가 없으므로 0을 return합니다.
*/

/*
1번 풀이 일반 for문 사용
배열 s1과 배열 s2를 순회하여 s1[i] 인덱스에 s2[i] 인덱스의 값(요소)이
있는지 확인하고 일치하면 count++
2. let count = 0; 변수를 먼저 선언
3. 배열 순회를 해야하고, 인덱스가 필요?

2번 풀이 filter, includes 사용하여 length 리턴
*/
// 내가 생각한 풀이 filter
function solution(s1, s2) {
  return s1.filter((el) => s2.includes(el)).length;
}

// 다른 풀이 for...of
// function solution(s1, s2) {
//   let count = 0;
//   for(const el of s1) {
//     if(s2.includes(el)) count++;
//   }
//   return count;
// }

// 일반 for문
// function solution(s1, s2) {
//   let answer = 0;
//   for(let i = 0; i < s1.length; i++) {
//     for(let j = 0; j < s2.length; j++) {
//       if(s1[i] === s2[j]) answer++;
//     }
//   }
//   return answer;
// }

// 교집합 사용하기
// function solution(s1, s2) {
//   return s1.length + s2.length - new Set([...s1, ...s2]).size;
// }

// new Set([...s1, ...s2]) => ["a", "com", "b", "d", "p", "c"], 중복된 요소 제거

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); // 2
console.log(solution(["n", "omg"], ["m", "dot"])); // 0
