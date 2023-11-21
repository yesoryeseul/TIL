// x 좌표 기준 오름차순 수행, x가 같으면 y 좌표 기준 오름차순

function compare(a, b) {
  if (a[0] != b[0]) return a[0] - b[0]; // x 좌표 기준 오름차순
  else return a[1] - b[1]; // x가 같으면 y 좌표 기준 오름차순
}
data.sort(compare); // 정렬 수행

// y 좌표 기준 오름차순, y가 같으면 x 좌표 기준 오름차순
function compare(a, b) {
  if (a[1] != b[1]) return a[1] - b[1]; // y 좌표 기준 오름차순
  else return a[0] - b[0]; // y가 같으면 x 좌표 기준 오름차순
}
data.sort(compare); // 정렬 수행
