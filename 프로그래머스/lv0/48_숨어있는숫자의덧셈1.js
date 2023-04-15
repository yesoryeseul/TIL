/*
숨어있는 숫자의 덧셈 (1)
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

입출력 예
my_string	result
"aAb1B2cC34oOp"	10
"1a2b3c4d123"	16

입출력 예 설명

입출력 예 #1
"aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.

입출력 예 #2
"1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.

유의사항
연속된 숫자도 각각 한 자리 숫자로 취급합니다.
*/
/*
1. split 해서 각 문자를 배열로 담아준다
2. 각 요소를 순회해서 Number로 바꿔주고
3. typeof number 인 것만 filter해서
4. 새 배열에 담아 누적 연산한다(reduce 가 떠오름)
*/

// 내가 한 풀이
function solution(my_string) {
  return my_string.split('').map(Number).filter((v) => Number.isInteger(v)).reduce((acc, curr) => acc + curr);
}

// refactoring 1, 다른 사람의 풀이
// 1. split이 아닌 깊은 복사로 문자열을 문자배열로 변환해줌
// 2. Number 변환을 map과 filter를 거치지 않고 reduce에서 삼항연산자로 바로 확인
// 3. 숫자인 것은 +acc, +curr 문자에 +를 붙여 string > number로 형변환해준다
// function solution(my_string) {
//   return [...my_string].reduce((acc, curr) => Number(curr) ? +acc + +curr : acc, 0);
// }

// 문자 > 숫자로 형변환 할 떄 +기호만 붙여줘도 변환이 된다!

// 다른 사람의 풀이 2
// 1. 정규 표현식으로 0-9가 아닌 것들은 ''로 없애준 배열을 반환한 뒤
// 2. reduce로 숫자로 형변환하여 리턴해준다
function solution(my_string) {
  return my_string.replace(/[^0-9]/g, '').split('').reduce((acc, curr) => acc + Number(curr), 0);
}

const result = solution("aAb1B2cC34oOp");
console.log(result); // 10

console.log(solution("1a2b3c4d123Z")); // 16