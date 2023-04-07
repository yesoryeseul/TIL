/*
문자열 내 p와 y의 개수

문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

입출력 예
s	answer
"pPoooyY"	true
"Pyy"	false

입출력 예 설명

입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
*/

/*
문자열 순회하여 p가 있으면 countP++ / y가 있으면 countY++
하여 countP === countY 일때만 return answer; 아니면 false
*/

function solution(s){
  let p = s.split("").filter((v) => v === "p" || v === "P").length;
  let y = s.split("").filter((v) => v === "y" || v === "Y").length;
  if(p === y) return true;
  else return false;
}

// refactoring 정규 표현식 활용
// s.match(/p|y/gi);
function solution(s){
  return s.match(/p/gi).length === s.match(/y/gi).length;
}

// refactoring
// toUpperCase() 메서드 이용
function solution(s){
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

console.log(solution("pPoooyY")) // true
console.log(solution("Pyy")) // false