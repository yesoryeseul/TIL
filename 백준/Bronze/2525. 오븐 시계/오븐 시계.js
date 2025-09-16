let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let h = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let plusM = Number(input[1])

let hm = (h*60) + m + plusM

let hour = Math.floor(hm / 60) % 24
let rest = hm % 60 

console.log(hour + ' ' + rest)