/*
글자 지우기

문제 설명
문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

입출력 예
my_string	indices	result
"apporoograpemmemprs"	[1, 16, 6, 15, 0, 10, 11, 3]	"programmers"
*/

// my_string for문 돌려서 i값을 indices의 요소 값으로 넣어 해당 값은 넣지 않는 로직

function solution(my_string, indices) {
  let result = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      result.push(my_string[i]);
    }
  }
  return result.join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));

// 다른 사람의 풀이 1 : string은 유사 배열이라는 특징을 이용하면...
function solution(my_string, indices) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      result += my_string[i];
    }
  }
  return result;
}

// 다른 사람의 풀이 2 : 배열화, map, filter, reduce 등의 사용
const solutionTest = (s, i) =>
  [...s].filter((_, idx) => !i.includes(idx)).join("");

console.log(solutionTest("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));

function solution(my_string, indices) {
  return [...my_string].reduce(
    (p, c, idx) => (p += indices.includes(idx) ? "" : c),
    ""
  );
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
