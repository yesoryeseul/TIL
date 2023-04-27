/*
첫 번째로 나오는 음수

문제 설명
정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

입출력 예
num_list	result
[12, 4, 15, 46, 38, -2, 15]	5
[13, 22, 53, 24, 15, 6]	-1
*/
/*
indexOf , num_list를 돌아서 원소값이 < 0 인것의 인덱스값을 return
*/

function solution(num_list) {
  return num_list.findIndex(v => v < 0);
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]))
console.log(solution([13, 22, 53, 24, 15, 6]))