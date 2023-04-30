/*
A 강조하기
문제 설명
문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

입출력 예
myString	result
"abstract algebra"	"AbstrAct AlgebrA"
"PrOgRaMmErS"	"progrAmmers"
*/
/*
map, toUpperCase(), 삼항연산자
*/

function solution(myString) {
  return [...myString]
    .map((v) => {
      if (v === "a") return v.toUpperCase();
      else if (v.includes("A")) return v;
      else return v.toLowerCase();
    })
    .join("");
}

console.log(solution("abstract algebra"));
console.log(solution("PrOgRaMmErS"));
