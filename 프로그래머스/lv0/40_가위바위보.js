/*
가위 바위 보

문제 설명
가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

입출력 예
rsp	result
"2"	"0"
"205"	"052"

입출력 예 설명

입출력 예 #1
"2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.

입출력 예 #2
"205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.
*/

/*
문자가 2이면 0, 0이면 5, 5이면 2 리턴
새로운 문자열에 담아 리턴
*/

function solution(rsp) {
  let answer = '';
  for(let i = 0; i < rsp.length; i++) {
    if(rsp[i] === "2") answer += "0";
    else if(rsp[i] === "0") answer += "5";
    else if(rsp[i] === "5") answer += "2";
  }
  return answer;
}

// refactoring 1(다른 사람 풀이)
// rsp를 깊은 복사하여 map으로 arr객체 값을 가져와서 배열로 만든 뒤 문자열 join("")
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2
  };
  return [...rsp].map(v => arr[v]).join("");
}

// refactoring 2(다른 사람 풀이)
// split으로 배열 만들기 > 조건 설정 > 결과 > join으로 합쳐 문자열로 만들기
// 삼항 연산자
function solution(rsp) {
  return rsp.split("").map((v) => v === "2" ? 0 : (v === "0" ? 5 : 2)).join("");
}

console.log(solution("2")) // "0"
console.log(solution("205")) // "052"