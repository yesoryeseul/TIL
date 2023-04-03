/*
배열 원소의 길이
문제 설명
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

입출력 예
strlist	result
["We", "are", "the", "world!"]	[2, 3, 3, 6]
["I", "Love", "Programmers."]	[1, 4, 12]

입출력 예 설명

입출력 예 #1
["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.

입출력 예 #2
["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.
*/

function solution(strlist) {
  // let answer = [];
  // for(let i in strlist) {
  //   answer[i] = strlist[i].length;
  // }
  // return answer;

  // 다른 사람의 풀이 
  // return strlist.map((el) => el.length)

  // return strlist.map((element,idx)=> strlist[idx] = element.length);
  // return strlist.reduce((a, b) => [...a, b.length], [])
}

console.log(solution(["We", "are", "the", "world!"])); // [2, 3, 3, 6]
