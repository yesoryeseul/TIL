/*직각삼각형 출력하기
문제 설명
"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

입출력 예
입력 #1

3
출력 #1

*
**
***
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = Number(line);
}).on("close", function () {
  let answer = "*";
  for (let i = 0; i < input; i++) {
    console.log(answer);
    answer += "*";
  }
});
