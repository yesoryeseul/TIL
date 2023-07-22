/*
한 번만 등장한 문자

문제 설명
문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

제한사항
s는 소문자로만 이루어져 있습니다.

입출력 예
s	result
"abcabcadc"	"d"
"abdc"	"abcd"
"hello"	"eho"

설계
- 주어진 문자열을 split("") 하여 배열 안에 ["a", "b" ...] 이런식으로 만들어줌
- 값을 하나하나 확인하고 각 값마다 같은 값이 있는지 확인 -> reduce 
- 개수를 찾아줌
- === 1 인 조건만 뽑아 sort 하여 join("") 값 리턴

*/

function solution(s) {
  let result = s.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  // console.log(result); // { a: 3, b: 2, c: 3, d: 1 }
  // console.log(Object.keys(result)); // [ 'a', 'b', 'c', 'd' ]
  // console.log(Object.values(result).filter((v) => v === 1));
  // values가 1인 key값만 추출
  let value = Object.keys(result).filter((v) => result[v] === 1);
  return value.sort().join("");
}

console.log(solution("abcabcadc"));

// 다른 사람 풀이

function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
