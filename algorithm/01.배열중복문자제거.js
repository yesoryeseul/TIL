// 1. Set
const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(2);

// console.log(mySet);

// console.log(new Set(nums));

const uniqueNumbers = [...new Set(nums)];
console.log(uniqueNumbers);

// 2. indexOf + array.filter
console.log(nums.indexOf(6));

const uniqueNumbers2 = nums.filter((value, idx) => {
  return nums.indexOf(value) === idx
})

console.log(uniqueNumbers2)


// 3. caching / frequency map
function uniqueNumbers3(arr) {
  const uniqueElements = {}
  const result = []
  for(let element of arr) {
    if(!uniqueElements[element]) {
      result.push(element);
    }
    uniqueElements[element] = element;
  }
  return result;
}

console.log(uniqueNumbers3(nums))