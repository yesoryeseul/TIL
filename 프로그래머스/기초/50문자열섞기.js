/*
문자열 섞기
문제 설명
길이가 같은 두 문자열 str1과 str2가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

입출력 예
str1	str2	result
"aaaaa"	"bbbbb"	"ababababab"
*/

/*
st1, str2를 반복돌려서
str1[0], str2[0], str1[1], str2[1]
*/

function solution(str1, str2) {
  let answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }
  return answer;
}

// 다른 사람의 풀이, map의 index값 사용
function solution(str1, str2) {
  return [...str1].map((v, i) => v + str2[i]).join("");
}

console.log(solution("aaaaa", "bbbbb"));
