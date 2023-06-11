const stringA = "listen1";
const stringB = "slient1";

// #1 split(), sort(), and join()
// "listen" => split() => sort() => join()

function isAnagram(strA, strB) {
  if (strA.length !== strB.length) return false;
  return strA.split("").sort().join() === strB.split("").sort().join();
}

console.log(isAnagram(stringA, stringB));

// 뭔 말인지..?
// #2 map = {}
function isAnagram2(strA, strB) {
  if (strA.length !== strB.length) return false;
  const hashMap = {};
  for (const char of strA) {
    // {l:1, i:1, s:1}
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    // console.log(hashMap);
  }
  for (const char of strB) {
    if (!hashMap[char]) return false;
    hashMap[char]--;
    // console.log(hashMap);
  }
  return true;
}
console.log(isAnagram2(stringA, stringB));
