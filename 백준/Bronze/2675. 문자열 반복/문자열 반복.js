let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 테스트 케이스 갯수

let result = '';
for(let i = 1; i <= n; i++) {
  let arr = input[i].split(' ');
  let number = Number(arr[0]); // 반복할 횟수
  let stringArr = arr[1].split(''); // 문자열 배열

  // stringArr[i] repeat이 number번씩 +=
  for(let j = 0; j < stringArr.length; j++) {
    result += stringArr[j].repeat(number);
  }
  result += '\n';
}
console.log(result)

