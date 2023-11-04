/*문자열 내 마음대로 정렬하기
문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

입출력 예
|strings|n|return|
|------|------|------|
["sun", "bed", "car"]|1|["car", "bed", "sun"]|
["abce", "abcd", "cdx"]|2|["abcd", "abce", "cdx"]|
*/

/*설계하기
1. strings 배열의 n번째 인덱스 값을 비교하여 알파벳 오름차순으로 정렬하기
2. a[n], b[n] 의 비교
3. 알파벳 오름차순 로직 (같으면 사전순) strings.sort((a, b) => a > b ? 1 : -1);
*/

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else return a > b ? 1 : -1;
  });
}

// 다른 사람 풀이 : localCompare() 메서드 사용
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
