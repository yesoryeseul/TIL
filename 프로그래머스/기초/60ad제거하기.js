/*
ad 제거하기
문제 설명
문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

입출력 예
strArr	result
["and","notad","abcd"]	["and","abcd"]
["there","are","no","a","ds"]	["there","are","no","a","ds"]
*/

/*
strArr 배열을 순회하여 각 요소에 'ad' 문자열이 포함된 것을 확인하여 포함되지 않는 것만 뽑으면 된다.

filter, includes
*/

function solution(strArr) {
  return strArr.filter((v) => !v.includes("ad"));
}

// 다른 사람의 풀이, indexOf
function solution(strArr) {
  return strArr.filter((v) => v.indexOf("ad") === -1);
}

console.log(solution(["and", "notad", "abcd"]));
console.log(solution(["there", "are", "no", "a", "ds"]));
