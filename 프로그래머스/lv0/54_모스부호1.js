/*
모스부호 (1)
문제 설명
머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
모스부호는 다음과 같습니다.

입출력 예
letter	result
".... . .-.. .-.. ---"	"hello"
".--. -.-- - .... --- -."	"python"

입출력 예 설명

입출력 예 #1
.... = h
. = e
.-.. = l
.-.. = l
--- = o
따라서 "hello"를 return 합니다.

입출력 예 #2
.--. = p
-.-- = y
- = t
.... = h
--- = o
-. = n

따라서 "python"을 return 합니다.
*/
morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
}

function solution(letter) {
  return letter.split(' ').map((el) => morse[el]).join('');
}

// 다른 사람의 풀이 1, reduce를 사용해보자!
function solution(letter) {
  return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
}

// 다른 사람의 풀이 for...of문을 사용해보자
function solution(letter) {
  letter = letter.split(' ');
  let answer = '';
  for(let el of letter) {
    answer += morse[el]
  }
  return answer;
}

console.log(solution(".... . .-.. .-.. ---")) // hello
console.log(solution(".--. -.-- - .... --- -.")) // python

