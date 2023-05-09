/*
잘라서 배열로 저장하기
문제 설명
문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

입출력 예
my_str	n	result
"abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
"abcdef123"	3	["abc", "def", "123"]
*/
/*
my_str을 n의 길이만큼 잘라 빈 배열에 push
*/

function solution(my_str, n) {
  var answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}

console.log(solution("abc1Addfggg4556b", 6));
console.log(solution("abcdef123", 3));
